// Navbar.jsx — sticky top nav with sky underline hover + mobile hamburger
const { useState, useEffect } = React;

function Navbar({ active = "about", onNavigate, onAboutOpen, onChat }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60 || (document.querySelector(".portfolio-scroller")?.scrollTop ?? 0) > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll, true);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const items = [
    { id: "about",    label: "關於我" },
    { id: "projects", label: "專案實作" },
    { id: "skills",   label: "技術證照" },
    { id: "timeline", label: "學習歷程" },
    { id: "life",     label: "生活角落" },
    { id: "contact",  label: "聯絡我" }
  ];

  const handleNav = (id) => {
    setMenuOpen(false);
    if (id === "about") {
      onAboutOpen?.();
    } else {
      onNavigate?.(id);
    }
  };

  return (
    <nav className={`portfolio-nav ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="portfolio-nav__inner">
        {/* Left: brand only */}
        <div className="portfolio-nav__left">
          <a className="portfolio-brand" href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); onNavigate?.("top"); }}>
            <img src="../../assets/sin-cen-icon.png" alt="" />
            <span className="portfolio-brand__wd">星辰 · Sharinna</span>
          </a>
        </div>

        {/* Right: nav links */}
        <ul className="portfolio-nav__links">
          {items.map(it => (
            <li key={it.id}>
              <a
                href={it.id !== "about" ? `#${it.id}` : "#"}
                className={active === it.id ? "is-active" : ""}
                onClick={(e) => { e.preventDefault(); handleNav(it.id); }}
              >
                {it.label}
              </a>
            </li>
          ))}
          <li className="portfolio-nav__mobile-cta">
            <button className="portfolio-nav__cta" onClick={() => { setMenuOpen(false); onChat?.(); }}>ＡＩ聊聊</button>
          </li>
        </ul>

        <button className="portfolio-nav__cta portfolio-nav__cta--desktop" onClick={() => onChat?.()}>
          ＡＩ聊聊
        </button>

        <button
          className={`nav-hamburger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="開啟選單"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
}

window.Navbar = Navbar;
