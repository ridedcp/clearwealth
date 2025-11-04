import { Helmet } from 'react-helmet-async';
import { translations } from '../i18n';

const BASE = 'https://clearfinanciallife.com';

// Slugs que cambian entre idiomas
const ALT_MAP = {
  es: {
    '/es/privacidad': '/en/privacy',
    '/es/sobre-mi': '/en/about',
    '/es/contacto': '/en/contact',
  },
  en: {
    '/en/privacy': '/es/privacidad',
    '/en/about': '/es/sobre-mi',
    '/en/contact': '/es/contacto',
  },
};

function normalizeUrl(base, path) {
  if (!path) return base;
  if (path.startsWith('http')) return path;
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  return `${base}${withSlash}`;
}

function computeAltHref({ lang, path }) {
  const other = lang === 'es' ? 'en' : 'es';
  const map = ALT_MAP[lang] ?? {};
  if (map[path]) return `${BASE}${map[path]}`;
  const replaced = path.replace(new RegExp(`^/${lang}`), `/${other}`);
  return `${BASE}${replaced}`;
}

export default function SEO({
  lang = 'es',
  path = '/es/',
  title,            // solo título de página (sin marca)
  description,
  image,
  noindex = false,
  type = 'website',
  alternates,
  brand,            // opcional: fuerza marca
}) {
  const current = normalizeUrl(BASE, path);

  // 🔒 Marca unificada: siempre "Clear Financial Life"
  const siteName =
    brand ??
    'Clear Financial Life'; // ignoramos translations.brand para evitar divergencias

  // Título: "Clear Financial Life — Página"
  const pageTitle = title?.trim();
  const finalTitle = pageTitle ? `${siteName} — ${pageTitle}` : siteName;

  // Imagen OG absoluta
  const ogImage = image
    ? (image.startsWith('http') ? image : `${BASE}${image}`)
    : undefined;

  // hreflang
  const builtAlternates =
    alternates ??
    [
      { hrefLang: lang, href: current },
      { hrefLang: lang === 'es' ? 'en' : 'es', href: computeAltHref({ lang, path }) },
      { hrefLang: 'x-default', href: `${BASE}/es/` },
    ];

  // JSON-LD básico (Person)
  const personLD = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dani Cano',
    url: BASE,
    email: 'mailto:contact@clearfinanciallife.com',
    sameAs: [],
  };

  return (
    <Helmet>
      <html lang={lang} />
      <title>{finalTitle}</title>

      {description && <meta name="description" content={description} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <link rel="canonical" href={current} />
      {builtAlternates.map(a => (
        <link key={a.hrefLang} rel="alternate" hrefLang={a.hrefLang} href={a.href} />
      ))}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={lang === 'es' ? 'es_ES' : 'en_US'} />
      <meta property="og:title" content={finalTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={current} />
      <meta property="og:site_name" content={siteName} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={finalTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLD) }}
      />
    </Helmet>
  );
}
