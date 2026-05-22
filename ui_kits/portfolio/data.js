// Content for the portfolio site. Real copy from the brand brief.
window.PROJECTS = [
  {
    id: "mindcompanion",
    image: "../../assets/projects/mindcompanion.png",
    name: "心伴 MindCompanion",
    tagline: "情緒陪伴 LINE Bot · 個人專題",
    role: "AI 開發工程師 · 全端實作",
    period: "2025.11",
    stack: ["Python", "Flask", "Gemini 2.5", "Firestore", "LINE API"],
    accent: "pink",
    icon: "heart",
    blurb: "以 LINE  +  Gemini 打造的情感陪伴 AI,結合情緒量化與自殺防治護欄,為高心理困擾、低求助率的族群提供低門檻的情緒緩衝口。",
    problem: "觀察到高比例族群承受心理困擾,但求助率低 — 求助門檻高、自我揭露困難,使用者在進入專業諮商前缺乏一個低門檻、隨時可在的情緒緩衝口。",
    solutions: [
      {
        title: "有溫度的語音對答互動(TTS+STT)",
        body: "不單單用文字聊天，還能用語音一問一答的方式，並且能根據使用者的心情來調整回覆的語速、口氣，實現AI承接使用者情緒。;整合 Azure Speech Service (TTS),採「分句先回、合成接續」設計,讓語音陪伴更流暢自然。"
      },
      {
        title: "情緒可視化與量化評估",
        body: "以自動解析每段對話的情緒指標,寫入 Google Firestore,開發「情緒日曆」呈現正負向情緒、平均強度與近期關鍵字句;另結合 PHQ-9 (憂鬱)、GAD-7 (焦慮) 量表進行週期性評估,協助使用者把抽象的感受轉為可閱讀的資訊。"
      },
      {
        title: "高風險自殺防治護欄",
        body: "雙層意圖偵測 (關鍵字 × 語意),一旦判斷為「自殺」或「自傷」意圖,強制中斷既有對話流程,引導至自殺防治諮詢專線,明確劃定 AI 陪伴與醫療行為之間的倫理邊界。"
      },
      {
        title: "獨特私密空間與主動關心",
        body: "開發「私密期間」功能,使用者可以無後顧之憂談隱私話題，不會記錄到上下文、長期記憶之中；當用戶三天沒聊天，心伴會主動關心問候使用者，達成陪伴作用。"
      }
    ],
    impact: [
      "完成可運行的 LINE Bot MVP,從意圖辨識到回應生成全流程可量化追蹤。",
      "透過 AI 解析量表結果與對話內容,協助使用者將模糊情緒轉化為可閱讀資訊。",
      "建立 AI 陪伴與醫療行為之間清楚的倫理邊界,可作為受監管領域 AI 產品的安全基線。"
    ],
    links: [
      { label: "查看 GitHub 程式碼", url: "#", icon: "github" },
      { label: "觀看 Demo 影片", url: "#", icon: "video" }
    ]
  },
  {
    id: "charlie",
    image: "../../assets/projects/charlie.png",
    name: "Charlie's Agents 霹靂特助",
    tagline: "企業多重 AI 助理 · 團體專題",
    role: "AI 開發工程師 · 多 Agent 架構",
    period: "2025.12",
    stack: ["LangGraph", "LangChain", "LlamaIndex", "MCP", "Azure", "RAG"],
    accent: "sky",
    icon: "network",
    blurb: "多 Agent 協作的企業 AI 助理。Main Agent 負責意圖理解與任務分解,三大子 Agent (Document/Database/Booking) 分工協作,並以 MCP 協定封裝外部工具。",
    problem: "企業內部知識散落在 SQL、規範文件、第三方服務 (行事曆、預約系統) 之間;規範文件查找需要精確匹配特定條款與數值,單一向量檢索容易失準,員工難以跨來源找到正確答案。",
    solutions: [
      {
        title: "文件檢索RAG",
        body: "將公司企業內部文件向量化，讓公司員工能一句自然問答，就能在龐大複雜文件裡快速找到所需答案，大幅提升閱讀文件的效率，讓員工將時間放在更重要的任務上。"
      },
      {
        title: "Hybrid RAG + 二階段 Rerank (Document Agent)",
        body: "以 LangGraph × LangChain × LlamaIndex 建構 Hybrid RAG Architecture,搭配結構化 ETL 解決 PDF 與表格破碎問題;引入 Re-rank 二階段檢索大幅提升精準度,並以程式碼控制注入引用來源,杜絕 LLM 幻覺。"
      },
      {
        title: "MCP 微服務封裝 (Booking Agent)",
        body: "導入 Anthropic MCP 標準協定,將 Google Calendar 第三方服務封裝為微服務;新工具可在不動主系統的情況下熱插拔,並能以一句自然語言完成預約、自動檢查衝突並同步行事曆狀態。"
      }
    ],
    impact: [
      "精確規則條款查詢的正確率大幅提升(以二階段 Rerank 取代單一向量檢索)。",
      "MCP 化後,新增第三方工具的開發成本快速穩健。"
    ],
    links: [
      { label: "觀看 Demo 影片", url: "https://youtu.be/O44bA_XyY-Y?si=HMauo-f6a6YaT2zr", icon: "video" }
    ]
  },
  {
    id: "automation",
    image: "../../assets/projects/automation.png",
    name: "雙模態出入口自動化 AI Agent-n8n",
    tagline: "多入口主動自動化 · Line × iOS · n8n",
    role: "AI 開發工程師 · 系統整合",
    period: "2026.04",
    stack: ["n8n", "Vertex AI", "Gemini", "Webhook", "iOS Shortcuts", "Workspace API"],
    accent: "sky",
    icon: "zap",
    blurb: "以 LLM 語意分析主動偵測 Gmail 並排程,捨棄傳統規則式過濾;整合 Line 文字與 iOS Shortcuts 語音兩條入口,實現會主動提醒、能用語音回覆的個人 AI 助理。",
    problem: "傳統規則式過濾無法應對郵件語意變異,使用者期待的不是又一個被動聊天機器人,而是「會主動提醒重要事項」、又能用語音完成回覆的個人助理。",
    solutions: [
      {
        title: "雙模態進入點",
        body: "以「Line 文字」與「iOS 捷徑語音 (Webhook)」雙入口共用同一個後端,輸入正規化後送入同一條 LLM 鏈,讓使用情境延伸到通勤與駕駛場景(解放雙手)。"
      },
      {
        title: "階層式 AI Agent 架構",
        body: "主代理 (Main Agent) 負責路由與上下文管理,搭配 Calendar Agent / Sheet Agent / Gmail Agent 三大子代理分工處理不同領域任務,具備擴充彈性。"
      },
      {
        title: "主動偵測郵件意圖",
        body: "排程定時偵測 Gmail,透過 LLM Text Classifier 進行語意分類,自動分辨「一封要回的問候信」與「跨日時段的會議邀請」;自動萃取時間、地點、主題並寫入 Google Calendar,同時於 Line 主動推播提醒,實現零人工干預的排程處理。"
      },
      {
        title: "主動任務截止預警 (每日觸發)",
        body: "串接 Google Sheets,自動提取狀態為「待處理」的任務,動態檢查 3 日內到期事項,依優先順序與截止日封裝為結構化提醒,每日早晨主動推送。"
      },
      {
        title: "Human-in-the-loop 安全機制",
        body: "對於 Gmail 自動回覆等高風險動作,嚴格執行「先草稿、再確認」流程,必須由使用者授權才會觸發實際送出,在自動化便利性與安全性之間取得平衡。"
      }
    ],
    impact: [
      "將郵件與任務從「被動處理」轉為「主動預警」,大幅降低重要事項逾期風險。",
      "語音入口讓使用情境延伸到通勤與駕駛場景,行動時也能完成回信與排程。",
      "成功串接 n8n、Vertex AI、Workspace、iOS Webhook,實現高度自動化的個人工作流。"
    ],
    links: [
      { label: "觀看 Demo 影片", url: "https://youtube.com/shorts/G01-N0I7MGs?feature=share", icon: "video" }
    ]
  },
  {
    id: "news",
    image: "../../assets/projects/news.png",
    name: "個人化AI 科技新聞互動助手",
    tagline: "個人化 RAG 新聞精選 · 互動",
    role: "AI 開發工程師 · 全端實作",
    period: "2026.04",
    stack: ["Python", "Gemini", "SQLite", "LINE API", "GitHub Actions", "Flask", "RAG"],
    accent: "pink",
    icon: "book",
    blurb: "利用 LLM 為傳統 RSS 訂閱補上「語意過濾」,依照使用者 Persona 篩選真正相關的科技新聞,並在 LINE 上提供 RAG 互動式追問體驗,解決資訊爆量與一手英文新聞的閱讀門檻。",
    problem: "在 AI 應用爆量的時代,科技新聞爆增但碎片時間難以承擔閱讀成本;傳統 RSS 僅能用關鍵字過濾,無法判斷新聞的真實價值,且國外一手資訊存在語言門檻。",
    solutions: [
      {
        title: "LLM-based 個人化語意過濾",
        body: "跳脫傳統關鍵字過濾,利用 LLM 評估文章與使用者個人化興趣客製的語意相關性,僅推送真正符合使用者關切的內容。"
      },
      {
        title: "AI摘要新聞",
        body: "以 feedparser 自動抓取國內外科技新聞,再交由 LLM 進行翻譯、摘要與洞察分析,額外提供「為什麼值得閱讀」與「對市場的影響」兩個切角,讓使用者一眼掌握重點。"
      },
      {
        title: "Conversational RAG 互動追問",
        body: "整合 SQLite 輕量資料庫;使用者可在 LINE 上對任何一篇新聞發起追問,系統以該篇文章作為上下文,由 LLM 提供個人化的延伸解答,將單向推播延伸為對話式知識探索。"
      },
      {
        title: "Serverless 自動化排程",
        body: "以 GitHub Actions 實現 Serverless Cron Job,每日定時觸發新聞處理流程,部署於 Render 平台維持 24/7 Webhook 服務;並對 API 限流與失敗加上自動重試機制,提升整體服務穩健性。"
      }
    ],
    impact: [
      "比傳統關鍵字過濾大幅提升新聞相關性,符合個人關切的推送比例明顯上升。",
      "成功打造從抓取、過濾、翻譯到推送的端到端自動化新聞流程。",
      "在通訊軟體 (LINE) 上完成 RAG 互動,使用者可針對任何一篇新聞展開深度對話。"
    ],
    links: [
      { label: "查看 GitHub 程式碼", url: "https://github.com/sharabbit0406/-AI-Personalized-AI-News-Automation-Assistant", icon: "github" },
      { label: "觀看 Demo 影片", url: "#", icon: "video" }
    ]
  },
  {
    id: "faqbot",
    image: "../../assets/projects/faqbot.png",
    name: "客製化 FAQ 客服機器人",
    tagline: "RAG SaaS · 多租戶 AI 智慧客服 · 客製化問題集",
    role: "AI 開發工程師 · 全端 + 後端架構",
    period: "2026.05",
    stack: ["FastAPI", "Next.js", "Qdrant", "PostgreSQL", "Vertex AI", "Gemini", "Firebase"],
    accent: "sky",
    icon: "search",
    blurb: "多租戶 RAG SaaS 平台,商家上傳文件後幾分鐘內即可擁有理解自家知識、用品牌語氣回答的 AI 客服;以一段 script 標籤嵌入網站,並透過八階段精密 Pipeline 與可答性判斷防止幻覺。",
    problem: "中小商家想用 AI 客服,但卡在三件事:知識文件難以維護、AI 容易幻覺、嵌入網站需要工程師介入;單一向量檢索更無法兼顧精確匹配與語意理解。",
    solutions: [
      
      {
        title: "品牌化語氣客製",
        body: "商家可在後台自訂 AI 回答語氣 (正式 / 親切 / 專業 / 活潑)、歡迎詞、拒答替代訊息,所有個性化設定以 JSON 儲存於租戶欄位,即時生效無需重新部署。"
      },
      {
        title: "未解問題自動收集 · 知識庫閉環",
        body: "AI 拒答時自動將問題寫入 UnansweredQuestion 表 (自動去重),商家可在後台一覽所有真實顧客痛點,讓知識庫從靜態文件演化為可隨業務成長的活知識系統。"
      },
      {
        title: "AI 自動摘要轉接真人",
        body: "用戶點擊「聯絡真人客服」時,LLM 自動生成結構化對話摘要 (問題描述、已嘗試方案、期望結果),用戶可編輯確認後送出;真人客服接手時對話脈絡一目了然。"
      },
      {
        title: "多種嵌入方式 · 零工程整合",
        body: "聊天元件支援側邊欄、懸浮按鈕、全頁嵌入三種模式,商家只需複製一段 script 標籤即可掛載任何網站,不影響原有頁面結構。"
      },
      {
        title: "杜絕AI幻覺",
        body: " Gemini 2.5 Flash 生成附引用答案,最大化準確度並從源頭防止幻覺,當使用者問非相關領域時,AI委婉拒答設定護欄,並在無法回答時主動拋出轉接真人，而非胡亂回答。"
      },
      {
        title: "多租戶資料嚴格隔離",
        body: "以 Firebase UID 作為租戶根身份,所有資料模型透過外鍵關聯至 Tenant 表;Qdrant 向量查詢強制帶入 tenant_id payload filter,即便共用同一向量資料庫實例,也絕不會跨租戶混用。"
      }
    ],
    impact: [
      "中小型商家可客製化自己的問答集客服機器人。",
      "可答性判斷層讓 AI 寧可說「不知道」也不亂答,並附上文件引用,建立品牌信任感。",
      "未解問題收集 + AI 自動摘要轉接,讓商家從「客服救火」轉為「持續知識經營」。"
    ],
    links: [
      { label: "查看 GitHub 程式碼", url: "#", icon: "github" },
      { label: "觀看 Demo 影片", url: "#", icon: "video" },
      { label: "立即體驗", action: "chat", icon: "bot" }
    ]
  }
];

