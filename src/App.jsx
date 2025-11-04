import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';

// ✅ Nuevas páginas separadas por idioma
import PrivacidadES from './pages/es/Privacidad';
import PrivacyEN from './pages/en/Privacy';
import CookiesES from './pages/es/Cookies';
import CookiesEN from './pages/en/Cookies';

// Páginas de gracias
import ThankYouEs from './pages/ThankYouEs';
import ThankYouEn from './pages/ThankYouEn';

function LangLayout() {
  const { lang } = useParams();
  const safeLang = ['es', 'en'].includes(lang) ? lang : 'es';
  const isEn = safeLang === 'en';

  return (
    <Layout lang={safeLang}>
      <Routes>
        <Route index element={<Home lang={safeLang} />} />
        <Route path="blog" element={<Blog lang={safeLang} />} />
        <Route path="blog/:slug" element={<BlogPost lang={safeLang} />} />
        <Route path="sobre-mi" element={<About lang={safeLang} />} />

        {/* Contacto en ambos slugs */}
        <Route path="contacto" element={<Contact lang={safeLang} />} />
        <Route path="contact" element={<Contact lang={safeLang} />} />

        {/* ✅ Privacidad por idioma */}
        <Route path="privacidad" element={<PrivacidadES />} />
        <Route path="privacy" element={<PrivacyEN />} />

        {/* ✅ Cookies (mismo slug en ambos idiomas) */}
        <Route path="cookies" element={isEn ? <CookiesEN /> : <CookiesES />} />

        {/* Gracias por idioma */}
        <Route path="gracias" element={<ThankYouEs />} />
        <Route path="thank-you" element={<ThankYouEn />} />

        <Route path="*" element={<Navigate to={`/${safeLang}/`} replace />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/es/" replace />} />
      <Route path="/:lang/*" element={<LangLayout />} />
      <Route path="*" element={<Navigate to="/es/" replace />} />
    </Routes>
  );
}
