/* ApostilleXpress — mobile navigation (shared, framework-agnostic).
   Injects a hamburger button + dropdown panel on <body> for pages that have a
   .topbar. Menu items are built from the LIVE top-bar links at open time and
   proxy their clicks to the real elements, so no page behaviour changes. */
(function () {
  var BP = 860;
  var btn, panel, scrim, open = false;

  function isProfilePage() { return /profile\.html$/i.test(location.pathname); }

  // one persistent <i>: swap its class so glyphs can never stack
  function setIcon(cls) {
    var i = btn.querySelector("i");
    if (!i) { i = document.createElement("i"); btn.appendChild(i); }
    i.className = "bi " + cls;
  }

  function close() {
    open = false;
    panel.classList.remove("open");
    scrim.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    setIcon("bi-list");
    document.body.classList.remove("ax-mnav-open");
  }

  function item(iconClass, label, active, onClick, href) {
    var el = document.createElement(href ? "a" : "button");
    if (href) el.setAttribute("href", href);
    el.className = "ax-mnav-item" + (active ? " active" : "");
    el.setAttribute("role", "menuitem");
    el.innerHTML = '<i class="bi ' + iconClass + '"></i><span></span>';
    el.querySelector("span").textContent = label;
    el.addEventListener("click", function (e) {
      if (onClick) { e.preventDefault(); close(); onClick(); }
      else { close(); }
    });
    return el;
  }

  function build() {
    panel.innerHTML = "";
    var links = document.querySelectorAll(".topbar .tb-nav > a, .topbar .tb-nav > button");
    Array.prototype.forEach.call(links, function (src) {
      var icon = src.querySelector("i");
      var iconClass = icon ? (icon.className.replace(/\bbi\b/, "").trim() || "bi-dot") : "bi-dot";
      var labelEl = src.querySelector("span");
      var label = (labelEl ? labelEl.textContent : src.textContent).trim();
      if (!label) return;
      panel.appendChild(item(iconClass, label, src.classList.contains("active"), function () {
        src.click();
      }));
    });
    panel.appendChild(document.createElement("hr")).className = "ax-mnav-sep";
    panel.appendChild(item("bi-person", "My Profile", isProfilePage(), null, "Profile.html"));
    panel.appendChild(item("bi-box-arrow-right", "Log Out", false, null, "CustomerAuth.dc.html"));
  }

  function toggle() {
    if (open) { close(); return; }
    build();
    open = true;
    panel.classList.add("open");
    scrim.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
    setIcon("bi-x-lg");
    document.body.classList.add("ax-mnav-open");
  }

  function init() {
    if (!document.querySelector(".topbar") || document.querySelector(".ax-mnav-btn")) {
      if (!document.querySelector(".topbar")) return;
    }
    btn = document.createElement("button");
    btn.className = "ax-mnav-btn";
    btn.type = "button";
    btn.setAttribute("aria-label", "Menu");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-haspopup", "menu");
    btn.appendChild(document.createElement("i")).className = "bi bi-list";
    scrim = document.createElement("div");
    scrim.className = "ax-mnav-scrim";
    panel = document.createElement("nav");
    panel.className = "ax-mnav-panel";
    panel.setAttribute("role", "menu");
    document.body.appendChild(scrim);
    document.body.appendChild(panel);
    document.body.appendChild(btn);
    document.body.classList.add("ax-has-mnav");
    btn.addEventListener("click", toggle);
    scrim.addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && open) close(); });
    window.addEventListener("resize", function () { if (open && window.innerWidth > BP) close(); });
  }

  function boot() {
    if (document.querySelector(".topbar")) { init(); return; }
    // React/dc pages render after load — wait for the top bar to appear.
    var obs = new MutationObserver(function () {
      if (document.querySelector(".topbar")) { obs.disconnect(); init(); }
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(function () { obs.disconnect(); }, 15000);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
