// Mock organization + membership data for Team > User Management.
// TODO: replace with real API calls.
window.AXTeam = (function () {
  const ORG = { name: "Rodriguez Global Services LLC", status: "Active", invitedBy: "—", joinCodes: 2, requests: 2 };

  const MEMBERS = [
    { id: "u1", first: "Maria", last: "Rodriguez", email: "maria.rodriguez@rgs-legal.com", perm: "Administrator", title: "Managing Partner", role: "Owner", lastActive: "2026-08-12T09:12:00", status: "Active", you: true },
    { id: "u2", first: "Daniel", last: "Okafor", email: "daniel.okafor@rgs-legal.com", perm: "Manager", title: "Operations Lead", role: "Member", lastActive: "2026-08-11T16:40:00", status: "Active" },
    { id: "u3", first: "Priya", last: "Raman", email: "priya.raman@rgs-legal.com", perm: "Standard", title: "Paralegal", role: "Member", lastActive: "2026-08-12T08:05:00", status: "Active" },
    { id: "u4", first: "Tomas", last: "Lindqvist", email: "tomas.lindqvist@rgs-legal.com", perm: "Standard", title: "Document Specialist", role: "Member", lastActive: "2026-08-04T11:22:00", status: "Inactive" },
    { id: "u5", first: "Aisha", last: "Bennett", email: "aisha.bennett@rgs-legal.com", perm: "Viewer", title: "Billing Analyst", role: "Member", lastActive: "2026-08-10T14:00:00", status: "Active" },
    { id: "u6", first: "Grace", last: "Nakamura", email: "grace.nakamura@rgs-legal.com", perm: "Administrator", title: "Client Services Manager", role: "Member", lastActive: "2026-08-09T10:31:00", status: "Active" },
    { id: "u7", first: "Elliot", last: "Vance", email: "elliot.vance@rgs-legal.com", perm: "Standard", title: "Case Coordinator", role: "Member", lastActive: null, status: "Pending" },
    { id: "u8", first: "Nadia", last: "Farrow", email: "nadia.farrow@rgs-legal.com", perm: "Viewer", title: "Intern", role: "Member", lastActive: null, status: "Invite Expired" },
    { id: "u9", first: "Owen", last: "Castellanos", email: "owen.castellanos@rgs-legal.com", perm: "Standard", title: "Notary", role: "Member", lastActive: "2026-08-08T09:55:00", status: "Active" },
    { id: "u10", first: "Bethany", last: "Cole", email: "bethany.cole@rgs-legal.com", perm: "Standard", title: "Paralegal", role: "Member", lastActive: "2026-07-29T13:18:00", status: "Inactive" },
    { id: "u11", first: "Samuel", last: "Adeyemi", email: "samuel.adeyemi@rgs-legal.com", perm: "Manager", title: "Compliance Officer", role: "Member", lastActive: "2026-08-11T07:44:00", status: "Active" },
    { id: "u12", first: "Lena", last: "Petrov", email: "lena.petrov@rgs-legal.com", perm: "Viewer", title: "Accounts Payable", role: "Member", lastActive: "2026-08-06T15:09:00", status: "Active" },
  ];

  const INVITES = [
    { id: "i1", email: "elliot.vance@rgs-legal.com", perm: "Standard", by: "Maria Rodriguez", activity: "2026-08-11T09:30:00", status: "Pending" },
    { id: "i2", email: "nadia.farrow@rgs-legal.com", perm: "Viewer", by: "Maria Rodriguez", activity: "2026-07-14T12:02:00", status: "Invite Expired" },
    { id: "i3", email: "j.whitmore@partner-law.com", perm: "Manager", by: "Maria Rodriguez", activity: "2026-08-12T08:15:00", status: "Pending" },
    { id: "i4", email: "r.castille@rgs-legal.com", perm: "Standard", by: "Daniel Okafor", activity: "2026-08-05T16:47:00", status: "Pending" },
    { id: "i5", email: "hpark@rgs-legal.com", perm: "Standard", by: "Daniel Okafor", activity: "2026-06-28T10:11:00", status: "Invite Expired" },
    { id: "i6", email: "t.moreau@rgs-legal.com", perm: "Viewer", by: "Maria Rodriguez", activity: "2026-08-10T11:26:00", status: "Pending" },
  ];

  const PERMS = ["Administrator", "Manager", "Standard", "Viewer"];
  const MAX_ADMIN_SEATS = 3;
  // Emails on these domains already belong to a different organization.
  const OTHER_ORG_DOMAINS = ["@partner-law.com", "@northwind-legal.com"];

  const PERM_SUMMARY = {
    Administrator: "Manage orders, payments, users, roles, and organization settings.",
    Manager: "Create, update, or deactivate all user roles except Administrators.",
    Standard: "Create, update, edit, or cancel orders.",
    Viewer: "Read-only access to order details and reports.",
  };

  function statusClass(s) {
    if (s === "Active" || s === "Accepted") return "issued";
    if (s === "Pending") return "pending";
    if (s === "Invite Expired" || s === "Revoked" || s === "Declined") return "cancelled";
    return "inactive";
  }
  function permClass(p) {
    if (p === "Administrator") return "perm-admin";
    if (p === "Manager") return "perm-manager";
    if (p === "Standard") return "perm-standard";
    return "perm-viewer";
  }
  function relTime(iso) {
    if (!iso) return "—";
    const then = Date.parse(iso);
    if (!then) return "—";
    const mins = Math.round((Date.now() - then) / 60000);
    if (mins < 1) return "Just now";
    if (mins < 60) return mins + " min ago";
    const hrs = Math.round(mins / 60);
    if (hrs < 24) return hrs + (hrs === 1 ? " hour ago" : " hours ago");
    const days = Math.round(hrs / 24);
    if (days < 30) return days + (days === 1 ? " day ago" : " days ago");
    return new Date(then).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  // An Administrator seat is held by active/inactive admins and by pending admin
  // invitations. Revoked and expired invitations release their seat.
  function adminSeatsUsed(members, invites) {
    const held = members.filter((m) => m.perm === "Administrator" && m.status !== "Invite Expired" && m.status !== "Revoked" && m.status !== "Pending").length;
    const reserved = invites.filter((i) => i.perm === "Administrator" && i.status === "Pending").length;
    return held + reserved;
  }
  function seatLabel(left) {
    if (left <= 0) return "No seats available";
    return left + (left === 1 ? " seat left" : " seats left");
  }
  // Role-based access control matrix — the single source of truth for what
  // each permission level may do. UI and workflow logic both read from it.
  const CAPS = {
    viewUsers:        { Administrator: true, Manager: true,  Standard: false, Viewer: false },
    viewUserProfiles: { Administrator: true, Manager: true,  Standard: false, Viewer: false },
    editUsers:        { Administrator: true, Manager: true,  Standard: false, Viewer: false },
    inviteUsers:      { Administrator: true, Manager: true,  Standard: false, Viewer: false },
    revokeInvitation: { Administrator: true, Manager: true,  Standard: false, Viewer: false },
    resendInvitation: { Administrator: true, Manager: true,  Standard: false, Viewer: false },
    changeRoles:      { Administrator: true, Manager: false, Standard: false, Viewer: false },
    removeUser:       { Administrator: true, Manager: false, Standard: false, Viewer: false },
    deactivateUser:   { Administrator: true, Manager: false, Standard: false, Viewer: false },
    activateUser:     { Administrator: true, Manager: false, Standard: false, Viewer: false },
    viewSentInvites:  { Administrator: true, Manager: true,  Standard: false, Viewer: false },
    viewMyInvitation: { Administrator: false, Manager: false, Standard: true, Viewer: true },
    approveRequests:  { Administrator: true, Manager: true,  Standard: false, Viewer: false },
    viewMyTeam:       { Administrator: true, Manager: true,  Standard: true,  Viewer: true },
  };
  function can(role, cap) { return !!(CAPS[cap] && CAPS[cap][role]); }

  // Contact/preference details shown on the User Profile page.
  const PROFILES = {
    u1: { phone: "(312) 867-5309", address1: "88 Lakeshore Drive", address2: "Suite 1200", city: "Chicago", state: "Illinois", zip: "60601", division: "Organization Administration", tz: "Central Time (CT)" },
    u2: { phone: "(555) 219-4480", address1: "214 Harrow Street", address2: "Suite 400", city: "Austin", state: "Texas", zip: "78701", division: "Apostille Services Unit", tz: "Central Time (CT)" },
  };
  const TIMEZONES = ["Eastern Time (ET)", "Central Time (CT)", "Mountain Time (MT)", "Pacific Time (PT)", "Alaska Time (AT)"];
  const GEO = window.AX_GEO || { "United States": [] };
  const COUNTRIES = ["United States", ...Object.keys(GEO).filter((n) => n !== "United States")];
  const US_STATES = GEO["United States"] || [];
  const statesFor = (country, cur) => {
    const list = GEO[country] || [];
    return list;
  };
  // Edits made in the Update Profile drawer are stored on the member record and
  // win over these defaults.
  function profileOf(m) {
    const d = PROFILES[m.id] || {};
    const pick = (k, fallback) => (m[k] != null && m[k] !== "" ? m[k] : (d[k] || fallback));
    return {
      phone: pick("phone", "(555) 219-4480"),
      address1: pick("address1", "214 Harrow Street"),
      address2: pick("address2", "Suite 400"),
      city: pick("city", "Austin"),
      state: pick("state", "Texas"),
      zip: pick("zip", "78701"),
      country: pick("country", "United States"),
      division: pick("division", "Apostille Services Unit"),
      tz: pick("tz", d.tz || "Eastern Time (ET)"),
      get address() {
        return [this.address1, this.address2, this.city + ", " + this.state + " " + this.zip].filter(Boolean).join(", ");
      },
    };
  }

  return { ORG, MEMBERS, INVITES, PERMS, PERM_SUMMARY, CAPS, can, profileOf, TIMEZONES, COUNTRIES, US_STATES, statesFor, MAX_ADMIN_SEATS, OTHER_ORG_DOMAINS, adminSeatsUsed, seatLabel, statusClass, permClass, relTime };
})();
