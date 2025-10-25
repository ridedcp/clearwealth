import SEO from "../seo/SEO";
import { translations } from "../i18n";
import { User2 } from "lucide-react";

export default function About({ lang }) {
  const t = translations[lang] || translations.es;
  const path = `/${lang}/sobre-mi`;
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO lang={lang} path={path} title={t.about.title} />
      <div className="text-center mb-12">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
          <User2 className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t.about.title}</h1>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 prose dark:prose-invert">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>{t.about.p3}</p>
      </div>
    </div>
  );
}
