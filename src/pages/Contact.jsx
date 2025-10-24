import SEO from "../seo/SEO";
import { translations } from "../i18n/translations";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import AdPlaceholder from "../components/AdPlaceholder";

export default function Contact({ lang }) {
  const t = translations[lang];
  const path = `/${lang}/contacto`;
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name:'', email:'', message:'' });
    setTimeout(()=>setSent(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO lang={lang} path={path} title={t.contact.title} />
      <AdPlaceholder position="Cabecera" />
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t.contact.title}</h1>
        <p className="text-gray-600 dark:text-gray-300">{t.contact.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t.nav.contact}</h2>
          <div className="space-y-4">
            <div className="flex items-center"><Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" /><span className="text-gray-700 dark:text-gray-300">{t.contact.info.email}</span></div>
            <div className="flex items-center"><Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" /><span className="text-gray-700 dark:text-gray-300">{t.contact.info.phone}</span></div>
            <div className="flex items-center"><MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" /><span className="text-gray-700 dark:text-gray-300">{t.contact.info.city}</span></div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{lang==='es'?'Envía un mensaje':'Send a message'}</h2>
          {sent ? (
            <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-300 px-4 py-3 rounded">
              {t.contact.form.success}
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.contact.form.name}</label>
                <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"/></div>
              <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.contact.form.email}</label>
                <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"/></div>
              <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.contact.form.message}</label>
                <textarea rows={4} value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"/></div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {t.contact.form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
