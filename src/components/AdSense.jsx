import { useEffect } from "react";

/**
 * Empuja el render de AdSense cuando el <ins> está en el árbol.
 * No pinta nada en desarrollo o si faltan credenciales.
 */
function useAdsensePush(shouldRun) {
  useEffect(() => {
    if (!shouldRun) return;
    try {
      // eslint-disable-next-line no-undef
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Silencio: AdSense aún no cargado o bloqueado por el navegador.
    }
  }, [shouldRun]);
}

/**
 * Display responsive (auto). Úsalo para cabeceras, laterales, final de artículo, etc.
 *
 * Props:
 * - slot (requerido): tu data-ad-slot
 * - client (opcional): por defecto VITE_ADSENSE_CLIENT
 * - style: CSS inline (por defecto display:block)
 * - format: "auto" (default) | "rectangle" | ...
 * - responsive: "true" | "false"
 * - className adicional
 */
export function AdSlot({
  slot,
  client = import.meta.env.VITE_ADSENSE_CLIENT,
  style,
  format = "auto",
  responsive = "true",
  className = "",
}) {
  const isProd = import.meta.env.PROD;
  const canRender = Boolean(isProd && client && slot);

  useAdsensePush(canRender);

  if (!canRender) return null;

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style || { display: "block" }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    />
  );
}

/**
 * In-article (fluid). Útil entre secciones dentro de un post.
 *
 * Props:
 * - slot (requerido)
 * - client (opcional): por defecto VITE_ADSENSE_CLIENT
 * - className (opcional)
 */
export function AdInArticle({
  slot,
  client = import.meta.env.VITE_ADSENSE_CLIENT,
  className = "",
}) {
  const isProd = import.meta.env.PROD;
  const canRender = Boolean(isProd && client && slot);

  useAdsensePush(canRender);

  if (!canRender) return null;

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: "block", textAlign: "center" }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client={client}
      data-ad-slot={slot}
    />
  );
}
