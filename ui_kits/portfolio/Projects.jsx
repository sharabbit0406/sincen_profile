// Projects.jsx — carousel of ProjectCards (3 visible, wrap-around) + autoplay + keyboard
const { useState: useStateP, useEffect: useEffectP, useRef: useRefP } = React;

const AUTOPLAY_MS = 5000;
const PAUSE_AFTER_INTERACTION_MS = 9000;

function CarouselArrow({ dir, onClick }) {
  const path = dir === "next" ? "M9 18l6-6-6-6" : "M15 18l-6-6 6-6";
  return (
    <button
      className={`carousel__nav carousel__nav--${dir}`}
      onClick={onClick}
      aria-label={dir === "next" ? "下一個專案" : "上一個專案"}
      type="button"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={path} />
      </svg>
    </button>
  );
}

function Projects({ onAboutOpen }) {
  const [open, setOpen] = useStateP(null);
  const [center, setCenter] = useStateP(0);
  const [tickKey, setTickKey] = useStateP(0);
  const [paused, setPaused] = useStateP(false);
  const lastInteractRef = useRefP(0);

  const projects = window.PROJECTS;
  const N = projects.length;

  const wrap = (i) => ((i % N) + N) % N;
  const visible = [wrap(center - 1), center, wrap(center + 1)];

  const slideTo = (i, fromUser = false) => {
    setCenter(wrap(i));
    setTickKey((k) => k + 1);
    if (fromUser) lastInteractRef.current = Date.now();
  };
  const goPrev = (fromUser = true) => slideTo(center - 1, fromUser);
  const goNext = (fromUser = true) => slideTo(center + 1, fromUser);

  // Autoplay — paused on hover/focus inside the carousel, or briefly after user clicks
  useEffectP(() => {
    if (paused || open) return;
    const id = setInterval(() => {
      if (Date.now() - lastInteractRef.current < PAUSE_AFTER_INTERACTION_MS) return;
      setCenter((c) => wrap(c + 1));
      setTickKey((k) => k + 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, open, N]);

  // Keyboard ← → on the carousel section (when modal closed)
  useEffectP(() => {
    if (open) return;
    const onKey = (e) => {
      if (e.target.closest("input, textarea, [contenteditable]")) return;
      if (e.key === "ArrowLeft") { goPrev(true); }
      else if (e.key === "ArrowRight") { goNext(true); }
    };
    const sec = document.getElementById("projects");
    sec && sec.addEventListener("keydown", onKey);
    return () => sec && sec.removeEventListener("keydown", onKey);
  }, [center, open]);

  return (
    <section
      id="projects"
      className="projects"
      data-screen-label="03 Projects"
      tabIndex={-1}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="projects__deco" aria-hidden="true">
        <img src="../../assets/cloud.svg" alt="" loading="lazy" />
      </div>

      {onAboutOpen && (
        <div className="projects__about-hint">
          <button type="button" className="projects__about-btn" onClick={onAboutOpen}>
            <svg className="projects__about-btn-star" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            點選可更詳細認識我的特質學經歷喔～
            <svg className="projects__about-btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      )}

      <div className="section__head">
        <div className="eyebrow">Featured Projects</div>
        <h2>專案實作 <span className="section__head-en">/ Things I've shipped</span></h2>
        <div className="section__stat-group">
          <span className="section__stat">5 項 AI 實作專案</span>
          <span className="section__stat-pace">平均每月一項從零到落地</span>
        </div>
        <p className="section__lede">
          每個專案點進去都有<b>技術深潛區</b>，看完關閉視窗就能繼續瀏覽。
        </p>
      </div>

      {/* Arrows live outside the track to avoid click issues during key-remount animation */}
      <div className="projects__carousel-wrap">
        <CarouselArrow dir="prev" onClick={() => goPrev(true)} />
        <div className="projects__carousel">
          <div className="projects__track" key={tickKey}>
            {visible.map((idx, slot) => (
              <div
                key={projects[idx].id}
                className={`projects__slot projects__slot--${slot === 1 ? "center" : "side"}`}
              >
                <window.ProjectCard project={projects[idx]} onOpen={setOpen} index={idx} />
              </div>
            ))}
          </div>
        </div>
        <CarouselArrow dir="next" onClick={() => goNext(true)} />
      </div>

      <div className="projects__dots" role="tablist" aria-label="專案頁籤">
        {projects.map((p, i) => (
          <button
            key={p.id}
            className={`carousel__dot ${i === center ? "is-active" : ""}`}
            onClick={() => slideTo(i, true)}
            role="tab"
            aria-selected={i === center}
            aria-label={`第 ${i + 1} 個專案：${p.name}`}
            type="button"
          >
            <span className="carousel__dot-pip" aria-hidden="true" />
          </button>
        ))}
      </div>

      {open && (() => {
        const openIdx = projects.findIndex(p => p.id === open.id);
        const goModalPrev = () => setOpen(projects[wrap(openIdx - 1)]);
        const goModalNext = () => setOpen(projects[wrap(openIdx + 1)]);
        return (
          <window.ProjectModal
            project={open}
            onClose={() => setOpen(null)}
            onPrev={goModalPrev}
            onNext={goModalNext}
            index={openIdx}
            total={N}
          />
        );
      })()}
    </section>
  );
}

window.Projects = Projects;
