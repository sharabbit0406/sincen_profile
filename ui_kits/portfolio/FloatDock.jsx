const { useState, useEffect, useRef } = React;

function FloatDock({ onNavigate, onAboutOpen }) {
  const [open, setOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copied, setCopied] = useState(false);
  const [greeted, setGreeted] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const wrapRef = useRef(null);

  // Show greeting bubble briefly after first paint, just once per session
  useEffect(() => {
    if (sessionStorage.getItem("floatdock-greeted")) { setGreeted(true); return; }
    const t1 = setTimeout(() => setShowGreeting(true), 1400);
    const t2 = setTimeout(() => { setShowGreeting(false); setGreeted(true); sessionStorage.setItem("floatdock-greeted", "1"); }, 6400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Toggle "back to top" availability based on scroll position
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click / Esc
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);

  const handleCopy = async () => {
    const email = "sharabbit0406@gmail.com";
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        ok = true;
      }
    } catch (e) { /* fall through */ }
    if (!ok) {
      try {
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.top = "-1000px";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        ta.setSelectionRange(0, email.length);
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch (e) { /* still failed */ }
    }
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } else {
      // last resort: show the email so the user can copy manually
      window.prompt("請手動複製信箱：", email);
    }
  };

  const goTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); setOpen(false); };
  const goContact = () => { onNavigate?.("contact"); setOpen(false); };
  const goAbout = () => { onAboutOpen?.(); setOpen(false); };

  // Icons (inline lucide-style strokes)
  const Icon = {
    arrowUp: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>,
    mail: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>,
    chat: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    user: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20v-1a8 8 0 0 1 16 0v1"/></svg>,
    chev: <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>,
    check: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>,
  };

  // Action items rendered top→bottom in the dock
  const actions = [
    showScrollTop && { key: "top", label: "回到頂部", icon: Icon.arrowUp, onClick: goTop, tone: "sky" },
    { key: "mail", label: copied ? "已複製信箱 ✨" : "複製信箱", icon: copied ? Icon.check : Icon.mail, onClick: handleCopy, tone: "pink", active: copied },
    { key: "contact", label: "聯絡我", icon: Icon.chat, onClick: goContact, tone: "sky" },
    { key: "about", label: "關於我", icon: Icon.user, onClick: goAbout, tone: "sky" },
  ].filter(Boolean);

  return (
    <div className={`fdock ${open ? "is-open" : ""}`} ref={wrapRef}>
      <div className="fdock__stack" role="menu" aria-hidden={!open}>
        {actions.map((a, i) => {
          const common = {
            key: a.key,
            className: `fdock__btn fdock__btn--${a.tone} ${a.active ? "is-active" : ""}`,
            style: { "--i": i },
            tabIndex: open ? 0 : -1,
            children: (
              <React.Fragment>
                <span className="fdock__btnIcon">{a.icon}</span>
                <span className="fdock__btnLabel">{a.label}</span>
              </React.Fragment>
            ),
          };
          if (a.href) {
            return (<a {...common} href={a.href} target="_blank" rel="noopener" role="menuitem" onClick={() => setOpen(false)} />);
          }
          return (<button {...common} type="button" role="menuitem" onClick={a.onClick} />);
        })}
      </div>

      {showGreeting && !open && (
        <div className="fdock__bubble" role="status">
          <span>嗨～ ✨ 點我有快速選單</span>
          <button className="fdock__bubbleX" aria-label="關閉" onClick={() => { setShowGreeting(false); setGreeted(true); sessionStorage.setItem("floatdock-greeted","1"); }}>×</button>
        </div>
      )}

      <button
        type="button"
        className="fdock__avatar"
        aria-label={open ? "收合快速選單" : "開啟快速選單"}
        aria-expanded={open}
        onClick={() => { setOpen(v => !v); setShowGreeting(false); }}
      >
        <img src="../../assets/sin-cen-icon.png" alt="" />
        <span className={`fdock__avatarChev ${open ? "is-flipped" : ""}`}>{Icon.chev}</span>
        {!greeted && <span className="fdock__pulse" aria-hidden="true"></span>}
      </button>
    </div>
  );
}

window.FloatDock = FloatDock;
