import SEO from "../seo/SEO";
export default function About({ lang }) {
  const path = `/${lang}/sobre-mi`;
  return (
    <div style={{padding:24}}>
      <SEO lang={lang} path={path} title={lang==='es'?'Sobre mí':'About'} />
      <h1>{lang==='es'?'Sobre mí':'About'}</h1>
      <p>{lang==='es'?'Apasionado del ahorro...':'Passionate about personal finance...'}</p>
    </div>
  );
}
