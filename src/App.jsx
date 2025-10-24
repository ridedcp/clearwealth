import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { isSupportedLang } from './i18n';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

function LangLayout() {
  const { lang } = useParams();
  const safeLang = isSupportedLang(lang) ? lang : 'es';
  return (
    <>
      <Header lang={safeLang} />
      <Routes>
        <Route index element={<Home lang={safeLang} />} />
        <Route path="blog" element={<Blog lang={safeLang} />} />
        <Route path="blog/:slug" element={<BlogPost lang={safeLang} />} />
        <Route path="sobre-mi" element={<About lang={safeLang} />} />
        <Route path="contacto" element={<Contact lang={safeLang} />} />
        <Route path="privacidad" element={<Privacy lang={safeLang} />} />
        <Route path="*" element={<Navigate to={`/${safeLang}/`} replace />} />
      </Routes>
    </>
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
