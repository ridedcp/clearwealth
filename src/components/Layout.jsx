import Header from "./Header";
import Footer from "./Footer";

// 👇 RUTAS CORRECTAS (mismo directorio 'components', subcarpeta 'ads')
import AdSlot from "./ads/AdSlot";
import AdInArticle from "./ads/AdInArticle";

export default function Layout({ lang = "es", children }) {
  // páginas donde NO queremos mostrar anuncios
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const noAds =
    pathname.endsWith("/gracias") ||
    pathname.endsWith("/thank-you") ||
    pathname.endsWith("/privacidad") ||
    pathname.endsWith("/privacy");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header lang={lang} />

      <main id="main-content">
        {/* Cabecera de anuncios (display) */}
        {!noAds && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
            <AdSlot
              slot={import.meta.env.VITE_ADSENSE_SLOT_HEADER}
              style={{ display: "block" }}
              format="auto"
              responsive="true"
              className="my-4"
            />
          </div>
        )}

        {children}

        {/* In-article: si quieres que aparezca globalmente justo antes del footer,
           deja esto; si NO lo quieres global, elimínalo y ya lo ponemos solo en BlogPost */}
        {/* {!noAds && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
            <AdInArticle slot={import.meta.env.VITE_ADSENSE_SLOT_INARTICLE} />
          </div>
        )} */}
      </main>

      {/* Footer con display */}
      <Footer lang={lang} />
    </div>
  );
}
