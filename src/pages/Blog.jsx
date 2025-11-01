import { Link } from "react-router-dom";
import SEO from "../seo/SEO";
import { getPosts } from "../data/posts";
import { translations } from "../i18n";

export default function Blog({ lang }) {
  const t = translations[lang] || translations.es;
  const posts = getPosts(lang);

  const path = `/${lang}/blog`;
  const title = t.blog?.title || (lang === "es" ? "Blog" : "Blog");
  const description =
    t.blog?.subtitle ||
    (lang === "es"
      ? "Artículos prácticos para mejorar tus finanzas personales."
      : "Practical articles to improve your personal finances.");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SEO lang={lang} path={path} title={title} description={description} />

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          {title}
        </h1>
        <p className="text-gray-400">{description}</p>
      </header>

      {/* Grid de tarjetas */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/${lang}/blog/${post.slug}`}
            className="group rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/40 hover:bg-gray-900 transition-colors"
          >
            {/* Cover */}
            {post.cover ? (
              <img
                src={post.cover}
                alt={post.title}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
            ) : (
              <div className="h-44 w-full bg-gradient-to-br from-gray-800 to-gray-700" />
            )}

            {/* Body */}
            <div className="p-4">
              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                {post.category && (
                  <span className="inline-block px-2 py-0.5 rounded-full bg-blue-900/30 text-blue-300">
                    {post.category}
                  </span>
                )}
                {post.date && (
                  <>
                    <span>•</span>
                    <time>{post.date}</time>
                  </>
                )}
                {post.readMins && (
                  <>
                    <span>•</span>
                    <span>{post.readMins} min</span>
                  </>
                )}
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-white leading-snug group-hover:underline">
                {post.title}
              </h2>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                  {post.excerpt}
                </p>
              )}

              {/* Leer más */}
              <div className="mt-4 text-sm font-medium text-blue-300 group-hover:text-blue-200">
                {t.blog?.readMore || (lang === "es" ? "Leer más" : "Read more")} →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