window.CERTS = [
  {
    name: "iPAS AI 應用規劃師認證",
    issuer: "經濟部產業人才能力鑑定",
    score: "94",
    image: "../../assets/cert-ipas.jpg",
    isLandscape: false,
    prepTime: "3週",
    examDate: "2026/03/21",
    tagline: "Government-issued · 國家級 AI 應用人才認證 · 初級",
    summary: "由經濟部主辦,聚焦於生成式 AI 應用導入規劃、人工智慧基礎概論，以及 AI 倫理與治理的綜合能力測驗。",
    reflection: [
      {
        title: "自學只準備三週高分獲證",
        body: "在該屆獲證率僅43%下我以 94分 (科⽬⼆)的高標成績取得認證。不僅證明我對⽣成式 AI 的掌握度，更展現我卓越的⾃主學習與應考抗壓能力。"
      },
      {
        title: "成績明顯超越整體平均(高約20分)",
        body: "考試成績顯著優於同屆平均：科目一78分（平均59分）、科目二94分（平均72分），具備快速學習能力與良好專業理解力、展現扎實專業能力與優異學習成果。"
      }
    ],
    links: [
      { label: "官方消息", url: "https://ipd.nat.gov.tw/ipas/certification/AIAP/news" },
      { label: "我的Notion", url: "https://www.notion.so/Sharinna-2cdc22921e2d8026a051f520c2e53e31?source=copy_link" }
    ],
    extras: [
      {
        image: "../../assets/cert-ipas-score-breakdown.png",
        caption: "個人各題型答對率 vs 全國平均(雷達圖)",
        body: "七大評鑑主題中,六項皆顯著高於全國平均;尤其在『No code / Low code 概念』達 100%、『生成式 AI 導入評估規劃』94%。"
      },
      {
        image: "../../assets/cert-ipas-cohort-stats.jpg",
        caption: "115 年度第一次 AI 應用規劃師認證 · 當屆成績統計",
        body: "本屆全國獲證率僅 43.50%;科目二(生成式 AI 應用與規劃)平均 72.87 分,我在此科取得 94 分。"
      }
    ]
  },
  {
    name: "Microsoft AI-900 證書",
    issuer: "Microsoft Azure Fundamentals",
    score: "929",
    image: "../../assets/cert-ai900.png",
    isLandscape: true,
    prepTime: "約 3 週",
    examDate: "2026/03/02",
    tagline: "Microsoft Official · 滿分 1000 / 門檻 700 · 以929高分通過 ",
    summary: "Microsoft 官方 AI 入門認證,涵蓋 Azure 機器學習、電腦視覺、自然語言、生成式AI負載、與負責任 AI 五大領域。",
    reflection: [
      {
        title: "準備策略",
        body: "主用 Microsoft Learn 官方學習路徑 + 題庫 ; 以及自己整理成筆記及白話文解析考古題，反覆應用AI出題練習。"
      }
    ],
    links: [
      { label: "Microsoft Learn 學習路徑(於2026/6/30停辦)", url: "https://learn.microsoft.com/credentials/certifications/azure-ai-fundamentals/" },
      { label: "學習心得(Vocus部落格)", url: "https://vocus.cc/article/69a5616cfd89780001c49bed" },
      { label: "自整理Youtube教材", url: "https://www.youtube.com/playlist?list=PLoL-AlyAM2FPjCOtRoVSZXmMP1lgCesrm" }
    ],
    extras: [
      {
        image: "../../assets/cert-ai900-score-paper.jpg",
        caption: "紙本成績單 · 各測驗小節成績",
        body: "及格分數 700 / 我的分數 929。Azure 上的機器學習、電腦視覺、NLP、生成式 AI 五大主題橫條長度皆接近滿格。",
      },
      {
        image: "../../assets/cert-ai900-credly.png",
        caption: "Microsoft Certified Fundamentals · 線上可驗證",
        body: "認證識別碼 268F44F07200FD0A、認證編號 B465FN-234C05;狀態 Active,可隨時線上驗證。"
      }
    ]
  },
  {
    name: "生成式 AI 能力認證",
    issuer: "資訊工業策進會|數位教育研究所 ",
    score: "97.5",
    image: "../../assets/cert-genai.jpg",
    isLandscape: false,
    prepTime: "2週內",
    examDate: "2026/01/24",
    tagline: "資策會 · 生成式 AI 能力檢定",
    summary: "資策會主辦的本土生成式 AI 能力檢定,生成式AI的基礎知識、能力強化、應用技能、倫理法律等四大面向。",
    reflection: [
      {
        title: "準備策略",
        body: "AI小白考的第一張證照，準備不到兩週內以97.5高分獲證。"
      }
    ],
    links: [
      { label: "資策會考試簡介", url: "https://www.iiiedu.org.tw/certifications/exam/6" },
      { label: "我的準備筆記(Vocus部落格)", url: "https://vocus.cc/article/69786b24fd89780001ec05d4" }
    ],
    extras: [
      {
        image: "../../assets/cert-genai-score.png",
        caption: "分數證明 · 生成式 AI 能力認證",
        body: "2026/01/24 巨匠電腦台北認證中心應考;學科 1 分數 97.5、加權總分 97.5 — 結果通過。"
      }
    ]
  }
];

