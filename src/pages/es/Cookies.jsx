import SEO from "../../seo/SEO";

function openCookieManager() {
  // Engancha aquí tu CMP si existe (Cookiebot, CookieYes, OneTrust, etc.)
  // Ejemplos comunes:
  if (window?.Cookiebot?.renew) return window.Cookiebot.renew();
  if (window?.cookieConsent?.open) return window.cookieConsent.open();
  alert("Abre el gestor de cookies de tu sitio (CMP).");
}

export default function CookiesES() {
  const path = "/es/cookies";
  const title = "Política de Cookies";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SEO lang="es" path={path} title={title} />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
        Última actualización: 4 de noviembre de 2025
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none prose-h2:mt-10">
        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos que se almacenan en tu dispositivo y permiten, entre otras cosas,
          recordar tus preferencias y obtener estadísticas de uso del sitio.
        </p>

        <h2>2. ¿Qué tipos de cookies utilizamos?</h2>
        <ul>
          <li><strong>Esenciales o técnicas:</strong> necesarias para el funcionamiento del sitio (p. ej., seguridad, sesión).</li>
          <li><strong>De preferencia o personalización:</strong> recuerdan ajustes como idioma o región.</li>
          <li><strong>Analíticas o de medición:</strong> nos ayudan a entender cómo se usa el sitio (requieren tu consentimiento).</li>
          <li><strong>Publicitarias/remarketing:</strong> muestran anuncios relevantes (requieren tu consentimiento).</li>
        </ul>

        <h2>3. Base legal</h2>
        <p>
          Instalamos cookies esenciales por interés legítimo. Las analíticas y publicitarias sólo se instalan con tu consentimiento.
        </p>

        <h2>4. ¿Quién utiliza la información?</h2>
        <p>
          Nosotros y, en su caso, nuestros proveedores (p. ej., analítica o publicidad) en calidad de encargados del tratamiento.
          Si existen transferencias fuera del EEE, aplicamos garantías adecuadas (adecuación o Cláusulas Contractuales Tipo).
        </p>

        <h2>5. Gestión de preferencias</h2>
        <p>
          Puedes aceptar, rechazar o configurar las cookies en cualquier momento a través de nuestro gestor de consentimiento.
          También puedes configurar tu navegador para bloquear o eliminar cookies.
        </p>

        <p>
          <button
            onClick={openCookieManager}
            className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-sm
                       text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            Gestionar preferencias de cookies
          </button>
        </p>

        <h2>6. Cómo borrar o bloquear cookies en tu navegador</h2>
        <ul>
          <li><strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
          <li><strong>Firefox:</strong> Opciones &gt; Privacidad &amp; Seguridad &gt; Cookies y datos del sitio.</li>
          <li><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Cookies y datos de sitios web.</li>
          <li><strong>Edge:</strong> Configuración &gt; Cookies y permisos del sitio.</li>
        </ul>

        <h2>7. Cambios en esta política</h2>
        <p>Podremos actualizar esta política para reflejar cambios legales o del servicio. Publicaremos la versión vigente en esta página.</p>

        <h2>8. Contacto</h2>
        <p>Para dudas sobre cookies, escríbenos a <a href="mailto:contact@clearfinanciallife.com">contact@clearfinanciallife.com</a>.</p>

        <h2>9. Tabla de cookies (opcional)</h2>
        <p>
          Si usas una herramienta de consentimiento, puedes listar aquí las cookies detectadas automáticamente
          (nombre, proveedor, finalidad, duración). Ejemplo:
        </p>
        <pre>
{`Nombre         Proveedor          Finalidad                 Duración
_ga            Google Analytics   Métrica de audiencia       13 meses
_cf_bm         Cloudflare         Protección/anti-bots       30 minutos`}
        </pre>
      </div>
    </div>
  );
}
