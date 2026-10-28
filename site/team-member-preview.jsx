/* Prototype-only: role switcher preview panel + the invited Team Member experience.
   Additive — no existing screen, style, or flow is changed. Toggle the panel with "R". */
(function () {
  const { useState } = React;

  const VALID_CODE = "NW2026";
  const EXPIRED_CODE = "OLD123";
  const TEAM = { name: "Northwind Legal Group", initials: "NL", members: "24 members", perm: "Standard" };
  const INVITER = "John Smith";
  const INVITE_ORG = "Keller Law Group";

  function PreviewControls({ open, role, setRole, onClose }) {
    return (
      <div className={"demo-dock" + (open ? " open" : "")} aria-hidden={!open}>
        <div className="demo-inner">
          <div className="demo-head">
            <span className="tag">Preview Controls</span>
            <button className="demo-close" aria-label="Collapse" onClick={onClose}><i className="bi bi-x-lg"></i></button>
          </div>
          <span className="demo-field">
            <label htmlFor="pv-role">Role</label>
            <select id="pv-role" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">Organization Administrator</option>
              <option value="member">Team Member (Benjamin Miller)</option>
            </select>
          </span>
        </div>
      </div>
    );
  }

  function InvitationBanner({ onAccept, onDecline }) {
    return (
      <div className="ibanner">
        <div className="ibanner-b">
          <div className="ibanner-t">Team Invitation</div>
          <p><b>{INVITER}</b> has invited you to join <b>{INVITE_ORG}</b> as a <b>Standard Member</b>. Joining will link your account to {INVITE_ORG}. Orders you create will be visible to and managed by the team’s Admins.</p>
          <p className="ibanner-exp">This invitation expires on <b>August 15, 2026</b>.</p>
          <div className="ibanner-acts">
            <button className="btn-primary sm" onClick={onAccept}>Accept Invitation</button>
            <button className="btn-sec" onClick={onDecline}>Decline Invitation</button>
          </div>
        </div>
      </div>
    );
  }

  const ORDER_STATUS_CLASS = (s) => {
    if (s === "Issued" || s === "Apostilled" || s === "Completed") return "issued";
    if (s === "Cancelled" || s === "Rejected" || s === "Revoked & Cancelled") return "cancelled";
    if (!s) return "ro";
    return "pending";
  };
  // Orders the member placed in this prototype session (same store the Orders page reads).
  function readOrders() {
    try {
      const arr = JSON.parse(localStorage.getItem("ax_orders") || "[]");
      return (Array.isArray(arr) ? arr : []).filter((o) => o && Array.isArray(o.children)).map((o) => ({
        id: o.number,
        docs: o.children.length,
        date: o.placedOn || "—",
        by: "Benjamin Miller",
        cost: o.total != null ? ("$" + Number(o.total).toFixed(2)) : "—",
        status: (o.children[0] && o.children[0].status) || "New",
      }));
    } catch (e) { return []; }
  }

  const ORDER_COLS_BASE = [
    { key: "id", label: "Order ID" },
    { key: "docs", label: "Documents", cls: "col-docs" },
    { key: "date", label: "Date Submitted" },
    { key: "cost", label: "Total Cost", cls: "col-cost" },
    { key: "status", label: "Status", cls: "col-status" },
  ];
  // "Submitted by" only exists once the member belongs to an organization.
  const orderCols = (joined) => joined
    ? ORDER_COLS_BASE.slice(0, 3).concat([{ key: "by", label: "Submitted by" }], ORDER_COLS_BASE.slice(3))
    : ORDER_COLS_BASE;

  function MemberOrders({ joined }) {
    const rows = [];
    const [sort, setSort] = useState({ key: "date", dir: -1 });
    const sorted = rows.slice().sort((a, b) => {
      const x = String(a[sort.key] ?? ""), y = String(b[sort.key] ?? "");
      return x.localeCompare(y, undefined, { numeric: true }) * sort.dir;
    });
    const toggle = (k) => setSort((s) => s.key === k ? { key: k, dir: -s.dir } : { key: k, dir: 1 });
    return (
      <React.Fragment>
        <div className="page-head">
          <div>
            <h1 className="page-title">Create and Manage Orders</h1>
            <p className="page-sub">Submit, track, and handle your apostille requests.</p>
          </div>
          <a className="btn-primary" href="CreateOrder.html"><i className="bi bi-plus-lg"></i>Create New Order</a>
        </div>
        <div className="tcard" style={{ marginTop: 24 }}>
          <div className="tscroll">
            <table className="otable">
              <thead>
                <tr>
                  {orderCols(joined).map((c) => (
                    <th key={c.key} className={c.cls} onClick={() => toggle(c.key)}
                      aria-sort={sort.key === c.key ? (sort.dir === 1 ? "ascending" : "descending") : "none"}>
                      <span className="th-inner">{c.label}
                        <i className={"bi " + (sort.key === c.key ? (sort.dir === 1 ? "bi-chevron-up" : "bi-chevron-down") : "bi-chevron-expand")}></i>
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sorted.length === 0 ? (
                  <tr><td colSpan={orderCols(joined).length} style={{ textAlign: "center", color: "var(--ax-text-tertiary)", padding: "28px 18px" }}>No orders found.</td></tr>
                ) : sorted.map((r) => (
                  <tr className="orow" key={r.id} onClick={() => { window.location.href = "OrderOverview.html"; }}>
                    <td>{r.id}</td>
                    <td className="col-docs"><span className="docpill">{r.docs}</span></td>
                    <td>{r.date}</td>
                    {joined ? <td>{r.by}</td> : null}
                    <td className="col-cost cost">{r.cost}</td>
                    <td className="col-status"><span className={"spill " + ORDER_STATUS_CLASS(r.status)}>{r.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }

  // Informational team page for a Standard Member — no administrative sections.
  function MemberTeamPage() {
    return (
      <React.Fragment>
        <div className="page-head">
          <div>
            <h1 className="page-title">My Team</h1>
            <p className="page-sub">View information about your organization and your role.</p>
          </div>
        </div>
        <div className="mteam">
          <div className="card mt-card">
            <div className="mt-head"><h2>Active Team</h2></div>
            <div className="mt-row"><span className="mt-k">Organization Name</span><span className="mt-v">{TEAM.name}</span></div>
          </div>
          <div className="card mt-card">
            <div className="mt-head"><h2>Your Membership</h2></div>
            <div className="mt-row"><span className="mt-k">Your Role</span><span className="mt-v"><span className="spill perm-standard">{TEAM.perm}</span></span></div>
            <div className="mt-row"><span className="mt-k">Permissions</span><span className="mt-v">Create, update, edit, or cancel orders.</span></div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  function DeclineModal({ onClose, onConfirm }) {
    return (
      <div className="scrim" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        <div className="modal sm" role="dialog" aria-modal="true" aria-label="Decline this invitation?">
          <div className="modal-head">
            <div><h2>Decline this invitation?</h2></div>
            <button className="modal-x" aria-label="Close" onClick={onClose}><i className="bi bi-x-lg"></i></button>
          </div>
          <div className="modal-body">
            <p>You won’t be added to {INVITE_ORG}, and {INVITER} will be notified. If you change your mind, you’ll need a new invitation to join.</p>
          </div>
          <div className="modal-foot">
            <button className="btn-sec" onClick={onClose}>Cancel</button>
            <button className="btn-danger" onClick={onConfirm}>Decline Request</button>
          </div>
        </div>
      </div>
    );
  }

  function JoinCodePage({ onValid, onCancel }) {
    const [code, setCode] = useState("");
    const [err, setErr] = useState("");
    const validate = () => {
      const v = code.trim().toUpperCase();
      if (v === VALID_CODE) { setErr(""); onValid(); return; }
      if (v === EXPIRED_CODE) { setErr("This code has expired. Ask your team admin to create a new join code."); return; }
      setErr("Invalid code. Please check and try again.");
    };
    return (
      <React.Fragment>
        <div className="jhead">
          <h1 className="page-title">Join Team</h1>
          <p className="page-sub">Enter the code to join an organization or agency.</p>
        </div>
        <div className="jwrap">
          <div className="jcard">
            <h2>Enter Join Code</h2>
            <p className="jcard-sub">Ask your team admin for a join code to get started.</p>
            <div className="field">
              <label className="flabel" htmlFor="joincode">Join Code</label>
              <input id="joincode" className={"tinput" + (err ? " err" : "")} value={code} maxLength={6}
                placeholder="e.g. NW2026" autoComplete="off"
                onChange={(e) => { setCode(e.target.value.toUpperCase().slice(0, 6)); setErr(""); }} />
              {err ? <div className="field-err">{err}</div> : <div className="hint">6 characters — letters and numbers (A–Z, 0–9)</div>}
            </div>
            <div className="jcard-acts">
              <button className="btn-sec" onClick={onCancel}>Cancel</button>
              <button className="btn-primary sm" disabled={code.trim().length < 6} onClick={validate}>Validate Code</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  function ConfirmPage({ onCancel, onJoin }) {
    return (
      <React.Fragment>
        <div className="jhead">
          <h1 className="page-title">Confirm Your Invitation</h1>
          <p className="page-sub">Review the team details before joining.</p>
        </div>
        <div className="jwrap">
          <div className="jcard wide">
            <div className="jc-top">
              <div className="jc-ic"><i className="bi bi-people"></i></div>
              <div className="jc-t">You’ve been invited to join the team</div>
              <p className="jcard-sub">You’re now a Standard Member on this team. You can start collaborating right away.</p>
            </div>
            <div className="jorg">
              <span className="jorg-mark">{TEAM.initials}</span>
              <span className="jorg-meta"><b>{TEAM.name}</b><span>{TEAM.members}</span></span>
              <span className="spill perm-standard">{TEAM.perm}</span>
            </div>
            <p className="jcard-msg">You’ve been invited to join <b>{TEAM.name}</b> as a <b>{TEAM.perm} Member</b>. Do you want to accept?</p>
            <div className="jinfo">
              <i className="bi bi-info-circle-fill"></i>
              <span>Joining will link your account to <b>{TEAM.name}</b>. Orders you create will be visible to and managed by the team’s Admins.</span>
            </div>
            <div className="jcard-acts">
              <button className="btn-sec" onClick={onCancel}>Cancel</button>
              <button className="btn-primary sm" onClick={onJoin}>Join Team</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  function WelcomePage({ onDone }) {
    return (
      <React.Fragment>
        <div className="jhead">
          <h1 className="page-title">Welcome Aboard</h1>
          <p className="page-sub">You are all set to get started.</p>
        </div>
        <div className="jwrap">
          <div className="jcard center">
            <i className="ax-toast-ic bi bi-check-circle" aria-hidden="true"></i>
            <div className="jc-t">You’ve joined {TEAM.name}</div>
            <p className="jcard-sub">You’re now a Standard Member on this team. You can start collaborating right away.</p>
            <button className="btn-primary sm" onClick={onDone}>Back to Orders</button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  // The invited individual user's experience: Orders with the invitation banner,
  // then Join Team → Confirm → Welcome, or the decline path.
  function MemberExperience({ onJoin, onDecline, toast, joined, page, onNav }) {
    const [stage, setStage] = useState("orders"); // orders | join | confirm | welcome
    const [declined, setDeclined] = useState(false);
    const [declining, setDeclining] = useState(false);

    const confirmDecline = () => {
      setDeclining(false);
      setDeclined(true);
      onDecline();
      toast("ok", "Invitation declined",
        <React.Fragment>You won’t be added to <b>{INVITE_ORG}</b>. {INVITER} has been notified.</React.Fragment>,
        [{ label: "Dismiss", plain: true }]);
    };

    if (joined && page === "team") return <MemberTeamPage />;
    if (stage === "join") return <JoinCodePage onValid={() => setStage("confirm")} onCancel={() => setStage("orders")} />;
    if (stage === "confirm") return <ConfirmPage onCancel={() => setStage("join")} onJoin={() => { onJoin(); setStage("welcome"); }} />;
    if (stage === "welcome") return <WelcomePage onDone={() => { setStage("orders"); onNav && onNav("orders"); }} />;

    return (
      <React.Fragment>
        {!joined && !declined ? (
          <InvitationBanner onAccept={() => setStage("join")} onDecline={() => setDeclining(true)} />
        ) : null}
        <MemberOrders joined={joined} />
        {declining ? <DeclineModal onClose={() => setDeclining(false)} onConfirm={confirmDecline} /> : null}
      </React.Fragment>
    );
  }

  Object.assign(window, { AXPreviewControls: PreviewControls, AXMemberExperience: MemberExperience });
})();
