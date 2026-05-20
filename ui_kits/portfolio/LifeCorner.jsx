// LifeCorner.jsx — polaroid grid with subtle rotation
function LifeCorner() {
  return (
    <section id="life" className="life" data-screen-label="05 Life">
      <div className="life__deco life__deco--bunny" aria-hidden="true">
        <img src="../../assets/bunny.svg" alt="" loading="lazy" />
      </div>
      <div className="life__deco life__deco--cloud" aria-hidden="true">
        <img src="../../assets/cloud.svg" alt="" loading="lazy" />
      </div>

      <div className="section__head">
        <div className="eyebrow">Life Corner</div>
        <h2>程式碼之外，我也熱愛生活 <span className="section__head-en">/ Off-keyboard</span></h2>
      </div>

      <div className="life__grid">
        {window.LIFE.map((p, i) => (
          <div className="polaroid" key={p.title} style={{ transform: `rotate(${p.rot}deg)` }}>
            <div className="polaroid__photo">
              <span className="polaroid__emoji">{p.emoji}</span>
            </div>
            <div className="polaroid__caption">
              <div className="polaroid__title">{p.title}</div>
              <div className="polaroid__body">{p.body}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="life__cta">
        <a href="https://www.instagram.com/starry_4646?igsh=NmJrOGpzMnB0NjI2&utm_source=qr" target="_blank" rel="noopener" className="btn btn-secondary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.4A4 4 0 1 1 12.6 8a4 4 0 0 1 3.4 3.4z"/>
            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
          </svg>
          追蹤 IG，看看兔寶寶日常
        </a>
      </div>
    </section>
  );
}

window.LifeCorner = LifeCorner;
