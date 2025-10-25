import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { isSupportedLang } from './i18n';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
// 👇 NUEVO: páginas de gracias en 2 idiomas
import ThankYouEs from './pages/ThankYouEs';
import ThankYouEn from './pages/ThankYouEn';

function LangLayout() {
  const { lang } = useParams();
  const safeLang = ['es', 'en'].includes(lang) ? lang : 'es';

  return (
    <Layout lang={safeLang}>
      <Routes>
        <Route index element={<Home lang={safeLang} />} />
        <Route path="blog" element={<Blog lang={safeLang} />} />
        <Route path="blog/:slug" element={<BlogPost lang={safeLang} />} />
        <Route path="sobre-mi" element={<About lang={safeLang} />} />
        {/* Contacto: soporta ES y EN */}
        <Route path="contacto" element={<Contact lang={safeLang} />} />
        <Route path="contact" element={<Contact lang={safeLang} />} />
        <Route path="privacidad" element={<Privacy lang={safeLang} />} />

        {/* 👇 Rutas de gracias para ambos idiomas */}
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
