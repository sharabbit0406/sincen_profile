// Hero.jsx — left text block, right portrait
function Hero({ onCTA, onContact, onCertClick }) {
  return (
    <section id="hero" className="hero" data-screen-label="01 Hero">
      <div className="hero__decor hero__decor--cloud" aria-hidden="true">
        <img src="../../assets/cloud.svg" alt="" loading="lazy" />
      </div>
      <div className="hero__decor hero__decor--sparkle" aria-hidden="true">
        <img src="../../assets/sparkle.svg" alt="" loading="lazy" />
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__name">
            黃心岑 <span className="hero__name-en">Sin-Cen Huang</span>
          </h1>
          <p className="hero__title">
            <span className="hero__title-strong">AI 應用工程師</span>
            <span className="hero__title-sep">｜</span>
            <span className="hero__title-strong hero__title-pink">數位心理建築師</span>
          </p>
          <p className="hero__pitch">
            擁有 <b>心理學背景+教育領域</b>的 AI 工程師。<br />
            結合「心理洞察」與「AI 應用開發」，<br />
            將人類需求轉化為可落地的 <b>LLM 系統設計</b>，<br />
            專注於 <b>RAG 架構</b>、<b>AI Agent ...</b>
            <b></b>。
          </p>
          <p className="hero__pitch hero__pitch--soft">
            我相信，最好的科技不只要聰明地解決問題，<br />
            <span className="hi">更要能真正理解並承載使用者的心</span>。
          </p>
          <div className="hero__certs">
            {(window.CERTS || []).map((c, i) =>
            <button
              key={c.name}
              type="button"
              className="hero__cert"
              onClick={() => onCertClick?.(i)}
              title={`查看 ${c.name} 證書`}>
              
                {c.name}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>
              </button>
            )}
          </div>
          <div className="hero__actions">
            <button className="btn btn-primary" onClick={onCTA}>
              查看實戰專案
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <button className="btn btn-secondary" onClick={onContact}>聯絡我</button>
          </div>
        </div>

        <div className="hero__portrait">
          <img
            className="hero__portrait-img"
            src="../../assets/portrait.jpg"
            alt="黃心岑 Sin-Cen Huang"
            loading="eager"
            decoding="async"
            fetchpriority="high" />
          
        </div>
      </div>
    </section>);

}

window.Hero = Hero;