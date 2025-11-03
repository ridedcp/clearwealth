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
