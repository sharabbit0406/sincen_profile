// Contact.jsx — sky-blue full-bleed contact block
function Contact() {
  return (
    <section id="contact" className="contact" data-screen-label="06 Contact">
      <div className="contact__inner">
        <div className="eyebrow contact__eyebrow" style={{ color: "rgba(128, 196, 242, 0.918)" }}>Let's talk</div>
        <h2 className="contact__h">
          準備好為您的團隊注入<br />
          結合<span className="contact__hl">心理洞察</span>與 <span className="contact__hl">AI 技術</span>的新動能了嗎？
        </h2>
        <p className="contact__p">歡迎隨時與我聯繫，我們聊聊讓 AI 真正承載使用者的方式。</p>

        <a href="mailto:sharabbit0406@gmail.com" className="contact__mail">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
          sharabbit0406@gmail.com
        </a>

        <div className="contact__links">
          <a href="#" className="contact__link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            GitHub
          </a>
          <a href="#" className="contact__link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            LinkedIn
          </a>
        </div>

        <div className="contact__foot">
          © 2026 · 黃心岑 Sin-Cen Huang · 數位心理建築師 · Made with ☁️ &amp; ✨
        </div>
      </div>
    </section>);

}

window.Contact = Contact;