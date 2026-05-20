// Hero.jsx — left text block, right portrait
function Hero({ onCTA, onContact, onCertClick, onAboutOpen }) {
  const TRAITS = [
    "學習力、行動力強",
    "負責任態度",
    "善解人意・使用者洞察",
    "卓越執行力・高韌性",
    "深思熟慮・規劃力",
    "生活與工作平衡",
  ];
  return (
    <section id="hero" className="hero" data-screen-label="01 Hero">
      <div className="hero__decor hero__decor--cloud" aria-hidden="true">
        <img src="../../assets/sin-cen-icon.png" alt="" loading="lazy" />
      </div>
      <div className="hero__decor hero__decor--sparkle" aria-hidden="true">
        <img src="../../assets/sparkle.svg" alt="" loading="lazy" />
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__name">
            黃心岑 <span className="hero__name-en">Sin-Cen Huang</span>
          </h1>
          <div className="hero__stats" aria-label="量化成就">
            <div className="hero__stat">
              <div className="hero__stat-main">
                <span className="hero__stat-num">5</span>
                <span className="hero__stat-unit">項</span>
              </div>
              <span className="hero__stat-lbl">AI 實作專案</span>
            </div>
            <div className="hero__stat-sep" aria-hidden="true" />
            <div className="hero__stat">
              <div className="hero__stat-main">
                <span className="hero__stat-num hero__stat-num--pink">3</span>
                <span className="hero__stat-unit hero__stat-unit--pink">張</span>
              </div>
              <span className="hero__stat-lbl">AI 證照</span>
            </div>
            <div className="hero__stat-sep" aria-hidden="true" />
            <div className="hero__stat">
              <div className="hero__stat-main">
                <span className="hero__stat-num">29</span>
                <span className="hero__stat-unit">張</span>
              </div>
              <span className="hero__stat-lbl">AI 課程完訓證書</span>
            </div>
          </div>
          <p className="hero__title">
            <span className="hero__title-strong">AI 應用工程師</span>
            <span className="hero__title-sep">｜</span>
            <span className="hero__title-strong hero__title-pink">數位心理建築師</span>
          </p>
          <p className="hero__pitch">
            擁有 <b>心理學背景+教育領域</b>的 AI應用開發工程師。<br />
            結合「心理洞察」與「AI 應用開發」，<br />
            將人類需求轉化為可落地的 <b>LLM 設計</b>，<br />
            專注於 <b>RAG </b>、<b>AI Agent</b> ...。
          </p>
          <p className="hero__pitch hero__pitch--soft">
            我相信，最好的科技不只要聰明地解決問題，<br />
            <span className="hi">更要能真正理解並承載使用者的心</span>。
          </p>

          <div className="hero__traits" aria-label="個人特質">
            {TRAITS.map(t => <span key={t} className="hero__trait-tag">{t}</span>)}
          </div>

          <div className="hero__certs">
            {(window.CERTS || []).length > 0 && (
              <button
                type="button"
                className="hero__cert"
                onClick={() => onCertClick?.(0)}
                title="查看 AI 證照"
              >
                {(window.CERTS || []).map(c => c.name).join(" ｜ ")}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
              </button>
            )}
          </div>
          <div className="hero__actions">
            <button className="btn btn-primary" onClick={onCTA}>
              查看實戰專案
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="btn btn-ghost" onClick={onAboutOpen}>
              詳細認識我
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            </button>
          </div>
        </div>

        <div className="hero__portrait">
          <img
            className="hero__portrait-img"
            src="../../assets/portrait.jpg"
            alt="黃心岑 Sin-Cen Huang"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
