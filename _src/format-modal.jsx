(function(){
const { useState, useEffect } = React;
const { Button, Modal, FormField, Input, Select, FileUpload, Alert } = window.ApostilleXpressDesignSystem_141fbe;
const F = ({ label, req, children }) => <FormField label={label} required={!!req}>{children}</FormField>;
const In = ({ v, on, ph, type }) => <Input type={type || "text"} value={v || ""} placeholder={ph} onChange={(e) => on(e.target.value)} />;
const Sel = ({ v, on, opts, ph }) => <Select value={v || ""} onChange={(e) => on(e.target.value)}><option value="">{ph}</option>{opts.map((o) => <option key={o} value={o}>{o}</option>)}</Select>;
const g2 = { display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 16 };
const fmtBytes = (n) => !n ? "" : n >= 1048576 ? (n / 1048576).toFixed(1) + " MB" : n >= 1024 ? Math.round(n / 1024) + " KB" : n + " B";
const MAIL_REQ = ["firstName", "lastName", "email", "addr1", "country", "state", "city", "zip"];

function AddFormatModal({ item, form, onClose, onAdd }) {
  const dig = (item.deliveryMethod || form.deliveryMethod) === "electronic";
  const toPaper = dig;
  const [m, setM] = useState(() => ({ ...(form.mailing || {}) }));
  const [tried, setTried] = useState(false);
  const [ful, setFul] = useState("");
  const [ra, setRa] = useState(() => { const d = form.docs || {}, a = d.returnAddr || {}; const has = a.addr1 && a.city; return { addrSource: has ? (d.addrSource || "profile") : "new", returnAddr: { firstName: "", lastName: "", addr1: "", addr2: "", country: "", state: "", city: "", zip: "", ...a }, prepaidOpen: false, shippingTracking: "" }; });
  const RA_REQ = ["firstName", "lastName", "addr1", "country", "state", "city", "zip"];
  const needsMail = ful === "usps" || ful === "international";
  const raErrors = {}; if (tried) RA_REQ.forEach((k) => { if (!String(ra.returnAddr[k] || "").trim()) raErrors[k] = "Required"; });
  const blank = () => ({ collapsed: false, id: "r" + Date.now() + Math.random().toString(36).slice(2, 6), firstName: "", lastName: "", email: "", title: "", organization: "", destCountry: "" });
  const [recs, setRecs] = useState(() => { const c = form.customer || {}, r0 = (form.recipients || [])[0] || {}; const pick = (k) => c[k] || r0[k] || ""; return [{ ...blank(), collapsed: false, firstName: pick("firstName"), lastName: pick("lastName"), email: pick("email"), title: pick("title"), organization: pick("organization") }]; });
  const setRec = (id, p) => setRecs((a) => a.map((x) => x.id === id ? { ...x, ...p } : x));
  const okEmail = (v) => /\S+@\S+\.\S+/.test(v || "");
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);
  const setMail = (p) => setM((x) => ({ ...x, ...p }));
  const EMPTY = { firstName: "", lastName: "", phone: "", email: "", organization: "", title: "", addr1: "", addr2: "", country: "", state: "", city: "", zip: "" };
  const [mSrc, setMSrc] = useState("profile");
  const profMail = () => { const u = window.USER_PROFILE || {}, a = window.PROFILE_ADDRESS || {}; return { ...EMPTY, firstName: u.firstName || "", lastName: u.lastName || "", email: u.email || "", phone: u.phone || "", organization: u.organization || "", addr1: a.addr1 || "", addr2: a.addr2 || "", country: a.country || "", state: a.state || "", city: a.city || "", zip: a.zip || "" }; };
  const custMail = () => { const c = form.customer || {}; return { ...EMPTY, firstName: c.firstName || "", lastName: c.lastName || "", email: c.email || "", phone: c.phone || "", organization: c.organization || "", addr1: c.addr1 || "", addr2: c.addr2 || "", country: c.country || "", state: c.state || "", city: c.city || "", zip: c.zip || "" }; };
  const pickMSrc = (v) => { setMSrc(v); setM(v === "profile" ? profMail() : v === "customer" ? custMail() : { ...EMPTY }); };
  useEffect(() => { setM(profMail()); }, []);
    const err = (v, msg) => tried && !String(v || "").trim() ? <div className="field-err" style={{ marginTop: 6 }}>{msg}</div> : null;
  const valid = toPaper ? ful && RA_REQ.every((k) => String(ra.returnAddr[k] || "").trim()) && (!needsMail || MAIL_REQ.every((k) => String(m[k] || "").trim())) : (file && recs.every((r, i) => r.firstName.trim() && r.lastName.trim() && okEmail(r.email) && (i === 0 || r.destCountry)));
  const submit = () => {
    setTried(true);
    if (!toPaper) setRecs((x) => x.map((r) => (r.firstName.trim() && r.lastName.trim() && okEmail(r.email) && (r.id === recs[0].id || r.destCountry)) ? r : { ...r, collapsed: false }));
    if (!valid || busy) return;
    setBusy(true);
    setTimeout(() => onAdd(toPaper ? { mailing: needsMail ? m : (form.mailing || {}), fulfilmentType: ful, returnAddr: ra.returnAddr, addrSource: ra.addrSource } : { recipients: recs, file }), 700);
  };
  const title = toPaper ? "Add a Paper Apostille" : "Add a Digital Apostille";
  return (
    <Modal open onClose={busy ? () => {} : onClose} width={640} title={title}
      footer={<React.Fragment><Button variant="secondary" size="lg" disabled={busy} onClick={onClose}>Cancel</Button><Button variant="primary" size="lg" disabled={busy} onClick={submit}>{busy ? "Adding\u2026" : "Add to Order"}</Button></React.Fragment>}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <p style={{ margin: 0, fontSize: 16, color: "var(--ax-text-secondary)", lineHeight: 1.5 }}>
          We’ll add a copy of <b style={{ color: "var(--ax-text-primary)" }}>{item.docDesc || item.name}</b> as a {toPaper ? "paper" : "digital"} Apostille. {toPaper ? "Choose how the paper Apostille is fulfilled, then complete the details." : "Upload the document and add up to 10 digital recipients."}
        </p>
        {toPaper ? <React.Fragment>
          <F label="Fulfilment Type" req><Select value={ful} onChange={(e) => setFul(e.target.value)}><option value="">Select fulfilment type</option>{(window.FULFILMENT || []).map((f) => <option key={f.id} value={f.id}>{f.title}</option>)}</Select>{tried && !ful ? <div className="field-err" style={{ marginTop: 6 }}>Select a fulfilment type</div> : null}</F>
          {needsMail ? <React.Fragment>
          <div style={{ fontSize: 16, fontWeight: 600, marginTop: 4 }}>Mailing Information</div>
          <F label="Mailing Address"><Select value={mSrc} onChange={(e) => pickMSrc(e.target.value)}><option value="profile">My Profile Address — pre-filled from your profile</option><option value="customer">Customer Address — pre-filled from customer info</option><option value="new">Add New Address — enter manually</option></Select></F>
          <div style={g2}>
            <F label="First Name" req><In v={m.firstName} on={(v) => setMail({ firstName: v })} ph="Enter first name" />{err(m.firstName, "First name is required")}</F>
            <F label="Last Name" req><In v={m.lastName} on={(v) => setMail({ lastName: v })} ph="Enter last name" />{err(m.lastName, "Last name is required")}</F>
          </div>
          <div style={g2}>
            <F label="Email" req><In type="email" v={m.email} on={(v) => setMail({ email: v })} ph="Enter email" />{err(m.email, "Email is required")}</F>
            <F label="Phone Number"><In type="tel" v={m.phone} on={(v) => setMail({ phone: v })} ph="Enter phone number" /></F>
          </div>
          <F label="Organization"><In v={m.organization} on={(v) => setMail({ organization: v })} ph="Enter organization" /></F>
          <F label="Address Line 1" req><In v={m.addr1} on={(v) => setMail({ addr1: v })} ph="Enter address line 1" />{err(m.addr1, "Address is required")}</F>
          <div style={g2}>
            <F label="Country" req><Sel v={m.country} on={(v) => setMail({ country: v, state: "" })} opts={window.COUNTRIES || []} ph="Select country" />{err(m.country, "Country is required")}</F>
            {window.StateField ? <window.StateField country={m.country} required value={m.state || ""} onChange={(v) => setMail({ state: v })} /> : <F label="State" req><In v={m.state} on={(v) => setMail({ state: v })} ph="Enter state" /></F>}
          </div>
          <div style={g2}>
            <F label="City" req><In v={m.city} on={(v) => setMail({ city: v })} ph="Enter city" />{err(m.city, "City is required")}</F>
            <F label="Zip Code" req><In v={m.zip} on={(v) => setMail({ zip: v })} ph="Enter zip code" />{err(m.zip, "Zip code is required")}</F>
          </div>
                    </React.Fragment> : null}
          <React.Fragment>
          <div style={{ fontSize: 16, fontWeight: 600, marginTop: 4 }}>Return Address</div>
          <p style={{ margin: 0, color: "var(--ax-text-secondary)", fontSize: 15, lineHeight: 1.5 }}><strong>If we can’t process your documents</strong>, we’ll mail them back to this address at no cost (unless a prepaid shipping label was provided). This can match your apostille return address, or be different.</p>
          <div className="fmt-ra"><style>{".fmt-ra .card.sect{border:none;box-shadow:none;background:none;border-radius:0;padding:0;margin:0}.fmt-ra .sect-body{padding:0;margin:0}.fmt-ra .sect-body>*:first-child{margin-top:0}"}</style><window.ReturnAddressSection d={ra} setD={(p) => setRa((x) => { const n = typeof p === "function" ? p({ returnAddr: x.returnAddr }) : p; return { ...x, ...n }; })} customer={form.customer || {}} subtitle="" errors={raErrors} compact={true} /></div>
          </React.Fragment>
        </React.Fragment> : <React.Fragment>
          <F label="Upload document" req>
            <FileUpload hint="PDF, JPEG, TIFF (Files cannot exceed 10MB)" files={file ? [{ name: file.name, size: fmtBytes(file.size), status: "done" }] : []} onSelect={(fl) => { const x = fl && fl[0]; if (x) setFile({ id: "f" + Date.now(), name: x.name, size: x.size, type: x.type }); }} onRemove={() => setFile(null)} />
            {tried && !file ? <div className="field-err" style={{ marginTop: 6 }}>Document upload is required</div> : null}
          </F>
          {recs.map((r, i) => {
            const name = (r.firstName + " " + r.lastName).trim();
            if (r.collapsed) return (
              <div className="rcpt-collapsed" key={r.id} style={{ marginBottom: 0 }} onClick={() => setRec(r.id, { collapsed: false })} role="button" tabIndex={0} onKeyDown={(ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); setRec(r.id, { collapsed: false }); } }}>
                <button className="rcpt-chev" aria-label="Expand" tabIndex={-1}><i className="bi bi-chevron-right"></i></button>
                <div className="cinfo"><div className="cname">Recipient #{i + 1}</div><div className="cmeta">{[name || "\u2014", r.email, i > 0 ? r.destCountry : ""].filter(Boolean).join("  \u2022  ")}</div></div>
              </div>);
            return (
              <div className="rcpt-card" key={r.id} style={{ marginBottom: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                <div className="rcpt-head" style={{ marginBottom: 2 }}>
                  <button className="rcpt-chev" aria-label="Collapse" onClick={() => setRec(r.id, { collapsed: true })}><i className="bi bi-chevron-down"></i></button>
                  <span className="rcpt-title">Recipient #{i + 1}</span>
                  {i > 0 ? <button className="rcpt-del" aria-label="Delete recipient" disabled={busy} onClick={() => setRecs((x) => x.filter((y) => y.id !== r.id))}><i className="bi bi-trash"></i></button> : null}
                </div>
                <div style={g2}>
                  <F label="First Name" req><In v={r.firstName} on={(v) => setRec(r.id, { firstName: v })} ph="Enter first name" />{err(r.firstName, "First name is required")}</F>
                  <F label="Last Name" req><In v={r.lastName} on={(v) => setRec(r.id, { lastName: v })} ph="Enter last name" />{err(r.lastName, "Last name is required")}</F>
                </div>
                <F label="Email" req><In type="email" v={r.email} on={(v) => setRec(r.id, { email: v })} ph="Enter email" />{tried && !okEmail(r.email) ? <div className="field-err" style={{ marginTop: 6 }}>Enter a valid email</div> : null}</F>
                {i > 0 ? <F label="Destination Country" req><Sel v={r.destCountry} on={(v) => setRec(r.id, { destCountry: v })} opts={window.DEST_COUNTRIES || []} ph="Select Country" />{err(r.destCountry, "Destination country is required")}</F> : null}
                <div style={g2}>
                  <F label="Title"><In v={r.title} on={(v) => setRec(r.id, { title: v })} ph="Enter title" /></F>
                  <F label="Organization"><In v={r.organization} on={(v) => setRec(r.id, { organization: v })} ph="Enter organization" /></F>
                </div>
              </div>);
          })}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Button variant="secondary" size="md" disabled={busy || recs.length >= 10} onClick={() => setRecs((x) => x.map((y) => ({ ...y, collapsed: true })).concat(blank()))}><i className="bi bi-plus-lg" style={{ marginRight: 8 }}></i>Add Recipient</Button>
            <span style={{ fontSize: 14, color: "var(--ax-text-tertiary)" }}>{recs.length} of 10 recipients</span>
          </div>
        </React.Fragment>}
      </div>
    </Modal>
  );
}
Object.assign(window, { AddFormatModal });
})();
