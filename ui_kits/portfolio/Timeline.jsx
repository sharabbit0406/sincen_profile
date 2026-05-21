// Timeline.jsx — zigzag alternating layout, no horizontal scroll
const { useState: useStateTL, useRef: useRefTL, useEffect: useEffTL } = React;

function Timeline() {
  const [openIdx, setOpenIdx] = useStateTL(null);
  const detailRef = useRefTL(null);

  useEffTL(() => {
    if (openIdx !== null && detailRef.current) {
      const t = setTimeout(() => {
        detailRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 80);
      return () => clearTimeout(t);
    }
  }, [openIdx]);

  const ITEMS = [
    {
      date: "2025/06",
      type: "start",
      title: "踏上 AI 之路",
      desc: "從零開始自學 Python，決定全力轉職 AI 工程師，開啟這段密集的自學旅程。",
    },
    {
      date: "2025/10/07",
      type: "milestone",
      title: "進入 TibaMe",
      desc: "考試、面試通過，加入緯育 TibaMe 商務 AI 應用人才養成班 03 期，開啟 3個月 322 小時密集 AI 訓練。(2025/10/07-2026/01/09)",
    },
    {
      date: "2025/10",
      type: "learning",
      title: "TibaMe 完課證明 × 5",
      desc: "AI 世代跨域必修課、AI 簡報三項思考力、極速問題分析解決力、Python 基礎程式設計、Python 網路爬蟲 — 共 5 張完訓課程證書。",
    },
    {
      date: "2025/11",
      type: "project",
      num: "#1",
      title: "心伴 MindCompanion",
      desc: "情緒陪伴 LINE Bot 個人專題。以 Gemini 2.5 + LINE API 打造，具備 PHQ-9 情緒量化、情緒日曆可視化、雙層自殺防治護欄與語音 TTS 陪伴功能。",
    },
    {
      date: "2025/12",
      type: "project",
      num: "#2",
      title: "霹靂特助 Charlie's Agents",
      desc: "企業多重 AI 助理團隊專題。Main Agent 統籌意圖分解，三大子 Agent（Document / Database / Booking）分工協作，以 MCP 協定封裝 Google Calendar 等外部工具，並導入 Hybrid RAG + 二階段 Rerank 提升文件查詢精準度。",
    },
    {
      date: "2026/01/19",
      type: "milestone",
      title: "TibaMe 322 小時結業",
      desc: "三個月密集 AI 訓練正式完訓，取得商務 AI 應用人才養成班結業證書，涵蓋 Python、NLP、LLM、RAG、Azure 部署與個人及團隊專題。",
    },
    {
      date: "2026/01/21",
      type: "learning",
      title: "Google · GenAI for Educators",
      desc: "Google 官方 Generative AI for Educators 課程，92 分高分完訓取得結業證書。",
    },
    {
      date: "2026/01/24",
      type: "cert",
      num: "#1",
      title: "生成式 AI 能力認證",
      desc: "資策會數位教育研究所主辦。準備不到 2 週，以 97.5 分高分通過，為 AI 學習旅程取得的第一張正式證照。",
    },
    {
      date: "2026/01",
      type: "learning",
      title: "Google AI 課程 × 5",
      desc: "Introduction to Generative AI、Introduction to Large Language Models、Attention Mechanism、Encoder-Decoder Architecture、Introduction to Image Generation — 共 5 張 Google 官方完訓證書。",
    },
    {
      date: "2026/01/26",
      type: "learning",
      title: "Microsoft Learn × 16",
      desc: "約2周完成 16 張 Microsoft Learn 課程：AI 概念概述、Azure ML、機器學習、電腦視覺、NLP 文字分析、AI 語音、GenAI 與代理程式、AI 驅動資訊擷取、Microsoft Foundry 6系列，以及 Azure 中的 AI 簡介等。(1/26-2/9)",
    },
    {
      date: "2026/03/02",
      type: "cert",
      num: "#2",
      title: "Microsoft AI-900證書",
      desc: "Microsoft Azure AI Fundamentals 官方認證。準備約 3 週，以 929 分（滿分 1000 / 門檻 700）高分通過，涵蓋 Azure ML、電腦視覺、NLP、生成式 AI 與負責任 AI 五大領域。",
    },
    {
      date: "2026/03/21",
      type: "cert",
      num: "#3",
      title: "iPAS AI 應用規劃師證書",
      desc: "經濟部產業人才能力鑑定主辦。準備 3 週，以科目二 94 分（全國平均 72.87 分）高標取得認證，當屆獲證率僅 43.50%，個人成績顯著超越整體平均約 20 分。",
    },
    {
      date: "2026/04",
      type: "project",
      num: "#4",
      title: "個人化 AI 新聞助手",
      desc: "以 LLM 語意過濾取代傳統 RSS 關鍵字篩選，依個人化 Persona 推送真正相關的科技新聞；整合 SQLite + Conversational RAG，讓使用者可在 LINE 上對任一篇新聞展開追問；GitHub Actions Serverless Cron 全自動化。",
    },
        {
      date: "2026/04",
      type: "project",
      num: "#3",
      title: "雙模態自動化 AI Agent",
      desc: "n8n × Line × iOS 語音入口自動化個人助理。Line 文字與 iOS Shortcuts 語音共用同一後端，LLM 主動偵測 Gmail 語意意圖並排程、每日任務截止預警推播、Human-in-the-loop 安全草稿機制。",
    },
    {
      date: "2026/05",
      type: "project",
      num: "#5",
      title: "FAQ 客服機器人 SaaS",
      desc: "多租戶 RAG SaaS 平台。商家上傳文件後幾分鐘內擁有品牌語氣 AI 客服，一行 script 嵌入任何網站；八階段精密 Pipeline + 可答性判斷防止幻覺；未解問題自動收集 + AI 自動摘要轉接真人客服。",
    },
    {
      date: "2026/05/14",
      type: "learning",
      title: "經濟部課程完訓",
      desc: "全通路多模態 AI 大使實作應用班完訓，18 小時深度探索打造懂人心的智慧服務，由經濟部商業發展署主辦。(5/6、5/14)",
    },
  ];

  const TYPE_LABEL = {
    start: "起點", milestone: "里程碑", learning: "學習", cert: "證照", project: "專案",
  };

  function getDisplayDate(dateStr, i) {
    const year = dateStr.substring(0, 4);
    const raw = (dateStr.split('/')[1] || '');
    const month = raw.replace(/[^0-9]/g, '').substring(0, 2) || '';
    if (i === 0) return { showYear: true, year, month };
    const prevYear = ITEMS[i - 1].date.substring(0, 4);
    return { showYear: year !== prevYear, year, month };
  }

  function NodeIcon({ type }) {
    if (type === "start") return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    );
    if (type === "milestone") return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
    );
    if (type === "learning") return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    );
    if (type === "cert") return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    );
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    );
  }

  const current = openIdx !== null ? ITEMS[openIdx] : null;

  return (
    <section id="timeline" className="timeline-section" data-screen-label="02b Timeline">
      <div className="section__head">
        <div className="eyebrow">Journey</div>
        <h2>學習時間軸 <span className="section__head-en">/ From zero to AI engineer</span></h2>
        <div className="section__stat-group">
          <div className="section__stat-breakdown section__stat-breakdown--row">
            <span className="section__stat section__stat--inline">3 張證照</span>
            <span className="section__stat-pace">兩三週高分考取</span>
            <span className="section__stat--sep" aria-hidden="true">·</span>
            <span className="section__stat section__stat--inline">5 項專案</span>
            <span className="section__stat-pace">平均一個月從零落地</span>
            <span className="section__stat--sep" aria-hidden="true">·</span>
            <span className="section__stat section__stat--inline section__stat--pink">29 張課程完訓證書</span>
            <span className="section__stat-pace">高密集學習</span>
          </div>
        </div>
        <p className="section__lede">
          從 2025/06 自學 Python 起，不到一年的完整 AI 轉職軌跡 — 點擊節點或標題查看說明。
        </p>
      </div>

      {/* Legend */}
      <div className="tl2__legend">
        {[
          { type: "cert",      label: "證照" },
          { type: "project",   label: "專案" },
          { type: "learning",  label: "學習" },
          { type: "milestone", label: "里程碑" },
          { type: "start",     label: "起點" },
        ].map(({ type, label }) => (
          <span key={type} className={`tl2__legend-item tl2__legend-item--${type}`}>
            <span className="tl2__legend-dot" />
            {label}
          </span>
        ))}
      </div>

      {/* Zigzag timeline */}
      <div className="tl2__wrap">
        <div className="tl2__center-line" />
        <div className="tl2__track">
          {ITEMS.map((item, i) => {
            const isTop = i % 2 === 0;
            const { showYear, year, month } = getDisplayDate(item.date, i);
            const isOpen = openIdx === i;

            const toggle = () => setOpenIdx(isOpen ? null : i);

            const DateLabel = () => (
              <div className="tl2__date-label">
                {showYear
                  ? <><span className="tl2__year">{year}/</span><span className="tl2__month">{month}月</span></>
                  : <span className="tl2__month">{month}月</span>
                }
              </div>
            );

            const ContentBox = ({ position }) => (
              <div
                className={`tl2__${position}`}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-label={`${item.date} ${item.title}${isOpen ? " — 點擊收回" : " — 點擊展開"}`}
                onClick={toggle}
                onKeyDown={e => (e.key === "Enter" || e.key === " ") && toggle()}
              >
                <DateLabel />
                <div className="tl2__title-row">
                  <span className="tl2__title">
                    {item.num && <span className="tl2__num">{item.num} </span>}
                    {item.title}
                  </span>
                </div>
              </div>
            );

            return (
              <div
                key={i}
                className={`tl2__col tl2__col--${isTop ? "top" : "bot"} tl2__col--${item.type}${isOpen ? " is-open" : ""}`}
              >
                {isTop && <ContentBox position="upper" />}

                <div
                  className="tl2__node"
                  role="button"
                  tabIndex={-1}
                  aria-label={item.title}
                  onClick={toggle}
                >
                  <NodeIcon type={item.type} />
                </div>

                {!isTop && <ContentBox position="lower" />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail panel */}
      {current && (
        <div
          ref={detailRef}
          className={`tl2__detail tl2__detail--${current.type}`}
          role="region"
          aria-label="節點詳情"
        >
          <div className="tl2__detail-inner">
            <div className="tl2__detail-head">
              <span className={`tl2__detail-tag tl2__detail-tag--${current.type}`}>
                <NodeIcon type={current.type} />
                {TYPE_LABEL[current.type]}{current.num ? ` ${current.num}` : ""}
              </span>
              <time className="tl2__detail-date">{current.date}</time>
            </div>
            <h3 className="tl2__detail-title">{current.title}</h3>
            <p className="tl2__detail-desc">{current.desc}</p>
          </div>
          <button
            type="button"
            className="tl2__detail-close"
            onClick={() => setOpenIdx(null)}
            aria-label="收回詳情"
          >
            收回
          </button>
        </div>
      )}
    </section>
  );
}

window.Timeline = Timeline;
