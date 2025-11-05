import { useState } from "react";
import SEO from "../seo/SEO";
import { translations } from "../i18n";
import { Mail, MapPin } from "lucide-react";

export default function Contact({ lang }) {
  const t = translations[lang] || translations.es;
  const path = lang === "es" ? "/es/contacto" : "/en/contact";

  // ✅ FormSubmit sin token: usa el email como endpoint
  const endpointEmail = "contact@clearfinanciallife.com";
  const ajaxEndpoint = `https://formsubmit.co/ajax/${encodeURIComponent(endpointEmail)}`;
  const actionFallback = `https://formsubmit.co/${encodeURIComponent(endpointEmail)}`;

  // URL absoluta de “gracias”
  const siteBase =
    typeof window !== "undefined" ? window.location.origin : "https://clearfinanciallife.com";
  const thankYouUrl = `${siteBase}${lang === "es" ? "/es/gracias" : "/en/thank-you"}`;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    const fd = new FormData(e.currentTarget);
    // Campos especiales de FormSubmit
    fd.set("_captcha", "false");
    fd.set("_template", "table");
    fd.set("_replyto", form.email);
    fd.set(
      "_subject",
      lang === "es" ? `Nuevo mensaje de ${form.name}` : `New message from ${form.name}`
    );
    fd.set("_next", thankYouUrl); // por si algún día usas POST tradicional

    try {
      await fetch(ajaxEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
    } catch {
      // si falla AJAX, el hidden _next + action del form harán la redirección en envío tradicional
      e.currentTarget.submit();
      return;
    } finally {
      // UX consistente: navegamos igualmente
      window.location.assign(thankYouUrl);
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO
        lang={lang}
        path={path}
        title={t.contact.title}
        description={t.contact.seo?.description}
      />

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t.contact.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">{t.contact.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Columna info */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t.nav.contact}
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">
                contact@clearfinanciallife.com
              </span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">
                {t.contact.info.city}
              </span>
            </div>
          </div>
        </div>

        {/* Columna formulario */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {lang === "es" ? "Envía un mensaje" : "Send a message"}
          </h2>

          <form
            onSubmit={handleSubmit}
            action={actionFallback}               // ← fallback POST tradicional
            method="POST"
            className="space-y-4"
            noValidate
          >
            {/* Honeypot anti-spam */}
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            {/* Hidden fields para POST tradicional */}
            <input type="hidden" name="_next" value={thankYouUrl} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.contact.form.name}
              </label>
              <input
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                autoComplete="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.contact.form.email}
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                autoComplete="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.contact.form.message}
              </label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-md py-2 text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60"
            >
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
