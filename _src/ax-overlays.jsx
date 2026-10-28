/* ============================================================================
   ApostilleXpress — canonical overlay components (single source of truth)

   Load AFTER React and ax-overlays.css, BEFORE page scripts:
     <link rel="stylesheet" href="ax-overlays.css">
     <script type="text/babel" src="ax-overlays.jsx"></script>

   Exposes on window: AXModal, AXModalFoot, AXToasts, useAXToasts.
   Every new modal/dialog/confirmation and every notification MUST use these.
   Pages must not author their own scrim, modal shell, or toast styles.
   ========================================================================== */
const { useState, useCallback, useEffect } = React;

// Modal: title upper-left, X upper-right, divider under header, padded body,
// divider over footer, secondary-then-primary right-aligned actions.
function AXModal({ title, subtitle, size, onClose, children, footer, labelledBy }) {
  useEffect(() => {
    const onEsc = (e) => { if (e.key === "Escape" && onClose) onClose(); };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [onClose]);
  return (
    <div className="ax-scrim" onClick={onClose}>
      <div className={"ax-modal" + (size ? " " + size : "")} role="dialog" aria-modal="true" aria-label={labelledBy ? undefined : title} onClick={(e) => e.stopPropagation()}>
        <div className="ax-modal-head">
          <div>
            <h2 className="ax-modal-title">{title}</h2>
            {subtitle ? <p>{subtitle}</p> : null}
          </div>
          {onClose ? <button className="ax-modal-x" aria-label="Close" onClick={onClose}><i className="bi bi-x-lg"></i></button> : null}
        </div>
        <div className="ax-modal-body">{children}</div>
        {footer ? <div className="ax-modal-foot">{footer}</div> : null}
      </div>
    </div>
  );
}

const AX_TOAST_ICON = { success: "bi-check-circle", error: "bi-exclamation-circle-fill", warning: "bi-exclamation-triangle-fill", info: "bi-info-circle-fill" };

// Toast stack: haloed status icon, bold title, message, optional action links,
// close X on the right. kind: success | error | warning | info.
function AXToasts({ toasts, dismiss }) {
  return (
    <div className="ax-toasts">
      {(toasts || []).map((t) => (
        <div className={"ax-toast " + (t.kind || "success")} key={t.id} role="status">
          <i className={"ax-toast-ic bi " + (AX_TOAST_ICON[t.kind || "success"] || AX_TOAST_ICON.success)}></i>
          <div className="ax-toast-b">
            <div className="ax-toast-t">{t.title}</div>
            {t.body ? <div className="ax-toast-m">{t.body}</div> : null}
            <div className="ax-toast-acts">
              <button className="ax-toast-act" onClick={() => dismiss(t.id)}>Dismiss</button>
              {(t.actions || []).map((a) => (
                <button className="ax-toast-act link" key={a.label} onClick={() => { dismiss(t.id); a.onClick && a.onClick(); }}>{a.label}</button>
              ))}
            </div>
          </div>
          <button className="ax-toast-x" aria-label="Close notification" onClick={() => dismiss(t.id)}><i className="bi bi-x-lg"></i></button>
        </div>
      ))}
    </div>
  );
}

function useAXToasts(ttl) {
  const [toasts, setToasts] = useState([]);
  const dismiss = useCallback((id) => setToasts((l) => l.filter((t) => t.id !== id)), []);
  const push = useCallback((t) => {
    const id = Date.now() + Math.random();
    setToasts((l) => [...l, { id, kind: "success", ...t }]);
    if (ttl !== 0) setTimeout(() => dismiss(id), ttl || 6000);
    return id;
  }, [ttl, dismiss]);
  return { toasts, push, dismiss };
}

Object.assign(window, { AXModal, AXToasts, useAXToasts });
