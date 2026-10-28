# ApostilleXpress — Overlay Standards (modals & notifications)

`ax-overlays.css` + `ax-overlays.jsx` are the **single source of truth**. Every page loads the
stylesheet before its own `<style>` block; no page may define a scrim, modal shell, or toast style.

## Modal / dialog / confirmation standard

Anatomy (in this order, always):

1. `.ax-modal-head` — title upper-left (24px/700), close **X** upper-right, **divider below**
2. `.ax-modal-body` — 24px/28px padding, 16px body text, 18px between blocks and form fields
3. `.ax-modal-foot` — **divider above**, right-aligned actions: **secondary left, primary right**

Widths: `sm` 480 · default 560 · `lg` 720 · `xl` 880. Radius 16, soft shadow, 92vh max height,
body scrolls — header and footer stay fixed. Scrim: midnight 55% + 2px blur.

```jsx
<AXModal title="Change role" subtitle="Optional supporting line" size="sm" onClose={close}
  footer={<><Button variant="secondary" onClick={close}>Cancel</Button>
            <Button variant="primary" onClick={save}>Save Changes</Button></>}>
  …fields…
</AXModal>
```

Confirmations use the same component — no centered hero icons, no one-off padding.

## Notification / toast standard

Anatomy: haloed status icon → bold title → supporting message → optional action links →
close **X** on the right. White surface, radius 14, soft shadow, 420px stack top-right.

Kinds: `success` (green), `error` (red), `warning` (amber), `info` (freedom blue) — the halo and
icon are the only things that change; text stays neutral.

```jsx
const { toasts, push, dismiss } = useAXToasts();
push({ kind: "success", title: "Successfully updated information",
       body: "Your changes have been saved.", actions: [{ label: "View Profile", onClick: go }] });
<AXToasts toasts={toasts} dismiss={dismiss} />
```

## Governance

- New overlays: use `AXModal` / `AXToasts`. Never hand-roll a scrim, dialog shell, or toast.
- Legacy class names (`.scrim`, `.modal*`, `.confirm*`, `.toast*`, `.t-*`) are aliased to the
  canonical rules inside `ax-overlays.css` so older markup renders to standard. Aliases are
  frozen — do not add new ones; migrate markup to `.ax-*` instead.
- Any page-level rule that redefines an overlay selector is a defect: delete it and use a
  variant class (`sm`/`lg`/`xl`, `success`/`error`/`warning`/`info`) instead.
- Audited and standardized: CreateOrder (delivery comparison, cancel, document preview, toasts),
  OrderDetails (resend, confirm, toasts), TeamManagement (invite, change role, resend, revoke,
  remove, toasts), Profile (edit profile, password, toasts).
