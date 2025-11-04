import SEO from "../../seo/SEO";

export default function PrivacidadES() {
  const path = "/es/privacidad";
  const title = "Política de Privacidad";

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
          <strong>Clear Financial Life</strong> (<em>[NIF/CIF]</em>), con domicilio en <em>[Dirección completa]</em>, España
          (en adelante, “nosotros”), es el responsable del tratamiento de los datos personales recabados a través de este sitio web.
          Contacto: <a href="mailto:contact@clearfinanciallife.com">contact@clearfinanciallife.com</a>.
        </p>

        <h2>2. Datos que recopilamos</h2>
        <ul>
          <li><strong>Identificación y contacto:</strong> nombre y email enviados mediante formularios.</li>
          <li><strong>Uso y analítica:</strong> IP, identificadores de navegador/dispositivo, páginas visitadas y tiempos.</li>
          <li><strong>Cookies</strong> y tecnologías similares (consulta la <a href="/es/cookies">Política de Cookies</a>).</li>
        </ul>

        <h2>3. Finalidades y bases legales (RGPD)</h2>
        <ul>
          <li><strong>Atender consultas</strong> (formulario/contacto). Base legal: consentimiento o interés legítimo de responder.</li>
          <li><strong>Operación y mejora del sitio</strong> (seguridad, mantenimiento, métricas agregadas). Base legal: interés legítimo.</li>
          <li><strong>Analítica</strong> (medición de audiencia). Base legal: tu consentimiento para cookies analíticas.</li>
          <li><strong>Comunicaciones</strong> (si te suscribes). Base legal: consentimiento; baja en cualquier momento.</li>
        </ul>

        <h2>4. Conservación</h2>
        <p>
          Conservamos los datos mientras sean necesarios para las finalidades indicadas o hasta que retires tu consentimiento,
          y el tiempo adicional exigido por ley. Los datos de analítica se conservan según la configuración de la herramienta utilizada.
        </p>

        <h2>5. Destinatarios y encargados</h2>
        <p>
          Compartimos datos con proveedores (alojamiento, correo, analítica) que actúan como encargados del tratamiento bajo
          contratos de confidencialidad y protección de datos.
        </p>

        <h2>6. Transferencias internacionales</h2>
        <p>
          Si algún proveedor se encuentra fuera del EEE, garantizamos un nivel adecuado mediante decisiones de adecuación
          o Cláusulas Contractuales Tipo de la Comisión Europea.
        </p>

        <h2>7. Derechos</h2>
        <p>
          Puedes ejercer acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a{" "}
          <a href="mailto:contact@clearfinanciallife.com">contact@clearfinanciallife.com</a>. Puedes retirar el consentimiento en cualquier momento.
          Si consideras vulnerados tus derechos, reclama ante la AEPD.
        </p>

        <h2>8. Seguridad</h2>
        <p>Aplicamos medidas técnicas y organizativas razonables para proteger los datos frente a accesos no autorizados, pérdida o alteración.</p>

        <h2>9. Menores</h2>
        <p>El sitio no se dirige a menores de 14 años. Eliminaremos datos no autorizados si los detectamos.</p>

        <h2>10. Cookies</h2>
        <p>Consulta la <a href="/es/cookies">Política de Cookies</a> para conocer tipos, finalidades y configuración.</p>

        <h2>11. Cambios</h2>
        <p>Podremos actualizar esta política por cambios legales o del servicio. Publicaremos la versión vigente en esta página.</p>

        <h2>12. Contacto</h2>
        <p>Para dudas de privacidad: <a href="mailto:contact@clearfinanciallife.com">contact@clearfinanciallife.com</a>.</p>
      </div>
    </div>
  );
}
