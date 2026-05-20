// About.jsx — two-column psychology × engineering
function About() {
  return (
    <section id="about" className="about" data-screen-label="02 About">
      <div className="section__head">
        <div className="eyebrow">About Me</div>
        <h2>關於我 <span className="section__head-en">/ A psychologist who codes</span></h2>
      </div>

      <div className="about__grid">
        <article className="about__card">
          <div className="about__ic about__ic--sky">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 2a4 4 0 0 0-4 4v1A4 4 0 0 0 2 11a4 4 0 0 0 1 2.6A4 4 0 0 0 2 17a4 4 0 0 0 4 4h.5A3.5 3.5 0 0 0 10 17.5V6a4 4 0 0 0-1-4z"/>
              <path d="M15 2a4 4 0 0 1 4 4v1a4 4 0 0 1 3 4 4 4 0 0 1-1 2.6A4 4 0 0 1 22 17a4 4 0 0 1-4 4h-.5A3.5 3.5 0 0 1 14 17.5V6a4 4 0 0 1 1-4z"/>
            </svg>
          </div>
          <h3>心理洞察 × 科技落地</h3>
          <p>
            心理學背景訓練了我對使用者需求與 <b>AI 倫理</b>的敏銳度。我能從本質拆解問題，
            將對人的洞察轉化為對<b>程式邏輯與細節品質</b>的堅持。
          </p>
          <div className="about__tags">
            <span className="tag">使用者研究</span>
            <span className="tag">AI 倫理</span>
            <span className="tag">細節品質</span>
          </div>
        </article>

        <article className="about__card">
          <div className="about__ic about__ic--pink">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </div>
          <h3>高度內在驅動</h3>
          <p>
            我不怕從零開始，<b>只怕停止成長</b>。專注於 AI 後端軟體開發與架構優化，
            能獨立解決<b>跨雲整合</b>與 <b>Agent 動態路由檢索策略</b>。
          </p>
          <div className="about__tags">
            <span className="tag tag-sky">後端架構</span>
            <span className="tag tag-sky">跨雲整合</span>
            <span className="tag tag-sky">Agentic Workflow</span>
          </div>
        </article>
      </div>
    </section>
  );
}

window.About = About;
