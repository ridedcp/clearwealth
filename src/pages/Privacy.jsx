import SEO from "../seo/SEO";

/**
 * Privacy page
 * - lang: 'es' | 'en'
 * - showBoth: si true, renderiza ambos idiomas en una misma página (no ideal para SEO)
 *
 * SUGERENCIA SEO: Mejor páginas separadas:
 *   /es/privacidad  -> <Privacy lang="es" />
 *   /en/privacy     -> <Privacy lang="en" />
 */

const TITLES = {
  es: "Política de Privacidad",
  en: "Privacy Policy",
};

export default function Privacy({ lang = "es", showBoth = false }) {
  const isEn = lang === "en";
  const path = isEn ? "/en/privacy" : "/es/privacidad";
  const title = TITLES[lang] ?? TITLES.es;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SEO lang={lang} path={path} title={title} />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
        {isEn ? "Last updated: 4 November 2025" : "Última actualización: 4 de noviembre de 2025"}
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none prose-h2:mt-10">
        {isEn ? <EN /> : <ES />}
      </div>

      {showBoth && (
        <div className="mt-14 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-6">
            {isEn ? "Spanish version below" : "Versión en inglés más abajo"}
          </p>
          <div className="prose prose-neutral dark:prose-invert max-w-none prose-h2:mt-10">
            {isEn ? <ES /> : <EN />}
          </div>
        </div>
      )}
    </div>
  );
}

/** ======== SPANISH ======== */
function ES({
  companyName = "Clear Financial Life",
  legalId = "[Clearfinanciallife]",
  address = "[Barcelona]",
  country = "España",
  email = "contact@clearfinanciallife.com",
}) {
  return (
    <>
      <h2>1. Responsable del tratamiento</h2>
      <p>
        <strong>{companyName}</strong> ({legalId}), con domicilio en {address}, {country}{" "}
        (en adelante, “nosotros”), es el responsable del tratamiento de los datos
        personales recabados a través de este sitio web.
      </p>
      <p>
        Contacto: <a href={`mailto:${email}`}>{email}</a>
      </p>

      <h2>2. Datos que recopilamos</h2>
      <ul>
        <li>
          <strong>Identificación y contacto</strong>: nombre y apellidos, email, y cualquier
          información que envíes mediante formularios.
        </li>
        <li>
          <strong>Datos de uso y analítica</strong>: dirección IP, identificadores de dispositivo,
          navegador, páginas visitadas y tiempos, con fines estadísticos y de mejora del servicio.
        </li>
        <li>
          <strong>Cookies</strong> y tecnologías similares (consulta la{" "}
          <a href="/es/cookies">Política de Cookies</a>).
        </li>
      </ul>

      <h2>3. Finalidades y bases legales (RGPD)</h2>
      <ul>
        <li>
          <strong>Atender tus consultas</strong> (formulario/contacto).{" "}
          Base legal: consentimiento o interés legítimo de responder.
        </li>
        <li>
          <strong>Gestionar el sitio y mejorar la experiencia</strong> (seguridad, mantenimiento,
          métricas agregadas). Base legal: interés legítimo.
        </li>
        <li>
          <strong>Analítica</strong> (medición de audiencia). Base legal: tu consentimiento para
          cookies analíticas.
        </li>
        <li>
          <strong>Comunicaciones</strong> (si te suscribes). Base legal: consentimiento; podrás
          darte de baja en cualquier momento.
        </li>
      </ul>

      <h2>4. Plazos de conservación</h2>
      <p>
        Conservamos los datos mientras sean necesarios para las finalidades indicadas o hasta que
        retires tu consentimiento, y el tiempo adicional exigido por ley. Los datos de analítica se
        conservan según la configuración de la herramienta utilizada.
      </p>

      <h2>5. Destinatarios y encargados</h2>
      <p>
        Podemos compartir datos con proveedores que nos prestan servicios (por ejemplo, alojamiento
        web, correo, analítica) actuando como encargados del tratamiento y sujetos a obligaciones de
        confidencialidad y protección de datos.
      </p>

      <h2>6. Transferencias internacionales</h2>
      <p>
        Si algún proveedor se encuentra fuera del EEE, garantizamos un nivel adecuado mediante
        decisiones de adecuación o Cláusulas Contractuales Tipo aprobadas por la Comisión Europea.
      </p>

      <h2>7. Tus derechos</h2>
      <p>
        Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del
        tratamiento y portabilidad enviando un email a <a href={`mailto:${email}`}>{email}</a>.
        Tienes derecho a retirar el consentimiento en cualquier momento. Si consideras que no hemos
        tratado correctamente tus datos, puedes reclamar ante la Agencia Española de Protección de
        Datos (AEPD).
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a
        accesos no autorizados, pérdida o alteración.
      </p>

      <h2>9. Menores</h2>
      <p>
        No dirigimos el sitio a menores de 14 años. Si detectamos datos de menores sin autorización,
        los eliminaremos.
      </p>

      <h2>10. Cookies</h2>
      <p>
        Consulta la <a href="/es/cookies">Política de Cookies</a> para conocer qué cookies usamos,
        su finalidad y cómo configurarlas o rechazarlas.
      </p>

      <h2>11. Cambios en esta política</h2>
      <p>
        Podremos actualizar esta política para reflejar cambios legales o del servicio. Publicaremos
        la versión vigente en esta misma página.
      </p>

      <h2>12. Contacto</h2>
      <p>
        Para cualquier duda sobre privacidad, escríbenos a{" "}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </>
  );
}

