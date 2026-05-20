// Content for the portfolio site. Real copy from the brand brief.
window.PROJECTS = [
  {
    id: "mindcompanion",
    name: "心伴 MindCompanion",
    tagline: "情緒陪伴聊天 AI",
    role: "AI 開發工程師 · 全端實作",
    period: "2025.08 – 2025.11",
    stack: ["Python", "Gemini", "RAG", "LINE API"],
    accent: "pink",
    icon: "heart",
    blurb: "結合諮商技巧設計 Prompt，實作情緒量化機制與高風險自殺防治護欄，建立 AI 與醫療的清楚倫理邊界。",
    problem: "觀察到高比例人群深受心理困擾但求助率低，期望打造一款低門檻、有溫度且具備醫療安全護欄的 LINE 情緒陪伴 AI。",
    solutions: [
      {
        title: "諮商技巧導向的 Prompt 工程",
        body: "結合 SOLER、開放式提問、情感反映等技巧，設計分階段的對話策略，讓 LLM 能在不越界的前提下提供同理回應。"
      },
      {
        title: "情緒量化與會話記憶",
        body: "每段對話經 LLM 解析後輸出情緒向度 (PANAS) 與風險分數，存入向量資料庫；後續對話以 RAG 召回，維持長期關係感。"
      },
      {
        title: "高風險自殺防治護欄",
        body: "關鍵字 × 語意分析雙層偵測，識別高風險意圖時強制中斷對話、轉介專業資源，明確劃定 AI 陪伴與醫療行為的倫理界線。"
      }
    ],
    impact: [
      "建立 AI 與醫療之間清楚的倫理邊界，可作為後續落地產品的安全基線。",
      "完成 LINE 端到端體驗，從使用者意圖辨識到回應生成皆在 3 秒內。"
    ]
  },
  {
    id: "charlie",
    name: "Charlie's Agents 霹靂特助",
    tagline: "企業多重 AI 助理",
    role: "AI 開發工程師 · 後端架構",
    period: "2025.04 – 2025.10",
    stack: ["LangGraph", "MCP", "Azure", "Text-to-SQL"],
    accent: "sky",
    icon: "network",
    blurb: "開發混合式 RAG 架構，導入二階段 Rerank 機制解決精確數值查找痛點，並透過 MCP 協定大幅提升系統擴充性。",
    problem: "企業內部知識散落於 SQL、文件與第三方服務，傳統單一檢索器無法兼顧語意相關性與精確查找。",
    solutions: [
      {
        title: "混合式 RAG 與動態路由",
        body: "Router Agent 依使用者意圖選擇向量檢索 / Text-to-SQL / 結構化 API；導入二階段 Rerank 重排序機制，大幅提升關鍵規則查詢的正確率。"
      },
      {
        title: "微服務架構封裝 (MCP)",
        body: "導入 Anthropic MCP 標準協定，將 Google Calendar、內部 API 封裝為微服務，新工具可在不動主系統的情況下熱插拔。"
      },
      {
        title: "LangGraph 狀態機編排",
        body: "以 LangGraph 管理多 Agent 對話狀態與工具呼叫鏈，搭配可觀測性 (LangSmith) 對每個步驟做追蹤與評估。"
      }
    ],
    impact: [
      "精確數值查詢正確率較單一向量檢索方案大幅提升。",
      "MCP 化後新增第三方工具的開發成本下降一個量級。"
    ]
  },
  {
    id: "automation",
    name: "主動自動化 AI Agent",
    tagline: "雙模態互動 · Line × iOS",
    role: "AI 開發工程師 · 系統整合",
    period: "2026.01 – 2026.03",
    stack: ["n8n", "Vertex AI", "Webhook", "Shortcuts"],
    accent: "sky",
    icon: "zap",
    blurb: "透過 LLM 語意分析主動偵測信件並排程，捨棄傳統規則式過濾，完美整合 Line 與 iOS 語音指令實現無障礙助理體驗。",
    problem: "傳統規則式過濾無法應對信件與訊息的語意變異；使用者期望「會主動提醒」、又能用語音完成回覆的個人助理。",
    solutions: [
      {
        title: "LLM 語意主動偵測",
        body: "n8n 排程 + Vertex AI 對新進信件做意圖與緊急度分類，主動判斷是否要打擾使用者，而非單純依關鍵字。"
      },
      {
        title: "雙模態進入點",
        body: "Line 文字 + iOS Shortcuts 語音指令兩條路徑共用同一個 Webhook 後端，輸入正規化後送入同一條 LLM 鏈。"
      }
    ],
    impact: [
      "降低使用者每日主動檢查信件的次數。",
      "語音入口讓使用情境延伸到通勤與駕駛場景。"
    ]
  },
  {
    id: "reflectnotes",
    name: "讀心筆記 ReflectNotes",
    tagline: "CBT 框架日記助手",
    role: "AI 開發工程師 · 全端實作",
    period: "2025.06 – 2025.09",
    stack: ["Python", "Claude", "RAG", "Notion API"],
    accent: "pink",
    icon: "book",
    blurb: "以 CBT 認知行為療法為骨架的 AI 日記反思工具，自動標註情緒、認知扭曲與正向資源，協助使用者建立長期的自我覺察。",
    problem: "傳統日記缺乏即時反思引導；坊間情緒紀錄 App 多偏重打卡，輕忽脈絡與「想法-情緒」之間的關聯。",
    solutions: [
      {
        title: "CBT 結構化提問流",
        body: "依「情境 → 自動化想法 → 情緒 → 替代思考」四階段引導使用者展開反思，LLM 僅在使用者卡住時補位提問，不搶話。"
      },
      {
        title: "認知扭曲標註與替代思考",
        body: "Claude 對日記文字做 10 種常見認知扭曲分類，回傳具體段落與替代角度，使用者可選擇接受、編輯或忽略。"
      },
      {
        title: "Notion 雙向同步",
        body: "每日反思摘要與情緒-想法關聯圖譜自動寫回 Notion，週末再以 RAG 召回近 7 日內容做主題式回顧。"
      }
    ],
    impact: [
      "週訪次數較單純打卡型 App 顯著提升，使用者願意花時間展開深度反思。",
      "建立可解釋的「情緒-想法」關聯資料集，供後續模型微調使用。"
    ]
  },
  {
    id: "stargazer",
    name: "問星 Stargazer",
    tagline: "個人語音 RAG 助手",
    role: "AI 開發工程師 · 系統整合",
    period: "2025.11 – 2026.02",
    stack: ["Whisper", "Pinecone", "FastAPI", "RAG"],
    accent: "sky",
    icon: "search",
    blurb: "以語音為主入口的個人知識 RAG 系統，整合筆記、書摘與會議錄音，讓使用者用自然語言反查跨來源的關聯內容。",
    problem: "個人知識散落於文字筆記、語音備忘錄與訂閱文章；關鍵字搜尋無法跨來源串連語意，回憶常常斷在「我記得有講過⋯」。",
    solutions: [
      {
        title: "多來源向量化管線",
        body: "Whisper 對語音逐字稿做斷句與標點還原；統一 chunk 與 metadata schema 後寫入 Pinecone，支援時序、來源、主題三維度篩選。"
      },
      {
        title: "語音入口 × 引用回溯",
        body: "FastAPI 後端串接 Whisper 與 Claude；回應一律附上來源 chunk 與時間戳，使用者可一鍵跳回原始筆記或音檔位置。"
      },
      {
        title: "可重複的 ingest 模板",
        body: "將 chunking、embedding、metadata 抽象為設定檔，新資料源（如 Podcast、Email）以 YAML 描述即可接入。"
      }
    ],
    impact: [
      "個人知識調用時間大幅縮短，跨來源關聯查詢能力明顯提升。",
      "ingest 模板已套用至三種新資料源，平均整合時間從天為單位降到小時。"
    ]
  }
];

