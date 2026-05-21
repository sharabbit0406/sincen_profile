// AboutModal.jsx — full-screen About Me overlay
const { useEffect: useEffAM } = React;

function AboutModal({ open, onClose }) {
  useEffAM(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="amodal" role="dialog" aria-modal="true" aria-label="關於我詳細資料">
      {/* Close button sits directly in the fixed overlay — NOT inside the scroll container */}
      <button className="amodal__close" onClick={onClose} aria-label="關閉">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
        關閉
      </button>

      {/* Scrollable area */}
      <div className="amodal__scroll">
      <div className="amodal__body">
        <div className="amodal__inner">

          {/* Header */}
          <div className="section__head">
            <div className="eyebrow">About Me</div>
            <h2>關於我 <span className="section__head-en">/ A psychologist who codes</span></h2>
            <div className="section__stat-group">
              <span className="section__stat">6 大個人特質</span>
              <span className="section__stat-pace">學習力 · 責任感 · 同理心 · 執行力 · 規劃力 · 生活平衡</span>
            </div>
            <p className="section__lede">
              將<b>洞察人性</b>轉化為 <b>AI 體驗優化</b> —— 心理學系出身，<br />
              歷經 AI 培訓，全心投入 AI 工程師職涯。
            </p>
          </div>

          {/* Trait cards — row 1 */}
          <div className="about__grid about__grid--3">
            <article className="about__card">
              <div className="about__ic about__ic--sky">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3>學習力、行動力強</h3>
              <p>
                即便是轉職者也<b>不畏懼從零開始</b>，<br />
                能在<b>短時間</b>內把<b>陌生領域做到高端水準</b>：
              </p>
              <ul className="about__bullets">
                <li><span className="about__bullet-tag">2 週</span><span>取得 資策會 生成式 AI 能力認證 <b>97.5 分</b></span></li>
                <li><span className="about__bullet-tag">3 週</span><span>取得 Microsoft AI-900 證書 <b>929 分</b></span></li>
                <li><span className="about__bullet-tag">3 週</span><span>取得 iPAS AI 應用規劃師認證 <b>94 分</b></span></li>
              </ul>
              <div className="about__tags">
                <span className="tag tag-sky">自主學習</span>
                <span className="tag tag-sky">快速上手</span>
                <span className="tag tag-sky">執行力</span>
              </div>
            </article>

            <article className="about__card">
              <div className="about__ic about__ic--pink">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3>負責任態度</h3>
              <p>
                <b>自律、勤奮且穩健的成熟心態</b>。<br />
                能在<b>不需要主管緊盯</b>的情況下「把事做到位」，
                交辦的任務都<b>盡全力做到最好</b>。
              </p>
              <div className="about__tags">
                <span className="tag">自律勤奮</span>
                <span className="tag">穩健成熟</span>
                <span className="tag">把事做到位</span>
              </div>
            </article>

            <article className="about__card">
              <div className="about__ic about__ic--pink">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>善解人意 · 使用者洞察</h3>
              <p>
                <b>真誠待人、親切溫暖</b>。<br />
                以心理學的觀察力細膩理解使用者真正在意的事，
                把<b>同理心</b>轉化為產品該有的體貼。
              </p>
              <div className="about__tags">
                <span className="tag">真誠親切</span>
                <span className="tag">細心觀察</span>
                <span className="tag">使用者洞察</span>
              </div>
            </article>
          </div>

          {/* Trait cards — row 2 */}
          <div className="about__grid about__grid--3 about__grid--more">
            <article className="about__card">
              <div className="about__ic about__ic--pink">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 22V4l8 4 8-4v12l-8 4-8-4z" />
                  <path d="M12 8v12" />
                </svg>
              </div>
              <h3>卓越執行力 · 高韌性</h3>
              <p>
                <b>不屈不撓、腳踏實地</b>。<br />
                把挑戰當作養分，每件交辦的事都以<b>富有責任心持續力</b>的態度完成，
                不輕易喊累、也不在過程中放低標準。
              </p>
              <div className="about__tags">
                <span className="tag">不屈不撓</span>
                <span className="tag">腳踏實地</span>
                <span className="tag">持續力</span>
              </div>
            </article>

            <article className="about__card">
              <div className="about__ic about__ic--sky">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <h3>深思熟慮 · 規劃力</h3>
              <p>
                <b>慎重、自律</b>，處事前會先做足思考與推演。<br />
                每一步行動都有方向與節奏，不衝動下決定，
                讓專案在<b>清晰的規劃</b>下穩穩推進。
              </p>
              <div className="about__tags">
                <span className="tag tag-sky">慎重自律</span>
                <span className="tag tag-sky">思考縝密</span>
                <span className="tag tag-sky">規劃能力</span>
              </div>
            </article>

            <article className="about__card">
              <div className="about__ic about__ic--sky">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v18" />
                  <path d="M5 8l-3 5h6L5 8z" />
                  <path d="M19 8l-3 5h6l-3-5z" />
                  <path d="M4 21h16" />
                </svg>
              </div>
              <h3>生活與工作平衡</h3>
              <p>
                保有<b>良好的身心狀態</b>，是持續在高壓技術領域中產出高品質工作的基礎。<br />
                才能在 AI 這個快速變動的領域中<b>走得長遠</b>，並持續帶來創新的價值。
              </p>
              <div className="about__tags">
                <span className="tag tag-sky">身心平衡</span>
                <span className="tag tag-sky">長期視角</span>
                <span className="tag tag-sky">創新動能</span>
              </div>
            </article>
          </div>

          {/* Education & Experience */}
          <div className="about__timeline">
            <div className="about__col">
              <div className="about__col-head">
                <span className="about__col-eyebrow">Education</span>
                <h3 className="about__col-title">學歷</h3>
              </div>
              <ul className="about__list">
                <li className="about__item">
                  <div className="about__item-date">2025.10 – 2026.01</div>
                  <div className="about__item-main">
                    <div className="about__item-org">緯育 TibaMe</div>
                    <div className="about__item-role">商務 AI 人才應用班 第 03 期 · 322 小時</div>
                    <div className="about__item-note">
                      Python · NLP · LLM · RAG · Azure 部署 | 個人 &amp; 團隊專題
                    </div>
                  </div>
                </li>
                <li className="about__item">
                  <div className="about__item-date">2016.09 – 2020.06</div>
                  <div className="about__item-main">
                    <div className="about__item-org">中原大學</div>
                    <div className="about__item-role">心理學系 · 學士</div>
                    <div className="about__item-note">
                      搭配個人高敏感特質，培養專業知識。
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="about__col">
              <div className="about__col-head">
                <span className="about__col-eyebrow">Experience</span>
                <h3 className="about__col-title">工作經歷</h3>
              </div>
              <ul className="about__list">
                <li className="about__item">
                  <div className="about__item-date">2020.02 – 2025.08</div>
                  <div className="about__item-main">
                    <div className="about__item-org">幼童安親補習班體系</div>
                    <div className="about__item-role">安親 / 補習班導師 · 5 年 7 個月</div>
                    <div className="about__item-note">
                      管理 30~60 人，主要教導<b>一年級幼童</b>；<br />
                      累積了極高的溝通耐心與對「人」的敏銳觀察力。
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Learning Timeline */}
          <hr className="amodal__divider" />
          <window.Timeline />

        </div>
      </div>
      </div>{/* end amodal__scroll */}
    </div>
  );
}

window.AboutModal = AboutModal;
