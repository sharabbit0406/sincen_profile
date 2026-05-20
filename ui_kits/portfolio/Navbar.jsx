// Navbar.jsx — sticky top nav with sky underline hover + mobile hamburger
const { useState, useEffect } = React;

function Navbar({ active = "about", onNavigate }) {
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
    { id: "learning", label: "學習歷程" },
    { id: "life",     label: "生活角落" },
    { id: "contact",  label: "聯絡我" }
  ];

  const handleNav = (id) => {
    setMenuOpen(false);
    onNavigate?.(id);
  };

  return (
    <nav className={`portfolio-nav ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="portfolio-nav__inner">
        <a className="portfolio-brand" href="#" onClick={(e) => { e.preventDefault(); handleNav("top"); }}>
          <img src="../../assets/sin-cen-icon.png" alt="" />
          <span className="portfolio-brand__wd">星辰 · Sharinna</span>
        </a>

        <ul className="portfolio-nav__links">
          {items.map(it => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={active === it.id ? "is-active" : ""}
                onClick={(e) => { e.preventDefault(); handleNav(it.id); }}
              >
                {it.label}
              </a>
            </li>
          ))}
          <li className="portfolio-nav__mobile-cta">
            <button className="portfolio-nav__cta" onClick={() => handleNav("contact")}>聊聊</button>
          </li>
        </ul>

        <button className="portfolio-nav__cta portfolio-nav__cta--desktop" onClick={() => handleNav("contact")}>
          聊聊
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
