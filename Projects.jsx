// Projects.jsx — section + grid of ProjectCard
const { useState: useStateP } = React;

function Projects() {
  const [open, setOpen] = useStateP(null);
  return (
    <section id="projects" className="projects" data-screen-label="03 Projects">
      <div className="projects__deco" aria-hidden="true">
        <img src="../../assets/cloud.svg" alt="" />
      </div>
      <div className="section__head">
        <div className="eyebrow">Featured Projects</div>
        <h2>專案實作 <span className="section__head-en">/ Things I've shipped</span></h2>
        <p className="section__lede">
          每個專案點進去都有<b>技術深潛區</b>，看完關閉視窗就能繼續瀏覽。
        </p>
      </div>
      <div className="projects__grid">
        {window.PROJECTS.map((p) =>
        <window.ProjectCard key={p.id} project={p} onOpen={setOpen} />
        )}
      </div>
      {open && <window.ProjectModal project={open} onClose={() => setOpen(null)} />}
    </section>);

}

window.Projects = Projects;