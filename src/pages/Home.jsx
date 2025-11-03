// src/pages/Home.jsx
import { Link } from "react-router-dom";
import SEO from "../seo/SEO";
import { getPosts } from "../data/posts";

export default function Home({ lang = "es" }) {
  const t = {
    es: {
      title: "Aprende a gestionar tu dinero de forma simple",
      subtitle: "Ahorra, invierte y vive con inteligencia financiera.",
      latest: "Últimos artículos",
      topics: "Temas populares",
      read: "Leer",
      explore: "Ver todos los artículos",
      guide_title: "Guía práctica: Ahorrar 100€/mes",
      guide_text: "Descarga la guía en PDF con pasos y checklist accionables.",
      guide_btn: "Descargar guía (PDF)",
      blogPath: `/${lang}/blog`,
    },
    en: {
      title: "Learn to manage your money the simple way",
      subtitle: "Learn to save, invest, and live with financial intelligence.",
      latest: "Latest articles",
      topics: "Popular topics",
      read: "Read",
      explore: "View all articles",
      guide_title: "Practical Guide: Save €100/month",
      guide_text: "Download the PDF with steps and actionable checklists.",
      guide_btn: "Download guide (PDF)",
      blogPath: `/${lang}/blog`,
    },
  }[lang];

  const posts = getPosts(lang);
  const featured = posts[0];
  const latest = posts.slice(0, 4);
  const categories = [...new Set(posts.map((p) => p.category).filter(Boolean))];

  const base = `/${lang}`;
  const pdfHref = "/assets/guia-ahorrar-100-euros.pdf"; // ya lo generamos

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO
        lang={lang}
        path={`${base}/`}
        title={t.title}
        description={t.subtitle}
      />

      {/* HERO destacado */}
      {featured && (
        <section className="mb-10 overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                {featured.title}
              </h1>
              <p className="mt-3 text-gray-300">{featured.excerpt}</p>
              <div className="mt-5 flex gap-3">
                <Link
                  to={`${base}/blog/${featured.slug}`}
                  className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500"
                >
                  {t.read}
                </Link>
                <Link
                  to={t.blogPath}
                  className="inline-flex items-center px-4 py-2 rounded-md border border-gray-700 text-gray-200 hover:bg-gray-800"
                >
                  {t.explore}
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              {featured.cover ? (
                <img
                  src={featured.cover}
                  alt={featured.title}
                  className="w-full h-64 object-cover rounded-xl border border-gray-800"
                  loading="eager"
                  fetchPriority="high"
                />
              ) : (
                <div className="h-64 rounded-xl border border-dashed border-gray-700 flex items-center justify-center text-gray-500">
                  {/* placeholder si no hay cover */}
                  {lang === "es" ? "Artículo destacado" : "Featured article"}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Temas populares */}
      {categories.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wide text-gray-400 mb-3">
            {t.topics}
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c}
                to={t.blogPath} // si más adelante filtras por query, añade ?cat=...
                className="px-3 py-1 rounded-full bg-gray-800 text-gray-200 text-sm hover:bg-gray-700 border border-gray-700"
              >
                {c}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Últimos artículos */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">{t.latest}</h2>
          <Link
            to={t.blogPath}
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            {t.explore}
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latest.map((p) => (
            <article
              key={p.slug}
              className="rounded-xl border border-gray-800 bg-gray-900/40 hover:bg-gray-900 transition"
            >
              {p.cover && (
                <Link to={`${base}/blog/${p.slug}`}>
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-40 object-cover rounded-t-xl border-b border-gray-800"
                    loading="lazy"
                  />
                </Link>
              )}
              <div className="p-4">
                <div className="text-xs text-gray-400 mb-1">{p.category}</div>
                <h3 className="font-semibold text-white leading-snug">
                  <Link to={`${base}/blog/${p.slug}`}>{p.title}</Link>
                </h3>
                <p className="mt-2 text-sm text-gray-300 line-clamp-3">
                  {p.excerpt}
                </p>
                <Link
                  to={`${base}/blog/${p.slug}`}
                  className="mt-3 inline-block text-sm text-blue-400 hover:text-blue-300"
                >
                  {t.read}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lead magnet: Guía PDF */}
      <section className="rounded-2xl border border-blue-900 bg-gradient-to-r from-blue-800/40 to-indigo-800/40 p-6 text-center">
        <h3 className="text-2xl font-bold text-white">{t.guide_title}</h3>
        <p className="mt-2 text-gray-200">{t.guide_text}</p>
        <a
          href={pdfHref}
          className="mt-4 inline-flex items-center px-5 py-2 rounded-md bg-white text-gray-900 hover:bg-gray-200 font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.guide_btn}
        </a>
      </section>
    </div>
  );
}
