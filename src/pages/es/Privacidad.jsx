import SEO from "../../seo/SEO";

export default function PrivacidadES() {
  const path = "/es/privacidad";
  const title = "Política de Privacidad";
  const controllerName = "Dani Cano"; // Cambia si lo prefieres
  const contactEmail = "contact@clearfinanciallife.com";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SEO lang="es" path={path} title={title} />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
        Última actualización: 4 de noviembre de 2025
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none prose-h2:mt-10">
        <h2>1. Responsable del tratamiento</h2>
        <p>
          <strong>{controllerName}</strong> (en adelante, “yo”) es el responsable del tratamiento de los datos personales
          recabados a través de este sitio web. Contacto:{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>

        <h2>2. Datos que recopilo</h2>
        <ul>
          <li><strong>Identificación y contacto:</strong> nombre y email enviados mediante formularios.</li>
          <li><strong>Uso y analítica:</strong> IP, identificadores de navegador/dispositivo, páginas visitadas y tiempos.</li>
          <li><strong>Cookies</strong> y tecnologías similares (consulta la <a href="/es/cookies">Política de Cookies</a>).</li>
        </ul>

        <h2>3. Finalidades y bases legales (RGPD)</h2>
        <ul>
          <li><strong>Atender consultas</strong> (formulario/contacto). Base legal: consentimiento o interés legítimo para responder.</li>
          <li><strong>Operación y mejora del sitio</strong> (seguridad, mantenimiento, métricas agregadas). Base legal: interés legítimo.</li>
          <li><strong>Analítica</strong> (medición de audiencia). Base legal: tu consentimiento para cookies analíticas.</li>
          <li><strong>Comunicaciones</strong> (si te suscribes). Base legal: consentimiento; baja en cualquier momento.</li>
        </ul>

        <h2>4. Conservación</h2>
        <p>
          Conservo los datos mientras sean necesarios para las finalidades indicadas o hasta que retires tu consentimiento,
          y el tiempo adicional exigido por ley. La retención de analítica depende de la herramienta utilizada.
        </p>

        <h2>5. Destinatarios y encargados</h2>
        <p>
          Puedo compartir datos con proveedores que me prestan servicios (alojamiento web, correo, analítica) actuando como
          encargados del tratamiento y sujetos a obligaciones de confidencialidad y protección de datos.
        </p>

        <h2>6. Transferencias internacionales</h2>
        <p>
          Si algún proveedor se encuentra fuera del EEE, garantizo un nivel adecuado mediante decisiones de adecuación o
          Cláusulas Contractuales Tipo de la Comisión Europea.
        </p>

        <h2>7. Tus derechos</h2>
        <p>
          Puedes ejercer acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Puedes retirar tu consentimiento en cualquier momento.
          Si consideras que no he tratado tus datos correctamente, puedes reclamar ante la AEPD (<a href="https://www.aepd.es">aepd.es</a>).
        </p>

        <h2>8. Seguridad</h2>
        <p>Aplico medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, pérdida o alteración.</p>

        <h2>9. Menores</h2>
        <p>Este sitio no se dirige a menores de 14 años. Si detecto datos de menores sin autorización, los eliminaré.</p>

        <h2>10. Cookies</h2>
        <p>Consulta la <a href="/es/cookies">Política de Cookies</a> para conocer categorías, finalidades y configuración.</p>

        <h2>11. Cambios en esta política</h2>
        <p>Podré actualizar esta política para reflejar cambios legales o del servicio. Publicaré la versión vigente en esta página.</p>

        <h2>12. Contacto</h2>
        <p>Para cualquier duda sobre privacidad, escríbeme a <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
      </div>
    </div>
  );
}
