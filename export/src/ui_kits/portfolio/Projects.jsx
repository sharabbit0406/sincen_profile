// Projects.jsx — carousel of ProjectCards (3 visible, wrap-around)
const { useState: useStateP } = React;

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

function Projects() {
  const [open, setOpen] = useStateP(null);
  const [center, setCenter] = useStateP(0);
  const [tickKey, setTickKey] = useStateP(0); // forces fade-in on slide change

  const projects = window.PROJECTS;
  const N = projects.length;

  const wrap = (i) => ((i % N) + N) % N;
  const visible = [wrap(center - 1), center, wrap(center + 1)];

  const slideTo = (i) => {
    setCenter(wrap(i));
    setTickKey((k) => k + 1);
  };
  const goPrev = () => slideTo(center - 1);
  const goNext = () => slideTo(center + 1);

  return (
    <section id="projects" className="projects" data-screen-label="03 Projects">
      <div className="projects__deco" aria-hidden="true">
        <img src="../../assets/cloud.svg" alt="" />
      </div>
      <div className="section__head">
        <div className="eyebrow">Featured Projects</div>
        <h2>精選專案 <span className="section__head-en">/ Things I've shipped</span></h2>
        <p className="section__lede">
          每個專案點進去都有<b>技術深潛區</b>，看完關閉視窗就能繼續瀏覽。
        </p>
      </div>

      <div className="projects__carousel">
        <CarouselArrow dir="prev" onClick={goPrev} />
        <div className="projects__track" key={tickKey}>
          {visible.map((idx, slot) => (
            <div
              key={projects[idx].id}
              className={`projects__slot projects__slot--${slot === 1 ? "center" : "side"}`}
            >
              <window.ProjectCard project={projects[idx]} onOpen={setOpen} />
            </div>
          ))}
        </div>
        <CarouselArrow dir="next" onClick={goNext} />
      </div>

      <div className="projects__dots" role="tablist" aria-label="專案頁籤">
        {projects.map((p, i) => (
          <button
            key={p.id}
            className={`carousel__dot ${i === center ? "is-active" : ""}`}
            onClick={() => slideTo(i)}
            role="tab"
            aria-selected={i === center}
            aria-label={`第 ${i + 1} 個專案：${p.name}`}
            type="button"
          />
        ))}
      </div>

      {open && <window.ProjectModal project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

window.Projects = Projects;
