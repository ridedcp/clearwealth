import SEO from "../seo/SEO";
import { translations } from "../i18n";

export default function About({ lang }) {
  const t = translations[lang] || translations.es;
  const path = `/${lang}/sobre-mi`;
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO lang={lang} path={path} title={t.about.title} />

      {/* Título centrado */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t.about.title}
        </h1>
      </div>

      {/* Card centrada y ancho consistente */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 prose dark:prose-invert max-w-3xl mx-auto">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>{t.about.p3}</p>
      </div>
    </div>
  );
}
