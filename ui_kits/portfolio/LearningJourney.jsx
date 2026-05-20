// LearningJourney.jsx — a horizontal timeline-ish grid of self-study / course certs.
// Click any card → opens the same Lightbox as the main cert modal.
const { useState: useStateLJ } = React;

function LearningJourney() {
  const [lightbox, setLightbox] = useStateLJ(null);
  const items = window.LEARNING;

  return (
    <section id="learning" className="learning" data-screen-label="06 Learning Journey">
      <div className="learning__deco learning__deco--sparkle" aria-hidden="true">
        <img src="../../assets/sparkle.svg" alt="" loading="lazy" />
      </div>
      <div className="learning__deco learning__deco--cloud" aria-hidden="true">
        <img src="../../assets/cloud.svg" alt="" loading="lazy" />
      </div>

      <div className="section__head">
        <div className="eyebrow">Learning Journey</div>
        <h2>學習歷程 <span className="section__head-en">/ Self-taught trail</span></h2>
        <p className="section__lede">
          一路上累積的線上課程、工作坊與結業證書 — 從心理學基底走到 AI 工程的軌跡。
        </p>
        <div className="section__stat-group">
          <span className="section__stat">29 張 AI 課程完訓證書</span>
          <div className="section__stat-breakdown">
            <span>TibaMe · 3 個月內 6 張（含 322 小時結訓）</span>
            <span>Google · 1 個月內 6 張</span>
            <span>Microsoft · 1 個月內 16 張</span>
            <span>經濟部商業發展署 · 1 個月 1 張（18 小時）</span>
          </div>
        </div>
      </div>

      <div className="learning__grid">
        {items.map((it, i) => (
          <article
            className={`lj-card lj-card--${i % 2 ? "pink" : "sky"}`}
            key={it.name}
            onClick={() => setLightbox({ src: it.image, alt: it.name })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setLightbox({ src: it.image, alt: it.name }); } }}
            aria-label={`放大查看 ${it.name}`}
          >
            <div className="lj-card__thumb">
              <img src={it.image} alt={it.name} loading="lazy" />
              <span className="lj-card__zoom" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/>
                </svg>
              </span>
            </div>
            <div className="lj-card__body">
              <div className="lj-card__row">
                <span className="lj-card__date">{it.date}</span>
              </div>
              <h3 className="lj-card__name">{it.name}</h3>
              <div className="lj-card__issuer">{it.issuer}</div>
              <p className="lj-card__note">{it.note}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="learning__hint">
        ✨ 穩扎穩打 一步一腳印學習
      </p>

      {lightbox && <window.Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </section>
  );
}

window.LearningJourney = LearningJourney;
