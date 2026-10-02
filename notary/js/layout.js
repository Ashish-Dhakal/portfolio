/* Shared header, footer, and mobile action bar.
   Script src must be js/layout.js relative to the page, so links resolve
   from nested folders such as services/ and service-areas/. */

(function () {
  const script = document.currentScript;
  const ROOT = script
    ? script.getAttribute("src").replace(/js\/layout\.js(?:\?.*)?$/, "")
    : "";

  const SOCIAL_LABELS = {
    facebook: "Facebook",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    googleBusiness: "Google Business Profile",
    notaryCafe: "NotaryCafe",
  };

  const site = window.SITE;
  if (!site) {
    console.error("site-data.js must load before layout.js");
    return;
  }

  const pageLabel = document.body.dataset.pageLabel || "";
  document.title = pageLabel
    ? pageLabel + " | " + site.businessName
    : site.businessName;

  document.querySelectorAll("[data-fill]").forEach(function (node) {
    const value = site[node.getAttribute("data-fill")];
    if (value) node.textContent = value;
  });

  applyShell();

  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  const barMount = document.getElementById("site-action-bar");
  if (!headerMount || !footerMount || !barMount) return;

  headerMount.replaceWith(renderHeader());
  footerMount.replaceWith(renderFooter());
  barMount.replaceWith(renderActionBar());
  bindMenu();

  function applyShell() {
    addClasses(document.documentElement, UI.html);
    addClasses(document.body, UI.body);
    const main = document.getElementById("main");
    if (main) addClasses(main, UI.main);
    const skip = document.querySelector('a[href="#main"]');
    if (skip) skip.className = UI.skip;
  }

  function addClasses(el, value) {
    String(value || "")
      .split(/\s+/)
      .forEach(function (name) {
        if (name) el.classList.add(name);
      });
  }

  function renderHeader() {
    const header = document.createElement("header");
    header.id = "site-header";
    header.className = UI.header;
    header.innerHTML =
      '<div id="header-bar" class="' + UI.headerBar + '">' +
      '<a class="' + UI.brand + '" href="' +
      href("index.html") +
      '">' +
      '<span class="' + UI.brandMark + '" aria-hidden="true">' +
      esc(brandInitial()) +
      "</span>" +
      '<span class="' + UI.brandName + '">' +
      esc(site.businessName) +
      "</span>" +
      "</a>" +
      '<nav class="' + UI.desktopNav + '" aria-label="Primary">' +
      navLinks(UI.navLink) +
      bookLink() +
      "</nav>" +
      '<div class="' + UI.headerTools + '">' +
      contactControl("tel", site.phone, "Call", UI.iconBtn, true, true) +
      '<button type="button" id="menu-toggle" class="' + UI.iconBtn + '" aria-expanded="false" aria-controls="mobile-nav">' +
      '<span id="menu-label" class="' + UI.sr + '">Open menu</span>' +
      '<svg class="' + UI.icon + '" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 5h14M3 10h14M3 15h14"/></svg>' +
      "</button>" +
      "</div>" +
      "</div>" +
      '<nav id="mobile-nav" class="' + UI.mobileNav + '" hidden aria-label="Mobile">' +
      '<div class="' + UI.mobileInner + '">' +
      navLinks(UI.mobileLink) +
      "</div>" +
      "</nav>";
    return header;
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    const footer = document.createElement("footer");
    footer.className = UI.footer;
    footer.innerHTML =
      '<div class="' + UI.footerGrid + '">' +
      "<div>" +
      '<p class="' + UI.footerName + '">' +
      esc(site.businessName) +
      "</p>" +
      '<p class="' + UI.footerText + '">' +
      esc(site.description) +
      "</p>" +
      socialLinks() +
      "</div>" +
      "<div>" +
      '<h2 class="' + UI.footerHeading + '">Contact</h2>' +
      '<ul class="' + UI.footerList + '">' +
      "<li>" +
      contactControl("tel", site.phone, site.phone, UI.footerLink) +
      "</li>" +
      "<li>" +
      contactControl("sms", site.textNumber, "Text " + site.textNumber, UI.footerLink) +
      "</li>" +
      "<li>" +
      contactControl("mail", site.email, site.email, UI.footerLink) +
      "</li>" +
      hoursLine() +
      "<li>Serving " +
      esc(site.serviceAreaLabel) +
      "</li>" +
      "</ul>" +
      "</div>" +
      "<div>" +
      '<h2 class="' + UI.footerHeading + '">Explore</h2>' +
      '<ul class="' + UI.footerList + '">' +
      linkList(site.nav) +
      "</ul>" +
      "</div>" +
      "<div>" +
      '<h2 class="' + UI.footerHeading + '">Services</h2>' +
      '<ul class="' + UI.footerList + '">' +
      linkList(serviceLinks()) +
      "</ul>" +
      "</div>" +
      "</div>" +
      '<div class="' + UI.footerLegal + '">' +
      '<div class="' + UI.footerLegalInner + '">' +
      "<p>© " +
      year +
      " " +
      esc(site.businessName) +
      "</p>" +
      '<p class="' + UI.footerLegalLinks + '">' +
      '<a href="' +
      href("privacy-policy.html") +
      '">Privacy Policy</a>' +
      '<a href="' +
      href("disclaimer.html") +
      '">Disclaimer</a>' +
      "</p>" +
      "</div>" +
      "</div>";
    return footer;
  }

  function renderActionBar() {
    const items = [
      { key: "home", label: "Home", path: "index.html", icon: "home" },
      { key: "services", label: "Services", path: "services.html", icon: "services" },
      { key: "contact", label: "Contact", path: "contact.html", icon: "mail" },
    ];
    const nav = document.createElement("nav");
    nav.className = UI.actionBar;
    nav.setAttribute("aria-label", "Navigation");
    nav.innerHTML = items
      .map(function (item) {
        const current = isCurrent(item.path) ? ' aria-current="page"' : "";
        return (
          '<a class="' +
          UI.barBtn +
          '" href="' +
          href(item.path) +
          '"' +
          current +
          ">" +
          icon(item.icon) +
          "<span>" +
          esc(barLabel(item.key, item.label)) +
          "</span></a>"
        );
      })
      .join("");
    return nav;
  }

  function bindMenu() {
    const header = document.getElementById("site-header");
    const toggle = document.getElementById("menu-toggle");
    const panel = document.getElementById("mobile-nav");
    const label = document.getElementById("menu-label");

    function paintChrome(open) {
      const active = open || window.scrollY > 4;
      header.classList.toggle("border-transparent", !active);
      header.classList.toggle("border-line", active);
      header.classList.toggle("shadow-[0_8px_24px_rgba(16,36,62,0.06)]", active);
    }

    function setOpen(open) {
      const bar = document.getElementById("header-bar");
      document.documentElement.style.setProperty(
        "--header-offset",
        bar.getBoundingClientRect().height + "px"
      );
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      label.textContent = open ? "Close menu" : "Open menu";
      panel.hidden = !open;
      document.body.classList.toggle("overflow-hidden", open);
      paintChrome(open);
    }

    toggle.addEventListener("click", function () {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      setOpen(open);
      if (open) {
        const first = panel.querySelector("a");
        if (first) first.focus();
      }
    });

    panel.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024) setOpen(false);
    });

    window.addEventListener("scroll", function () {
      paintChrome(toggle.getAttribute("aria-expanded") === "true");
    });
  }

  function navLinks(className) {
    return site.nav
      .map(function (item) {
        const current = isCurrent(item.href) ? ' aria-current="page"' : "";
        return (
          '<a class="' +
          className +
          '" href="' +
          href(item.href) +
          '"' +
          current +
          ">" +
          esc(item.label) +
          "</a>"
        );
      })
      .join("");
  }

  function bookLink() {
    return (
      '<a class="' +
      UI.btnHeader +
      '" href="' +
      href(site.bookHref) +
      '">' +
      esc(site.cta && site.cta.book ? site.cta.book : "Book Appointment") +
      "</a>"
    );
  }

  function serviceLinks() {
    if (site.services && site.services.length) {
      const listed = site.services.filter(function (item) {
        return item.href && item.footer;
      });
      const source = listed.length
        ? listed
        : site.services.filter(function (item) {
            return item.href;
          });
      return source.map(function (item) {
        return { label: item.name, href: item.href };
      });
    }
    return site.serviceLinks || [];
  }

  function barLabel(key, fallback) {
    return (site.actionBar && site.actionBar[key]) || fallback;
  }

  function brandInitial() {
    const match = String(site.businessName || "").match(/[A-Za-z]/);
    return match ? match[0].toUpperCase() : "N";
  }

  function linkList(items) {
    return items
      .map(function (item) {
        return (
          '<li><a class="' +
          UI.footerLink +
          '" href="' +
          href(item.href) +
          '">' +
          esc(item.label) +
          "</a></li>"
        );
      })
      .join("");
  }

  function socialLinks() {
    const items = Object.keys(SOCIAL_LABELS)
      .filter(function (key) {
        return isUrl(site.social && site.social[key]);
      })
      .map(function (key) {
        return (
          '<li><a class="' +
          UI.footerPill +
          '" href="' +
          esc(site.social[key]) +
          '" rel="noopener noreferrer">' +
          esc(SOCIAL_LABELS[key]) +
          "</a></li>"
        );
      });
    if (!items.length) return "";
    return (
      '<div class="' + UI.footerFind + '">' +
      '<h2 class="' + UI.footerHeading + '">Find us</h2>' +
      '<ul class="' + UI.footerSocial + '">' +
      items.join("") +
      "</ul></div>"
    );
  }

  function hoursLine() {
    if (!site.hours || /\[[^\]]+\]/.test(String(site.hours))) return "";
    return "<li>Hours " + esc(site.hours) + "</li>";
  }

  function contactControl(kind, value, label, className, withIcon, iconOnly) {
    const url = contactUrl(kind, value);
    const iconName = kind === "mail" ? "mail" : kind === "sms" ? "text" : "call";
    const textClass = iconOnly ? UI.sr : "";
    const pendingNote = url ? "" : '<span class="' + UI.sr + '"> Not set yet.</span>';
    const content =
      (withIcon ? icon(iconName) : "") +
      '<span class="' +
      textClass +
      '">' +
      esc(label) +
      "</span>" +
      pendingNote;
    if (!url) {
      return (
        '<button type="button" class="' +
        className +
        " " +
        UI.pending +
        '" aria-disabled="true">' +
        content +
        "</button>"
      );
    }
    return '<a class="' + className + '" href="' + esc(url) + '">' + content + "</a>";
  }

  function contactUrl(kind, value) {
    if (isPlaceholder(value)) return "";
    if (kind === "mail") return "mailto:" + String(value).trim();
    const digits = String(value).replace(/[^\d+]/g, "");
    if (!digits) return "";
    if (kind === "sms") return "sms:" + digits;
    return "tel:" + digits;
  }

  function isPlaceholder(value) {
    return !value || /\[[^\]]+\]/.test(String(value));
  }

  function isUrl(value) {
    return /^https?:\/\//i.test(String(value || ""));
  }

  function isCurrent(itemHref) {
    const path = location.pathname;
    if (itemHref === "index.html") {
      return (
        path.endsWith("/index.html") ||
        path.endsWith("/notary") ||
        path.endsWith("/notary/")
      );
    }
    if (itemHref === "services.html" && /\/services\//.test(path)) return true;
    return path.endsWith("/" + itemHref);
  }

  function href(path) {
    return ROOT + path;
  }

  function icon(name) {
    const paths = {
      call: '<path d="M7 3.5h2.2l1.1 2.6-1.4 1a12 12 0 0 0 5 5l1-1.4 2.6 1.1V14a1.5 1.5 0 0 1-1.6 1.5A13.5 13.5 0 0 1 5.5 5.1 1.5 1.5 0 0 1 7 3.5Z"/>',
      text: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h7A2.5 2.5 0 0 1 16 5.5v6A2.5 2.5 0 0 1 13.5 14H8l-3.2 2.2c-.5.3-1.1 0-1.1-.6V5.5Z"/>',
      book: '<path d="M6 3.5h8.5A1.5 1.5 0 0 1 16 5v11H7.2A2.2 2.2 0 0 0 5 18.2V5.2A1.7 1.7 0 0 1 6.7 3.5H6Zm0 0V16"/><path d="M8.5 7.5h5M8.5 10.5h5"/>',
      mail: '<path d="M3.5 5.5h13v9h-13v-9Z"/><path d="m4 6 6 4.5L16 6"/>',
      home: '<path d="M3.5 9.5 10 4l6.5 5.5"/><path d="M5.5 8.5V16h9V8.5"/>',
      services: '<circle cx="10" cy="10" r="6.2"/><circle cx="10" cy="10" r="2.3"/>',
    };
    return (
      '<svg class="' + UI.icon + '" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round">' +
      (paths[name] || "") +
      "</svg>"
    );
  }

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();
