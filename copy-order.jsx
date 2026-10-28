(function(){
const { useState, useEffect, useRef } = React;
const { Button, Badge: DSBadge, Alert, Tabs, Drawer, FormField, Input, Select, FileUpload, IconButton } = window.ApostilleXpressDesignSystem_141fbe;
const rid = () => Math.random().toString(36).slice(2, 8);
const svc = (s) => s === "sameday" ? "Same-Day" : s === "express" ? "Express" : "Standard";
const MAX_DEFAULT = 34;

function CopyOrderButton({ origin, disabled }) {
  return (
    <div className="co-copy">
      <Button variant="secondary" size="lg" disabled={disabled} onClick={() => window.AX_startCopy({ origin })}>Copy Order</Button>
      <div className="co-cap">Maximum of 35 orders per session.</div>
    </div>);
}

function makeChild(ctx, form) {
  const d = form.docs || {}, it = ctx.item, b = it && it.copy ? it.copy : {};
  return {
    id: "c" + Date.now() + rid(), digital: ctx.digital, upload: ctx.upload,
    docType: b.docType || d.docType || "", docDesc: (it && it.docDesc) || b.docDesc || d.docDesc || "",
    destCountry: b.destCountry || d.destCountry || "", nameOnDoc: b.nameOnDoc || d.nameOnDoc || "",
    notes: "", file: null, needsReturn: !!(ctx.isBoth || ctx.isMail || (!ctx.digital && !ctx.inPerson)), isBoth: !!ctx.isBoth, provideSwitch: !!(ctx.digital && !ctx.inPerson && !ctx.isBoth), returnAddr: { ...((form.docs || {}).returnAddr || {}) }, addrSource: (form.docs || {}).addrSource || "profile", prepaidOpen: false, shippingTracking: "", adoption: it && it.adoption != null ? !!it.adoption : form.apostilleRequest === "adoption", adoptionAgency: (it && it.adoptionAgency) || form.adoptionAgency || "", serviceType: form.serviceType || "sameday", customer: { ...(form.customer || {}) },
    recipients: (form.recipients || []).map((r) => ({ ...r, id: "r" + rid() })),
    mailing: { ...(form.mailing || {}) }
  };
}
const MAIL_REQ = ["firstName", "lastName", "email", "addr1", "country", "state", "city", "zip"];
const needsMail = (k) => (!k.digital || k.isBoth) && (k.fulfilmentType === "usps" || k.fulfilmentType === "international");
const mailMissing = (k) => needsMail(k) && !MAIL_REQ.every((x) => ((k.mailing || {})[x] || "").trim());
const RA_REQ = ["firstName", "lastName", "addr1", "country", "state", "city", "zip"];
const statusOf = (k) => k.upload && !k.file ? "Upload missing" : !(k.docDesc && k.destCountry) || mailMissing(k) || (k.needsReturn && !RA_REQ.every((x) => ((k.returnAddr || {})[x] || "").trim())) ? "Incomplete" : "Ready";
const RA_SUB = "If we can\u2019t process your documents, we\u2019ll mail them back to this address at no cost (unless a prepaid shipping label was provided).";
const raProps = (k, patch, customer) => ({ d: { addrSource: k.addrSource, returnAddr: k.returnAddr, prepaidOpen: k.prepaidOpen, shippingTracking: k.shippingTracking || "" }, setD: (p) => patch(typeof p === "function" ? p({ returnAddr: k.returnAddr }) : p), customer: customer || {}, subtitle: RA_SUB, errors: {}, compact: true });
const Badge = ({ s }) => s === "Ready" ?
  <DSBadge color="success" pill size="lg"><i className="bi bi-check-circle-fill"></i>Ready</DSBadge> :
  <DSBadge color="danger" pill size="lg"><i className="bi bi-x-circle-fill"></i>{s}</DSBadge>;
const Tip = ({ t, children }) => <span className="co-tip" data-tip={t}>{children}</span>;
const Fmt = ({ children, color = "info" }) => <DSBadge color={color} pill size="lg">{children}</DSBadge>;
const Row = ({ label, badge, children }) => <div className="co-row" style={{ borderBottom: "1px solid #E9ECEF" }}><div className="co-rl">{label}{badge}</div><div className="co-rv">{children}</div></div>;
const Vals = ({ a }) => <React.Fragment>{a.filter(Boolean).map((x, i) => <span key={i}>{x}</span>)}</React.Fragment>;
const mkFile = (f) => ({ id: Date.now() + "-" + f.name + Math.random(), name: f.name, size: f.size, pct: 100, url: URL.createObjectURL(f), type: f.type });

const fmtBytes = (n) => !n ? "" : n >= 1048576 ? (n / 1048576).toFixed(1) + " MB" : n >= 1024 ? Math.round(n / 1024) + " KB" : n + " B";
const UploadField = ({ f, onFile, onRemove }) => <FileUpload hint="PDF, JPEG, TIFF (Files cannot exceed 10MB)" files={f ? [{ name: f.name, size: fmtBytes(f.size), status: "done" }] : []} onSelect={(fl) => { if (fl && fl[0]) onFile(mkFile(fl[0])); }} onRemove={onRemove} />;

function custInfo(form, k) { const c = (k && k.customer) || form.customer || {}; return [((c.firstName || "") + " " + (c.lastName || "")).trim(), c.email, c.organization]; }
function orderInfo(k, form, inPerson) {
  return [form.state && form.state.name, inPerson ? "In-Person (Appointment)" : k.adoption ? "Adoption Document" : "Standard Document", k.digital ? "Electronic Delivery" : "Traditional Delivery", svc(k.serviceType || form.serviceType)];
}

function CopyOrderScreen({ ctx, form, onCancel, onDone, stateRef, initial }) {
  const startNo = ctx.item ? ctx.existing : ctx.existing + 1;
  const maxCopies = ctx.cap != null ? ctx.cap : ctx.isBoth ? 16 : MAX_DEFAULT;
  const [kids, setKids] = useState(() => initial && initial.kids && initial.kids.length ? initial.kids : [makeChild(ctx, form)]);
  const [open, setOpen] = useState(() => initial && initial.kids && initial.kids.length ? { [initial.kids[initial.kids.length - 1].id]: true } : {});
  if (stateRef) stateRef.current = { kids, open };
  useEffect(() => { if (!initial || !initial.kids || initial.kids.length < 2) return; const last = initial.kids[initial.kids.length - 1]; setTimeout(() => { const el = cardRefs.current[last.id]; if (el) window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.pageYOffset - 96), behavior: "smooth" }); }, 250); }, []);
  const [editId, setEditId] = useState(null);
  const [preview, setPreview] = useState(false);
  const [txt, setTxt] = useState(null);
  const [maxErr, setMaxErr] = useState(false);
  const [delId, setDelId] = useState(null), [sel, setSel] = useState([]), [delMulti, setDelMulti] = useState(false);
  const prevLen = useRef(kids.length), cardRefs = useRef({});
  useEffect(() => {
    if (kids.length > prevLen.current) {
      const last = kids[kids.length - 1], el = last && cardRefs.current[last.id];
      if (el) setTimeout(() => { const top = el.getBoundingClientRect().top + window.pageYOffset - 96; window.scrollTo({ top: Math.max(0, top), behavior: "smooth" }); }, 60);
    }
    prevLen.current = kids.length;
  }, [kids.length]);
  const setCount = (n) => {
    n = Math.max(0, Math.min(maxCopies, n));
    if (n <= kids.length) { setKids((a) => a.slice(0, n)); return; }
    const added = Array.from({ length: n - kids.length }, () => makeChild(ctx, form));
    setOpen((o) => ({ ...Object.fromEntries(kids.map((k) => [k.id, false])), ...Object.fromEntries(added.map((k, i) => [k.id, i === added.length - 1])) }));
    setKids((a) => [...a, ...added]);
  };
  const [copyId, setCopyId] = useState(null), [copyN, setCopyN] = useState(1);
  const room = maxCopies - kids.length;
  const dupKid = (id, n) => {
    n = Math.min(n, maxCopies - kids.length);
    if (n < 1) { setMaxErr(true); return; }
    setMaxErr(false); setTxt(null);
    const i = kids.findIndex((x) => x.id === id), src = kids[i];
    const nks = Array.from({ length: n }, () => ({ ...src, id: "c" + Date.now() + rid(), file: null, recipients: src.recipients.map((r) => ({ ...r, id: "r" + rid() })), mailing: { ...(src.mailing || {}) }, customer: src.customer ? { ...src.customer } : src.customer, returnAddr: src.returnAddr ? { ...src.returnAddr } : src.returnAddr }));
    setKids((a) => [...a.slice(0, i + 1), ...nks, ...a.slice(i + 1)]);
    setOpen((o) => ({ ...Object.fromEntries(kids.map((x) => [x.id, false])), [nks[nks.length - 1].id]: true }));
  };
  const patchKid = (id, p) => setKids((a) => a.map((k) => k.id === id ? { ...k, ...p } : k));
  const toggle = (id) => setOpen(() => ({ ...Object.fromEntries(kids.map((x) => [x.id, false])), [id]: !isOpen(id) }));
  const isOpen = (id) => id in open ? open[id] : !!(kids[0] && kids[0].id === id);
  const allOpen = kids.length > 0 && kids.every((k) => isOpen(k.id));
  const setAll = (v) => setOpen(Object.fromEntries(kids.map((k) => [k.id, v])));
  const ready = kids.filter((k) => statusOf(k) === "Ready").length;
  const can = kids.length > 0 && ready === kids.length;
  const label = (i) => "Document " + (startNo + i + 1);
  const finish = () => onDone(kids.map((k, i) => ({ ...k, no: startNo + i + 1 })));
  const inPerson = ctx.inPerson;
  const editing = kids.find((k) => k.id === editId);
  return (
    <main className="page co-page" data-screen-label="Copy Order">
      <h1 className="page-title">Copy Order</h1>
      <p className="page-sub" style={{ marginBottom: 20 }}>Everything is copied from your previous order. Change anything that{"\u2019"}s different.</p>
      {kids.length > 0 ?
      <div className="co-bar">
        <div><div className="co-bt">Orders being added</div><div className="co-count"><b>{ready} of {kids.length}</b> ready{ctx.isMail ? " \u2022 original documents are sent by mail for each copy" : ""}{ctx.isBoth ? " \u2022 a paper copy is created automatically for each digital copy" : ""}{ctx.upload ? " \u2022 each copy needs its own uploaded document" : ctx.inPerson ? " \u2022 bring the original document for each copy to your appointment" : ""}</div></div><div className="co-mix"><DSBadge color="info" pill size="lg"><b>{kids.filter((k) => k.digital).length}</b> Digital</DSBadge><DSBadge color="warning" pill size="lg"><b>{kids.filter((k) => !k.digital || k.isBoth).length}</b> Paper</DSBadge></div><div className="co-big">{kids.length}<span className="co-of">/35</span></div>
              </div> : null}
            {sel.length > 0 ? <div className="co-selbar"><label className="co-selall"><input type="checkbox" checked={sel.length === kids.length} ref={(el) => { if (el) el.indeterminate = sel.length > 0 && sel.length < kids.length; }} onChange={(e) => setSel(e.target.checked ? kids.map((k) => k.id) : [])} />{sel.length + " selected"}</label></div> : null}
      <div className="co-list">
        {kids.length === 0 ? <div className="co-more"><b>No copies yet</b>Start over from your previous order to create copies.</div> : null}
        {kids.map((k, i) => {
          const st = statusOf(k), o = isOpen(k.id);
          const countries = [...new Set([k.destCountry, ...k.recipients.slice(1).map((r) => r.destCountry)].filter(Boolean))];
          const m = k.mailing || {};
          return (
            <div className={"co-card" + (o ? " open" : "")} key={k.id} ref={(el) => { if (el) cardRefs.current[k.id] = el; }}>
              <div className="co-head" onClick={() => toggle(k.id)}>
                <label className="co-sel" onClick={(e) => e.stopPropagation()}><input type="checkbox" aria-label={"Select " + label(i)} checked={sel.includes(k.id)} onChange={(e) => setSel((a) => e.target.checked ? [...a, k.id] : a.filter((x) => x !== k.id))} /></label>
                <div className="co-title"><span className="t">{label(i)} {"\u2022"} {k.docDesc || "Document"}</span><span className="co-badges"><Badge s={st} /><Fmt color={!ctx.isBoth && !k.digital ? "warning" : "info"}>{ctx.isBoth ? "Digital + Paper" : k.digital ? "Digital" : "Paper"}</Fmt>{k.adoption ? <Fmt>Adoption</Fmt> : null}</span></div>
                <div className="co-acts" onClick={(e) => e.stopPropagation()}>
                  <Tip t={room < 1 ? "Maximum copies reached" : "Copy this order"}><IconButton className="co-ib" variant="secondary" size="sm" label="Copy this order" icon={<i className="bi bi-copy"></i>} disabled={room < 1} onClick={() => { setCopyN(1); setCopyId(k.id); }} /></Tip>
                  <Tip t="Edit order"><IconButton className="co-ib" variant="secondary" size="sm" label="Edit order" icon={<i className="bi bi-pencil-square"></i>} onClick={() => setEditId(k.id)} /></Tip>
                  <Tip t="Delete order"><IconButton className="co-ib del" variant="secondary" size="sm" label="Delete order" icon={<i className="bi bi-trash"></i>} onClick={() => setDelId(k.id)} /></Tip>
                </div>
                <div className="co-chevwrap" onClick={(e) => e.stopPropagation()}><Tip t={o ? "Collapse" : "Expand"}><IconButton className="co-ib" variant="tertiary" size="sm" label={o ? "Collapse" : "Expand"} icon={<i className="bi bi-chevron-up co-chev" style={{ transform: o ? "none" : "rotate(180deg)" }}></i>} onClick={() => toggle(k.id)} /></Tip></div>
              </div>
              {o ?
              <div className="co-body">
                <Row label="Customer Information"><Vals a={custInfo(form, k)} /></Row>
                <Row label="Order Information"><Vals a={orderInfo(k, form, inPerson)} /></Row>
                {k.digital ? <Row label="Recipient Information"><Vals a={[k.recipients.length + " Recipient(s)", countries.join(", ")]} /></Row> : null}
                <div className="co-row" style={{ borderBottom: "1px solid #E9ECEF" }}><div className="co-rl">Document Information</div><div className="co-rv"><Vals a={[k.docType, k.docDesc, k.destCountry]} /></div></div>
                {needsMail(k) ? <Row label="Mailing Information" badge={mailMissing(k) ? <Badge s="Mailing info missing" /> : null}><Vals a={[((m.firstName || "") + " " + (m.lastName || "")).trim(), m.email, m.organization, [m.city, m.state].filter(Boolean).join(", "), m.country]} /></Row> : null}
                {k.upload ?
                <div className="co-form">
                  <F label="Upload document" req><UploadField f={k.file} onFile={(f) => patchKid(k.id, { file: f })} onRemove={() => patchKid(k.id, { file: null })} />{!k.file ? <UpErr /> : null}</F>
                </div> : null}
              </div> : null}
            </div>);
        })}
      </div>
      <div className="co-dock">
        {maxErr || kids.length >= maxCopies ? <div className="co-err" role="alert"><i className="bi bi-exclamation-circle-fill"></i>Maximum of 35 orders reached.</div> : null}
        {sel.length ? <div className="co-bulk" role="region" aria-label="Bulk actions"><span className="co-bulk-n"><b>{sel.length}</b> selected</span><Button variant="tertiary" size="md" onClick={() => setSel(sel.length === kids.length ? [] : kids.map((k) => k.id))}>{sel.length === kids.length ? "Deselect all" : "Select all"}</Button><span className="co-bulk-sp"></span><Button variant="tertiary" size="md" onClick={() => setSel([])}>Clear</Button><Button variant="danger" size="md" onClick={() => setDelMulti(true)}><i className="bi bi-trash" style={{ marginRight: 6 }}></i>{"Delete (" + sel.length + ")"}</Button></div> : null}
        <div className="co-dock-in">
          <Button variant="tertiary" size="lg" onClick={onCancel}>Cancel</Button>
          {kids.length > 0 ? <div className="co-dock-mid"><label>Add additional copies</label>
            <div className="stepper">
              <button aria-label="Fewer copies" onClick={() => setKids((a) => a.slice(0, -1))} disabled={kids.length <= 1}>{"\u2014"}</button>
              <input className="val co-num" type="text" inputMode="numeric" aria-label="Additional Apostille Copies" value={kids.length} onFocus={(e) => e.target.select()} onChange={(e) => { const v = parseInt(e.target.value.replace(/\D/g, "").slice(0, 3), 10); if (isNaN(v)) return; const n = Math.max(1, Math.min(maxCopies, v)); if (n > kids.length) dupKid(kids[kids.length - 1].id, n - kids.length); else setKids((a) => a.slice(0, n)); }} />
              <button aria-label="More copies" onClick={() => dupKid(kids[kids.length - 1].id, 1)} disabled={room < 1}>+</button>
            </div>
          </div> : null}
          {can ? <Button variant="primary" size="lg" disabled={!can} onClick={() => kids.some((k) => k.upload) ? setPreview(true) : finish()}>{kids.some((k) => k.upload) ? "Preview Document & Continue" : "Checkout"}</Button> : <Tip t={"Complete the missing information on " + (kids.length - ready) + " order" + (kids.length - ready === 1 ? "" : "s") + " to continue"}><Button variant="primary" size="lg" disabled={!can} onClick={() => kids.some((k) => k.upload) ? setPreview(true) : finish()}>{kids.some((k) => k.upload) ? "Preview Document & Continue" : "Checkout"}</Button></Tip>}
        </div>
      </div>
      {copyId ? <window.AXModal title="Copy this order" subtitle={`You can add up to ${room} more (maximum ${ctx.isBoth ? 16 : 35} per order).`} onClose={() => setCopyId(null)} footer={<React.Fragment><Button variant="secondary" size="md" onClick={() => setCopyId(null)}>Cancel</Button><Button variant="primary" size="md" onClick={() => { dupKid(copyId, copyN); setCopyId(null); }}>{`Create Copies (${copyN})`}</Button></React.Fragment>}>
        <div className="co-mrow"><label>How many additional copies do you want to create?</label>
          <div className="stepper">
            <button aria-label="Fewer copies" onClick={() => setCopyN((n) => Math.max(1, n - 1))} disabled={copyN <= 1}>{"\u2014"}</button>
            <input className="val co-num" type="text" inputMode="numeric" aria-label="Additional copies" value={copyN} onFocus={(e) => e.target.select()} onChange={(e) => { const v = parseInt(e.target.value.replace(/\D/g, "").slice(0, 3), 10); setCopyN(isNaN(v) ? 1 : Math.max(1, Math.min(room, v))); }} />
            <button aria-label="More copies" onClick={() => setCopyN((n) => Math.min(room, n + 1))} disabled={copyN >= room}>+</button>
          </div>{copyN >= room ? <div className="co-ferr" role="alert" style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--ax-danger-700)" }}><i className="bi bi-exclamation-circle-fill" style={{ color: "var(--ax-danger-500)" }}></i><span style={{ color: "var(--ax-danger-700)" }}>Maximum of {ctx.isBoth ? 16 : 35} orders reached.</span></div> : null}</div>
      </window.AXModal> : null}
      {delMulti ? <window.DeleteOrderModal count={sel.length} onClose={() => setDelMulti(false)} onConfirm={() => { setKids((a) => a.filter((x) => !sel.includes(x.id))); setSel([]); setDelMulti(false); setMaxErr(false); setTxt(null); }} /> : null}
      {delId ? <window.DeleteOrderModal onClose={() => setDelId(null)} onConfirm={() => { setKids((a) => a.filter((x) => x.id !== delId)); setSel((s) => s.filter((x) => x !== delId)); setDelId(null); setMaxErr(false); setTxt(null); }} /> : null}
      {preview ? <window.PreviewModal confirmLabel="Checkout" files={kids.map((k, i) => k.file && { ...k.file, name: label(i) + " \u2022 " + (k.docDesc || "Document") + " \u2014 " + k.file.name }).filter(Boolean)} onClose={() => setPreview(false)} onConfirm={() => { setPreview(false); finish(); }} /> : null}
      {editing ? <EditOrderPanel child={editing} form={form} title={label(kids.indexOf(editing)) + " \u2022 Copied from Document " + ctx.parentNo} inPerson={inPerson} onSave={(c) => { patchKid(c.id, c); setEditId(null); }} onClose={() => setEditId(null)} /> : null}
    </main>);
}

