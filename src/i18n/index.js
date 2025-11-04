// ---- i18n dictionary (tu versión) ----
export const translations = {
  es: {
    brand: "Clear Financial Life",
    nav: { home: "Inicio", blog: "Blog", about: "Sobre mí", contact: "Contacto", privacy: "Privacidad" },
    home: {
      h1: "Aprende a gestionar tu dinero de forma simple",
      subtitle: "Aprende a ahorrar, invertir y vivir con inteligencia financiera",
      cards: [
        { title: "Contenido Práctico", text: "Guías paso a paso, consejos útiles y estrategias reales para mejorar tus finanzas personales." },
        { title: "Enfoque Personal",  text: "Consejos adaptados a la realidad española y a diferentes situaciones económicas." },
        { title: "Educación Financiera", text: "Aprende conceptos clave sin tecnicismos innecesarios. Finanzas para todos." }
      ],
      ctaTitle: "¿Listo para transformar tus finanzas?",
      ctaText: "Únete a miles de personas que ya han mejorado su relación con el dinero gracias a nuestros consejos prácticos y recursos gratuitos.",
      explore: "Explorar artículos"
    },
    blog: { title: "Blog de Finanzas Personales", subtitle: "Artículos prácticos para mejorar tu situación financiera", all:"Todos",
      categories:["Todos","Ahorro","Presupuesto","Inversiones","Hábitos"], readMore:"Leer más", back:"Volver al blog"
    },
    about: {
      title:"Sobre mí",
      p1:"Soy un apasionado del ahorro y la educación financiera. Mi misión es enseñar a personas como tú a mejorar su relación con el dinero y alcanzar la libertad financiera.",
      p2:"Con más de 10 años de experiencia en finanzas personales, he ayudado a miles de personas a salir de deudas, crear fondos de emergencia, ahorrar para sus objetivos e invertir de forma inteligente.",
      p3:"Creo firmemente que la educación financiera debería ser parte de la formación de cualquier persona, y que con los conocimientos adecuados, cualquiera puede mejorar su situación económica."
    },
    contact: {
      title:"Contacto", subtitle:"¿Tienes preguntas o quieres colaborar? Escríbeme y estaré encantado de ayudarte.",
      info:{ email:"contact@clearfinanciallife.com", city:"Barcelona, España" },
      form:{ name:"Nombre", email:"Email", message:"Mensaje", submit:"Enviar mensaje", success:"¡Gracias por tu mensaje! Te responderemos lo antes posible." }
    },
    privacy:{ title:"Política de privacidad", stub:"Texto legal en español..." },
    legal: { nav:"Navegación", legal:"Legal", cookies:"Cookies", rights:"Todos los derechos reservados." }
  },

  en: {
    brand: "Clear Financial Life",
    nav: { home: "Home", blog: "Blog", about: "About", contact: "Contact", privacy: "Privacy" },
    home: {
      h1: "Learn to manage your money the simple way",
      subtitle: "Learn to save, invest, and live with financial intelligence",
      cards: [
        { title: "Practical Content", text: "Step-by-step guides, useful tips and real strategies to improve your personal finances." },
        { title: "Personal Approach", text: "Advice adapted to different income levels and life situations." },
        { title: "Financial Education", text: "Key concepts without unnecessary jargon. Finance for everyone." }
      ],
      ctaTitle: "Ready to transform your finances?",
      ctaText: "Join thousands who improved their relationship with money thanks to our practical tips and free resources.",
      explore: "Explore articles"
    },
    blog: { title:"Personal Finance Blog", subtitle:"Practical articles to improve your finances", all:"All",
      categories:["All","Saving","Budgeting","Investing","Habits"], readMore:"Read more", back:"Back to blog"
    },
    about: {
      title:"About me",
      p1:"I'm passionate about saving and financial education. My mission is to help people like you improve their relationship with money and achieve financial freedom.",
      p2:"With 10+ years of personal finance experience, I've helped thousands get out of debt, build emergency funds, save for goals and start investing wisely.",
      p3:"I believe financial education should be essential in everyone’s life, and with the right knowledge anyone can improve their financial situation."
    },
    contact: {
      title:"Contact", subtitle:"Questions or collaborations? Send me a message — happy to help.",
      info:{ email:"contact@clearfinanciallife.com", city:"Barcelona, Spain" },
      form:{ name:"Name", email:"Email", message:"Message", submit:"Send message", success:"Thanks! We’ll reply as soon as possible." }
    },
    privacy:{ title:"Privacy Policy", stub:"Legal text in English..." },
    legal: { nav:"Navigation", legal:"Legal", cookies:"Cookies", rights:"All rights reserved." }
  }
};

// helpers que ya usa tu App
export const isSupportedLang = (l) => ['es','en'].includes(l);

// compatibilidad: export default también
export default translations;
