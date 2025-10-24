import SEO from "../seo/SEO";
import { translations } from "../i18n/translations";

export default function Privacy({ lang }) {
  const t = translations[lang];
  const path = `/${lang}/privacidad`;
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO lang={lang} path={path} title={t.nav.privacy} />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t.nav.privacy}</h1>
      <p className="text-gray-700 dark:text-gray-300">{t.privacy.stub}</p>
    </div>
  );
}
