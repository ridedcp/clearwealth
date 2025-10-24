import { Helmet } from 'react-helmet-async';

export default function SEO({ lang, path, title, description }) {
  const base = 'https://clearfinanciallife.com';
  const current = `${base}${path}`;
  const altPath = lang === 'es' ? path.replace(/^\/es/, '/en') : path.replace(/^\/en/, '/es');
  const alt = `${base}${altPath}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={current} />
      <link rel="alternate" hrefLang="es" href={lang === 'es' ? current : alt} />
      <link rel="alternate" hrefLang="en" href={lang === 'en' ? current : alt} />
      <link rel="alternate" hrefLang="x-default" href={`${base}/es/`} />
    </Helmet>
  );
}
