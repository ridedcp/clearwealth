export const postsEs = [
  { id:1, slug:"como-ahorrar-100-euros-al-mes-sin-esfuerzo", title:"Cómo ahorrar 100 euros al mes sin esfuerzo", date:"15 de marzo de 2025", category:"Ahorro", excerpt:"Descubre estrategias prácticas...", content:`<h2>Contenido ES...</h2>` }
];
export const postsEn = [
  { id:1, slug:"how-to-save-100-euros-a-month", title:"How to Save 100 Euros per Month Effortlessly", date:"March 15, 2025", category:"Saving", excerpt:"Practical strategies...", content:`<h2>English content...</h2>` }
];
export function getPosts(lang) { return lang === 'en' ? postsEn : postsEs; }
export function getPostBySlug(lang, slug) { return getPosts(lang).find(p => p.slug === slug); }
