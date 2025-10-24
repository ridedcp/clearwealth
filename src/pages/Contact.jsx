import SEO from "../seo/SEO";
export default function Contact({ lang }) {
  const path = `/${lang}/contacto`;
  return (
    <div style={{padding:24}}>
      <SEO lang={lang} path={path} title={lang==='es'?'Contacto':'Contact'} />
      <h1>{lang==='es'?'Contacto':'Contact'}</h1>
      <p>contacto@clearwealth.com</p>
    </div>
  );
}
