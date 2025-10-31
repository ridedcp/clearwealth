import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Home, BookOpen, User2, MessageSquare, Globe } from 'lucide-react'
import { useState } from 'react'
import { translations } from '../i18n'

export default function Header({ lang='es' }) {
  const t = translations[lang] || translations.es;
  const base = `/${lang}`
  const nav = [
    { to: `${base}/`, label: t.nav.home, icon: Home },
    { to: `${base}/blog`, label: t.nav.blog, icon: BookOpen },
    { to: `${base}/sobre-mi`, label: t.nav.about, icon: User2 },
    { to: `${base}/contacto`, label: t.nav.contact, icon: MessageSquare },
  ]
  const [mobile, setMobile] = useState(false)
  const navigate = useNavigate()
  const toggleLang = () => { navigate(lang==='es' ? '/en/' : '/es/') }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to={`${base}/`} className="text-2xl font-bold text-blue-800 dark:text-blue-400">
            {t.brand}
          </NavLink>

          <nav className="hidden md:flex items-center space-x-6">
            {nav.map(i => (
              <NavLink
                key={i.to}
                to={i.to}
                className={({isActive}) =>
                  `flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`
                }>
                <i.icon className="w-4 h-4" /><span>{i.label}</span>
              </NavLink>
            ))}
            <button onClick={toggleLang} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
              <Globe className="w-4 h-4 mr-1" /> {lang==='es'?'EN':'ES'}
            </button>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleLang} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <Globe className="w-5 h-5" />
            </button>
            <button onClick={()=>setMobile(m=>!m)} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              {mobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobile && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {nav.map(i=>(
              <NavLink key={i.to} to={i.to} onClick={()=>setMobile(false)}
                className={({isActive}) =>
                  `flex items-center space-x-3 w-full px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`
                }>
                <i.icon className="w-5 h-5" /><span>{i.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