const F = ({ label, req, children }) => <FormField label={label} required={!!req}>{children}</FormField>;
const UpErr = () => <div className="co-ferr" role="alert" style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}><i className="bi bi-exclamation-circle-fill" style={{ color: "var(--ax-danger-500)" }}></i><span style={{ color: "var(--ax-danger-700)" }}>Document file is missing. Upload a file to continue.</span></div>;
const In = ({ v, on, ph, type }) => <Input type={type || "text"} value={v || ""} placeholder={ph} onChange={(e) => on(e.target.value)} />;
const Sel = ({ v, on, opts, ph }) => <Select value={v || ""} onChange={(e) => on(e.target.value)}><option value="">{ph}</option>{opts.map((o) => <option key={o} value={o}>{o}</option>)}</Select>;

function makeEditable(it, form) {
  const d = form.docs || {}, dm = it.deliveryMethod || form.deliveryMethod, dig = dm === "electronic", wi = it.walkIn != null ? it.walkIn : false;
  return {
    id: it.id, digital: dig, upload: dig && !wi, isBoth: !!it.both, needsReturn: !!(it.both || (!dig && !wi)), provideSwitch: false,
    docType: d.docType || "", docDesc: it.docDesc || d.docDesc || "", destCountry: d.destCountry || "", nameOnDoc: d.nameOnDoc || "", notes: "", file: (dig && !wi && !it.needsUpload) ? (((d.files || []).find((f) => String(f.name).replace(/\.[^.]+$/, "") === it.name)) || { id: it.id, name: it.name + ".pdf", size: 0, type: "application/pdf" }) : null,
    adoption: it.adoption != null ? !!it.adoption : form.apostilleRequest === "adoption", adoptionAgency: it.adoptionAgency || form.adoptionAgency || "",
    serviceType: it.serviceType || form.serviceType || "sameday", fulfilmentType: it.fulfilmentType || form.fulfilmentType || "", trackingNumber: it.trackingNumber || form.trackingNumber || "", customer: { ...(form.customer || {}) },
    recipients: (form.recipients || []).map((r) => ({ ...r, id: r.id || "r" + rid() })), mailing: { ...(form.mailing || {}) },
    returnAddr: { ...(d.returnAddr || {}) }, addrSource: d.addrSource || "profile", prepaidOpen: false, shippingTracking: ""
  };
}
function EditOrderPanel({ child, form, title, inPerson, onSave, onClose, orderEditable }) {
  const [d, setD] = useState(() => ({ ...child, customer: { ...(form.customer || {}), ...(child.customer || {}) }, serviceType: child.serviceType || form.serviceType || "sameday", adoption: child.adoption != null ? child.adoption : form.apostilleRequest === "adoption" }));
  const set = (p) => setD((x) => ({ ...x, ...p }));
  const showMail = needsMail(d);
  const tabs = [["ord", "Order Info"], ["cust", "Customer Info"], ["doc", "Document Info"], ...(d.digital ? [["rec", "Recipient Info"]] : []), ...(showMail ? [["mail", "Mailing Info"]] : [])];
  const [tab, setTab] = useState("ord");
  const [noteOff, setNoteOff] = useState(false), [upOff, setUpOff] = useState(false);
  const goUpload = () => { setTab("doc"); setTimeout(() => { const el = document.getElementById("co-upload"); if (!el) return; let p = el.parentElement; while (p && p.scrollHeight <= p.clientHeight + 1) p = p.parentElement; if (p) p.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top - p.getBoundingClientRect().top + p.scrollTop - 80), behavior: "smooth" }); const b = el.querySelector("button,input"); if (b) b.focus({ preventScroll: true }); }, 80); };
  useEffect(() => { if (tab === "mail" && !showMail) setTab("ord"); }, [showMail]);
  useEffect(() => { const k = (e) => { if (e.key === "Escape") onClose(); }; document.addEventListener("keydown", k); return () => document.removeEventListener("keydown", k); }, []);
  const descOpts = d.docType ? (window.DOC_TYPES[d.docType] || []) : [];
  const setRec = (id, p) => set({ recipients: d.recipients.map((r) => r.id === id ? { ...r, ...p } : r) });
  const setMail = (p) => set({ mailing: { ...d.mailing, ...p } });
  const clearMail = () => setMail({ firstName: "", lastName: "", phone: "", email: "", organization: "", title: "", addr1: "", addr2: "", country: "", state: "", city: "", zip: "" });
  const copyProfile = () => { const u = window.USER_PROFILE || {}, a = window.PROFILE_ADDRESS || {}; setMail({ firstName: u.firstName || "", lastName: u.lastName || "", email: u.email || "", phone: u.phone || "", organization: u.organization || "", addr1: a.addr1 || "", country: a.country || "", state: a.state || "", city: a.city || "", zip: a.zip || "" }); };
  const m = d.mailing || {}, c = d.customer || {};
  const [addrOpen, setAddrOpen] = useState(() => !child.digital || ["addr1", "addr2", "city", "zip", "country", "state"].some((k) => (child.customer && child.customer[k]) || (form.customer && form.customer[k])));
  const addrShown = addrOpen;
  const setCust = (p) => set({ customer: { ...d.customer, ...p } });
  const addRec = () => d.recipients.length < 11 && set({ recipients: [...d.recipients.map((x) => ({ ...x, collapsed: true })), window.blankRecipient("r" + Date.now() + rid())] });
  const setMethod = (v) => set({ digital: v === "electronic", upload: v === "electronic" && !inPerson });
  const raMissing = !!d.needsReturn && !RA_REQ.every((x) => ((d.returnAddr || {})[x] || "").trim());
  const valid = !raMissing && d.docType && d.docDesc && d.destCountry && !mailMissing(d) && (!d.upload || d.file) && (!d.adoption || (d.adoptionAgency || "").trim()) && !((!d.digital || d.isBoth) && (!d.fulfilmentType || d.fulfilmentType === "prepaid-label" && !(d.trackingNumber || "").trim()) && true) && !((!d.digital || d.isBoth) && d.fulfilmentType === "prepaid-label" && !(d.trackingNumber || "").trim());
  return (
    <Drawer open onClose={onClose} width={620} className="co-drawer" title={<span style={{ display: "block" }}>Edit Order<span className="co-sub">{title}</span></span>} footer={<React.Fragment><Button variant="tertiary" size="lg" onClick={onClose}>Cancel</Button><Button variant="primary" size="lg" disabled={!valid} onClick={() => onSave(d)}>Save Changes</Button></React.Fragment>}>
      <Tabs variant="pill" className="co-tabs" value={tab} onChange={setTab} tabs={tabs.map(([id, l]) => ({ value: id, label: l, icon: ((id === "mail" && mailMissing(d)) || (id === "doc" && d.upload && !d.file)) ? <i className="bi bi-exclamation-circle-fill co-warn" title={id === "doc" ? "Document file is missing" : "Mailing info missing"}></i> : (id === "doc" && raMissing) ? <i className="bi bi-exclamation-circle-fill co-warn" title="Return address missing"></i> : null }))} />
        <div className="co-pb" style={tab === "rec" ? { gap: 0 } : undefined}>
          {tab === "doc" ? <React.Fragment>
            <F label="Name on Document or Entity"><In v={d.nameOnDoc} on={(v) => set({ nameOnDoc: v })} ph="Enter name on document" /></F>
            <div className="fg2">
              <F label="Document Type" req><Sel v={d.docType} on={(v) => set({ docType: v, docDesc: "" })} opts={Object.keys(window.DOC_TYPES)} ph="Select document type" /></F>
              <F label="Document Description" req>{d.docType === "Other" ? <In v={d.docDesc} on={(v) => set({ docDesc: v })} ph="Enter description" /> : <Sel v={d.docDesc} on={(v) => set({ docDesc: v })} opts={descOpts} ph={d.docType ? "Select description" : "Select type first"} />}</F>
            </div>
            <F label="Destination Country" req><Sel v={d.destCountry} on={(v) => set({ destCountry: v })} opts={window.DEST_COUNTRIES} ph="Select Country" /></F>
            {raMissing ? <Alert kind="danger" title="Return address is missing.">Paper orders need a return address. Complete the required fields below.</Alert> : null}
            {d.needsReturn ? <window.ReturnAddressSection {...raProps(d, set, form.customer)} /> : null}
            {d.upload ? <div id="co-upload"><F label="Upload document" req><UploadField f={d.file} onFile={(f) => set({ file: f })} onRemove={() => set({ file: null })} />{!d.file ? <UpErr /> : null}</F></div> : null}
          </React.Fragment> : null}
          {tab === "rec" ? d.recipients.map((r, i) => {
            const name = ((r.firstName || "") + " " + (r.lastName || "")).trim();
            const tg = () => setRec(r.id, { collapsed: !r.collapsed });
            return r.collapsed ?
            <div className="rcpt-collapsed" key={r.id} onClick={tg} role="button" tabIndex={0} onKeyDown={(ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); tg(); } }}>
              <button className="rcpt-chev" aria-label="Expand"><i className="bi bi-chevron-right"></i></button>
              <div className="cinfo"><div className="cname">Recipient #{i + 1}</div><div className="cmeta">{[name || "\u2014", r.email, i > 0 ? r.destCountry : ""].filter(Boolean).join("  \u2022  ")}</div></div>
            </div> :
            <div className="rcpt-card" key={r.id}>
              <div className="rcpt-head">
                <button className="rcpt-chev" aria-label="Collapse" onClick={tg}><i className="bi bi-chevron-down"></i></button>
                <span className="rcpt-title">Recipient #{i + 1}</span>
                {i > 0 ? <button className="rcpt-del" aria-label="Delete recipient" onClick={() => set({ recipients: d.recipients.filter((x) => x.id !== r.id) })}><i className="bi bi-trash"></i></button> : null}
              </div>
              <window.RecipientForm r={r} idx={i} onChange={(p) => setRec(r.id, p)} errors={{}} />
            </div>;
          }) : null}
          {tab === "rec" ? <button className="addbtn" disabled={d.recipients.length >= 11} onClick={addRec}><i className="bi bi-plus-lg"></i>Add Recipient</button> : null}
          {tab === "mail" ? <React.Fragment>
            {mailMissing(d) ? <div className="co-redbar" role="alert"><i className="bi bi-x-circle-fill"></i><div><div className="co-redbar-t">Mailing information is missing.</div><div>Paper apostilles are mailed to this address. Complete the required fields below.</div></div></div> : null}
            <div className="actionbar"><Button variant="primary" size="md" onClick={copyProfile}>Use My Profile Information</Button><button type="button" className="linkbtn" disabled={!Object.values(m).some((v) => (v || "").toString().trim())} onClick={clearMail}>Clear Fields</button></div>
            <div className="fg2"><F label="First Name" req><In v={m.firstName} on={(v) => setMail({ firstName: v })} ph="Enter first name" /></F><F label="Last Name" req><In v={m.lastName} on={(v) => setMail({ lastName: v })} ph="Enter last name" /></F></div>
            <div className="fg2"><F label="Email" req><In type="email" v={m.email} on={(v) => setMail({ email: v })} ph="Enter email" /></F><F label="Phone Number"><In type="tel" v={m.phone} on={(v) => setMail({ phone: v })} ph="Enter phone number" /></F></div>
            <F label="Organization"><In v={m.organization} on={(v) => setMail({ organization: v })} ph="Enter organization" /></F>
            <F label="Address Line 1" req><In v={m.addr1} on={(v) => setMail({ addr1: v })} ph="Enter address line 1" /></F>
            <div className="fg2"><F label="Country" req><Sel v={m.country} on={(v) => setMail({ country: v, state: "" })} opts={window.COUNTRIES} ph="Select country" /></F><window.StateField country={m.country} required value={m.state || ""} onChange={(v) => setMail({ state: v })} /></div>
            <div className="fg2"><F label="City" req><In v={m.city} on={(v) => setMail({ city: v })} ph="Enter city" /></F><F label="Zip Code" req><In v={m.zip} on={(v) => setMail({ zip: v })} ph="Enter zip code" /></F></div>
          </React.Fragment> : null}
          {tab === "ord" ? <React.Fragment>
            {d.upload && !d.file && !upOff ? <div className="co-notice" role="alert"><span className="co-notice-ic"><i className="bi bi-exclamation-circle"></i></span><div className="co-notice-body"><div className="co-notice-t">Document upload needed</div><div className="co-notice-d">Digital (e-Apostille) orders need their own uploaded document before you can continue.</div><div className="co-notice-a"><button type="button" className="co-nbtn" onClick={() => setUpOff(true)}>Dismiss</button><button type="button" className="co-nbtn go" onClick={goUpload}>Upload document</button></div></div><button type="button" className="co-notice-x" aria-label="Dismiss" onClick={() => setUpOff(true)}><i className="bi bi-x-lg"></i></button></div> : null}
            {mailMissing(d) && !noteOff ? <div className="co-notice" role="alert"><span className="co-notice-ic"><i className="bi bi-exclamation-circle"></i></span><div className="co-notice-body"><div className="co-notice-t">Mailing address needed</div><div className="co-notice-d">{d.isBoth ? "Both Formats" : "Traditional Delivery"} includes a paper apostille, so we need an address to mail it to.</div><div className="co-notice-a"><button type="button" className="co-nbtn" onClick={() => setNoteOff(true)}>Dismiss</button><button type="button" className="co-nbtn go" onClick={() => setTab("mail")}>Add mailing info</button></div></div><button type="button" className="co-notice-x" aria-label="Dismiss" onClick={() => setNoteOff(true)}><i className="bi bi-x-lg"></i></button></div> : null}
            <F label="Apostille Request"><Sel v={d.adoption ? "Adoption Document" : "Regular Documents"} on={(v) => set({ adoption: v === "Adoption Document" })} opts={["Regular Documents", "Adoption Document"]} ph="Select" /></F>
            {d.adoption ? <F label="Adoption Agency" req><In v={d.adoptionAgency} on={(v) => set({ adoptionAgency: v })} ph="Enter adoption agency" /></F> : null}
            <F label="Delivery Method"><Sel v={d.isBoth ? "Both Formats" : d.digital ? "Digital (e-Apostille)" : "Traditional Delivery"} on={(v) => set(v === "Both Formats" ? { isBoth: true, digital: true, upload: false, needsReturn: true, fulfilmentType: d.fulfilmentType || "usps" } : v === "Digital (e-Apostille)" ? { isBoth: false, digital: true, needsReturn: false, upload: !inPerson } : { isBoth: false, digital: false, upload: false, needsReturn: !inPerson, fulfilmentType: d.fulfilmentType || "usps" })} opts={["Digital (e-Apostille)", "Traditional Delivery"].concat(window.AX_F && window.AX_F.noBoth && !d.isBoth ? [] : ["Both Formats"])} ph="Select" /></F>
            {(!d.digital || d.isBoth) && !inPerson && window.FULFILMENT ? <React.Fragment><F label="Fulfilment Type" req><Sel v={((window.FULFILMENT.find((f) => f.id === d.fulfilmentType)) || {}).title || ""} on={(v) => { const f = window.FULFILMENT.find((x) => x.title === v); set({ fulfilmentType: f ? f.id : "", trackingNumber: f && f.id === "prepaid-label" ? d.trackingNumber : "" }); }} opts={window.FULFILMENT.map((f) => f.title)} ph="Select fulfilment type" /></F>{d.fulfilmentType === "prepaid-label" ? <F label="Tracking Number" req><In v={d.trackingNumber} on={(v) => set({ trackingNumber: v })} ph="e.g. 1Z999AA10123456784" /></F> : null}</React.Fragment> : null}
            <F label="Service Type"><Sel v={svc(d.serviceType)} on={(v) => set({ serviceType: v === "Same-Day" ? "sameday" : v === "Express" ? "express" : "standard" })} opts={["Same-Day"]} ph="Select" /></F>
          </React.Fragment> : null}
          {tab === "cust" ? <React.Fragment>
            <div className="fg2"><F label="First Name" req><In v={c.firstName} on={(v) => setCust({ firstName: v })} ph="Enter first name" /></F><F label="Last Name" req><In v={c.lastName} on={(v) => setCust({ lastName: v })} ph="Enter last name" /></F></div>
            <div className="fg2"><F label="Email" req><In type="email" v={c.email} on={(v) => setCust({ email: v })} ph="Enter email" /></F><F label="Phone Number"><In type="tel" v={c.phone} on={(v) => setCust({ phone: v })} ph="Enter phone number" /></F></div>
            <div className="fg2"><F label="Organization"><In v={c.organization} on={(v) => setCust({ organization: v })} ph="Enter organization" /></F><F label="Title"><In v={c.title} on={(v) => setCust({ title: v })} ph="Enter title" /></F></div>
            {addrShown ? <React.Fragment><window.AddressBlock c={c} set={setCust} required={!d.digital} removable onRemove={() => { setCust({ addr1: "", addr2: "", country: "", state: "", city: "", zip: "" }); setAddrOpen(false); }} /></React.Fragment> :
            <button className="addbtn" onClick={() => setAddrOpen(true)}><i className="bi bi-plus-lg"></i>Add Address{d.digital ? <span style={{ fontWeight: 400, color: "var(--ax-text-tertiary)" }}> (optional)</span> : null}</button>}
          </React.Fragment> : null}
        </div>
    </Drawer>);
}

Object.assign(window, { makeEditable, CopyOrderButton, CopyOrderScreen, EditOrderPanel });
})();
