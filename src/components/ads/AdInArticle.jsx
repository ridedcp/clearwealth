import { useEffect } from "react";

export default function AdInArticle({ slot, className }) {
  useEffect(() => {
    if (!slot || !window.adsbygoogle) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* noop */
    }
  }, [slot]);

  return (
    <ins
      className={`adsbygoogle ${className || ""}`}
      style={{ display: "block", textAlign: "center" }}
      data-ad-client="ca-pub-4287498539634064"
      data-ad-slot={slot}
      data-ad-format="fluid"
      data-ad-layout="in-article"
    />
  );
}