window.CERTS = [
  { name: "iPAS AI 應用規劃師", issuer: "經濟部產業人才能力鑑定", score: "94" },
  { name: "Microsoft AI-900",   issuer: "Microsoft Azure Fundamentals", score: "929" },
  { name: "生成式 AI 能力認證", issuer: "資策會 III",                  score: "97.5" }
];

window.SKILLS = [
  { name: "Python",            level: 95 },
  { name: "LangChain / LangGraph", level: 90 },
  { name: "LlamaIndex",        level: 80 },
  { name: "企業級 RAG 架構",   level: 88 },
  { name: "Prompt Engineering",level: 92 },
  { name: "Cloud (Azure / GCP)", level: 75 }
];

window.LIFE = [
  { emoji: "🎲", title: "星辰桌遊團",  body: "享受策略與社交的樂趣，是名稱的由來。", rot: -3 },
  { emoji: "💃", title: "跳舞釋放",     body: "用身體把寫不出的 bug 抖掉。", rot: 2 },
  { emoji: "📺", title: "韓劇細膩",     body: "從敘事節奏裡偷學情感曲線。", rot: -1.5 },
  { emoji: "🐰", title: "1kg 兔寶寶",   body: "每日自動化任務：草料補給。", rot: 3 },
  { emoji: "☁️", title: "大耳狗鐵粉",   body: "純淨治癒 = 我追求的 UX 體驗。", rot: -2 }
];