/** ======== ENGLISH ======== */
function EN({
  companyName = "Clear Financial Life",
  legalId = "[Clearfinanciallife]",
  address = "[Barcelona]",
  country = "Spain",
  email = "contact@clearfinanciallife.com",
}) {
  return (
    <>
      <h2>1. Data Controller</h2>
      <p>
        <strong>{companyName}</strong> ({legalId}), located at {address}, {country} (“we”),
        is the data controller for personal data collected through this website.
      </p>
      <p>
        Contact: <a href={`mailto:${email}`}>{email}</a>
      </p>

      <h2>2. Data we collect</h2>
      <ul>
        <li>
          <strong>Identification & contact</strong>: name, email, and any information you submit via forms.
        </li>
        <li>
          <strong>Usage & analytics data</strong>: IP address, device/browser identifiers, pages
          visited and timestamps for statistical and service-improvement purposes.
        </li>
        <li>
          <strong>Cookies</strong> and similar technologies (see{" "}
          <a href="/en/cookies">Cookies Policy</a>).
        </li>
      </ul>

      <h2>3. Purposes & legal bases (GDPR)</h2>
      <ul>
        <li>
          <strong>Responding to enquiries</strong> (contact/form). Legal basis: consent or our
          legitimate interest to reply.
        </li>
        <li>
          <strong>Operating and improving the website</strong> (security, maintenance, aggregated
          metrics). Legal basis: legitimate interest.
        </li>
        <li>
          <strong>Analytics</strong> (audience measurement). Legal basis: your consent for
          analytics cookies.
        </li>
        <li>
          <strong>Communications</strong> (if you subscribe). Legal basis: consent; you can
          unsubscribe anytime.
        </li>
      </ul>

      <h2>4. Retention</h2>
      <p>
        We keep data for as long as needed for the stated purposes or until you withdraw consent,
        and any additional period required by law. Analytics data is retained according to the tool
        configuration.
      </p>

      <h2>5. Recipients & processors</h2>
      <p>
        We may share data with service providers (e.g., hosting, email, analytics) acting as data
        processors under confidentiality and data-protection obligations.
      </p>

      <h2>6. International transfers</h2>
      <p>
        If any provider is located outside the EEA, we ensure an adequate level of protection via
        adequacy decisions or the European Commission’s Standard Contractual Clauses.
      </p>

      <h2>7. Your rights</h2>
      <p>
        You may exercise your rights of access, rectification, erasure, objection, restriction and
        portability by emailing <a href={`mailto:${email}`}>{email}</a>. You can withdraw consent at
        any time. If you believe your data has not been handled properly, you may lodge a complaint
        with your supervisory authority.
      </p>

      <h2>8. Security</h2>
      <p>
        We implement reasonable technical and organizational measures to protect data against
        unauthorized access, loss or alteration.
      </p>

      <h2>9. Children</h2>
      <p>
        This website is not directed to children under the age of 14. If we become aware of
        personal data from children without authorization, we will delete it.
      </p>

      <h2>10. Cookies</h2>
      <p>
        See our <a href="/en/cookies">Cookies Policy</a> to learn which cookies we use, their
        purposes, and how to manage or reject them.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this policy to reflect legal or service changes. We will publish the current
        version on this page.
      </p>

      <h2>12. Contact</h2>
      <p>
        For any privacy question, contact us at <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </>
  );
}

/** Helpers: export “fixed-lang” wrappers if you preferring routing by component */
export function PrivacyES() {
  return <Privacy lang="es" />;
}
export function PrivacyEN() {
  return <Privacy lang="en" />;
}
