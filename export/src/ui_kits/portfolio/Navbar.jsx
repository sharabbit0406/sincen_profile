// Navbar.jsx — sticky top nav with sky underline hover
const { useState, useEffect } = React;

function Navbar({ active = "about", onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60 || (document.querySelector(".portfolio-scroller")?.scrollTop ?? 0) > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll, true);
  }, []);

  const items = [
    { id: "about",    label: "關於我" },
    { id: "projects", label: "專案實作" },
    { id: "skills",   label: "技術證照" },
    { id: "life",     label: "生活角落" },
    { id: "contact",  label: "聯絡我" }
  ];

  return (
    <nav className={`portfolio-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="portfolio-nav__inner">
        <a className="portfolio-brand" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.("top"); }}>
          <img src="../../assets/logo-mark.svg" alt="" />
          <span className="portfolio-brand__wd">星辰 · Sin-Cen</span>
        </a>
        <ul className="portfolio-nav__links">
          {items.map(it => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={active === it.id ? "is-active" : ""}
                onClick={(e) => { e.preventDefault(); onNavigate?.(it.id); }}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="portfolio-nav__cta" onClick={() => onNavigate?.("contact")}>
          聊聊
        </button>
      </div>
    </nav>
  );
}

window.Navbar = Navbar;
