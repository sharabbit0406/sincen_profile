// Lightbox.jsx — click a photo/video to enlarge it. Click anywhere / Esc to close.
const { useEffect: useEffectLB } = React;

function Lightbox({ src, alt, type, onClose }) {
  useEffectLB(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  if (!src) return null;
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lightbox__close" onClick={onClose} aria-label="關閉">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      {type === "video" ? (
        <video
          className="lightbox__video"
          src={src}
          controls
          autoPlay
          playsInline
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <img className="lightbox__img" src={src} alt={alt || ""} onClick={(e) => e.stopPropagation()} />
      )}
    </div>
  );
}

window.Lightbox = Lightbox;
