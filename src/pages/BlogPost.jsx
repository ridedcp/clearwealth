import { useParams, Link } from 'react-router-dom'
import SEO from '../seo/SEO'
import { getPostBySlug } from '../data/posts'
import AdPlaceholder from '../components/AdPlaceholder'
import { translations } from '../i18n'

export default function BlogPost({ lang }) {
  const { slug } = useParams()
  const post = getPostBySlug(lang, slug)
  const t = translations[lang] || translations.es;
  if (!post) return <div className="max-w-4xl mx-auto p-8">Not found</div>
  const path = `/${lang}/blog/${slug}`
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO lang={lang} path={path} title={post.title} description={post.excerpt} />
      <AdPlaceholder position="Cabecera artículo" />
      <Link to={`/${lang}/blog`} className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
        {t.blog.back}
      </Link>
      <article className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-2 py-1 rounded mr-3">{post.category}</span>
          <span>{post.date}</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{post.title}</h1>
        <div className="prose prose-blue dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
      <AdPlaceholder position="Mitad artículo" />
    </div>
  )
}
