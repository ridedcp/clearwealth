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
    <p>Las suscripciones son una de las mayores fuentes de gasto pasivo e invisible. Muchas personas pagan entre 30€ y 60€ al mes por servicios que apenas utilizan: streaming, apps de música, gimnasios, software premium, etc.</p>
    <h3>¿Cómo actuar?</h3>
    <ul>
      <li><strong>Haz un inventario:</strong> Revisa tus extractos bancarios de los últimos 3 meses y lista todas las cargas recurrentes.</li>
      <li><strong>Pregúntate:</strong> ¿He usado este servicio en las últimas 4 semanas? Si la respuesta es no, cancélate.</li>
      <li><strong>Comparte planes:</strong> Muchos servicios (Netflix, Spotify, Amazon Prime) permiten perfiles familiares. Compartir puede reducir tu cuota a la mitad.</li>
    </ul>
    <h3>Herramientas útiles</h3>
    <p>Aplicaciones como <strong>Rocket Money</strong>, <strong>Subscription Stopper</strong> o incluso <strong>Fintonic</strong> pueden detectar automáticamente tus suscripciones y ayudarte a cancelarlas con un clic.</p>
    <p><strong>Ahorro estimado:</strong> Eliminar 2–3 suscripciones poco usadas puede liberar entre <strong>15€ y 30€ al mes</strong>.</p>

    <h2 id="cocina">2. Cocina en casa</h2>
    <figure>
      <img src="/images/posts/como-ahorrar-100-euros-al-mes-sin-esfuerzo/cocinar.jpg" alt="Cocinar en casa para ahorrar" loading="lazy" />
      <figcaption>Planifica 2-3 platos base para toda la semana.</figcaption>
    </figure>
    <p>En España, el gasto promedio en comer fuera de casa supera los <strong>200€ mensuales</strong>. Cada comida en un restaurante cuesta entre 12€ (menú del día) y 40€ (cena en ciudad grande). En cambio, cocinar en casa reduce ese costo a 3–5€ por persona.</p>
    <h3>Estrategias efectivas</h3>
    <ul>
      <li><strong>Batch cooking:</strong> Dedica 2–3 horas los domingos a preparar comidas para toda la semana (guisos, arroces, legumbres).</li>
      <li><strong>Planificación semanal:</strong> Elige 2–3 recetas versátiles que puedas variar con diferentes acompañamientos.</li>
      <li><strong>Evita el delivery:</strong> Una cena por app puede costar 20€ + propina + envío. Cocinar en casa elimina esos sobrecostos.</li>
    </ul>
    <h3>Apps recomendadas</h3>
    <p>Usa <strong>Planifood</strong> o <strong>Mealime</strong> para crear menús semanales y generar listas de la compra automáticas. <strong>Nooddle</strong> sugiere recetas según lo que ya tienes en la nevera.</p>
    <p><strong>Ahorro estimado:</strong> Reducir las comidas fuera de casa de 5 a 2 veces por semana puede ahorrarte entre <strong>30€ y 50€ mensuales</strong>.</p>

    <h2 id="compra">3. Compra inteligente</h2>
    <figure>
      <img src="/images/posts/como-ahorrar-100-euros-al-mes-sin-esfuerzo/compra-inteligente.jpg" alt="Compra inteligente en el supermercado" loading="lazy" />
      <figcaption>Compara precio por kilo y lleva lista de la compra.</figcaption>
    </figure>
    <p>Comprar sin planificación lleva a gastos innecesarios. La clave está en comparar, priorizar y evitar impulsos.</p>
    <h3>Consejos prácticos</h3>
    <ul>
      <li><strong>Siempre con lista:</strong> Nunca vayas al supermercado sin una lista basada en tus menús semanales.</li>
      <li><strong>Precio por unidad:</strong> Compara €/kg, €/litro o €/unidad, no el precio total del paquete.</li>
      <li><strong>Marca blanca:</strong> Los productos de marca de distribución suelen ser un 20–30% más baratos y de calidad similar.</li>
      <li><strong>Productos de temporada:</strong> Frutas y verduras en temporada son más baratas, frescas y sostenibles.</li>
    </ul>
    <h3>Herramientas digitales</h3>
    <p>Aplicaciones como <strong>Soysuper</strong>, <strong>Ofertia</strong> y <strong>OCUMarket</strong> te permiten comparar precios entre supermercados (Mercadona, Carrefour, Eroski, etc.) en tiempo real. Escanea códigos de barras y encuentra el mejor precio cerca de ti.</p>
    <p><strong>Ahorro estimado:</strong> Comprar de forma inteligente puede reducir tu factura del supermercado entre un <strong>15% y 25%</strong>, lo que equivale a unos <strong>20–30€ al mes</strong> en un hogar promedio.</p>

    <h2 id="automatiza">4. Automatiza tu ahorro</h2>
    <figure>
      <img src="/images/posts/como-ahorrar-100-euros-al-mes-sin-esfuerzo/automatizar.jpg" alt="Automatizar una transferencia de ahorro" loading="lazy" />
      <figcaption>Programa una transferencia el día de la nómina.</figcaption>
    </figure>
    <p>El mayor obstáculo para ahorrar no es la falta de dinero, sino la falta de disciplina. La solución: <strong>haz que el ahorro sea automático</strong>.</p>
    <h3>Cómo implementarlo</h3>
    <ul>
      <li><strong>Transferencia programada:</strong> Configura una transferencia automática de 100€ desde tu cuenta corriente a una cuenta de ahorro el mismo día que recibes la nómina.</li>
      <li><strong>“Págate primero a ti mismo”:</strong> Trata el ahorro como un gasto fijo, no como un sobrante.</li>
      <li><strong>Cuentas separadas:</strong> Usa una cuenta de ahorro distinta (idealmente en otro banco) para evitar tentaciones.</li>
    </ul>
    <h3>Tecnología al rescate</h3>
    <p>Apps como <strong>Coinscrap</strong> redondean tus compras y transfieren los céntimos a ahorro. <strong>Qapital</strong> te permite crear reglas personalizadas (“ahorra 5€ cada vez que no pidas comida”). Y si tu banco lo permite, usa la opción de <strong>dividir la nómina</strong> directamente en origen.</p>
    <p><strong>Beneficio clave:</strong> Al automatizar, nunca “ves” ese dinero, por lo que no lo extrañas. Con el tiempo, se convierte en un hábito invisible pero poderoso.</p>

    <h2>Conclusión: 100€ al mes sí es posible</h2>
    <p>Sumando los ahorros potenciales:
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
    readMins: 4,
    cover: "/images/posts/mejores-apps-controlar-gastos-2025/cover.jpg",
    excerpt: "Herramientas digitales que te ayudarán a llevar un control exhaustivo de tus finanzas personales.",
    description: "Comparativa de apps para controlar gastos: Fintonic, Money Manager, Wallet, Sheets y Revolut.",
    content: `
      <h2 id="intro">¿Te cuesta llevar un control de tus gastos diarios?</h2>
      <p>Estas apps pueden transformar tu relación con el dinero.</p>
      <h2 id="fintonic">1. Fintonic</h2><p>Conexión bancaria y análisis de gastos.</p>
      <h2 id="moneymanager">2. Money Manager</h2><p>Entrada manual con gráficos claros.</p>
      <h2 id="wallet">3. Wallet</h2><p>Metas y seguimiento de inversiones.</p>
      <h2 id="sheets">4. Google Sheets</h2><p>Control total con plantillas.</p>
      <h2 id="revolut">5. Revolut</h2><p>Categorización automática y límites.</p>
    `
  },
  {
    id: 3,
    slug: "interes-compuesto-explicado-facil",
    title: "Qué es el interés compuesto explicado fácil",
    date: "5 de marzo de 2025",
    category: "Inversiones",
    readMins: 3,
    cover: "/images/posts/interes-compuesto-explicado-facil/cover.jpg",
    excerpt: "Entiende esta poderosa herramienta financiera que puede multiplicar tu dinero con el tiempo.",
    description: "Conceptos básicos y ejemplo del interés compuesto para empezar cuanto antes.",
    content: `
      <h2 id="intro">La octava maravilla</h2><p>Ganas intereses sobre intereses.</p>
      <h2 id="ejemplo">Ejemplo</h2><ul><li>Año 1: 1.050€</li><li>Año 2: 1.102,50€</li></ul>
      <h2 id="tiempo">El poder del tiempo</h2><p>Cuanto antes empieces, mejor.</p>
      <h2 id="como">Cómo aprovecharlo</h2><p>Reinvierte dividendos y sé constante.</p>
    `
  },
  {
    id: 4,
    slug: "habitos-financieros-para-mejorar-tus-finanzas",
    title: "5 hábitos financieros para mejorar tus finanzas personales",
    date: "1 de marzo de 2025",
    category: "Hábitos",
    readMins: 3,
    cover: "/images/posts/habitos-financieros-para-mejorar-tus-finanzas/cover.jpg",
    excerpt: "Pequeños cambios diarios que pueden transformar tu situación económica a largo plazo.",
    description: "Cinco hábitos financieros sencillos para ganar control y estabilidad.",
    content: `
      <h2 id="intro">Hábitos clave</h2>
      <ol>
        <li id="rev-semanal">Revisión semanal</li>
        <li id="pagate-primero">Págate primero</li>
        <li id="vive-bajo">Vive por debajo de tus posibilidades</li>
        <li id="educate">Edúcate</li>
        <li id="metas">Metas claras</li>
      </ol>
    `
  },
  {
    id: 5,
    slug: "metodo-50-30-20-presupuesto",
    title: "Cómo organizar tu presupuesto con el método 50/30/20",
    date: "25 de febrero de 2025",
    category: "Presupuesto",
    readMins: 3,
    cover: "/images/posts/metodo-50-30-20-presupuesto/cover.jpg",
    excerpt: "Una fórmula sencilla y efectiva para distribuir tus ingresos de forma equilibrada.",
    description: "Aplica el método 50/30/20 paso a paso y equilibra tus gastos.",
    content: `
      <h2 id="intro">El método</h2><p>50% necesidades, 30% deseos, 20% ahorro/inversión.</p>
      <h2 id="aplicacion">Aplicación</h2><p>Ajusta tus gastos a esas tres categorías.</p>
    `
  }
];

export const postsEn = [
  {
    id: 1,
    slug: "how-to-save-100-euros-a-month",
    title: "How to Save 100 Euros per Month Effortlessly",
    date: "March 15, 2025",
    category: "Saving",
    readMins: 4,
    cover: "/images/posts/como-ahorrar-100-euros-al-mes-sin-esfuerzo/cover.jpg",
    excerpt: "Practical strategies to consistently save €100/month without drastic lifestyle changes.",
    description: "Simple habits to save €100/month: subscriptions audit, home cooking, smart shopping and automation.",
    content: `
      <h2 id="intro">Yes, you can save €100/month</h2><p>Small daily tweaks compound.</p>
      <h2 id="subs">1. Audit subscriptions</h2><p>Cancel unused ones.</p>
      <h2 id="cook">2. Cook at home</h2><p>Cut eating out to save €30–50.</p>
      <h2 id="shop">3. Smart grocery shopping</h2><p>Compare unit prices and pre-plan.</p>
      <h2 id="auto">4. Automate savings</h2><p>Auto-transfer on payday.</p>
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
