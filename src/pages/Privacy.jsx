import SEO from "../seo/SEO";
export default function Privacy({ lang }) {
  const path = `/${lang}/privacidad`;
  return (
    <div style={{padding:24}}>
      <SEO lang={lang} path={path} title={lang==='es'?'Privacidad':'Privacy'} />
      <h1>{lang==='es'?'Política de privacidad':'Privacy Policy'}</h1>
      <p>{lang==='es'?'Texto legal en español...':'Legal text in English...'}</p>
    </div>
  );
}
