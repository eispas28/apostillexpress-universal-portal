// User Profile view + Remove User workflow. Loaded BEFORE the main app script
// so window.AXProfile is available on first render. Styling comes from the
// shared classes in TeamManagement.html (cards, spills, buttons, modal).
const { useState: upState, useEffect: upEffect } = React;
const TT = window.AXTeam;

function Avatar({ user, size }) {
  const initials = ((user.first || "?")[0] + (user.last || "")[0] || "").toUpperCase();
  return <span className="uavatar" style={size ? { width: size, height: size, fontSize: Math.round(size / 2.6) } : null}>{initials}</span>;
}

function RemoveUserModal({ user, onClose, onRemove }) {
  const full = (user.first + " " + user.last).trim();
  const [txt, setTxt] = upState("");
  const [busy, setBusy] = upState(false);
  const [err, setErr] = upState("");
  const ok = txt.trim() === full;
  upEffect(() => {
    const onEsc = (e) => { if (e.key === "Escape" && !busy) onClose(); };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [busy, onClose]);
  const go = () => {
    if (!ok || busy) return;
    setBusy(true); setErr("");
    setTimeout(() => {
      setBusy(false);
      if (/fail@/i.test(user.email)) { setErr("We couldn’t remove this user. Please try again."); return; }
      onRemove();
    }, 800);
  };
  return (
    <div className="scrim" onMouseDown={(e) => { if (e.target === e.currentTarget && !busy) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-label="Remove from organization">
        <div className="modal-head modal-head-bd">
          <div><h2>Remove from organization</h2></div>
          <button className="modal-x" aria-label="Close" onClick={onClose} disabled={busy}><i className="bi bi-x-lg"></i></button>
        </div>
        <div className="modal-body">
          {err ? <div className="mbanner"><i className="bi bi-exclamation-circle-fill"></i><span>{err}</span></div> : null}
          <p className="rm-lead">Are you sure you want to remove this user? They will lose access immediately.</p>
          <div className="rm-user">
            <Avatar user={user} size={48} />
            <div>
              <div className="rm-name">{full}</div>
              <div className="rm-email">{user.email}</div>
            </div>
          </div>
          <div className="rm-note">
            <div className="rm-note-t">What happens when you remove someone?</div>
            <ul>
              <li>Their access ends immediately. They’re signed out and can no longer view or create orders.</li>
              <li>They’re removed from your Team Members list.</li>
              <li>Orders they already created stay with the organization.</li>
            </ul>
          </div>
          <div className="field">
            <label className="flabel">To confirm, type <span className="rm-strong">{full}</span> below <span className="req">*</span></label>
            <input className="tinput" value={txt} onChange={(e) => setTxt(e.target.value)} placeholder={full} autoFocus />
          </div>
        </div>
        <div className="modal-foot">
          <button className="btn-sec" onClick={onClose} disabled={busy}>Cancel</button>
          <button className="btn-danger" onClick={go} disabled={!ok || busy} style={{ opacity: ok && !busy ? 1 : .55, cursor: ok && !busy ? "pointer" : "not-allowed" }}>
            {busy ? <span className="spin sm"></span> : null}{busy ? "Removing…" : "Remove User"}
          </button>
        </div>
      </div>
    </div>
  );
}

function DField({ label, required, value, onChange, error, placeholder, options }) {
  return (
    <div className="field">
      <label className="flabel">{label}{required ? <span className="req"> *</span> : <span className="opt"> (optional)</span>}</label>
      {options ? (
        <div className="tselect-wrap">
          <select className={"tselect" + (error ? " err" : "")} value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          <i className="bi bi-chevron-down"></i>
        </div>
      ) : (
        <input className={"tinput" + (error ? " err" : "")} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
      )}
      {error ? <div className="field-err">{error}</div> : null}
    </div>
  );
}

function UpdateProfileDrawer({ user, onClose, onSave }) {
  const base = TT.profileOf(user);
  const init = {
    first: user.first, last: user.last, email: user.email, phone: base.phone,
    division: base.division, title: user.title === "—" ? "" : user.title,
    address1: base.address1, address2: base.address2,
    country: base.country, state: base.state, city: base.city, zip: base.zip,
  };
  const [f, setF] = upState(init);
  const [touched, setTouched] = upState(false);
  const [busy, setBusy] = upState(false);
  const [fail, setFail] = upState("");
  const [warn, setWarn] = upState(false);
  const set = (patch) => setF((prev) => ({ ...prev, ...patch }));
  const dirty = Object.keys(init).some((k) => (f[k] || "") !== (init[k] || ""));
  const errs = {
    first: f.first.trim() ? "" : "Enter a first name.",
    last: f.last.trim() ? "" : "Enter a last name.",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()) ? "" : "Enter a valid email address.",
    phone: /^[-+().\s\d]{10,}$/.test(f.phone.trim()) ? "" : "Enter a valid phone number, e.g. (555) 219-4480.",
    zip: !f.zip.trim() || /^\d{5}(-\d{4})?$/.test(f.zip.trim()) ? "" : "Enter a 5-digit ZIP code.",
  };
  const valid = !Object.values(errs).some(Boolean);
  const show = (k) => (touched ? errs[k] : "");
  const close = () => { if (dirty && !busy) { setWarn(true); return; } onClose(); };
  const save = () => {
    setTouched(true);
    if (!valid || busy) return;
    setBusy(true); setFail("");
    setTimeout(() => {
      setBusy(false);
      if (/fail@/i.test(f.email)) { setFail("We couldn’t save these changes. Please try again."); return; }
      onSave({ ...f, title: f.title.trim() || "—" });
    }, 800);
  };
  return (
    <div className="scrim drawer-scrim" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
      <aside className="drawer" role="dialog" aria-modal="true" aria-label="Update Profile">
        <div className="drawer-head">
          <h2>Update Profile</h2>
          <button className="modal-x" aria-label="Close" onClick={close} disabled={busy}><i className="bi bi-x-lg"></i></button>
        </div>
        <div className="drawer-body">
          {fail ? <div className="mbanner"><i className="bi bi-exclamation-circle-fill"></i><span>{fail}</span></div> : null}
          <div className="dgrid">
            <DField label="First Name" required value={f.first} onChange={(v) => set({ first: v })} error={show("first")} placeholder="Enter first name" />
            <DField label="Last Name" required value={f.last} onChange={(v) => set({ last: v })} error={show("last")} placeholder="Enter last name" />
            <DField label="Email" required value={f.email} onChange={(v) => set({ email: v })} error={show("email")} placeholder="name@company.com" />
            <DField label="Phone Number" required value={f.phone} onChange={(v) => set({ phone: v })} error={show("phone")} placeholder="(555) 219-4480" />
            <DField label="Division" value={f.division} onChange={(v) => set({ division: v })} placeholder="Enter division" />
            <DField label="Title" value={f.title} onChange={(v) => set({ title: v })} placeholder="Enter title" />
          </div>
          <div className="dgrid">
            <DField label="Address 1" value={f.address1} onChange={(v) => set({ address1: v })} placeholder="Street address" />
            <DField label="Address 2" value={f.address2} onChange={(v) => set({ address2: v })} placeholder="Apartment, suite, unit" />
            <DField label="Country" value={f.country} onChange={(v) => set({ country: v, state: "" })} options={TT.COUNTRIES} />
            {f.country && !TT.statesFor(f.country).length ?
            <DField label="State / Region" value={f.state} onChange={(v) => set({ state: v })} placeholder="Enter state or region" /> :
            <DField label="State" value={f.state} onChange={(v) => set({ state: v })} options={["", ...TT.statesFor(f.country, f.state)]} />}
            <DField label="City" value={f.city} onChange={(v) => set({ city: v })} placeholder="Enter city" />
            <DField label="Zip Code" value={f.zip} onChange={(v) => set({ zip: v })} error={show("zip")} placeholder="Enter zip code" />
          </div>
        </div>
        <div className="drawer-foot">
          <button className="btn-sec" onClick={close} disabled={busy}>Cancel</button>
          <button className="btn-primary" style={{ padding: "0.6875rem var(--ax-space-5)", fontSize: "0.9375rem", opacity: dirty && !busy ? 1 : .55, cursor: dirty && !busy ? "pointer" : "not-allowed" }}
            onClick={save} disabled={!dirty || busy}>
            {busy ? <span className="spin sm"></span> : null}{busy ? "Saving…" : "Save Changes"}
          </button>
        </div>
      </aside>
      {warn ? (
        <div className="scrim" style={{ zIndex: 120 }} onMouseDown={(e) => { if (e.target === e.currentTarget) setWarn(false); }}>
          <div className="modal" role="dialog" aria-modal="true" style={{ maxWidth: "28.75rem" }}>
            <div className="modal-head"><div><h2>Discard unsaved changes?</h2></div></div>
            <div className="modal-body"><p style={{ margin: 0, fontSize: "var(--ax-text-md)", lineHeight: 1.55, color: "var(--ax-text-secondary)" }}>You have unsaved changes to this profile. If you leave now, they will be lost.</p></div>
            <div className="modal-foot">
              <button className="btn-sec" onClick={() => setWarn(false)}>Keep Editing</button>
              <button className="btn-danger" onClick={onClose}>Discard Changes</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ProfileField({ label, value }) {
  return <div><div className="pf-label">{label}</div><div className="pf-value">{value}</div></div>;
}

function UserProfile({ user, can, removed, seatsLeft, onBack, onUndo, onSaveProfile, onToggleActive, onRemove, onChangeRole, onChangeTz }) {
  const [showRemove, setShowRemove] = upState(false);
  const [showEdit, setShowEdit] = upState(false);
  const full = (user.first + " " + user.last).trim();
  const p = TT.profileOf(user);

  const crumbs = (
    <nav className="crumbs" aria-label="Breadcrumb">
      <button className="crumb" onClick={onBack}>User Management</button>
      <i className="bi bi-chevron-right"></i>
      <span className="crumb on">User Profile</span>
    </nav>
  );

  if (removed) return (
    <div>
      {crumbs}
      <div className="tcard" style={{ marginTop: "var(--ax-space-5)" }}>
        <div className="state">
          <div className="empty-ic ok"><i className="bi bi-check-circle-fill"></i></div>
          <div className="empty-title">{full} was removed</div>
          <div className="empty-sub">They no longer have access to ApostilleXpress. You can re-invite them at any time.</div>
          <div style={{ display: "flex", gap: "var(--ax-space-3)", marginTop: "var(--ax-space-2)" }}>
            <button className="btn-primary" onClick={onBack}>Back to Team</button>
            <button className="btn-sec" onClick={onUndo}><i className="bi bi-arrow-counterclockwise"></i>Undo</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {crumbs}
      <div className="sec-head" style={{ marginTop: "var(--ax-space-3)" }}>
        <h2>User Profile</h2>
        <p>Manage and monitor user details, permissions, and activities</p>
      </div>

      <div className="pf-grid">
        <div className="card pf-side">
          <Avatar user={user} size={64} />
          <div className="pf-name">{full}</div>
          <div className="pf-perm">{user.perm}</div>
          <div className="pf-title">{[user.title === "—" ? "" : user.title, p.division].filter(Boolean).join(" | ")}</div>
          <span className={"spill " + TT.statusClass(user.status)}><span className="dot"></span>{user.status}</span>
          <hr className="divider" />
          {user.status === "Revoked" ? (
            <div className="pf-revoked">
              <i className="bi bi-info-circle-fill"></i>
              <span>This invitation was revoked. The user can no longer use the original link. Send a new invitation to restore access.</span>
            </div>
          ) : null}
          <div className="pf-actions">
            {user.status !== "Revoked" && can("editUsers") ? <button className="btn-sec" onClick={() => setShowEdit(true)}><svg className="bicon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9.16406 12.5H6.66406C5.11092 12.5 4.33435 12.5 3.72178 12.7537C2.90502 13.092 2.25611 13.741 1.9178 14.5577C1.66406 15.1703 1.66406 15.9469 1.66406 17.5M12.9141 2.7423C14.1357 3.23679 14.9974 4.43443 14.9974 5.83333M9.99729 17.9167L11.6849 17.5792C11.832 17.5497 11.9056 17.535 11.9742 17.5081C12.0351 17.4842 12.0929 17.4533 12.1466 17.4158C12.207 17.3737 12.2601 17.3206 12.3662 17.2145L17.9141 11.6667C18.3744 11.2065 18.3744 10.4602 17.9141 9.99998C17.4538 9.53975 16.7076 9.53976 16.2474 10L10.6995 15.5479C10.5934 15.654 10.5404 15.707 10.4982 15.7675C10.4608 15.8211 10.4298 15.879 10.4059 15.9399C10.379 16.0085 10.3643 16.082 10.3349 16.2292L9.99729 17.9167ZM11.2474 5.83333C11.2474 7.67428 9.75501 9.16667 7.91406 9.16667C6.07311 9.16667 4.58073 7.67428 4.58073 5.83333C4.58073 3.99238 6.07311 2.5 7.91406 2.5C9.75501 2.5 11.2474 3.99238 11.2474 5.83333Z" stroke="#A4A7AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Update Profile</button> : null}
            {user.status === "Active" && can("deactivateUser") && !user.you
              ? <button className="btn-sec danger" onClick={onToggleActive}><svg className="bicon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13.3307 15H18.3307M9.9974 12.9167H6.2474C5.08443 12.9167 4.50294 12.9167 4.02978 13.0602C2.96444 13.3834 2.13076 14.217 1.8076 15.2824C1.66406 15.7555 1.66406 16.337 1.66406 17.5M12.0807 6.25C12.0807 8.32107 10.4018 10 8.33073 10C6.25966 10 4.58073 8.32107 4.58073 6.25C4.58073 4.17893 6.25966 2.5 8.33073 2.5C10.4018 2.5 12.0807 4.17893 12.0807 6.25Z" stroke="#D92D20" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>Deactivate User</button> : null}
            {user.status === "Inactive" && can("activateUser")
              ? <button className="btn-primary pf-primary" onClick={onToggleActive}><svg className="bicon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9.9974 12.9167H6.2474C5.08443 12.9167 4.50294 12.9167 4.02978 13.0602C2.96444 13.3834 2.13076 14.217 1.8076 15.2824C1.66406 15.7555 1.66406 16.337 1.66406 17.5M15.8307 17.5V12.5M13.3307 15H18.3307M12.0807 6.25C12.0807 8.32107 10.4018 10 8.33073 10C6.25966 10 4.58073 8.32107 4.58073 6.25C4.58073 4.17893 6.25966 2.5 8.33073 2.5C10.4018 2.5 12.0807 4.17893 12.0807 6.25Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>Activate User</button> : null}
            {user.status === "Pending" && can("revokeInvitation")
              ? <button className="btn-sec danger" onClick={() => onChangeRole("revoke")}><i className="bi bi-x-circle"></i>Revoke Invitation</button> : null}
          </div>
        </div>

        <div className="pf-main">
          <div className="icard">
            <div className="icard-head"><h2>General Information</h2></div>
            <div className="pf-body">
              <div className="pf-fields">
                <ProfileField label="Email address" value={user.email} />
                <ProfileField label="Phone number" value={p.phone} />
              </div>
              <div style={{ marginTop: "1.125rem" }}><ProfileField label="Address" value={p.address} /></div>
            </div>
          </div>
          <div className="icard">
            <div className="icard-head"><h2>Permissions &amp; Preferences</h2></div>
            <div className="pf-body">
              <div className="pf-fields">
                <div className="field">
                  <label className="flabel">Permission</label>
                  {can("changeRoles") ? (
                    <window.AXPermissionSelect value={user.perm} seatsLeft={seatsLeft} onChange={(v) => { if (v !== user.perm) onChangeRole(v); }} />
                  ) : (
                    <div className="ro-box">{user.perm}<span className="ro-lock"><i className="bi bi-lock"></i>Read only</span></div>
                  )}
                  {can("changeRoles") && user.perm !== "Administrator" && seatsLeft <= 0
                    ? <div className="hint">All {TT.MAX_ADMIN_SEATS} Administrator seats are in use. Free a seat before assigning the Administrator role.</div> : null}
                </div>
                <div className="field">
                  <label className="flabel">Time Zone</label>
                  {can("editUsers") ? (
                    <div className="tselect-wrap">
                      <select className="tselect" value={p.tz} onChange={(e) => onChangeTz(e.target.value)}>
                        {TT.TIMEZONES.map((x) => <option key={x} value={x}>{x}</option>)}
                      </select>
                      <i className="bi bi-chevron-down"></i>
                    </div>
                  ) : (
                    <div className="ro-box">{p.tz}<span className="ro-lock"><i className="bi bi-lock"></i>Read only</span></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {can("removeUser") && !user.you && !String(user.id).startsWith("inv-") && (user.status === "Active" || user.status === "Inactive") ? (
        <div className="danger-zone">
          <div>
            <div className="dz-title">Remove from organization</div>
            <div className="dz-body">Removing this user ends their access immediately and unassigns them from your team. Any orders they created remain with the organization. You can re-invite them at any time.</div>
          </div>
          <button className="btn-danger" onClick={() => setShowRemove(true)}>Remove User</button>
        </div>
      ) : null}

      {showEdit ? <UpdateProfileDrawer user={user} onClose={() => setShowEdit(false)} onSave={(patch) => { setShowEdit(false); onSaveProfile(patch); }} /> : null}
      {showRemove ? <RemoveUserModal user={user} onClose={() => setShowRemove(false)} onRemove={() => { setShowRemove(false); onRemove(); }} /> : null}
    </div>
  );
}

Object.assign(window, { AXAvatar: Avatar, AXRemoveUserModal: RemoveUserModal, AXUpdateProfileDrawer: UpdateProfileDrawer, AXUserProfile: UserProfile });
