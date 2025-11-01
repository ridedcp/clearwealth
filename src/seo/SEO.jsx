import { Helmet } from 'react-helmet-async';

export default function SEO({ lang, path, title, description, image, noindex }) {
  const base = 'https://clearfinanciallife.com';
  const current = `${base}${path}`;
  const altPath = lang === 'es' ? path.replace(/^\/es/, '/en') : path.replace(/^\/en/, '/es');
  const alt = `${base}${altPath}`;
  const ogImage = image ? (image.startsWith('http') ? image : `${base}${image}`) : undefined;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={current} />
      <link rel="alternate" hrefLang="es" href={lang === 'es' ? current : alt} />
      <link rel="alternate" hrefLang="en" href={lang === 'en' ? current : alt} />
      <link rel="alternate" hrefLang="x-default" href={`${base}/es/`} />

      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:locale" content={lang === 'es' ? 'es_ES' : 'en_US'} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={current} />
      <meta property="og:site_name" content={lang === 'es' ? 'Tu Dinero Simple' : 'Clear Financial Life'} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}
