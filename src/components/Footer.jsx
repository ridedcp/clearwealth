import { NavLink } from "react-router-dom";
import { translations } from "../i18n";

export default function Footer({ lang='es' }) {
  const t = translations[lang] || translations.es;
  const base = `/${lang}`;

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Columna marca */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo-512.svg"
                alt={lang === 'es' ? 'Tu Dinero Simple' : 'Clear Financial Life'}
                width={28}
                height={28}
                loading="eager"
                fetchpriority="high"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/logo-512.png';
                }}
                className="inline-block"
              />
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-400">
                {t.brand}
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {translations[lang].home.subtitle}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} {t.brand}. {translations[lang].legal.rights}
            </p>
          </div>

          {/* Columna navegación */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{t.legal.nav}</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><NavLink to={`${base}/`} className="hover:text-blue-600 dark:hover:text-blue-400">{t.nav.home}</NavLink></li>
              <li><NavLink to={`${base}/blog`} className="hover:text-blue-600 dark:hover:text-blue-400">{t.nav.blog}</NavLink></li>
              <li><NavLink to={`${base}/sobre-mi`} className="hover:text-blue-600 dark:hover:text-blue-400">{t.nav.about}</NavLink></li>
              <li><NavLink to={`${base}/contacto`} className="hover:text-blue-600 dark:hover:text-blue-400">{t.nav.contact}</NavLink></li>
            </ul>
          </div>

          {/* Columna legal */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{t.legal.legal}</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><NavLink to={`${base}/privacidad`} className="hover:text-blue-600 dark:hover:text-blue-400">{t.nav.privacy}</NavLink></li>
              <li><NavLink to={`${base}/privacidad`} className="hover:text-blue-600 dark:hover:text-blue-400">{t.legal.cookies}</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
