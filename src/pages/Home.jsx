import SEO from "../seo/SEO";
import { t } from "../i18n";

export default function Home({ lang }) {
  const path = `/${lang}/`;
  return (
    <div style={{padding:24}}>
      <SEO lang={lang} path={path} title={t(lang,'brand')} description={t(lang,'tagline')} />
      <h1>{t(lang,'home.title')}</h1>
      <p>{t(lang,'tagline')}</p>
    </div>
  );
}
