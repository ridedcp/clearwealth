import { Link } from "react-router-dom";
import SEO from "../seo/SEO";
import AdPlaceholder from "../components/AdPlaceholder";
import { translations } from "../i18n";
import { getPosts } from "../data/posts";

export default function Home({ lang = "es" }) {
  const t = translations[lang] || translations.es;
  const path = `/${lang}/`;
  const posts = getPosts(lang);
  const featured = posts[0];
  const latest = posts.slice(0, 6);
  const categories = [...new Set(posts.map(p => p.category).filter(Boolean))];

  const L = lang === "es"
    ? {
        latest: "Últimos artículos",
        topics: "Temas populares",
        read: "Leer",
        explore: "Ver todos los artículos",
        featuredFallback: "Artículo destacado",
      }
    : {
        latest: "Latest articles",
        topics: "Popular topics",
        read: "Read",
        explore: "View all articles",
        featuredFallback: "Featured article",
      };

  const base = `/${lang}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO lang={lang} path={path} title={t.brand} description={t.home.subtitle} />

      {/* (Quitado) AdSense – Cabecera */}

      {/* HERO con destacado */}
      {featured && (
        <section className="mt-6 mb-10 overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
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
                  {L.read}
                </Link>
                <Link
                  to={`${base}/blog`}
                  className="inline-flex items-center px-4 py-2 rounded-md border border-gray-700 text-gray-200 hover:bg-gray-800"
                >
                  {L.explore}
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
                  {L.featuredFallback}
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
            {L.topics}
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c}
                to={`${base}/blog`}
                className="px-3 py-1 rounded-full bg-gray-800 text-gray-200 text-sm hover:bg-gray-700 border border-gray-700"
              >
                {c}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Bloque de artículos */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">{L.latest}</h2>
          <Link
            to={`${base}/blog`}
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            {L.explore}
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {p.category && (
                  <div className="text-xs text-gray-400 mb-1">{p.category}</div>
                )}
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
                  {L.read}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* AdSense – Mid list (opcional; borra si no lo quieres) */}
      <AdPlaceholder position="Mid-list" />
    </div>
  );
}
