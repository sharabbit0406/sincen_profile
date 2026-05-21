// Skills.jsx — three cert cards opening a 2/3 detail modal + tech-stack tag wall.
const { useState: useStateS } = React;

function Skills({ highlightedCert }) {
  const [openCert, setOpenCert] = useStateS(null);

  const certs = window.CERTS;

  return (
    <section id="skills" className="skills" data-screen-label="04 Skills">
      <div className="section__head">
        <div className="eyebrow">Skills &amp; Certifications</div>
        <h2>技術證照 <span className="section__head-en">/ The proof</span></h2>
        <div className="section__stat-group">
          <span className="section__stat section__stat--pink">3 張 AI 證照</span>
          <span className="section__stat-pace">每張兩至三週內自學高分取證</span>
        </div>
        <p className="section__lede">
            點擊卡片查看準備歷程、考試心得與相關連結。
        </p>
      </div>

      <div className="skills__books">
        {certs.map((c, i) => (
          <article
            className={`certbook certbook--${i % 2 ? "pink" : "sky"} ${highlightedCert === i ? "is-highlighted" : ""}`}
            key={c.name}
            onClick={() => setOpenCert({ ...c, _idx: i })}
            tabIndex={0}
            role="button"
            aria-label={`查看 ${c.name} 詳細資訊`}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenCert({ ...c, _idx: i }); } }}
          >
            <div className={`certbook__slot${c.isLandscape ? " certbook__slot--landscape" : ""}`}>
              <img
                src={c.image}
                alt={c.name}
                className={`certbook__img ${c.isLandscape ? "certbook__img--contain" : ""}`}
                loading="lazy"
              />
              <span className="certbook__zoom" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/>
                </svg>
              </span>
            </div>
            <div className="certbook__info">
              <div className="certbook__info-left">
                <div className="certbook__name">{c.name}</div>
                <div className="certbook__issuer">{c.issuer}</div>
              </div>
              <div className="certbook__score-big">
                {c.score}<span className="certbook__score-lbl">分</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="skills__stack">
        <h3 className="skills__sub">技術棧 · Tech Stack</h3>
        <div className="skills__tags">
          {window.SKILLS.map(s => (
            <span className="skilltag" key={s.name}>{s.name}</span>
          ))}
        </div>
      </div>

      {openCert && (() => {
        const idx = openCert._idx;
        const goPrev = () => setOpenCert({ ...certs[(idx - 1 + certs.length) % certs.length], _idx: (idx - 1 + certs.length) % certs.length });
        const goNext = () => setOpenCert({ ...certs[(idx + 1) % certs.length], _idx: (idx + 1) % certs.length });
        return (
          <window.CertModal
            cert={openCert}
            onClose={() => setOpenCert(null)}
            onPrev={goPrev}
            onNext={goNext}
            index={idx}
            total={certs.length}
          />
        );
      })()}
    </section>
  );
}

window.Skills = Skills;
