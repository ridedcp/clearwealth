import { Link } from "react-router-dom";
import SEO from "../seo/SEO";
import { getPosts } from "../data/posts";

export default function Blog({ lang }) {
  const posts = getPosts(lang);
  const path = `/${lang}/blog`;
  return (
    <div style={{padding:24}}>
      <SEO lang={lang} path={path} title="Blog" description="Artículos de finanzas personales" />
      <h1>Blog</h1>
      <ul>
        {posts.map(p => (
          <li key={p.slug} style={{margin:"12px 0"}}>
            <Link to={`/${lang}/blog/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
