import AdPlaceholder from '../components/AdPlaceholder'
import { BookOpen, User, Shield } from 'lucide-react'
import SEO from '../seo/SEO'

export default function Home({ lang }) {
  const path = `/${lang}/`
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO lang={lang} path={path} title="Tu Dinero Simple" description="Aprende a ahorrar, invertir y vivir con inteligencia financiera" />
      <AdPlaceholder position="Cabecera" />
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Aprende a gestionar tu dinero de forma simple
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Aprende a ahorrar, invertir y vivir con inteligencia financiera
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {[
          {icon:BookOpen, title:'Contenido Práctico', text:'Guías paso a paso, consejos útiles y estrategias reales para mejorar tus finanzas personales.'},
          {icon:User, title:'Enfoque Personal', text:'Consejos adaptados a la realidad española y a diferentes situaciones económicas.'},
          {icon:Shield, title:'Educación Financiera', text:'Aprende conceptos clave sin tecnicismos innecesarios. Finanzas para todos.'},
        ].map((c,i)=>(
          <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <c.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{c.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{c.text}</p>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">¿Listo para transformar tus finanzas?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Únete a miles de personas que ya han mejorado su relación con el dinero gracias a nuestros consejos prácticos y recursos gratuitos.
        </p>
        <a href={`/${lang}/blog`} className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Explorar artículos
        </a>
      </div>
    </div>
  )
}