// 學習歷程 · 自學/結業/進修紀錄
window.LEARNING = [
  { name: "商務AI應用人才養成班322小時", issuer: "TibaMe", date: "2026/01/19", image: "../../assets/lj-tibame-ai.jpg", note: "三個月密集訓練322小時的扎實AI人才培訓" },
  { name: "創造客戶價值：全通路多模態 AI 大使－打造懂人心的智慧服務新格局實作應用班(臺北班)", issuer: "經濟部商業發展署", date: "2026/05/14", image: "../../assets/lj-moea-ai.png", note: "18小時打造懂人心AI應用" },
  { name: "Generative AI for Educators Certificate", issuer: "Google", date: "2026/01/21", image: "../../assets/lj-google-genai-edu.png", note: "Generative AI for Educators 92分" },
  { name: "python基礎程式設計", issuer: "TibaMe", date: "2025/10/28", image: "../../assets/lj-python-basic.jpg", note: "從0開始學習python，勇闖程式語言的世界9.5小時" },
  { name: "python網路爬蟲", issuer: "TibaMe", date: "2025/10/22", image: "../../assets/lj-python-crawler.jpg", note: "數據分系第一步爬蟲6.8小時" },
  { name: "AI世代跨域必修課", issuer: "TibaMe", date: "2025/10/08", image: "../../assets/lj-ai-crossfield.jpg", note: "人工智慧原理與應用" },
  { name: "AI簡報3項思考力", issuer: "TibaMe", date: "2025/10/12", image: "../../assets/lj-ai-slides.jpg", note: "目標思考、換為思考、邏輯思考" },
  { name: "極速問題分析解決力", issuer: "TibaMe", date: "2025/10/10", image: "../../assets/lj-problem-solving.jpg", note: "極速問題分析解決力" },
  { name: "Attention Mechanism", issuer: "Google", date: "2026/01", image: "../../assets/lj-google-attention.png", note: "Attention Mechanism 機器學習注意力機制" },
  { name: "Encoder-Decoder Architecture", issuer: "Google", date: "2026/01", image: "../../assets/lj-google-encdec.png", note: "Encoder-Decoder Architecture" },
  { name: "Introduction to Generative AI", issuer: "Google", date: "2026/01", image: "../../assets/lj-google-intro-genai.png", note: "Generative AI" },
  { name: "Introduction to Image Generation", issuer: "Google", date: "2026/01", image: "../../assets/lj-google-imagegen.png", note: "Image Generation" },
  { name: "Introduction to Large Language Models", issuer: "Google", date: "2026/01", image: "../../assets/lj-google-llm.png", note: "Large Language Models 大語言模型" },
  { name: "AI 概念概述", issuer: "Microsoft", date: "2026/01/26", image: "../../assets/lj-ms-ai-overview.png", note: "AI 基礎概念與應用全景" },
  { name: "開始使用 Microsoft Foundry", issuer: "Microsoft", date: "2026/01/26", image: "../../assets/lj-ms-foundry.png", note: "Microsoft Foundry 平台入門" },
  { name: "在 Azure 中開始使用機器學習", issuer: "Microsoft", date: "2026/01/28", image: "../../assets/lj-ms-azure-ml.png", note: "Azure Machine Learning 起步" },
  { name: "機器學習概念簡介", issuer: "Microsoft", date: "2026/01/28", image: "../../assets/lj-ms-ml-concept.png", note: "監督式、非監督式與深度學習基礎" },
  { name: "計算機視覺概念簡介", issuer: "Microsoft", date: "2026/01/29", image: "../../assets/lj-ms-computer-vision.png", note: "影像分類、物件偵測、OCR 概念" },
  { name: "開始使用 Microsoft Foundry 學習電腦視覺", issuer: "Microsoft", date: "2026/02/02", image: "../../assets/lj-ms-foundry-cv.png", note: "Foundry 上的電腦視覺" },
  { name: "生成式 AI 和代理程式簡介", issuer: "Microsoft", date: "2026/02/04", image: "../../assets/lj-ms-genai-agents.png", note: "Generative AI 與 Agent 架構入門" },
  { name: "開始使用 Microsoft Foundry 的生成式 AI 與代理", issuer: "Microsoft", date: "2026/02/04", image: "../../assets/lj-ms-foundry-genai.png", note: "Foundry 上的 GenAI Agent " },
  { name: "文本分析概念導論", issuer: "Microsoft", date: "2026/02/06", image: "../../assets/lj-ms-text-analysis-concept.png", note: "NLP 文字分析基礎理論" },
  { name: "AI 語音概念介紹", issuer: "Microsoft", date: "2026/02/06", image: "../../assets/lj-ms-ai-speech.png", note: "語音辨識、合成與情緒分析" },
  { name: "開始使用 Microsoft Foundry 進行文字分析", issuer: "Microsoft", date: "2026/02/06", image: "../../assets/lj-ms-foundry-text-analysis.png", note: "Foundry 上的文字分析" },
  { name: "AI 驅動的資訊擷取概念簡介", issuer: "Microsoft", date: "2026/02/07", image: "../../assets/lj-ms-ai-info-retrieval.png", note: "AI Information Retrieval 基礎" },
  { name: "開始使用 Microsoft Foundry 學習語音", issuer: "Microsoft", date: "2026/02/07", image: "../../assets/lj-ms-foundry-speech.png", note: "Foundry 上的語音服務" },
  { name: "開發者與科技專業人士的人工智慧概念", issuer: "Microsoft", date: "2026/02/07", image: "../../assets/lj-ms-ai-developer.png", note: "面向開發者的 AI 全景課程" },
  { name: "Azure 中的 AI 簡介", issuer: "Microsoft", date: "2026/02/09", image: "../../assets/lj-ms-azure-ai.png", note: "Azure AI 服務總覽" },
  { name: "開始使用 Microsoft Foundry 進行 AI 驅動的資訊擷取", issuer: "Microsoft", date: "2026/02/09", image: "../../assets/lj-ms-foundry-info-retrieval.png", note: "Foundry 上的 AI 資訊擷取" }
];

window.SKILLS = [
  { name: "Python",            level: 95 },
  { name: "LangChain / LangGraph", level: 90 },
  { name: "LlamaIndex",        level: 80 },
  { name: "RAG ",   level: 88 },
  { name: "Line BOT",level: 92 },
  { name: "MCP / API",level: 92 },
  { name: "n8n自動化",level: 92 },
    { name: "LLM",level: 92 },
  { name: "Cloud (Azure / GCP)", level: 75 }
];

window.LIFE = [
  { emoji: "🎲", title: "星辰桌遊團",  body: "享受策略與社交的樂趣。", rot: -3 },
  { emoji: "💃", title: "跳舞釋放",     body: "用身體把寫不出的 bug 抖掉。", rot: 2 },
  { emoji: "📺", title: "韓劇細膩",     body: "從敘事節奏裡偷學情感曲線。", rot: -1.5 },
  { emoji: "🐰", title: "1kg 兔寶寶",   body: "每日自動化任務:草料補給。", rot: 3 },
  { emoji: "☁️", title: "大耳狗鐵粉",   body: "純淨治癒 = 我追求的 UX 體驗。", rot: -2 }
];
