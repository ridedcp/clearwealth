// scripts/generate-sitemap.mjs
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

// ---- Config
const BASE = "https://clearfinanciallife.com";
// YYYY-MM-DD (Google acepta solo fecha)
const TODAY = new Date().toISOString().slice(0, 10);

// Rutas estáticas con changefreq/priority afinadas
const STATIC_ES = [
  { path: "/es/",          changefreq: "weekly",  priority: "1.0", counterpart: "/en/",         xdefault: true },
  { path: "/es/blog",      changefreq: "weekly",  priority: "0.8", counterpart: "/en/blog"     },
  { path: "/es/sobre-mi",  changefreq: "monthly", priority: "0.6", counterpart: "/en/about"    },
  { path: "/es/contacto",  changefreq: "monthly", priority: "0.6", counterpart: "/en/contact"  },
  { path: "/es/privacidad",changefreq: "yearly",  priority: "0.3", counterpart: "/en/privacy"  },
];

const STATIC_EN = [
  { path: "/en/",          changefreq: "weekly",  priority: "1.0", counterpart: "/es/",         xdefault: true },
  { path: "/en/blog",      changefreq: "weekly",  priority: "0.8", counterpart: "/es/blog"     },
  { path: "/en/about",     changefreq: "monthly", priority: "0.6", counterpart: "/es/sobre-mi" },
  { path: "/en/contact",   changefreq: "monthly", priority: "0.6", counterpart: "/es/contacto" },
  { path: "/en/privacy",   changefreq: "yearly",  priority: "0.3", counterpart: "/es/privacidad" },
];

// Carga dinámica de posts (ids/slug pareados ES/EN)
const postsModuleUrl = pathToFileURL(join(process.cwd(), "src/data/posts.js")).href;
const { postsEs, postsEn } = await import(postsModuleUrl);

// ---- Helpers
function altLinks(alternates = []) {
  return alternates
    .map(a => `<xhtml:link rel="alternate" hreflang="${a.lang}" href="${BASE}${a.href}"/>`)
    .join("");
}

function urlEntry({ loc, lastmod = TODAY, changefreq = "weekly", priority = "0.8", alternates = [] }) {
  return `
  <url>
    <loc>${BASE}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    ${altLinks(alternates)}
  </url>`;
}

// ---- Estáticas con hreflang cruzado
const staticEntries = [
  ...STATIC_ES.map(p =>
    urlEntry({
      loc: p.path,
      changefreq: p.changefreq,
      priority: p.priority,
      alternates: [
        { lang: "es", href: p.path },
        { lang: "en", href: p.counterpart },
        ...(p.xdefault ? [{ lang: "x-default", href: "/" }] : []),
      ],
    })
  ),
  ...STATIC_EN.map(p =>
    urlEntry({
      loc: p.path,
      changefreq: p.changefreq,
      priority: p.priority,
      alternates: [
        { lang: "en", href: p.path },
        { lang: "es", href: p.counterpart },
        ...(p.xdefault ? [{ lang: "x-default", href: "/" }] : []),
      ],
    })
  ),
];

// ---- Posts pareados por id (dos entradas: ES y EN), sin x-default
function esPath(slug) { return `/es/blog/${slug}`; }
function enPath(slug) { return `/en/blog/${slug}`; }

const postEntries = [];

// ES → EN
for (const pEs of postsEs) {
  const match = postsEn.find(q => q.id === pEs.id);
  postEntries.push(
    urlEntry({
      loc: esPath(pEs.slug),
      changefreq: "weekly",
      priority: "0.8",
      alternates: [
        { lang: "es", href: esPath(pEs.slug) },
        { lang: "en", href: enPath(match?.slug ?? pEs.slug) },
      ],
    })
  );
}

// EN → ES
for (const pEn of postsEn) {
  const match = postsEs.find(q => q.id === pEn.id);
  postEntries.push(
    urlEntry({
      loc: enPath(pEn.slug),
      changefreq: "weekly",
      priority: "0.8",
      alternates: [
        { lang: "en", href: enPath(pEn.slug) },
        { lang: "es", href: esPath(match?.slug ?? pEn.slug) },
      ],
    })
  );
}

// ---- Construcción final (no añadimos /gracias ni /thank-you porque no están en estáticas)
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticEntries.join("\n")}
${postEntries.join("\n")}
</urlset>`.trim();

const outFile = join(process.cwd(), "public", "sitemap.xml");
writeFileSync(outFile, xml, "utf8");
console.log("✔ sitemap.xml generado en", outFile);
