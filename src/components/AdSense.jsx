import { useEffect, useMemo } from "react";

const CLIENT = import.meta.env.VITE_ADSENSE_CLIENT; // ej: ca-pub-XXXX
const hasClient = typeof CLIENT === "string" && CLIENT.length > 0;

// Por si en algún build falta el script del index.html, lo inyectamos una vez.
function ensureAdScriptOnce() {
  if (typeof window === "undefined") return;
  const id = "adsbygoogle-lib";
  if (document.getElementById(id)) return;

  const s = document.createElement("script");
  s.id = id;
  s.async = true;
  s.crossOrigin = "anonymous";
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(
    CLIENT || ""
  )}`;
  document.head.appendChild(s);
}

/** Llama a (adsbygoogle = window.adsbygoogle || []).push({}) */
function useFillAd(on = true) {
  useEffect(() => {
    if (!on || typeof window === "undefined") return;
    try {
      // Garantiza que el script existe
      ensureAdScriptOnce();
      // Rellena el bloque (si no hay inventario no rompe layout)
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (_) {
      // silencioso: AdSense a veces lanza warning si aún no cargó
    }
  }, [on]);
}

/** Bloque display/responsive genérico (cabecera, footer…) */
export function AdSlot({
  slot,
  className = "",
  style,
  format = "auto",
  fullWidthResponsive = true,
  collapse = false, // si true y no hay inventario, minimiza el alto
}) {
  const enabled = hasClient && !!slot;

  useFillAd(enabled);

  // key distinto por slot + url = fuerza repintado al cambiar de ruta
  const key = useMemo(() => {
    const path = typeof window !== "undefined" ? window.location.pathname : "";
    return `${slot || "noslot"}::${path}`;
  }, [slot]);

  if (!enabled) return null;

  return (
    <ins
      key={key}
      className={`adsbygoogle ${className}`}
      style={{
        display: "block",
        minHeight: collapse ? 0 : 250,
        ...style,
      }}
      data-ad-client={CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
    />
  );
}

/** Bloque “In-article” oficial de AdSense */
export function AdInArticle({
  slot,
  className = "",
  collapse = true,
}) {
  const enabled = hasClient && !!slot;
  useFillAd(enabled);

  const key = useMemo(() => {
    const path = typeof window !== "undefined" ? window.location.pathname : "";
    return `in-article::${slot || "noslot"}::${path}`;
  }, [slot]);

  if (!enabled) return null;

  return (
    <ins
      key={key}
      className={`adsbygoogle ${className}`}
      style={{ display: "block", minHeight: collapse ? 0 : 120 }}
      data-ad-client={CLIENT}
      data-ad-slot={slot}
      data-ad-format="fluid"
      data-ad-layout="in-article"
    />
  );
}
