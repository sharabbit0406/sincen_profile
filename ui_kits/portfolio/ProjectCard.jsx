// ProjectCard.jsx — one card per project; click opens modal
function ProjectIcon({ name }) {
  const common = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === "heart") return <svg {...common}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
  if (name === "network") return <svg {...common}><circle cx="12" cy="12" r="3"/><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M9.4 9.4L7.5 7.5M14.6 9.4L16.5 7.5M9.4 14.6L7.5 16.5M14.6 14.6L16.5 16.5"/></svg>;
  if (name === "zap") return <svg {...common}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
  if (name === "book") return <svg {...common}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M9 6h7"/><path d="M9 10h5"/></svg>;
  if (name === "search") return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="9"/></svg>;
}

function ProjectCard({ project, onOpen, index }) {
  return (
    <article
      className={`pcard pcard--${project.accent}`}
      onClick={() => onOpen(project)}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") onOpen(project); }}
    >
      <div className={`pcard__thumb ${project.image ? "pcard__thumb--img" : ""}`}>
        {project.image && (
          <img className="pcard__photo" src={project.image} alt="" loading="lazy" />
        )}
        {!project.image && (
          <div className="pcard__icon"><ProjectIcon name={project.icon} /></div>
        )}
        <div className="pcard__period">{project.period}</div>
      </div>
      <div className="pcard__body">
        <div className="pcard__tagline">{project.tagline}</div>
        <h3 className="pcard__title">{project.name}</h3>
        <p className="pcard__blurb">{project.blurb}</p>
        <div className="pcard__stack">
          {project.stack.map(s => (
            <span key={s} className={project.accent === "pink" ? "tag" : "tag tag-sky"}>{s}</span>
          ))}
        </div>
        <div className="pcard__cta">
          技術深潛 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
        {typeof index === "number" && (
          <div className="pcard__index" aria-hidden="true">{index + 1}</div>
        )}
      </div>
    </article>
  );
}

window.ProjectCard = ProjectCard;
window.ProjectIcon = ProjectIcon;
