// Hero.jsx — left text block, right portrait-with-halo
const { useState: useStateHero } = React;

function Hero({ onCTA, onContact }) {
  const [lightboxOpen, setLightboxOpen] = useStateHero(false);
  return (
    <section id="hero" className="hero" data-screen-label="01 Hero">
      <div className="hero__decor hero__decor--cloud" aria-hidden="true">
        <img src="../../assets/cloud.svg" alt="" />
      </div>
      <div className="hero__decor hero__decor--sparkle" aria-hidden="true">
        <img src="../../assets/sparkle.svg" alt="" />
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
            擁有心理學背景的 AI 開發者。我致力於將人類需求轉化為可落地的
            <b> LLM 系統設計</b>，專注於大型語言模型應用、
            <b>RAG 架構</b>與 <b>Agentic Workflows</b> 開發。
          </p>
          <p className="hero__pitch hero__pitch--soft">
            我相信，最好的科技不只要高效解決問題，
            <span className="hi">更要能真正理解並承載使用者的心</span>。
          </p>
          <div className="hero__certs">
            <span className="hero__cert">iPAS AI 應用規劃師</span>
            <span className="hero__cert">Microsoft AI-900</span>
            <span className="hero__cert">資策會生成式 AI 認證</span>
          </div>
          <div className="hero__actions">
            <button className="btn btn-primary" onClick={onCTA}>
              查看實戰專案
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="btn btn-secondary" onClick={onContact}>聯絡我</button>
          </div>
        </div>

        <div className="hero__portrait">
          <img
            className="hero__portrait-img"
            src="../../assets/portrait.jpg"
            alt="黃心岑 Sin-Cen Huang"
            onClick={() => setLightboxOpen(true)}
          />
        </div>
      </div>
      {lightboxOpen && (
        <window.Lightbox
          src="../../assets/portrait.jpg"
          alt="黃心岑 Sin-Cen Huang"
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}

window.Hero = Hero;
