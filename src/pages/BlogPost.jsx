import SEO from "../seo/SEO";
import { getPostBySlug } from "../data/posts";
import { useParams } from "react-router-dom";

export default function BlogPost({ lang }) {
  const { slug } = useParams();
  const post = getPostBySlug(lang, slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <SEO
          lang={lang}
          path={`/${lang}/blog/${slug}`}
          title={lang === "es" ? "Artículo no encontrado" : "Post not found"}
          noindex
        />
        <h1 className="text-2xl font-bold">
          {lang === "es" ? "Artículo no encontrado" : "Post not found"}
        </h1>
      </div>
    );
  }

  const path = `/${lang}/blog/${post.slug}`;
  const title = post.title;
  const description = post.description || post.excerpt || "";
  const cover = post.cover;

  // TOC simple: extrae anclas id="..."
  const toc = Array.from(
    post.content.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)
  ).map((m) => ({ id: m[1], text: m[2] }));

  // ---- JSON-LD Article ----
  const siteBase = "https://clearfinanciallife.com";
  const pageUrl = `${siteBase}${path}`;

  const absoluteImage =
    cover && (cover.startsWith("http") ? cover : `${siteBase}${cover}`);

  // Normaliza fecha a ISO (si no es parseable usa ahora)
  const isoDate = (() => {
    try {
      const d = new Date(post.date);
      return isNaN(d) ? new Date().toISOString() : d.toISOString();
    } catch {
      return new Date().toISOString();
    }
  })();

  const publisherName =
    lang === "es" ? "Tu Dinero Simple" : "Clear Financial Life";

  // Preferimos SVG; si en algún momento cambias a PNG, solo actualiza la URL
  const publisherLogo = `${siteBase}/logo-512.svg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    headline: title,
    description,
    ...(absoluteImage ? { image: [absoluteImage] } : {}),
    datePublished: isoDate,
    dateModified: isoDate,
    inLanguage: lang === "es" ? "es-ES" : "en-US",
    articleSection: post.category || (lang === "es" ? "Blog" : "Blog"),
    author: {
      "@type": "Organization",
      name: publisherName,
      url: siteBase
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      logo: {
        "@type": "ImageObject",
        url: publisherLogo
        // Si en el futuro quieres validar dimensiones:
        // , width: 512, height: 512
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SEO
        lang={lang}
        path={path}
        title={title}
        description={description}
        image={cover}
      />

      {/* JSON-LD Article */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      <article className="bg-gray-900/40 dark:bg-gray-800/60 rounded-2xl border border-gray-800 p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-4 text-sm text-gray-400">
          {post.category && (
            <span className="inline-block px-2 py-1 rounded-full bg-blue-900/30 text-blue-300">
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

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          {post.title}
        </h1>

        {/* Portada */}
        {cover && (
          <div className="mb-6">
            <img
              src={cover}
              alt={post.title}
              className="w-full h-auto rounded-xl border border-gray-800"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        )}

        {/* TOC */}
        {toc.length > 1 && (
          <nav className="mb-8 text-sm">
            <div className="font-semibold text-gray-300 mb-2">
              {lang === "es" ? "En este artículo" : "In this article"}
            </div>
            <ul className="space-y-1 text-blue-300">
              {toc.map((i) => (
                <li key={i.id}>
                  <a href={`#${i.id}`} className="hover:underline">
                    {i.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Contenido */}
        <div
          className="prose prose-invert max-w-none prose-img:rounded-xl prose-img:border prose-img:border-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
