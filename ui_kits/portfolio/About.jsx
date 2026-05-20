// About.jsx — slim trait-chip overview (full detail via AboutModal)
function About({ onOpen }) {
  const TRAITS = [
    {
      tone: "sky",
      title: "學習力、行動力強",
      kws: ["自主學習", "快速上手", "執行力"],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      tone: "pink",
      title: "負責任態度",
      kws: ["自律勤奮", "穩健成熟", "把事做到位"],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      tone: "pink",
      title: "善解人意 · 使用者洞察",
      kws: ["真誠親切", "細心觀察", "使用者洞察"],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      tone: "pink",
      title: "卓越執行力 · 高韌性",
      kws: ["不屈不撓", "腳踏實地", "持續力"],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22V4l8 4 8-4v12l-8 4-8-4z" />
          <path d="M12 8v12" />
        </svg>
      ),
    },
    {
      tone: "sky",
      title: "深思熟慮 · 規劃力",
      kws: ["慎重自律", "思考縝密", "規劃能力"],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      tone: "sky",
      title: "生活與工作平衡",
      kws: ["身心平衡", "長期視角", "創新動能"],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18" />
          <path d="M5 8l-3 5h6L5 8z" />
          <path d="M19 8l-3 5h6l-3-5z" />
          <path d="M4 21h16" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="about about--slim" data-screen-label="02 About">
      <div className="section__head">
        <div className="eyebrow">About Me</div>
        <h2>我的特質 <span className="section__head-en">/ Who I am</span></h2>
        <p className="section__lede">
          心理學背景 × AI 工程實力，帶著對人的洞察構建真正好用的產品。
        </p>
      </div>

      <div className="about__traits-wrap">
        <div className="about__traits-strip">
          {TRAITS.map((t) => (
            <button
              key={t.title}
              className="about__trait-chip"
              onClick={onOpen}
              aria-label={`查看詳細：${t.title}`}
            >
              <div className={`about__trait-ic about__trait-ic--${t.tone}`}>
                {t.icon}
              </div>
              <div className="about__trait-info">
                <div className="about__trait-name">{t.title}</div>
                <div className="about__trait-kws">
                  {t.kws.map((kw) => (
                    <span key={kw} className={`tag ${t.tone === "sky" ? "tag-sky" : ""}`}>{kw}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="about__detail-cta">
          <button className="about__detail-btn" onClick={onOpen}>
            詳細認識我
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

window.About = About;
