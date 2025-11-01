import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Home, BookOpen, User2, MessageSquare, Globe } from 'lucide-react'
import { useState } from 'react'
import { translations } from '../i18n'

export default function Header({ lang='es' }) {
  const t = translations[lang] || translations.es
  const base = `/${lang}`

  const nav = [
    { to: `${base}/`,         label: t.nav.home,    icon: Home,        end: true },
    { to: `${base}/blog`,     label: t.nav.blog,    icon: BookOpen },
    { to: `${base}/sobre-mi`, label: t.nav.about,   icon: User2 },
    { to: `${base}/contacto`, label: t.nav.contact, icon: MessageSquare },
  ]

  const [mobile, setMobile] = useState(false)
  const navigate = useNavigate()
  const toggleLang = () => { navigate(lang === 'es' ? '/en/' : '/es/') }

  const linkCls = (isActive) =>
    `flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
     ${isActive
        ? 'text-blue-400 bg-blue-900/20'
        : 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/10'}`

  const langBtnCls =
    'flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ' +
    'text-gray-300 hover:text-blue-400 hover:bg-blue-900/10'

  return (
    <header className="bg-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Marca con logo + nombre */}
          <NavLink to={`${base}/`} end className="flex items-center gap-2">
            <img
              src="/logo-512.svg"
              alt={lang === 'es' ? 'Tu Dinero Simple' : 'Clear Financial Life'}
              width={28}
              height={28}
              loading="eager"
              fetchpriority="high"
              decoding="async"
              onError={(e) => {
                // Fallback a PNG si el SVG no carga por cualquier motivo
                e.currentTarget.onerror = null
                e.currentTarget.src = '/logo-512.png'
              }}
              className="inline-block"
            />
            <span className="text-2xl font-bold text-blue-400">
              {t.brand}
            </span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-3">
            {nav.map(i => (
              <NavLink
                key={i.to}
                to={i.to}
                end={i.end}
                className={({ isActive }) => linkCls(isActive)}
              >
                <i.icon className="w-4 h-4" />
                <span>{i.label}</span>
              </NavLink>
            ))}

            {/* Botón de idioma con el mismo estilo que los links */}
            <button onClick={toggleLang} className={langBtnCls} type="button" aria-label="Switch language">
              <Globe className="w-4 h-4" />
              <span>{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </nav>

          {/* Mobile */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleLang} className={langBtnCls} type="button" aria-label="Switch language">
              <Globe className="w-5 h-5" />
              <span className="text-sm">{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <button
              onClick={() => setMobile(m => !m)}
              className="p-2 rounded-md text-gray-300 hover:bg-gray-700"
              aria-label="Menu"
            >
              {mobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobile && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {nav.map(i => (
              <NavLink
                key={i.to}
                to={i.to}
                end={i.end}
                onClick={() => setMobile(false)}
                className={({ isActive }) =>
                  `flex items-center space-x-3 w-full px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-blue-400 bg-blue-900/20'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-blue-400'}`
                }
              >
                <i.icon className="w-5 h-5" />
                <span>{i.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
