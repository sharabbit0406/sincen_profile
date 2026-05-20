// ProjectModal.jsx — right-slide fullscreen modal (技術深潛區)
const { useEffect: useEffectM, useRef: useRefM } = React;

function ProjectModal({ project, onClose, onPrev, onNext, index, total }) {
  const scrollRef = useRefM(null);

  useEffectM(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && onPrev) onPrev();
      else if (e.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose, onPrev, onNext]);

  // Reset scroll to top whenever the displayed project changes.
  useEffectM(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [project && project.id]);

  if (!project) return null;

  const pad = (n) => String(n).padStart(2, "0");
  const counter = typeof index === "number" && typeof total === "number"
    ? `${pad(index + 1)} / ${pad(total)}`
    : null;

  return (
    <div className="pmodal" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.name}>
      <div className="pmodal__panel" onClick={(e) => e.stopPropagation()}>
        <div className="pmodal__toolbar">
          {onPrev && (
            <button className="pmodal__nav pmodal__nav--prev" onClick={onPrev} aria-label="上一個專案 (←)" title="上一個專案 (←)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
          )}
          {onNext && (
            <button className="pmodal__nav pmodal__nav--next" onClick={onNext} aria-label="下一個專案 (→)" title="下一個專案 (→)">
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
              <span className="pmodal__tagline">{project.tagline}</span>
              {counter && <span className="pmodal__counter">{counter}</span>}
            </div>
            <h2 className="pmodal__title">{project.name}</h2>
            <div className="pmodal__meta">
              <span><b>角色</b> · {project.role}</span>
              <span><b>期間</b> · {project.period}</span>
            </div>
          </header>

          <div className={`pmodal__hero ${project.image ? "pmodal__hero--img" : ""}`}>
            {project.image ? (
              <img src={project.image} alt={project.name} className="pmodal__hero-img" />
            ) : (
              <div className="pmodal__hero-inner">
                <window.ProjectIcon name={project.icon} />
                <div className="pmodal__hero-label">系統架構圖 / Demo GIF · 此處放高質感視覺主圖</div>
              </div>
            )}
          </div>

          <section className="pmodal__section">
            <h4 className="pmodal__h4">🎯 痛點與目標</h4>
            <p>{project.problem}</p>
          </section>

          <section className="pmodal__section">
            <h4 className="pmodal__h4">⚙️ 核心技術與解決方案</h4>
            <ul className="pmodal__list">
              {project.solutions.map(s => (
                <li key={s.title}>
                  <b>{s.title}：</b>{s.body}
                </li>
              ))}
            </ul>
          </section>

          <section className="pmodal__section">
            <h4 className="pmodal__h4">✨ 實作成效與亮點</h4>
            <ul className="pmodal__list pmodal__list--clean">
              {project.impact.map((i, idx) => (<li key={idx}>{i}</li>))}
            </ul>
          </section>

          <section className="pmodal__section pmodal__stack">
            <h4 className="pmodal__h4">技術堆疊</h4>
            <div className="pmodal__chips">
              {project.stack.map(s => (<span key={s} className={project.accent === "pink" ? "tag" : "tag tag-sky"}>{s}</span>))}
            </div>
          </section>
        </div>

        {project.links && project.links.length > 0 && (
          <footer className="pmodal__foot">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${i === 0 ? "btn-primary" : "btn-secondary"}`}
              >
                {link.icon === "github" && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                )}
                {link.icon === "video" && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                )}
                {link.icon === "link" && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                )}
                {link.label}
              </a>
            ))}
          </footer>
        )}
      </div>
    </div>
  );
}

window.ProjectModal = ProjectModal;
