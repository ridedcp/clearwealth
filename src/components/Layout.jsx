// src/components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";

// ✅ Un único archivo fuente: components/ads/AdSense.jsx
import { AdSlot /*, AdInArticle */ } from "./ads/AdSense";

export default function Layout({ lang = "es", children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header lang={lang} />

      <main id="main-content">
        {/* Cabecera de anuncios (display) en TODAS las páginas */}
        {import.meta.env.VITE_ADSENSE_SLOT_HEADER && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
            <AdSlot
              slot={import.meta.env.VITE_ADSENSE_SLOT_HEADER}
              style={{ display: "block" }}
              format="auto"
              fullWidthResponsive
              className="my-4"
            />
          </div>
        )}

        {children}

        {/* In-article global (normalmente solo en BlogPost; si lo quieres global, descomenta) */}
        {/*
        {import.meta.env.VITE_ADSENSE_SLOT_INARTICLE && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
            <AdInArticle slot={import.meta.env.VITE_ADSENSE_SLOT_INARTICLE} />
          </div>
        )}
        */}
      </main>

      <Footer lang={lang} />
    </div>
  );
}
