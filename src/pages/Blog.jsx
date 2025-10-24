import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../seo/SEO'
import { getPosts } from '../data/posts'
import { translations } from '../i18n/translations'

export default function Blog({ lang }) {
  const t = translations[lang]
  const path = `/${lang}/blog`
  const categories = t.blog.categories
  const [selected, setSelected] = useState(categories[0])

  const posts = getPosts(lang).filter(p => {
    if (selected === categories[0]) return true
    return p.category.toLowerCase().includes(selected.split('/')[0].toLowerCase())
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO lang={lang} path={path} title={t.blog.title} description={t.blog.subtitle} />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t.blog.title}</h1>
        <p className="text-gray-600 dark:text-gray-300">{t.blog.subtitle}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(c=>(
          <button key={c} onClick={()=>setSelected(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selected===c ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}>{c}</button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map(post=>(
          <article key={post.slug} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-2 py-1 rounded mr-3">{post.category}</span>
              <span>{post.date}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <Link to={`/${lang}/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center">
              {t.blog.readMore}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
