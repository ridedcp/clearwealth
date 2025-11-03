// src/data/posts.js
// 5 posts ES y EN con portada, lectura estimada y descripciones SEO

export const postsEs = [
  {
  id: 1,
  slug: "como-ahorrar-100-euros-al-mes-sin-esfuerzo",
  title: "Cómo ahorrar 100 euros al mes sin esfuerzo",
  date: "15 de marzo de 2025",
  category: "Ahorro",
  readMins: 8,
  cover: "/images/posts/como-ahorrar-100-euros-al-mes-sin-esfuerzo/cover.jpg",
  excerpt: "Descubre estrategias prácticas para ahorrar 100€ mensuales sin cambiar drásticamente tu estilo de vida.",
  description: "Guía paso a paso para ahorrar 100€ al mes con hábitos sencillos: suscripciones, cocina en casa, compra inteligente y automatización.",
  content: `
    <h2 id="intro">¿Crees que ahorrar 100€ al mes es imposible con tu salario actual?</h2>
    <p>La realidad es que con pequeños ajustes en tus hábitos diarios, puedes lograr este objetivo sin sentir que estás haciendo sacrificios enormes. No se trata de recortar gastos esenciales, sino de identificar fugas financieras, optimizar decisiones cotidianas y aprovechar la tecnología para hacer que el ahorro sea automático y sostenible.</p>

    <h2 id="suscripciones">1. Revisa tus suscripciones mensuales</h2>
    <figure>
      <img src="/images/posts/como-ahorrar-100-euros-al-mes-sin-esfuerzo/suscripciones.jpg" alt="Revisión de suscripciones" loading="lazy" />
      <figcaption>Lista tus servicios y cancela lo que no usas.</figcaption>
    </figure>
    <p>Las suscripciones son una de las mayores fuentes de gasto pasivo e invisible. En España, muchas personas pagan entre 30€ y 60€ al mes por servicios que apenas utilizan. Pero no es solo aquí: en Alemania y Francia el gasto promedio en suscripciones ronda los 40€, mientras que en EE.UU. supera los 200 dólares (≈185€).</p>
    <h3>¿Cómo actuar?</h3>
    <ul>
      <li><strong>Haz un inventario:</strong> Revisa tus extractos bancarios de los últimos 3 meses y lista todas las cargas recurrentes.</li>
      <li><strong>Pregúntate:</strong> ¿He usado este servicio en las últimas 4 semanas? Si la respuesta es no, cancélate.</li>
      <li><strong>Comparte planes:</strong> Muchos servicios (Netflix, Spotify, Amazon Prime) permiten perfiles familiares. Compartir puede reducir tu cuota a la mitad.</li>
    </ul>
    <h3>Herramientas útiles</h3>
    <p>Aplicaciones como <strong>Rocket Money</strong> (global), <strong>Subscription Stopper</strong> (en español) o <strong>Fintonic</strong> pueden detectar automáticamente tus suscripciones y ayudarte a cancelarlas con un clic.</p>
    <p><strong>Ahorro estimado:</strong> Eliminar 2–3 suscripciones poco usadas puede liberar entre <strong>15€ y 30€ al mes</strong> en la zona euro, y hasta 40€ en EE.UU.</p>

    <h2 id="cocina">2. Cocina en casa</h2>
    <figure>
      <img src="/images/posts/como-ahorrar-100-euros-al-mes-sin-esfuerzo/cocinar.jpg" alt="Cocinar en casa para ahorrar" loading="lazy" />
      <figcaption>Planifica 2-3 platos base para toda la semana.</figcaption>
    </figure>
    <p>En España, el gasto promedio en comer fuera de casa supera los <strong>200€ mensuales</strong>. En Alemania y Francia, ronda los 180–220€. En contraste, en EE.UU. una sola cena puede costar 25 dólares (≈23€), y en el Reino Unido, una comida en pub cuesta entre 12 y 18 libras (≈14–21€). Cocinar en casa reduce ese costo a 3–5€ por persona en toda Europa.</p>
    <h3>Estrategias efectivas</h3>
    <ul>
      <li><strong>Batch cooking:</strong> Dedica 2–3 horas los domingos a preparar comidas para toda la semana (guisos, arroces, legumbres).</li>
      <li><strong>Planificación semanal:</strong> Elige 2–3 recetas versátiles que puedas variar con diferentes acompañamientos.</li>
      <li><strong>Evita el delivery:</strong> Una cena por app puede costar 20€ + propina + envío. Cocinar en casa elimina esos sobrecostos.</li>
    </ul>
    <h3>Apps recomendadas</h3>
    <p>Usa <strong>Planifood</strong> (España), <strong>Soysuper Recetas</strong> (zona euro) o <strong>Mealime</strong> (global) para crear menús semanales y generar listas de la compra automáticas.</p>
    <p><strong>Ahorro estimado:</strong> Reducir las comidas fuera de casa de 5 a 2 veces por semana puede ahorrarte entre <strong>30€ y 50€ mensuales</strong> en Europa, y hasta 60€ en EE.UU.</p>

    <h2 id="compra">3. Compra inteligente</h2>
    <figure>
      <img src="/images/posts/como-ahorrar-100-euros-al-mes-sin-esfuerzo/compra-inteligente.jpg" alt="Compra inteligente en el supermercado" loading="lazy" />
      <figcaption>Compara precio por kilo y lleva lista de la compra.</figcaption>
    </figure>
    <p>Comprar sin planificación lleva a gastos innecesarios. La clave está en comparar, priorizar y evitar impulsos. En todos los países desarrollados, los productos de marca blanca son un 20–30% más baratos que las marcas comerciales, con calidad muy similar.</p>
    <h3>Consejos prácticos</h3>
    <ul>
      <li><strong>Siempre con lista:</strong> Nunca vayas al supermercado sin una lista basada en tus menús semanales.</li>
      <li><strong>Precio por unidad:</strong> Compara €/kg, €/litro o €/unidad, no el precio total del paquete.</li>
      <li><strong>Marca blanca:</strong> Los productos de marca de distribución suelen ser un 20–30% más baratos y de calidad similar.</li>
      <li><strong>Productos de temporada:</strong> Frutas y verduras en temporada son más baratas, frescas y sostenibles.</li>
    </ul>
    <h3>Herramientas digitales</h3>
    <p>En España y la zona euro, usa <strong>Soysuper</strong>, <strong>Ofertia</strong> o <strong>OCUMarket</strong> para comparar precios entre Mercadona, Carrefour, E.Leclerc o REWE. En EE.UU., <strong>Flipp</strong> hace lo mismo con Walmart o Kroger.</p>
    <p><strong>Ahorro estimado:</strong> Comprar de forma inteligente puede reducir tu factura del supermercado entre un <strong>15% y 25%</strong>, lo que equivale a unos <strong>20–30€ al mes</strong> en Europa y hasta 35€ en EE.UU.</p>

    <h2 id="automatiza">4. Automatiza tu ahorro</h2>
    <figure>
      <img src="/images/posts/como-ahorrar-100-euros-al-mes-sin-esfuerzo/automatizar.jpg" alt="Automatizar una transferencia de ahorro" loading="lazy" />
      <figcaption>Programa una transferencia el día de la nómina.</figcaption>
    </figure>
    <p>El mayor obstáculo para ahorrar no es la falta de dinero, sino la falta de disciplina. La solución: <strong>haz que el ahorro sea automático</strong>. Esta estrategia funciona igual en Madrid, Berlín, París, Nueva York o Sídney.</p>
    <h3>Cómo implementarlo</h3>
    <ul>
      <li><strong>Transferencia programada:</strong> Configura una transferencia automática de 100€ desde tu cuenta corriente a una cuenta de ahorro el mismo día que recibes la nómina.</li>
      <li><strong>“Págate primero a ti mismo”:</strong> Trata el ahorro como un gasto fijo, no como un sobrante.</li>
      <li><strong>Cuentas separadas:</strong> Usa una cuenta de ahorro distinta (idealmente en otro banco) para evitar tentaciones.</li>
    </ul>
    <h3>Tecnología al rescate</h3>
    <p>En la zona euro, apps como <strong>Coinscrap</strong> o <strong>N26 Spaces</strong> redondean compras y ahorran automáticamente. En EE.UU., <strong>Chime</strong> o <strong>Qapital</strong> ofrecen funciones similares. En el Reino Unido, <strong>Monzo Pots</strong> permite ahorrar por objetivos.</p>
    <p><strong>Beneficio clave:</strong> Al automatizar, nunca “ves” ese dinero, por lo que no lo extrañas. Con el tiempo, se convierte en un hábito invisible pero poderoso.</p>

    <h2>Conclusión: 100€ al mes sí es posible</h2>
    <p>Sumando los ahorros potenciales en la zona euro:
    <ul>
      <li>Suscripciones: <strong>+25€</strong></li>
      <li>Cocina en casa: <strong>+40€</strong></li>
      <li>Compra inteligente: <strong>+25€</strong></li>
      <li>Ahorro automático: <strong>+10€</strong> (para completar la meta)</li>
    </ul>
    ¡Llegas fácilmente a los <strong>100€ mensuales</strong> sin renunciar a tu estilo de vida!
    </p>
    <p>Lo más importante no es cuánto ahorras hoy, sino que <strong>empieces y seas constante</strong>. Pequeños cambios, bien aplicados, generan grandes resultados a largo plazo.</p>
  `
  },
  {
  id: 2,
  slug: "mejores-apps-controlar-gastos-2025",
  title: "Las mejores apps para controlar tus gastos en 2025",
  date: "10 de marzo de 2025",
  category: "Presupuesto",
  readMins: 6,
  cover: "/images/posts/mejores-apps-controlar-gastos-2025/cover.jpg",
  excerpt: "Herramientas digitales que te ayudarán a llevar un control exhaustivo de tus finanzas personales.",
  description: "Comparativa de apps para controlar gastos: Fintonic, Money Manager, Wallet, Sheets y Revolut.",
  content: `
    <h2 id="intro">¿Te cuesta llevar un control de tus gastos diarios?</h2>
    <p>No estás solo. Según la CNMV, el 62% de los españoles no lleva un presupuesto mensual. La buena noticia: hoy existen apps intuitivas que hacen el trabajo por ti. Aquí, analizamos las 5 mejores opciones de 2025, según tus necesidades.</p>

    <h2 id="fintonic">1. Fintonic</h2>
    <figure>
      <img src="/images/posts/mejores-apps-controlar-gastos-2025/fintonic.jpg" alt="App Fintonic en smartphone" loading="lazy" />
      <figcaption>Conexión segura con tu banco y análisis en tiempo real.</figcaption>
    </figure>
    <p><strong>Ideal para:</strong> Quienes quieren ver todos sus gastos automáticamente categorizados sin introducir nada manualmente.</p>
    <p>Fintonic se conecta a más de 150 entidades financieras en España y Europa mediante API segura (PSD2). Ofrece alertas de gastos inusuales, comparativas mensuales y consejos personalizados. Es gratuita, aunque tiene una versión Premium (4,99€/mes) con informes avanzados.</p>
    <p><strong>Pros:</strong> Automático, en español, integración con cuentas y tarjetas.<br><strong>Contras:</strong> Algunas funciones clave están en la versión de pago.</p>

    <h2 id="moneymanager">2. Money Manager Expense & Budget</h2>
    <figure>
      <img src="/images/posts/mejores-apps-controlar-gastos-2025/money-manager.jpg" alt="Interfaz de Money Manager" loading="lazy" />
      <figcaption>Entrada manual con gráficos claros y sin publicidad (en versión Pro).</figcaption>
    </figure>
    <p><strong>Ideal para:</strong> Usuarios que prefieren el control total y no quieren vincular su banco.</p>
    <p>Esta app, con más de 50 millones de descargas, permite registrar ingresos y gastos manualmente. Sus gráficos por categorías (alimentación, transporte, ocio) son intuitivos. La versión gratuita incluye anuncios; la Pro (2,99€/mes) los elimina y añade copias de seguridad en la nube.</p>
    <p><strong>Pros:</strong> Ligera, offline, sin conexión bancaria.<br><strong>Contras:</strong> Requiere disciplina para registrar cada gasto.</p>

    <h2 id="wallet">3. Wallet by BudgetBakers</h2>
    <figure>
      <img src="/images/posts/mejores-apps-controlar-gastos-2025/wallet.jpg" alt="App Wallet con metas financieras" loading="lazy" />
      <figcaption>Metas de ahorro, deudas e inversiones en un solo lugar.</figcaption>
    </figure>
    <p><strong>Ideal para:</strong> Quienes buscan una visión 360° de sus finanzas, incluyendo inversiones y deudas.</p>
    <p>Wallet permite sincronizar cuentas bancarias, pero también introducir manualmente activos como fondos de inversión, criptomonedas o préstamos. Su función estrella son las "metas": puedes crear un objetivo (ej. “Vacaciones 2025”) y la app te dice cuánto ahorrar mensualmente.</p>
    <p><strong>Pros:</strong> Gestión integral, multiplataforma, informes detallados.<br><strong>Contras:</strong> Versión gratuita limitada; Premium a 4,99€/mes.</p>

    <h2 id="sheets">4. Google Sheets (con plantillas)</h2>
    <figure>
      <img src="/images/posts/mejores-apps-controlar-gastos-2025/google-sheets.jpg" alt="Plantilla de presupuesto en Google Sheets" loading="lazy" />
      <figcaption>Control total, gratis y personalizable al 100%.</figcaption>
    </figure>
    <p><strong>Ideal para:</strong> Perfeccionistas, contables caseros o quienes aman el Excel.</p>
    <p>Plantillas como “Presupuesto Mensual” de Vertex42 o “Finanzas Personales” de The Budget Mom ofrecen tablas automáticas con gráficos, seguimiento de metas y comparativas anuales. Todo se actualiza en tiempo real desde tu móvil o PC.</p>
    <p><strong>Pros:</strong> Gratis, ilimitado, sin publicidad, totalmente personalizable.<br><strong>Contras:</strong> Requiere introducir datos manualmente y conocimientos básicos de hojas de cálculo.</p>

    <h2 id="revolut">5. Revolut</h2>
    <figure>
      <img src="/images/posts/mejores-apps-controlar-gastos-2025/revolut.jpg" alt="Categorización automática en Revolut" loading="lazy" />
      <figcaption>Categorización automática y límites de gasto por categoría.</figcaption>
    </figure>
    <p><strong>Ideal para:</strong> Usuarios de Revolut que quieren control sin instalar otra app.</p>
    <p>Revolut no es solo un banco, sino un potente gestor financiero. Categoriza automáticamente tus gastos (supermercado, transporte, restaurantes) y te permite establecer límites mensuales. Si superas el límite en “ocio”, te avisa en tiempo real.</p>
    <p><strong>Pros:</strong> Integrado en tu cuenta, sin apps adicionales, útil para viajes (cambio de divisas sin comisiones).<br><strong>Contras:</strong> Solo funciona si usas Revolut como cuenta principal.</p>

    <h2>Conclusión: ¿Cuál elegir?</h2>
    <ul>
      <li><strong>Automático y en español:</strong> Fintonic</li>
      <li><strong>Manual y sin conexión bancaria:</strong> Money Manager</li>
      <li><strong>Visión completa (ahorro + inversión):</strong> Wallet</li>
      <li><strong>Control total y gratis:</strong> Google Sheets</li>
      <li><strong>Si ya usas Revolut:</strong> Aprovecha sus herramientas nativas</li>
    </ul>
    <p>Lo importante no es la app, sino <strong>usarla de forma constante</strong>. Elige la que mejor se adapte a tu estilo de vida y empieza hoy.</p>
  `
},
  {
  id: 3,
  slug: "interes-compuesto-explicado-facil",
  title: "Qué es el interés compuesto explicado fácil",
  date: "5 de marzo de 2025",
  category: "Inversiones",
  readMins: 4,
  cover: "/images/posts/interes-compuesto-explicado-facil/cover.jpg",
  excerpt: "Entiende esta poderosa herramienta financiera que puede multiplicar tu dinero con el tiempo.",
  description: "Conceptos básicos y ejemplo del interés compuesto para empezar cuanto antes.",
  content: `
    <h2 id="intro">La octava maravilla del mundo (según Einstein)</h2>
    <p>El interés compuesto es la capacidad de ganar intereses no solo sobre tu capital inicial, sino también sobre los intereses acumulados en periodos anteriores. En otras palabras: <strong>“intereses sobre intereses”</strong>.</p>
    <p>Es la fuerza que permite que pequeñas cantidades crezcan exponencialmente con el tiempo… pero solo si empiezas pronto.</p>

    <h2 id="ejemplo">Ejemplo práctico: 1.000€ al 5% anual</h2>
    <figure>
      <img src="/images/posts/interes-compuesto-explicado-facil/ejemplo.jpg" alt="Gráfico de crecimiento exponencial" loading="lazy" />
      <figcaption>Crecimiento con interés simple vs. compuesto.</figcaption>
    </figure>
    <ul>
      <li><strong>Año 0:</strong> 1.000€</li>
      <li><strong>Año 1:</strong> 1.000€ + (5% de 1.000€) = <strong>1.050€</strong></li>
      <li><strong>Año 2:</strong> 1.050€ + (5% de 1.050€) = <strong>1.102,50€</strong></li>
      <li><strong>Año 10:</strong> <strong>1.628,89€</strong></li>
      <li><strong>Año 30:</strong> <strong>4.321,94€</strong></li>
    </ul>
    <p>Con interés simple (solo sobre el capital inicial), en 30 años tendrías 2.500€. Con compuesto: **más del doble**.</p>

    <h2 id="tiempo">El poder del tiempo: empieza hoy</h2>
    <p>Imagina dos personas:
      <ul>
        <li><strong>María</strong> invierte 200€/mes desde los 25 hasta los 35 (10 años) y luego para.</li>
        <li><strong>Laura</strong> empieza a los 35 y aporta 200€/mes hasta los 65 (30 años).</li>
      </ul>
      Asumiendo un 7% anual de rentabilidad:
      <ul>
        <li>María aporta: 24.000€ → Tiene a los 65: <strong>≈250.000€</strong></li>
        <li>Laura aporta: 72.000€ → Tiene a los 65: <strong>≈244.000€</strong></li>
      </ul>
    </p>
    <p>María invirtió **48.000€ menos**… ¡y terminó con más dinero! Porque el interés compuesto trabajó **40 años** para ella.</p>

    <h2 id="como">Cómo aprovecharlo</h2>
    <figure>
      <img src="/images/posts/interes-compuesto-explicado-facil/reinvertir.jpg" alt="Reinversión de dividendos" loading="lazy" />
      <figcaption>Reinvierte siempre tus ganancias.</figcaption>
    </figure>
    <ol>
      <li><strong>Empieza ya:</strong> No esperes a “tener más dinero”. Empieza con lo que tengas.</li>
      <li><strong>Reinvierte:</strong> En fondos indexados, ETFs o planes de pensiones, activa la opción de “reinversión de dividendos”.</li>
      <li><strong>Sé constante:</strong> Aporta incluso pequeñas cantidades de forma regular.</li>
      <li><strong>Paciencia:</strong> El crecimiento es lento al principio, explosivo al final.</li>
    </ol>
    <p>El interés compuesto no es magia: es matemática + tiempo + disciplina.</p>
  `
},
  {
  id: 4,
  slug: "habitos-financieros-para-mejorar-tus-finanzas",
  title: "5 hábitos financieros para mejorar tus finanzas personales",
  date: "1 de marzo de 2025",
  category: "Hábitos",
  readMins: 4,
  cover: "/images/posts/habitos-financieros-para-mejorar-tus-finanzas/cover.jpg",
  excerpt: "Pequeños cambios diarios que pueden transformar tu situación económica a largo plazo.",
  description: "Cinco hábitos financieros sencillos para ganar control y estabilidad.",
  content: `
    <h2 id="intro">Hábitos clave que construyen riqueza silenciosamente</h2>
    <p>La estabilidad financiera no nace de golpes de suerte, sino de rutinas consistentes. Estos 5 hábitos, respaldados por estudios de comportamiento financiero, te darán control, claridad y tranquilidad.</p>

    <h2 id="rev-semanal">1. Revisión semanal de finanzas (10 minutos)</h2>
    <figure>
      <img src="/images/posts/habitos-financieros-para-mejorar-tus-finanzas/revision.jpg" alt="Revisión semanal de gastos en tableta" loading="lazy" />
      <figcaption>Dedica 10 minutos cada domingo a revisar tus finanzas.</figcaption>
    </figure>
    <p>No necesitas una auditoría. Solo abre tu app de gastos o tu hoja de cálculo y responde:
      <ul>
        <li>¿He superado algún límite esta semana?</li>
        <li>¿Hay algún gasto recurrente que pueda eliminar?</li>
        <li>¿He ahorrado lo planeado?</li>
      </ul>
    </p>
    <p>Este hábito previene sorpresas y refuerza la conciencia financiera.</p>

    <h2 id="pagate-primero">2. Págate primero a ti mismo</h2>
    <figure>
      <img src="/images/posts/habitos-financieros-para-mejorar-tus-finanzas/pagate-primero.jpg" alt="Transferencia automática a cuenta de ahorro" loading="lazy" />
      <figcaption>Antes de pagar facturas, ahorra una parte fija.</figcaption>
    </figure>
    <p>En lugar de ahorrar “lo que sobre”, destina un porcentaje fijo (ej. 10–20%) de tu ingreso a ahorro **el mismo día que cobras**. Automatízalo. Este dinero es tan obligatorio como el alquiler.</p>
    <p>Este principio, popularizado por George S. Clason en *El hombre más rico de Babilonia*, es la base de toda riqueza duradera.</p>

    <h2 id="vive-bajo">3. Vive por debajo de tus posibilidades</h2>
    <figure>
      <img src="/images/posts/habitos-financieros-para-mejorar-tus-finanzas/vive-bajo.jpg" alt="Persona feliz con estilo de vida sencillo" loading="lazy" />
      <figcaption>El lujo no es tener más, sino necesitar menos.</figcaption>
    </figure>
    <p>No se trata de vivir con austeridad, sino de evitar el “consumo por estatus”. Pregunta antes de comprar: “¿Esto mejora mi vida o solo mi imagen?”.</p>
    <p>Estudios de la Universidad de Harvard muestran que las personas que viven por debajo de sus ingresos tienen niveles de estrés financiero un 60% más bajos.</p>

    <h2 id="educate">4. Edúcate financieramente 15 minutos al día</h2>
    <figure>
      <img src="/images/posts/habitos-financieros-para-mejorar-tus-finanzas/educate.jpg" alt="Lectura de libro de finanzas" loading="lazy" />
      <figcaption>Lee, escucha podcasts o sigue canales de educación financiera.</figcaption>
    </figure>
    <p>Invierte en tu conocimiento. Sigue blogs, escucha podcasts como *Finanzas Claras* o *El Podcast del Emprendedor*, o lee libros como *Padre Rico, Padre Pobre*.</p>
    <p>El 85% de los millonarios son autodidactas en finanzas (según el libro *The Millionaire Next Door*).</p>

    <h2 id="metas">5. Define metas financieras claras y visibles</h2>
    <figure>
      <img src="/images/posts/habitos-financieros-para-mejorar-tus-finanzas/metas.jpg" alt="Tablero con metas financieras" loading="lazy" />
      <figcaption>Escribe tus metas y ponlas donde las veas todos los días.</figcaption>
    </figure>
    <p>Una meta vaga (“ahorrar más”) fracasa. Una meta SMART (“ahorrar 3.000€ para emergencias en 12 meses”) tiene un 42% más de probabilidades de cumplirse (Universidad de Dominican).</p>
    <p>Usa la regla: Específica, Medible, Alcanzable, Relevante, con Tiempo.</p>

    <h2>Conclusión</h2>
    <p>Estos hábitos no requieren más dinero, solo más intención. Empieza con uno esta semana. En 6 meses, tu relación con el dinero habrá cambiado para siempre.</p>
  `
},
  {
  id: 5,
  slug: "metodo-50-30-20-presupuesto",
  title: "Cómo organizar tu presupuesto con el método 50/30/20",
  date: "25 de febrero de 2025",
  category: "Presupuesto",
  readMins: 4,
  cover: "/images/posts/metodo-50-30-20-presupuesto/cover.jpg",
  excerpt: "Una fórmula sencilla y efectiva para distribuir tus ingresos de forma equilibrada.",
  description: "Aplica el método 50/30/20 paso a paso y equilibra tus gastos.",
  content: `
    <h2 id="intro">El método 50/30/20: equilibrio financiero en tres partes</h2>
    <p>Creado por la senadora y profesora de derecho Elizabeth Warren, este método divide tus ingresos netos (después de impuestos) en tres categorías simples:</p>
    <ul>
      <li><strong>50% Necesidades:</strong> Gastos esenciales para vivir.</li>
      <li><strong>30% Deseos:</strong> Cosas que mejoran tu calidad de vida.</li>
      <li><strong>20% Ahorro/Deuda:</strong> Futuro financiero y libertad.</li>
    </ul>
    <p>Es flexible, realista y perfecto para principiantes.</p>

    <h2 id="necesidades">50%: Necesidades (lo indispensable)</h2>
    <figure>
      <img src="/images/posts/metodo-50-30-20-presupuesto/necesidades.jpg" alt="Facturas de servicios básicos" loading="lazy" />
      <figcaption>Alquiler, luz, comida básica, transporte al trabajo.</figcaption>
    </figure>
    <p>Incluye:
      <ul>
        <li>Vivienda (alquiler o hipoteca)</li>
        <li>Alimentos básicos (no restaurantes)</li>
        <li>Transporte (coche, gasolina, transporte público para trabajar)</li>
        <li>Seguros médicos y esenciales</li>
        <li>Servicios básicos (luz, agua, internet si es necesario para teletrabajo)</li>
      </ul>
    </p>
    <p>⚠️ Si superas el 50%, prioriza reducir gastos aquí (ej. mudarte a un alquiler más barato).</p>

    <h2 id="deseos">30%: Deseos (lo que te hace feliz)</h2>
    <figure>
      <img src="/images/posts/metodo-50-30-20-presupuesto/deseos.jpg" alt="Cena con amigos y hobbies" loading="lazy" />
      <figcaption>Restaurantes, viajes, suscripciones, hobbies.</figcaption>
    </figure>
    <p>Incluye:
      <ul>
        <li>Comer fuera</li>
        <li>Suscripciones (Netflix, Spotify)</li>
        <li>Viajes y ocio</li>
        <li>Ropa no esencial</li>
        <li>Hobbies y entretenimiento</li>
      </ul>
    </p>
    <p>Este es tu “presupuesto de felicidad”. Si ahorras bien en necesidades, puedes disfrutar sin culpa.</p>

    <h2 id="ahorro">20%: Ahorro y deuda (tu futuro)</h2>
    <figure>
      <img src="/images/posts/metodo-50-30-20-presupuesto/ahorro.jpg" alt="Cuenta de ahorro e inversiones" loading="lazy" />
      <figcaption>Ahorro de emergencia, jubilación, pago de deudas.</figcaption>
    </figure>
    <p>Incluye:
      <ul>
        <li>Fondo de emergencia</li>
        <li>Planes de pensiones o inversión</li>
        <li>Pago extra de deudas (tarjetas, préstamos)</li>
        <li>Ahorro para metas (coche, casa, estudios)</li>
      </ul>
    </p>
    <p>Si tienes deudas de alto interés (ej. tarjetas >20%), prioriza pagarlas antes de invertir.</p>

    <h2 id="aplicacion">Cómo aplicarlo paso a paso</h2>
    <ol>
      <li><strong>Calcula tus ingresos netos mensuales.</strong> (Ej. 2.000€)</li>
      <li><strong>Multiplica:</strong> 50% = 1.000€ (necesidades), 30% = 600€ (deseos), 20% = 400€ (ahorro).</li>
      <li><strong>Clasifica tus gastos actuales</strong> en estas tres categorías.</li>
      <li><strong>Ajusta:</strong> Si necesidades son 1.300€, busca recortar 300€ o aumentar ingresos.</li>
    </ol>
    <p>Usa apps como Fintonic o Google Sheets para automatizar esta clasificación.</p>

    <h2>Conclusión</h2>
    <p>El 50/30/20 no es rígido: si vives en una ciudad cara, quizás necesidades sean 60%. Lo importante es ser consciente y equilibrar presente y futuro. Empieza hoy, y en 3 meses verás la diferencia.</p>
  `
}
];

