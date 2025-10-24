// 5 posts ES (tus textos) y sus equivalentes EN simples.
export const postsEs = [
  { id:1, slug:"como-ahorrar-100-euros-al-mes-sin-esfuerzo", title:"Cómo ahorrar 100 euros al mes sin esfuerzo", date:"15 de marzo de 2025", category:"Ahorro",
    excerpt:"Descubre estrategias prácticas para ahorrar 100€ mensuales sin cambiar drásticamente tu estilo de vida.",
    content:`<h2>¿Crees que ahorrar 100€ al mes es imposible con tu salario actual?</h2><p>La realidad es que con pequeños ajustes en tus hábitos diarios, puedes lograr este objetivo sin sentir que estás haciendo sacrificios enormes.</p><h2>1. Revisa tus suscripciones mensuales</h2><p>Analiza todas tus suscripciones: streaming, gimnasio, apps, etc. Cancela las que no uses regularmente.</p><h2>2. Cocina en casa</h2><p>Reducir comidas fuera de casa puede ahorrarte fácilmente 30-50€.</p><h2>3. Compra inteligente</h2><p>Compara precios por kilo y haz lista.</p><h2>4. Automatiza tu ahorro</h2><p>Transfiere 100€ el día de la nómina.</p>` },
  { id:2, slug:"mejores-apps-controlar-gastos-2025", title:"Las mejores apps para controlar tus gastos en 2025", date:"10 de marzo de 2025", category:"Presupuesto",
    excerpt:"Herramientas digitales que te ayudarán a llevar un control exhaustivo de tus finanzas personales.",
    content:`<h2>¿Te cuesta llevar un control de tus gastos diarios?</h2><p>Estas apps pueden transformar tu relación con el dinero.</p><h2>1. Fintonic</h2><p>Conexión bancaria y análisis de gastos.</p><h2>2. Money Manager</h2><p>Entrada manual con gráficos claros.</p><h2>3. Wallet</h2><p>Metas y seguimiento de inversiones.</p><h2>4. Google Sheets</h2><p>Control total con plantillas.</p><h2>5. Revolut</h2><p>Categorización automática y límites.</p>` },
  { id:3, slug:"interes-compuesto-explicado-facil", title:"Qué es el interés compuesto explicado fácil", date:"5 de marzo de 2025", category:"Inversiones",
    excerpt:"Entiende esta poderosa herramienta financiera que puede multiplicar tu dinero con el tiempo.",
    content:`<h2>La octava maravilla</h2><p>Ganas intereses sobre intereses.</p><h2>Ejemplo</h2><ul><li>Año 1: 1.050€</li><li>Año 2: 1.102,50€</li></ul><h2>El poder del tiempo</h2><p>Cuanto antes empieces, mejor.</p><h2>Cómo aprovecharlo</h2><p>Reinvierte dividendos y sé constante.</p>` },
  { id:4, slug:"habitos-financieros-para-mejorar-tus-finanzas", title:"5 hábitos financieros para mejorar tus finanzas personales", date:"1 de marzo de 2025", category:"Hábitos",
    excerpt:"Pequeños cambios diarios que pueden transformar tu situación económica a largo plazo.",
    content:`<h2>Hábitos clave</h2><ol><li>Revisión semanal</li><li>Págate primero</li><li>Vive por debajo de tus posibilidades</li><li>Edúcate</li><li>Metas claras</li></ol>` },
  { id:5, slug:"metodo-50-30-20-presupuesto", title:"Cómo organizar tu presupuesto con el método 50/30/20", date:"25 de febrero de 2025", category:"Presupuesto",
    excerpt:"Una fórmula sencilla y efectiva para distribuir tus ingresos de forma equilibrada.",
    content:`<h2>El método</h2><p>50% necesidades, 30% deseos, 20% ahorro/inversión.</p><h2>Aplicación</h2><p>Ajusta tus gastos a esas tres categorías.</p>` }
];

export const postsEn = [
  { id:1, slug:"how-to-save-100-euros-a-month", title:"How to Save 100 Euros per Month Effortlessly", date:"March 15, 2025", category:"Saving",
    excerpt:"Practical strategies to consistently save €100/month without drastic lifestyle changes.",
    content:`<h2>Yes, you can save €100/month</h2><p>Small daily tweaks compound.</p><h2>1. Audit subscriptions</h2><p>Cancel unused ones.</p><h2>2. Cook at home</h2><p>Cut eating out to save €30–50.</p><h2>3. Smart grocery shopping</h2><p>Compare unit prices and pre-plan.</p><h2>4. Automate savings</h2><p>Auto-transfer on payday.</p>` },
  { id:2, slug:"best-expense-tracker-apps-2025", title:"Best Expense Tracker Apps in 2025", date:"March 10, 2025", category:"Budgeting",
    excerpt:"Digital tools to get full control over your personal finances.",
    content:`<h2>Track it to tame it</h2><p>Five solid options for every style.</p><h2>Fintonic</h2><p>Bank sync and insights.</p><h2>Money Manager</h2><p>Manual input, clean charts.</p><h2>Wallet</h2><p>Goals and investments.</p><h2>Google Sheets</h2><p>Full control with templates.</p><h2>Revolut</h2><p>Auto-categorization and limits.</p>` },
  { id:3, slug:"compound-interest-explained-easy", title:"Compound Interest Explained the Easy Way", date:"March 5, 2025", category:"Investing",
    excerpt:"Understand the engine that multiplies your money over time.",
    content:`<h2>Interest on interest</h2><p>The earlier you start, the better.</p><h2>Example</h2><ul><li>Year 1: 1,050</li><li>Year 2: 1,102.5</li></ul><h2>Make it work</h2><p>Reinvest and keep contributions steady.</p>` },
  { id:4, slug:"five-financial-habits-to-improve", title:"5 Financial Habits to Improve Your Money", date:"March 1, 2025", category:"Habits",
    excerpt:"Small daily changes that compound into big results.",
    content:`<h2>Five habits</h2><ol><li>Weekly money review</li><li>Pay yourself first</li><li>Live below your means</li><li>Keep learning</li><li>Set clear goals</li></ol>` },
  { id:5, slug:"50-30-20-budget-method", title:"How to Use the 50/30/20 Budget Method", date:"Feb 25, 2025", category:"Budgeting",
    excerpt:"A simple formula to balance your income wisely.",
    content:`<h2>The split</h2><p>50% needs, 30% wants, 20% saving/investing.</p><h2>Apply it</h2><p>Map your spending to the three buckets.</p>` }
];

export function getPosts(lang) { return lang === 'en' ? postsEn : postsEs; }
export function getPostBySlug(lang, slug) { return getPosts(lang).find(p => p.slug === slug); }
