import Header from "./Header";
import Footer from "./Footer";
import { AdSlot } from "../components/ads/AdSense";

export default function Layout({ lang = "es", children }) {
  const path =
    typeof window !== "undefined" ? window.location.pathname : "";

  // evita anuncios en páginas sensibles o sin sentido para monetizar
  const showHeaderAd =
    !/\/(gracias|thank-you|privacidad|privacy)\/?$/.test(path);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header lang={lang} />

      {/* Bloque de anuncio global justo debajo del header */}
      {showHeaderAd && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3">
          <AdSlot
            slot={import.meta.env.VITE_ADSENSE_SLOT_HEADER}
            style={{ display: "block", marginBottom: 12 }}
          />
        </div>
      )}

      <main id="main-content">{children}</main>
      <Footer lang={lang} />
    </div>
  );
}
