import { NavLink } from "react-router-dom";

export default function Footer({ lang='es' }) {
  const base = `/${lang}`;
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-4">Tu Dinero Simple</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Aprende a ahorrar, invertir y vivir con inteligencia financiera.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Tu Dinero Simple. Todos los derechos reservados.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              {lang==='es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><NavLink to={`${base}/`} className="hover:text-blue-600 dark:hover:text-blue-400">{lang==='es'?'Inicio':'Home'}</NavLink></li>
              <li><NavLink to={`${base}/blog`} className="hover:text-blue-600 dark:hover:text-blue-400">Blog</NavLink></li>
              <li><NavLink to={`${base}/sobre-mi`} className="hover:text-blue-600 dark:hover:text-blue-400">{lang==='es'?'Sobre mí':'About'}</NavLink></li>
              <li><NavLink to={`${base}/contacto`} className="hover:text-blue-600 dark:hover:text-blue-400">{lang==='es'?'Contacto':'Contact'}</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              {lang==='es' ? 'Legal' : 'Legal'}
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><NavLink to={`${base}/privacidad`} className="hover:text-blue-600 dark:hover:text-blue-400">{lang==='es'?'Política de privacidad':'Privacy Policy'}</NavLink></li>
              <li><NavLink to={`${base}/privacidad`} className="hover:text-blue-600 dark:hover:text-blue-400">Cookies</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
