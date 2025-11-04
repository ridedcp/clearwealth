import { useEffect, useRef } from "react";

export default function AdSlot({
  slot,
  className,
  style,
  format = "auto",
  responsive = "true",
  fullWidth = false,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!slot || !window.adsbygoogle) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* noop */
    }
  }, [slot]);

  // opcional: limitar ancho para layouts fluidos
  const wrapperStyle = fullWidth ? {} : { maxWidth: 970, margin: "0 auto" };

  return (
    <div className={className} style={wrapperStyle}>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={style || { display: "block" }}
        data-ad-client="ca-pub-4287498539634064"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