export const postsEn = [
  {
  id: 1,
  slug: "how-to-save-100-euros-a-month",
  title: "How to Save €100 (or $110) a Month Effortlessly",
  date: "March 15, 2025",
  category: "Saving",
  readMins: 8,
  cover: "/images/posts/como-ahorrar-100-euros-al-mes-sin-esfuerzo/cover.jpg",
  excerpt: "Practical strategies to save €100/month (≈$110) without drastic lifestyle changes—works in the US, UK, EU, and Australia.",
  description: "Simple, proven habits to save €100/month: audit subscriptions, cook at home, shop smarter, and automate savings—with global comparisons.",
  content: `
    <h2 id="intro">Think saving €100 a month is impossible on your current income?</h2>
    <p>The truth is, with small daily tweaks, you can hit this goal without feeling like you’re making huge sacrifices. It’s not about cutting essentials—it’s about spotting hidden leaks, optimizing everyday choices, and using technology to make saving automatic and sustainable.</p>

    <h2 id="subs">1. Audit Your Subscriptions</h2>
    <figure>
      <img src="/images/posts/como-ahorrar-100-euros-al-mes-sin-esfuerzo/suscripciones.jpg" alt="Review your subscriptions" loading="lazy" />
      <figcaption>List your services and cancel what you don’t use.</figcaption>
    </figure>
    <p>Subscriptions are a major source of invisible spending. In the U.S., people spend an average of <strong>$219/month</strong>—but think they only spend $86! In the UK, it’s around £40 (≈€47), while in Germany and France, it’s €35–45. Australians spend AU$50–70 (≈€30–42) monthly on unused apps and services.</p>
    <h3>How to act:</h3>
    <ul>
      <li><strong>Take inventory:</strong> Review bank/credit card statements from the last 3 months.</li>
      <li><strong>Ask yourself:</strong> “Have I used this in the past 4 weeks?” If not, cancel it.</li>
      <li><strong>Share plans:</strong> Netflix, Spotify, and Amazon Prime allow family profiles—splitting costs cuts your bill in half.</li>
    </ul>
    <h3>Useful tools:</h3>
    <p>Apps like <strong>Rocket Money</strong> (US/global), <strong>Emma</strong> (UK/EU), or <strong>Pocketbook</strong> (Australia) automatically detect subscriptions and help you cancel with one click.</p>
    <p><strong>Estimated savings:</strong> Cutting 2–3 unused subscriptions frees up <strong>€20–30/month</strong> in Europe, <strong>$25–40</strong> in the US, and <strong>£20–25</strong> in the UK.</p>

    <h2 id="cook">2. Cook at Home</h2>
    <figure>
      <img src="/images/posts/como-ahorrar-100-euros-al-mes-sin-esfuerzo/cocinar.jpg" alt="Cook at home to save money" loading="lazy" />
      <figcaption>Plan 2–3 base meals for the whole week.</figcaption>
    </figure>
    <p>Average meal costs:
      <ul>
        <li><strong>US:</strong> $15–25 per meal</li>
        <li><strong>UK:</strong> £12–18 (≈€14–21)</li>
        <li><strong>Germany/France:</strong> €12–20</li>
        <li><strong>Australia:</strong> AU$20–30 (≈€12–18)</li>
      </ul>
      Meanwhile, home-cooked meals cost just <strong>€3–5 (≈$3–6)</strong> per person across all regions.
    </p>
    <h3>Effective strategies:</h3>
    <ul>
      <li><strong>Batch cooking:</strong> Spend 2–3 hours on Sunday preparing meals for the week (stews, curries, pasta).</li>
      <li><strong>Weekly planning:</strong> Choose 2–3 versatile recipes you can adapt with different sides.</li>
      <li><strong>Avoid delivery:</strong> A single takeout order can cost $25 + tip + fees. Cooking at home eliminates those markups.</li>
    </ul>
    <h3>Recommended apps:</h3>
    <p>Use <strong>Mealime</strong> (global), <strong>SuperCook</strong> (UK/EU), or <strong>Easy Meals</strong> (Australia) to generate weekly menus and auto-shopping lists.</p>
    <p><strong>Estimated savings:</strong> Reducing dining out from 5x to 2x/week saves <strong>€30–50/month</strong> in Europe, <strong>$40–60</strong> in the US, and <strong>AU$50–70</strong> in Australia.</p>

    <h2 id="shop">3. Smart Grocery Shopping</h2>
    <figure>
      <img src="/images/posts/como-ahorrar-100-euros-al-mes-sin-esfuerzo/compra-inteligente.jpg" alt="Smart shopping at the supermarket" loading="lazy" />
      <figcaption>Compare price per kg and bring a shopping list.</figcaption>
    </figure>
    <p>Impulse buying inflates grocery bills everywhere. The key is comparison, planning, and discipline. Store brands are 20–30% cheaper than name brands in all major economies—with nearly identical quality.</p>
    <h3>Practical tips:</h3>
    <ul>
      <li><strong>Always shop with a list</strong> based on your weekly meal plan.</li>
      <li><strong>Compare unit prices:</strong> Look at €/kg, $/lb, or £/unit—not just the package price.</li>
      <li><strong>Choose store brands:</strong> Aldi, Lidl, Tesco Own Brand, Kirkland (Costco), or Woolworths Essentials offer great value.</li>
      <li><strong>Buy seasonal produce:</strong> It’s cheaper, fresher, and more sustainable.</li>
    </ul>
    <h3>Digital tools:</h3>
    <p>In the EU: <strong>Soysuper</strong> or <strong>MySupermarket</strong>. In the UK: <strong>Trolley</strong>. In the US: <strong>Flipp</strong>. In Australia: <strong>Shopfully</strong>. All let you compare real-time prices across supermarkets.</p>
    <p><strong>Estimated savings:</strong> Smart shopping cuts your grocery bill by <strong>15–25%</strong>—that’s <strong>€20–30/month</strong> in Europe, <strong>$25–35</strong> in the US, and <strong>AU$30–40</strong> in Australia.</p>

    <h2 id="auto">4. Automate Your Savings</h2>
    <figure>
      <img src="/images/posts/como-ahorrar-100-euros-al-mes-sin-esfuerzo/automatizar.jpg" alt="Automate a savings transfer" loading="lazy" />
      <figcaption>Schedule a transfer on payday.</figcaption>
    </figure>
    <p>The biggest barrier to saving isn’t income—it’s inconsistency. The solution? <strong>Make saving automatic.</strong> This works whether you live in London, Berlin, New York, or Sydney.</p>
    <h3>How to set it up:</h3>
    <ul>
      <li><strong>Scheduled transfer:</strong> Auto-transfer €100 (or $110) to a separate savings account on payday.</li>
      <li><strong>“Pay yourself first”:</strong> Treat savings like a non-negotiable bill.</li>
      <li><strong>Separate accounts:</strong> Keep savings in a different bank to reduce temptation.</li>
    </ul>
    <h3>Technology to the rescue:</h3>
    <p>In the US: <strong>Chime</strong> or <strong>Qapital</strong>. In the UK: <strong>Monzo Pots</strong> or <strong>Chip</strong>. In the EU: <strong>N26 Spaces</strong> or <strong>bunq</strong>. In Australia: <strong>Up Bank</strong> (Round Ups). All automate micro-savings effortlessly.</p>
    <p><strong>Key benefit:</strong> When savings happen before you see the money, you never miss it. Over time, it becomes an invisible—but powerful—habit.</p>

    <h2>Conclusion: €100 a month is absolutely possible</h2>
    <p>Here’s how the savings add up globally:
    <ul>
      <li>Unused subscriptions: <strong>+€25</strong></li>
      <li>Cooking at home: <strong>+€40</strong></li>
      <li>Smart shopping: <strong>+€25</strong></li>
      <li>Automated top-up: <strong>+€10</strong></li>
    </ul>
    You easily reach <strong>€100/month</strong> (≈<strong>$110</strong>, <strong>£85</strong>, or <strong>AU$160</strong>)—without sacrificing your lifestyle.
    </p>
    <p>The most important thing isn’t how much you save today—it’s that you <strong>start and stay consistent</strong>. Small, smart changes compound into real financial freedom over time.</p>
  `
  },
  {
    id: 2,
    slug: "best-expense-tracker-apps-2025",
    title: "Best Expense Tracker Apps in 2025",
    date: "March 10, 2025",
    category: "Budgeting",
    readMins: 4,
    cover: "/images/posts/mejores-apps-controlar-gastos-2025/cover.jpg",
    excerpt: "Digital tools to get full control over your personal finances.",
    description: "Fintonic, Money Manager, Wallet, Sheets and Revolut: which fits you best?",
    content: `
      <h2 id="intro">Track it to tame it</h2><p>Five solid options for every style.</p>
      <h2 id="fintonic">Fintonic</h2><p>Bank sync and insights.</p>
      <h2 id="mm">Money Manager</h2><p>Manual input, clean charts.</p>
      <h2 id="wallet">Wallet</h2><p>Goals and investments.</p>
      <h2 id="sheets">Google Sheets</h2><p>Full control with templates.</p>
      <h2 id="revolut">Revolut</h2><p>Auto-categorization and limits.</p>
    `
  },
  {
    id: 3,
    slug: "compound-interest-explained-easy",
    title: "Compound Interest Explained the Easy Way",
    date: "March 5, 2025",
    category: "Investing",
    readMins: 3,
    cover: "/images/posts/interes-compuesto-explicado-facil/cover.jpg",
    excerpt: "Understand the engine that multiplies your money over time.",
    description: "Basics and example of compound interest to start early.",
    content: `
      <h2 id="intro">Interest on interest</h2><p>The earlier you start, the better.</p>
      <h2 id="example">Example</h2><ul><li>Year 1: 1,050</li><li>Year 2: 1,102.5</li></ul>
      <h2 id="make">Make it work</h2><p>Reinvest and keep contributions steady.</p>
    `
  },
  {
    id: 4,
    slug: "five-financial-habits-to-improve",
    title: "5 Financial Habits to Improve Your Money",
    date: "March 1, 2025",
    category: "Habits",
    readMins: 3,
    cover: "/images/posts/habitos-financieros-para-mejorar-tus-finanzas/cover.jpg",
    excerpt: "Small daily changes that compound into big results.",
    description: "Five simple financial habits for more control and stability.",
    content: `
      <h2 id="intro">Five habits</h2>
      <ol>
        <li id="weekly">Weekly money review</li>
        <li id="payfirst">Pay yourself first</li>
        <li id="belowmeans">Live below your means</li>
        <li id="learn">Keep learning</li>
        <li id="goals">Set clear goals</li>
      </ol>
    `
  },
  {
    id: 5,
    slug: "50-30-20-budget-method",
    title: "How to Use the 50/30/20 Budget Method",
    date: "Feb 25, 2025",
    category: "Budgeting",
    readMins: 3,
    cover: "/images/posts/metodo-50-30-20-presupuesto/cover.jpg",
    excerpt: "A simple formula to balance your income wisely.",
    description: "Apply 50/30/20 and balance needs, wants and savings.",
    content: `
      <h2 id="intro">The split</h2><p>50% needs, 30% wants, 20% saving/investing.</p>
      <h2 id="apply">Apply it</h2><p>Map your spending to the three buckets.</p>
    `
  }
];

export function getPosts(lang) { return lang === 'en' ? postsEn : postsEs; }
export function getPostBySlug(lang, slug) { return getPosts(lang).find(p => p.slug === slug); }
