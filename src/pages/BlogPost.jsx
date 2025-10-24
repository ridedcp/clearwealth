import SEO from "../seo/SEO";
import { getPostBySlug } from "../data/posts";
import { useParams, Link } from "react-router-dom";

export default function BlogPost({ lang }) {
  const { slug } = useParams();
  const post = getPostBySlug(lang, slug);
  if (!post) return <div style={{padding:24}}>No encontrado</div>;
  const path = `/${lang}/blog/${slug}`;
  return (
    <div style={{padding:24, maxWidth:800, margin:'0 auto'}}>
      <SEO lang={lang} path={path} title={post.title} description={post.excerpt} />
      <p style={{color:'#6b7280'}}>{post.category} · {post.date}</p>
      <h1>{post.title}</h1>
      <div className="prose" dangerouslySetInnerHTML={{__html: post.content}} />
      <p style={{marginTop:24}}><Link to={`/${lang}/blog`}>← {lang==='es'?'Volver':'Back'}</Link></p>
    </div>
  );
}
