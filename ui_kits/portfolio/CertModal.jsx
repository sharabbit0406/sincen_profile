// CertModal.jsx — right-slide 2/3 modal for a certificate's detail page.
// Includes a zoomable cert image, prep time, exam reflection, and external links.
const { useEffect: useEffectCM, useRef: useRefCM, useState: useStateCM } = React;

function CertModal({ cert, onClose, onPrev, onNext, index, total }) {
  const scrollRef = useRefCM(null);
  const [zoom, setZoom] = useStateCM(null);

  useEffectCM(() => {
    const onKey = (e) => {
      if (e.key === "Escape") { if (zoom) setZoom(null); else onClose(); }
      else if (e.key === "ArrowLeft" && onPrev && !zoom) onPrev();
      else if (e.key === "ArrowRight" && onNext && !zoom) onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose, onPrev, onNext, zoom]);

  useEffectCM(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    setZoom(null);
  }, [cert && cert.name]);

  if (!cert) return null;

  const pad = (n) => String(n).padStart(2, "0");
  const counter = typeof index === "number" && typeof total === "number"
    ? `${pad(index + 1)} / ${pad(total)}`
    : null;

  const accent = (index % 2 === 1) ? "pink" : "sky";

  return (
    <React.Fragment>
      <div className="pmodal cmodal" onClick={onClose} role="dialog" aria-modal="true" aria-label={cert.name}>
        <div className="pmodal__panel cmodal__panel" onClick={(e) => e.stopPropagation()}>
          <div className="pmodal__toolbar">
            {onPrev && (
              <button className="pmodal__nav pmodal__nav--prev" onClick={onPrev} aria-label="上一張證書 (←)" title="上一張證書 (←)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
            )}
            {onNext && (
              <button className="pmodal__nav pmodal__nav--next" onClick={onNext} aria-label="下一張證書 (→)" title="下一張證書 (→)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            )}
            <button className="pmodal__close" onClick={onClose} aria-label="關閉 (Esc)" title="關閉 (Esc)">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <div className="pmodal__scroll" ref={scrollRef}>
            <header className="pmodal__head">
              <div className="pmodal__tagrow">
                <span className="pmodal__tagline">{cert.tagline}</span>
                {counter && <span className="pmodal__counter">{counter}</span>}
              </div>
              <h2 className="pmodal__title">{cert.name}</h2>
              <div className="pmodal__meta">
                <span><b>核發</b> · {cert.issuer}</span>
                <span><b>應考</b> · {cert.examDate}</span>
                <span><b>準備時長</b> · {cert.prepTime}</span>
              </div>
            </header>

            <div
              className={`cmodal__cert cmodal__cert--${accent} ${cert.isLandscape ? "cmodal__cert--landscape" : ""}`}
              onClick={() => setZoom(cert.image)}
              role="button"
              tabIndex={0}
              title="點擊放大查看"
            >
              <img src={cert.image} alt={cert.name} />
              <div className="cmodal__cert-overlay">
                <span className="cmodal__cert-zoom">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/>
                  </svg>
                  點擊放大檢視證書
                </span>
                <span className="cmodal__cert-score">
                  <b>{cert.score}</b><em>分</em>
                </span>
              </div>
            </div>

            <section className="pmodal__section">
              <h4 className="pmodal__h4">📜 認證簡介</h4>
              <p>{cert.summary}</p>
            </section>

            <section className="pmodal__section">
              <h4 className="pmodal__h4"> 考試心得</h4>
              <ul className="pmodal__list">
                {cert.reflection.map(r => (
                  <li key={r.title}>
                    <b>{r.title}：</b>{r.body}
                  </li>
                ))}
              </ul>
            </section>

            {cert.extras && cert.extras.length > 0 && (
              <section className="pmodal__section">
                <h4 className="pmodal__h4">📊 成績佐證</h4>
                <div className="cmodal__extras">
                  {cert.extras.map((ex, i) => (
                    <figure key={i} className={`cmodal__extra${ex.wide ? " cmodal__extra--wide" : ""}`} onClick={() => setZoom(ex.image)} role="button" tabIndex={0} title="點擊放大檢視">
                      <div className="cmodal__extra-img">
                        <img src={ex.image} alt={ex.caption} loading="lazy" />
                        <span className="cmodal__extra-zoom" aria-hidden="true">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/></svg>
                        </span>
                      </div>
                      <figcaption className="cmodal__extra-caption">
                        <b>{ex.caption}</b>
                        {ex.body && <span>{ex.body}</span>}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}

            <section className="pmodal__section">
              <h4 className="pmodal__h4">🔗 相關連結</h4>
              <div className="cmodal__links">
                {cert.links.map(l => (
                  <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="cmodal__link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                    </svg>
                    <span>{l.label}</span>
                    <svg className="cmodal__link-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </a>
                ))}
              </div>
            </section>
          </div>

          <footer className="pmodal__foot">
            <button className="btn btn-primary" onClick={() => setZoom(cert.image)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/>
              </svg>
              放大查看證書
            </button>
            <button className="btn btn-secondary" onClick={onClose}>
              關閉
            </button>
          </footer>
        </div>
      </div>

      {zoom && <window.Lightbox src={zoom} alt={cert.name} onClose={() => setZoom(null)} />}
    </React.Fragment>
  );
}

window.CertModal = CertModal;
