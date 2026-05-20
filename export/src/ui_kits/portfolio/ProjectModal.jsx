// ProjectModal.jsx — right-slide fullscreen modal (技術深潛區)
const { useEffect: useEffectM } = React;

function ProjectModal({ project, onClose }) {
  useEffectM(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="pmodal" onClick={onClose}>
      <div className="pmodal__panel" onClick={(e) => e.stopPropagation()}>
        <button className="pmodal__close" onClick={onClose} aria-label="關閉">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <div className="pmodal__scroll">
          <header className="pmodal__head">
            <div className="pmodal__tagline">{project.tagline}</div>
            <h2 className="pmodal__title">{project.name}</h2>
            <div className="pmodal__meta">
              <span><b>角色</b> · {project.role}</span>
              <span><b>期間</b> · {project.period}</span>
            </div>
          </header>

          <div className="pmodal__hero">
            <div className="pmodal__hero-inner">
              <window.ProjectIcon name={project.icon} />
              <div className="pmodal__hero-label">系統架構圖 / Demo GIF · 此處放高質感視覺主圖</div>
            </div>
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
              {project.stack.map(s => (<span key={s} className="tag tag-sky">{s}</span>))}
            </div>
          </section>
        </div>

        <footer className="pmodal__foot">
          <button className="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            查看 GitHub 程式碼
          </button>
          <button className="btn btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
            觀看 Demo 影片
          </button>
        </footer>
      </div>
    </div>
  );
}

window.ProjectModal = ProjectModal;
