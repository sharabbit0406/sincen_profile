const { useState } = React;

const CHAT_URL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
  ? "http://localhost:3000/widget/49f4225e-95b7-45e7-ab73-87df4dc9e7f1"
  : "https://faqrag-frontend-953754688378.us-central1.run.app/widget/49f4225e-95b7-45e7-ab73-87df4dc9e7f1";

const IconExpand = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
  </svg>
);
const IconCollapse = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3v5H3M21 8h-5V3M3 16h5v5M16 21v-5h5"/>
  </svg>
);
const IconClose = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
);

function ChatWindow({ open, onClose }) {
  const [loaded, setLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`chat-win ${open ? "is-open" : ""} ${expanded ? "is-expanded" : ""}`}
      role="dialog"
      aria-label="客服助理"
      aria-hidden={!open}
    >
      <div className="chat-win__toolbar">
        <button
          className="chat-win__tool-btn"
          onClick={() => setExpanded(v => !v)}
          aria-label={expanded ? "縮小聊天視窗" : "放大聊天視窗"}
          title={expanded ? "縮小" : "放大"}
        >
          {expanded ? <IconCollapse /> : <IconExpand />}
        </button>
        <button
          className="chat-win__tool-btn"
          onClick={onClose}
          aria-label="關閉聊天"
          title="關閉"
        >
          <IconClose />
        </button>
      </div>

      {(open || loaded) && (
        <iframe
          src={CHAT_URL}
          title="客服助理"
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}

window.ChatWindow = ChatWindow;
