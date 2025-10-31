import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ lang='es', children }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header lang={lang} />
      <main id="main-content">{children}</main>
      <Footer lang={lang} />
    </div>
  );
}
