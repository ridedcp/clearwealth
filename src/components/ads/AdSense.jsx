import { useEffect, useMemo } from "react";

const CLIENT = import.meta.env.VITE_ADSENSE_CLIENT;
const hasClient = typeof CLIENT === "string" && CLIENT.length > 0;

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

function useFillAd(on = true) {
  useEffect(() => {
    if (!on || typeof window === "undefined") return;
    try {
      ensureAdScriptOnce();
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, [on]);
}

export function AdSlot({
  slot,
  className = "",
  style,
  format = "auto",
  fullWidthResponsive = true,
  collapse = false,
}) {
  const enabled = hasClient && !!slot;
  useFillAd(enabled);

  const key = useMemo(() => {
    const path =
      typeof window !== "undefined" ? window.location.pathname : "";
    return `${slot || "noslot"}::${path}`;
  }, [slot]);

  if (!enabled) return null;

  return (
    <ins
      key={key}
      className={`adsbygoogle ${className}`}
      style={{ display: "block", minHeight: collapse ? 0 : 250, ...style }}
      data-ad-client={CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
    />
  );
}

export function AdInArticle({ slot, className = "", collapse = true }) {
  const enabled = hasClient && !!slot;
  useFillAd(enabled);

  const key = useMemo(() => {
    const path =
      typeof window !== "undefined" ? window.location.pathname : "";
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
