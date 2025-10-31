import { useState } from "react";
import SEO from "../seo/SEO";
import { translations } from "../i18n";
import { Mail, MapPin } from "lucide-react";

export default function Contact({ lang }) {
  const t = translations[lang] || translations.es;
  const path = lang === "es" ? "/es/contacto" : "/en/contact";
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // FormSubmit con token
  const endpoint = "https://formsubmit.co/43ac32c8eb2e2fc207154edbba51fccd";

  // URL absoluta de “gracias” (evita 404 en formsubmit.co)
  const siteBase =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://clearfinanciallife.com";
  const thankYouUrl = `${siteBase}${
    lang === "es" ? "/es/gracias" : "/en/thank-you"
  }`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO lang={lang} path={path} title={t.contact.title} description={t.contact.seo?.description} />

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t.contact.title}</h1>
        <p className="text-gray-600 dark:text-gray-300">{t.contact.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Columna info */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t.nav.contact}</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">{t.contact.info.email}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">{t.contact.info.city}</span>
            </div>
          </div>
        </div>

        {/* Columna formulario */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {lang === "es" ? "Envía un mensaje" : "Send a message"}
          </h2>

          <form action={endpoint} method="POST" className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">{t.contact.form.name}</label>
              <input
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                autoComplete="name"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">{t.contact.form.email}</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                autoComplete="email"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">{t.contact.form.message}</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            {/* Hidden fields FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value={`Nuevo mensaje de ${form.name}`} />
            <input type="hidden" name="_replyto" value={form.email} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={thankYouUrl} />
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <button type="submit" className="w-full rounded-md py-2 text-white bg-blue-600">
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
