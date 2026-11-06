// Shared mock order model for the Order Overview (parent) and Order Details
// (child) pages. A parent order groups multiple child orders (apostilles),
// each with its own delivery flow, status, and action permissions.
// TODO: replace with the authenticated user's orders from the API.
(function () {
  "use strict";

  var CUSTOMER = {
    firstName: "Maria",
    lastName: "Rodriguez",
    title: "Attorney",
    company: "Blaine & Associates",
    email: "maria.rodriguez@gmail.com",
    phone: "(312) 867-5309",
    notes: "Please expedite processing; the client needs the birth certificate for a passport before June 15th.",
    address: { line1: "1234 Elm Street", line2: "", cityStateZip: "Springfield, DM 62704", country: "United States" }
  };

  var RETURN_ADDRESS = {
    name: "Maria Rodriguez",
    line1: "1234 Elm Street",
    cityStateZip: "Springfield, DM 62704",
    country: "United States",
    tracking: "9400 1234 5678 9012 3456 78"
  };

  // Three digital recipients (used by digital / paper-to-digital orders).
  function digitalRecipients() {
    return [
      { id: "r1", name: "Maria Rodriguez", titleOrg: "Legal Advisor, Rodriguez & Associate", email: "maria.rodriguez@gmail.com", country: "USA" },
      { id: "r2", name: "James Smith", titleOrg: "Financial Analyst, Smith Wealth Management", email: "james.smith@smithwealth.com", country: "Canada" },
      { id: "r3", name: "Aisha Tanaka", titleOrg: "UX Designer, Tanaka Creative", email: "aisha.tanaka@tanakacreative.com", country: "Japan" }
    ];
  }

  // Single recipient block (used by paper-to-paper orders).
  function paperRecipient() {
    return {
      contactName: "Maria Rodriguez",
      titleOrg: "Legal Advisor, Rodriguez & Associate",
      email: "maria.rodriguez@gmail.com",
      phone: "(405) 555-5555",
      addrLine1: "1234 Elm Street",
      addrCityState: "Springfield, DM, United States",
      sentTo: "Italy",
      tracking: "9400 1234 5678 9012 3456 78"
    };
  }

  function baseDocument(productLabel) {
    return {
      name: "Maria Rodriguez",
      productLabel: productLabel,
      description: "Birth certificate",
      type: "Vital record",
      adoptionAgency: "American Adoption",
      issuingState: "Delmarva",
      destCountry: "Italy"
    };
  }

  // deliveryFlow: 'digital-upload' | 'paper-to-digital' | 'paper-to-paper'
  //   digital-upload  → documents uploaded electronically (no Return card), digital recipient list
  //   paper-to-digital→ physical docs mailed in (Return card shown), digital recipient list
  //   paper-to-paper  → physical in / physical out (Return card shown), single paper recipient block
  function makeChild(seq, opts) {
    var flow = opts.deliveryFlow;
    var isPaperOut = flow === "paper-to-paper";
    return {
      number: "123-456-789-" + seq,
      issuingState: "Delmarva Secretary of State",
      issuingStateShort: "Delmarva",
      issuingStateCode: "DM",
      requestType: isPaperOut ? "Paper" : "Digital",
      serviceType: opts.serviceType || "Standard",
      referenceName: "RO123",
      status: opts.status || "New",
      placedOn: opts.placedOn || "05/15/2023",
      deliveryFlow: flow,
      productLabel: opts.productLabel || (isPaperOut ? "Paper" : "Digital"),
      document: baseDocument(opts.productLabel || (isPaperOut ? "Paper" : "Digital")),
      customer: JSON.parse(JSON.stringify(CUSTOMER)),
      returnAddress: (flow === "paper-to-paper" || flow === "paper-to-digital") ? JSON.parse(JSON.stringify(RETURN_ADDRESS)) : null,
      recipients: digitalRecipients(),
      paperRecipient: paperRecipient()
    };
  }

  function defaultOrder() {
    var children = [
      makeChild("01", { deliveryFlow: "paper-to-digital", serviceType: "Standard", status: "New", productLabel: "Digital" }),
      makeChild("02", { deliveryFlow: "paper-to-paper", serviceType: "Standard", status: "New", productLabel: "Paper" }),
      makeChild("03", { deliveryFlow: "digital-upload", serviceType: "Express", status: "New", productLabel: "Electronic" }),
      makeChild("04", { deliveryFlow: "digital-upload", serviceType: "Standard", status: "New", productLabel: "Digital" }),
      makeChild("05", { deliveryFlow: "paper-to-paper", serviceType: "Standard", status: "New", productLabel: "Traditional" })
    ];
    return {
      number: "123-456-789",
      status: "New",
      placedOn: "05/15/2023",
      payment: { brand: "Visa", last4: "4242" },
      children: children
    };
  }

  // ---- Multi-parent seed data ----------------------------------------
  // A single child apostille with an individual, per-child status. The
  // parent's Customer Status is NEVER stored here — it is computed from the
  // array of child statuses via parentStatus() (decision tree below).
  function child(number, flow, status, opts) {
    opts = opts || {};
    var isPaperOut = flow === "paper-to-paper";
    var productLabel = opts.productLabel || (isPaperOut ? "Paper" : "Digital");
    return {
      number: number,
      issuingState: "Delmarva Secretary of State",
      issuingStateShort: "Delmarva",
      issuingStateCode: "DM",
      requestType: isPaperOut ? "Paper" : "Digital",
      serviceType: opts.serviceType || "Standard",
      referenceName: opts.ref || "RO123",
      status: status,
      placedOn: opts.placedOn || "05/15/2026",
      deliveryFlow: flow,
      productLabel: productLabel,
      document: baseDocument(productLabel),
      customer: JSON.parse(JSON.stringify(CUSTOMER)),
      returnAddress: (flow === "paper-to-paper" || flow === "paper-to-digital") ? JSON.parse(JSON.stringify(RETURN_ADDRESS)) : null,
      recipients: digitalRecipients(),
      paperRecipient: paperRecipient()
    };
  }
  function parent(number, placedOn, children, extra) {
    var o = { number: number, placedOn: placedOn, payment: { brand: "Visa", last4: "4242" }, children: children };
    if (extra) for (var k in extra) o[k] = extra[k];
    return o;
  }

  // Nine example parent orders, each demonstrating one computed Customer
  // Status. Children carry distinct, individually-accurate statuses so that
  // clicking into a child shows that child's real status (never the parent's).
  function seedOrders() {
    // A large order with 35 child apostilles spanning every status, to exercise
    // the decision tree + scrolling. Paper-only statuses get a paper flow.
    var POOL = [
      ["New", "digital-upload"], ["In Process", "digital-upload"], ["Flagged", "digital-upload"],
      ["Issued", "digital-upload"], ["Pending Print", "paper-to-paper"], ["Printed", "paper-to-paper"],
      ["Revoked & Cancelled", "digital-upload"], ["Cancelled", "paper-to-digital"], ["Rejected", "digital-upload"]
    ];
    var bigKids = [];
    for (var i = 0; i < 35; i++) {
      var p = POOL[i % POOL.length];
      bigKids.push(child("710-350-000-" + ("0" + (i + 1)).slice(-2), p[1], p[0], { placedOn: "04/20/2026", ref: "RO710" }));
    }
    return [
      // 10 — Large order: 35 children, mixed statuses → computes to In Review
      parent("710-350-000", "04/20/2026", bigKids),
      // Walk-In (Appointment): submitted without payment → Draft until the CA completes it at the counter
      parent("711-450-120", "04/24/2026", [
        child("711-450-120-01", "paper-to-digital", "Draft", { placedOn: "04/24/2026", ref: "RO711" }),
        child("711-450-120-02", "paper-to-paper", "Draft", { placedOn: "04/24/2026", ref: "RO711" })
      ], { orderOption: "walkin", payment: { method: "walkin", brand: "", last4: "" } }),
      // 1 — New: all children New
      parent("701-100-200", "04/02/2026", [
        child("701-100-200-01", "digital-upload", "New", { placedOn: "04/02/2026", ref: "RO701" }),
        child("701-100-200-02", "paper-to-digital", "New", { placedOn: "04/02/2026", ref: "RO701" })
      ]),
      // 2 — In Process: all children In Process
      parent("702-200-300", "04/08/2026", [
        child("702-200-300-01", "digital-upload", "In Process", { placedOn: "04/08/2026", ref: "RO702" }),
        child("702-200-300-02", "digital-upload", "In Process", { placedOn: "04/08/2026", ref: "RO702", serviceType: "Express" }),
        child("702-200-300-03", "paper-to-digital", "In Process", { placedOn: "04/08/2026", ref: "RO702" })
      ]),
      // 3 — In Review: mix of New + In Process (not all terminal, not uniform)
      parent("703-300-400", "04/15/2026", [
        child("703-300-400-01", "digital-upload", "New", { placedOn: "04/15/2026", ref: "RO703" }),
        child("703-300-400-02", "digital-upload", "In Process", { placedOn: "04/15/2026", ref: "RO703" })
      ]),
      // 4 — Pending Print: Issued (digital) + Pending Print (paper)
      parent("704-400-500", "03/20/2026", [
        child("704-400-500-01", "digital-upload", "Issued", { placedOn: "03/20/2026", ref: "RO704" }),
        child("704-400-500-02", "paper-to-paper", "Pending Print", { placedOn: "03/20/2026", ref: "RO704" })
      ]),
      // 5 — Completed: Issued + Cancelled + Rejected (all terminal, mixed success/failure)
      parent("705-500-600", "03/11/2026", [
        child("705-500-600-01", "digital-upload", "Issued", { placedOn: "03/11/2026", ref: "RO705" }),
        child("705-500-600-02", "digital-upload", "Cancelled", { placedOn: "03/11/2026", ref: "RO705" }),
        child("705-500-600-03", "paper-to-digital", "Rejected", { placedOn: "03/11/2026", ref: "RO705" })
      ]),
      // 6 — Revoked: all children Revoked & Cancelled
      parent("706-600-700", "02/28/2026", [
        child("706-600-700-01", "digital-upload", "Revoked & Cancelled", { placedOn: "02/28/2026", ref: "RO706" }),
        child("706-600-700-02", "digital-upload", "Revoked & Cancelled", { placedOn: "02/28/2026", ref: "RO706" })
      ]),
      // 7 — Cancelled: all children Cancelled
      parent("707-700-800", "02/19/2026", [
        child("707-700-800-01", "digital-upload", "Cancelled", { placedOn: "02/19/2026", ref: "RO707" }),
        child("707-700-800-02", "paper-to-digital", "Cancelled", { placedOn: "02/19/2026", ref: "RO707" })
      ]),
      // 8 — Rejected: all children Rejected
      parent("708-800-900", "02/05/2026", [
        child("708-800-900-01", "digital-upload", "Rejected", { placedOn: "02/05/2026", ref: "RO708" }),
        child("708-800-900-02", "digital-upload", "Rejected", { placedOn: "02/05/2026", ref: "RO708" }),
        child("708-800-900-03", "paper-to-digital", "Rejected", { placedOn: "02/05/2026", ref: "RO708" })
      ]),
      // 9 — Flagged: all children Flagged
      parent("709-900-100", "01/30/2026", [
        child("709-900-100-01", "digital-upload", "Flagged", { placedOn: "01/30/2026", ref: "RO709" }),
        child("709-900-100-02", "digital-upload", "Flagged", { placedOn: "01/30/2026", ref: "RO709" })
      ])
    ];
  }

  // All parent orders: created orders (persisted with a real children array)
  // lead the list, then the rich demo order and the nine examples. The
  // Documents count is ALWAYS children.length — never stored separately — so
  // the Orders list and each Order Overview can never disagree.
  function allOrders() {
    var seeds = [defaultOrder()].concat(seedOrders());
    var created = [];
    try {
      var raw = localStorage.getItem("ax_orders");
      if (raw) {
        var arr = JSON.parse(raw) || [];
        // Only well-formed parent orders (carrying a children array) participate;
        // any legacy summary rows without children are ignored.
        created = arr.filter(function (o) { return o && Array.isArray(o.children); });
      }
    } catch (e) {}
    var list = created.concat(seeds);
    // Walk-In (Appointment) orders stay in Draft until the CA submits them.
    list.forEach(function (o) {
      if (o.orderOption !== "walkin") return;
      (o.children || []).forEach(function (c) { if (!c.status || c.status === "New") c.status = "Draft"; });
    });
    // Canonical numbering: parent = digits only (shown as #<digits>); each child
    // = <7 digits>-<6 digits>_<4-digit sequence from 0001>; parent = <STATE CODE>-<7>-<6> (e.g. DM-3638286-460082, child 3638286-460082_0001).
    // Applied here so seeds and created orders always render the same scheme, and
    // so routing (which matches child.number verbatim) stays consistent.
    for (var a = 0; a < list.length; a++) {
      var o = list[a];
      var raw = String(o.number);
      var d = raw.replace(/\D/g, "") || raw;
      d = (d + d.split("").reverse().join("") + "0000000000000").slice(0, 13);
      var core = d.slice(0, 7) + "-" + d.slice(7);
      var kids = o.children || [];
      var pm = raw.match(/^[A-Za-z]{2}(?=-)/);
      var pcode = pm ? pm[0].toUpperCase() : (o.issuingStateCode || (kids[0] && (kids[0].issuingStateCode || (kids[0].issuingStateShort ? kids[0].issuingStateShort.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase() : ""))) || "DM");
      o.number = pcode + "-" + core;
      for (var b = 0; b < kids.length; b++) {
        kids[b].number = core + "_" + ("0000" + (b + 1)).slice(-4);
      }
    }
    var seen = {}, out = [];
    for (var i = 0; i < list.length; i++) {
      if (seen[list[i].number]) continue;
      seen[list[i].number] = true;
      out.push(list[i]);
    }
    return out;
  }

  // ---- Status helpers -------------------------------------------------
  // Canonical statuses. Digital group: New, In Process, Issued, Reissued,
  // Revoked & Cancelled, Rejected, Cancelled. Paper group: New, In Process,
  // Cancelled, Rejected, Reissued, Revoked & Cancelled, Pending Print, Printed.
  var STATUS_META = {
    "Draft": { cls: "draft" },
    "New": { cls: "new" },
    "In Process": { cls: "pending" },
    "Pending Print": { cls: "pending" },
    "Printed": { cls: "issued" },
    "Issued": { cls: "issued" },
    "Reissued": { cls: "issued" },
    "Rejected": { cls: "rejected" },
    "Cancelled": { cls: "cancelled" },
    "Canceled": { cls: "cancelled" },
    "Revoked & Cancelled": { cls: "revoked" },
    "Revoked and Cancelled": { cls: "revoked" }
  };

  var STATUSES_DIGITAL = ["New", "In Process", "Issued", "Reissued", "Revoked & Cancelled", "Rejected", "Cancelled"];
  var STATUSES_PAPER = ["New", "In Process", "Pending Print", "Printed", "Reissued", "Revoked & Cancelled", "Rejected", "Cancelled"];

  function statusClass(status) {
    return (STATUS_META[status] || { cls: "new" }).cls;
  }

  // ---- Universal (customer-facing) status mapping ---------------------
  // The Universal portal collapses several CA-portal statuses into simpler
  // customer-facing labels. Internal status keys are kept for banner +
  // action-matrix logic; only the displayed label is mapped.
  var UNIVERSAL_MAP = {
    "Flagged": "In Process",
    "Pending Print": "Issued",
    "Printed": "Issued",
    "Reissued": "Issued",
    "Revoked & Cancelled": "Revoked"
  };
  function universalLabel(status) { return status === "Cancelled" ? "Canceled" : (UNIVERSAL_MAP[status] || status); }
  function universalClass(status) { return statusClass(universalLabel(status)); }

  // Tooltip text explaining why an action is unavailable in the current status.
  function disabledReason(status) {
    if (status === "In Process") return "This order is under review by the Issuing Authority and can\u2019t be modified right now.";
    if (status === "Issued" || status === "Reissued" || status === "Pending Print" || status === "Printed") return "This action isn\u2019t available once the apostille has been issued.";
    if (status === "Cancelled") return "This order has been cancelled.";
    if (status === "Rejected") return "This order was rejected and can\u2019t be modified.";
    if (status === "Revoked & Cancelled") return "This order has been revoked and cancelled.";
    return "This action isn\u2019t available for this order.";
  }

  // Which matrix applies: paper-to-paper uses the Paper matrix; digital and
  // paper-to-digital use the Digital matrix.
  function matrixGroup(deliveryFlow) {
    return deliveryFlow === "paper-to-paper" ? "paper" : "digital";
  }

  // Action permission matrix → { editCustomer, editRecipient, deleteRecipient,
  // addRecipient, resend, downloadApostille }. deleteRecipient additionally
  // respects a minimum of one recipient (enforced at the component level).
  function permissions(status, deliveryFlow) {
    if (status === "Draft") status = "New"; // Draft (Walk-In) is editable like New
    var group = matrixGroup(deliveryFlow);
    var p;
    if (group === "paper") {
      p = (status === "New")
        ? { editCustomer: true, editRecipient: true, deleteRecipient: false, addRecipient: false, resend: false, downloadApostille: false }
        : { editCustomer: false, editRecipient: false, deleteRecipient: false, addRecipient: false, resend: false, downloadApostille: false };
    } else {
      // digital / paper-to-digital
      switch (status) {
        case "New":
          p = { editCustomer: true, editRecipient: true, deleteRecipient: true, addRecipient: true, resend: false, downloadApostille: false }; break;
        case "Issued":
        case "Reissued":
          p = { editCustomer: false, editRecipient: true, deleteRecipient: true, addRecipient: true, resend: true, downloadApostille: true }; break;
        default: // In Process, Revoked & Cancelled, Rejected, Cancelled
          p = { editCustomer: false, editRecipient: false, deleteRecipient: false, addRecipient: false, resend: false, downloadApostille: false };
      }
    }
    // Edit Return Address is available only while New (both matrices).
    p.editReturnAddress = (status === "New");
    return p;
  }

  // ---- Banner model ---------------------------------------------------
  // Returns null (no banner) or { kind, icon, title, body, lines, showDownload, reason }
  function banner(child) {
    var status = child.status;
    var isPaper = matrixGroup(child.deliveryFlow) === "paper";
    switch (status) {
      case "Draft":
        return { kind: "info", icon: "bi-info-circle-fill", title: "Submitted In-Person Appointment", body: "Bring your printed delivery form and original documents. Your order shows as Incomplete until your appointment, where payment will be collected." };
      case "New":
        return null;
      case "In Process":
        return { kind: "warn", icon: "bi-info-circle-fill", body: "This order is currently under review by the Issuing Authority and cannot be modified at this time.", emphasis: "Issuing Authority" };
      case "Pending Print":
        return { kind: "warn", icon: "bi-printer", title: "Your request has been issued.", body: "Your document will be printed and dispatched." };
      case "Printed":
        return { kind: "success", icon: "bi-check-circle-fill", title: "Your request has been issued.", body: "Your order will be fulfilled using your selected delivery method." };
      case "Issued":
      case "Reissued":
        return { kind: "success", icon: "bi-check-circle-fill", title: "Your e-Apostille is ready", adobeNotice: true, showDownload: true, deletion: true };
      case "Rejected":
        return { kind: "danger", icon: "bi-exclamation-circle-fill", title: "Your request was rejected", body: "Your request cannot be processed for the following reason(s):", reasonBlock: { reasonLabel: "Rejection reason:", reason: child.rejectionReason || "Improper Notarization/Certification", nextLabel: "Next steps:", next: "Please address the issue noted above and submit a new order at your earliest convenience.", refundLabel: "Refund:", refund: "A refund has already been processed." } };
      case "Cancelled":
        return { kind: "danger", icon: "bi-exclamation-circle-fill", title: "Order Cancelled", lines: [["Reason:", child.cancelReason || "Customer requested cancellation."], child.unpaid ? ["Refund:", "No refund applies — this incomplete order was canceled before payment."] : ["Refund:", "A refund has already been processed."]] };
      case "Revoked & Cancelled":
        return { kind: "danger", icon: "bi-exclamation-circle-fill", title: "Order #" + child.number + " Revoked & Cancelled", body: "Your Apostille Certificate has been revoked and cancelled.", lines: [["Reason:", child.revokeReason || "Illegible"]] };
      default:
        return null;
    }
  }

  function showReturnCard(child) {
    return child.deliveryFlow === "paper-to-paper" || child.deliveryFlow === "paper-to-digital";
  }

  function productPillClass(label) {
    var l = (label || "").toLowerCase();
    if (l === "paper" || l === "traditional") return "paper";
    return "digital"; // Digital / Electronic
  }

  // ---- Parent (Customer) status — ordered decision tree ---------------
  // Evaluated top to bottom; the FIRST matching rule wins. Computed live from
  // the child status array — never stored. `opts.incompleteDraft` flags a paid
  // draft whose fields are not yet complete (Step 0.1).
  var PARENT_TERMINAL = { "Issued": 1, "Printed": 1, "Cancelled": 1, "Rejected": 1, "Revoked & Cancelled": 1 };
  function parentStatus(children, opts) {
    opts = opts || {};
    var S = (children || []).map(function (c) { return c.status; });
    if (S.length === 0) return "New";
    var count = {};
    S.forEach(function (x) { count[x] = (count[x] || 0) + 1; });
    var distinct = Object.keys(count);
    var has = function (st) { return count[st] > 0; };
    var all = function (st) { return distinct.length === 1 && distinct[0] === st; };
    var allTerminal = S.every(function (x) { return !!PARENT_TERMINAL[x]; });

    // Step 0 — pre-checks
    if (opts.incompleteDraft) return "Incomplete";                 // 0.1
    var anyFlagged = has("Flagged");
    var allFlagged = all("Flagged");
    if (anyFlagged && !allFlagged) return "In Review";             // 0.2 — a flag on a subset escalates the whole order

    // Step 1 — uniform (all children share one status)
    if (all("Draft")) return "Incomplete";                              // Walk-In (Appointment) awaiting the CA
    if (all("New")) return "New";                                  // 3
    if (all("In Process")) return "In Process";                    // 4
    if (allFlagged) return "Flagged";                              // 5
    if (all("Cancelled")) return "Cancelled";                      // 6
    if (all("Rejected")) return "Rejected";                        // 7
    if (all("Revoked & Cancelled")) return "Revoked";             // 8
    if (all("Issued")) return "Issued";                            // 9
    if (all("Printed")) return "Printed";                          // 10
    if (all("Pending Print")) return "Pending Print";             // 11

    // Step 2 — mixed, ALL children terminal
    if (allTerminal) {
      var successT = has("Issued") || has("Printed");
      var failureT = has("Cancelled") || has("Rejected") || has("Revoked & Cancelled");
      if (successT && !failureT) return "Printed";                 // 12 — Issued + Printed only
      return "Completed";                                          // 13–17 — any other all-terminal mix
    }

    // Step 3 — mixed, NOT all terminal (≥1 New / In Process / Pending Print)
    if (has("Issued") && has("Pending Print")) return "Pending Print";   // 18
    if (has("Printed") && has("Pending Print")) return "Pending Print";  // 19
    return "In Review";                                            // 20 + 21 fallback
  }

  // Badge color class for a parent Customer Status.
  //   new (blue/teal) · pending (yellow) · issued (green) · cancelled/rejected/revoked (red)
  var PARENT_META = {
    "Draft": "draft",
    "Incomplete": "incomplete",
    "New": "new",
    "In Process": "pending", "In Review": "pending", "Pending Print": "pending", "Flagged": "pending",
    "Issued": "issued", "Printed": "issued", "Completed": "issued",
    "Cancelled": "cancelled", "Rejected": "rejected", "Revoked": "revoked"
  };
  function parentClass(status) { return PARENT_META[status] || "new"; }
  function parentLabel(status) { return status === "Cancelled" ? "Canceled" : status; }

  // ---- Pricing --------------------------------------------------------
  // Per-apostille fees (from the Create-Order fee schedule):
  //   e-Apostille / digital delivery: $5.00 state fee + $69.95 AX fee = $74.95
  //   Traditional / paper delivery:   $5.00 state fee
  var FEE_STATE = 5.00, FEE_AX = 69.95;
  function childCost(c) {
    if (c && c.fees) return (c.fees.stateFee||0)+(c.fees.stateServiceFee||0)+(c.fees.axFee||0)+(c.fees.intlFee||0);
    return matrixGroup(c.deliveryFlow) === "paper" ? FEE_STATE : (FEE_STATE + FEE_AX);
  }
  function orderTotal(children) {
    return (children || []).reduce(function (sum, c) { return sum + childCost(c); }, 0);
  }
  function formatMoney(n) {
    return "$" + Number(n || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  window.AXOrders = {
    defaultOrder: defaultOrder,
    statusClass: statusClass,
    universalLabel: universalLabel,
    universalClass: universalClass,
    disabledReason: disabledReason,
    matrixGroup: matrixGroup,
    permissions: permissions,
    banner: banner,
    showReturnCard: showReturnCard,
    productPillClass: productPillClass,
    parentStatus: parentStatus,
    parentClass: parentClass,
    parentLabel: parentLabel,
    childCost: childCost,
    orderTotal: orderTotal,
    formatMoney: formatMoney,
    makeChildOrder: child,
    STATUSES_DIGITAL: STATUSES_DIGITAL,
    STATUSES_PAPER: STATUSES_PAPER,
    getOrders: function () { return allOrders(); },
    getOrder: function (number) {
      var list = allOrders();
      if (number) {
        for (var i = 0; i < list.length; i++) { if (list[i].number === number) return list[i]; }
      }
      try {
        var raw = localStorage.getItem("ax_active_order");
        if (raw) return JSON.parse(raw);
      } catch (e) {}
      return list[0];
    },
    findChild: function (order, number) {
      if (!order || !order.children) return null;
      for (var i = 0; i < order.children.length; i++) {
        if (order.children[i].number === number) return order.children[i];
      }
      return order.children[0] || null;
    },
    // Locate a child across ALL parent orders → { parent, child } | null.
    findChildAny: function (number) {
      if (!number) return null;
      var list = allOrders();
      for (var i = 0; i < list.length; i++) {
        var kids = list[i].children || [];
        for (var j = 0; j < kids.length; j++) {
          if (kids[j].number === number) return { parent: list[i], child: kids[j] };
        }
      }
      return null;
    }
  };
})();
