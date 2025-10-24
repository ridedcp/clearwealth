import es from './locales/es.json';
import en from './locales/en.json';

const LOCALES = { es, en };
export const isSupportedLang = (l) => ['es','en'].includes(l);
export function t(lang, key) {
  const table = LOCALES[lang] ?? LOCALES.es;
  return table[key] || key;
}
