# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案概述

**星辰 Design System** — 黃心岑 (Sin-Cen Huang) 的個人品牌設計系統與單頁作品集網站。結合「心理學底蘊」與「AI 工程硬實力」，視覺風格以 Cinnamoroll 大耳狗為靈感，Cinnamoroll sky blue (#A6D8F5) + soft pink (#F8BBD0)。

## 技術架構

**無建置工具**。React 18 + Babel 均從 CDN 載入，Babel standalone 在瀏覽器中即時轉譯 JSX，所以沒有 `package.json` / `npm` / webpack / vite。

**開啟網站**：直接在瀏覽器中開啟 `ui_kits/portfolio/index.html`（不需任何 build 步驟）。

**關鍵檔案結構**：
- `colors_and_type.css` — 所有設計 token（顏色、字型、間距、陰影、動畫）的 CSS 變數，所有元件都繼承這些 token
- `ui_kits/portfolio/index.html` — 主入口，組合所有 React 元件
- `ui_kits/portfolio/data.js` — 全部內容資料（`window.PROJECTS`、`window.CERTS`、`window.SKILLS`）
- `ui_kits/portfolio/*.jsx` — 11 個 React 元件（Navbar / Hero / About / Projects / ProjectCard / ProjectModal / Skills / CertModal / LearningJourney / LifeCorner / Contact / FloatDock / Lightbox）
- `assets/` — logo、cloud、sparkle、halo、bunny SVG 及圖片，不可重新繪製，直接複製使用
- `preview/*.html` — 設計系統各 token 的 specimen card（顏色、字型、元件）

## 設計系統硬規則（不可違反）

這些規則來自 `README.md`，維持品牌一致性：

- **Sky 主、Pink 輔**：sky 佔 60%+ 的 accent，pink 約 25%。同一元件群內兩色不可同時飽和
- **陰影永遠帶色調**：sky-tinted（`--shadow-soft` / `--shadow-lift`）或 pink-tinted（`--shadow-pink`），**禁用中性灰陰影**
- **無直角**：任何地方都不可出現 0px border-radius。按鈕/卡片 16px，tag/chip 999px，modal 20–24px，input 12px
- **漸層方向固定 90deg**（左 = sky → 右 = pink）：`--gradient-frame` 是標準按鈕/tag/chip 表面
- **無 AI 俗套視覺**：不用紫色漸層、不用神經網路繪圖
- **Emoji 僅限** Life Corner 區塊和 Tweaks UI — 技術/正式文案不使用

## 設計 Token

所有 token 定義於 `colors_and_type.css`：

- 主色：`--sky-500` (#A6D8F5)、`--pink-500` (#F8BBD0)
- 字型：Quicksand（標題）/ Plus Jakarta Sans（內文）/ Noto Sans TC（中文）/ JetBrains Mono（程式碼）
- 間距基底：4px，scale 到 128px
- 動畫 easing：`cubic-bezier(0.22, 1, 0.36, 1)`（一般 UI），hover lift 用帶微 overshoot 的 `cubic-bezier(0.34, 1.56, 0.64, 1)`

## 圖示系統

兩套圖示，刻意分開：
1. **Lucide icons（CDN）** — 功能性圖示（navbar、按鈕、聯絡資訊等），24px outline，1.5px stroke
2. **`assets/` 內的 SVG**（cloud / sparkle / halo / bunny）— 純裝飾，放在區塊角落，opacity 0.4–0.6，**絕不放在按鈕內或作為功能性圖示**

## 內容撰寫規範

- 繁體中文為主，技術術語（LLM, RAG, LangGraph, MCP, Rerank）保留英文
- 中文段落內嵌英文/數字時，**前後各留一個半形空格**：「使用 Python 開發」
- 全形標點（，。！？「」），不在中文段落內使用半形
- 技術堆疊標籤使用原生 PascalCase / lowercase：`Python`、`LangGraph`、`Vertex AI`、`n8n`

## 新增內容時的工作流程

1. 新增/修改**資料** → 編輯 `data.js`（`window.PROJECTS` / `window.CERTS` / `window.SKILLS`）
2. 新增**頁面區塊** → 建立新的 `.jsx` 元件，在 `index.html` 引入並加入 App 的 JSX 結構
3. **樣式只用 CSS 變數**，不可 hardcode 色碼或字型名稱
4. 新元件的視覺規格參考 `preview/*.html` 對應的 specimen card
