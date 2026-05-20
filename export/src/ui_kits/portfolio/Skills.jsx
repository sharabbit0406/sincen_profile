// Skills.jsx — three cert photo-slots with lightbox + tech-stack tag wall.
const { useState: useStateS } = React;

function Skills() {
  const [lightboxSrc, setLightboxSrc] = useStateS(null);

  const certs = window.CERTS.map(c => {
    // Bump these version suffixes to reset a wrong photo upload.
    const versions = {
      "iPAS AI 應用規劃師": "-v2",
      "Microsoft AI-900":   "-v2",
      "生成式 AI 能力認證":  ""
    };
    return {
      ...c,
      isLandscape: c.name.includes("AI-900"),
      slotId: "cert-" + c.name.replace(/\s+/g, "-") + (versions[c.name] || "")
    };
  });

  // Reach into the image-slot's shadow DOM to grab the rendered src.
  const openLightbox = (e) => {
    // If user clicked the slot's own Replace / Remove buttons (inside the
    // shadow DOM), let those handle the click — don't open the lightbox.
    const path = e.nativeEvent.composedPath ? e.nativeEvent.composedPath() : [];
    if (path.some(el => el && (el.tagName === "BUTTON" || (el.classList && el.classList.contains("ctl"))))) {
      return;
    }
    const slot = e.currentTarget.querySelector("image-slot");
    if (!slot || !slot.shadowRoot) return;
    if (!slot.hasAttribute("data-filled")) return; // empty slot — nothing to enlarge
    const img = slot.shadowRoot.querySelector(".frame img");
    if (img && img.src) setLightboxSrc(img.src);
  };

  return (
    <section id="skills" className="skills" data-screen-label="04 Skills">
      <div className="section__head">
        <div className="eyebrow">Skills &amp; Certifications</div>
        <h2>技術證照 <span className="section__head-en">/ The proof</span></h2>
        <p className="section__lede">
          每張卡片都是<b>真實證書</b>的位置 — 拖曳照片到框內，點擊放大查看。
        </p>
      </div>

      <div className="skills__books">
        {certs.map((c, i) => (
          <article
            className={`certbook certbook--${i % 2 ? "pink" : "sky"}`}
            key={c.name}
          >
            <div
              className="certbook__slot"
              onClick={openLightbox}
            >
              <image-slot
                id={c.slotId}
                shape="rounded"
                radius="10"
                fit={c.isLandscape ? "contain" : "cover"}
                placeholder={c.isLandscape ? `拖曳 ${c.name}（橫式證書）` : `拖曳 ${c.name} 證書照片`}
              ></image-slot>
            </div>
            <div className="certbook__info">
              <div className="certbook__info-left">
                <div className="certbook__name">{c.name}</div>
                <div className="certbook__issuer">{c.issuer}</div>
              </div>
              <div className="certbook__score-big">
                {c.score}<span className="certbook__score-lbl">分</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="skills__stack">
        <h3 className="skills__sub">技術棧 · Tech Stack</h3>
        <div className="skills__tags">
          {window.SKILLS.map(s => (
            <span className="skilltag" key={s.name}>{s.name}</span>
          ))}
        </div>
      </div>

      {lightboxSrc && <window.Lightbox src={lightboxSrc} alt="證書" onClose={() => setLightboxSrc(null)} />}
    </section>
  );
}

window.Skills = Skills;
