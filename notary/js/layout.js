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

  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  const barMount = document.getElementById("site-action-bar");
  if (!headerMount || !footerMount || !barMount) return;

  headerMount.replaceWith(renderHeader());
  footerMount.replaceWith(renderFooter());
  barMount.replaceWith(renderActionBar());
  bindMenu();

  function renderHeader() {
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML =
      '<div class="header__bar container">' +
      '<a class="brand" href="' +
      href("index.html") +
      '">' +
      '<span class="brand__mark" aria-hidden="true">' +
      esc(brandInitial()) +
      "</span>" +
      '<span class="brand__name">' +
      esc(site.businessName) +
      "</span>" +
      "</a>" +
      '<nav class="desktop-nav" aria-label="Primary">' +
      navLinks() +
      bookLink("header") +
      "</nav>" +
      '<div class="header__tools">' +
      contactControl("tel", site.phone, barLabel("call", "Call"), "header-call", true, true) +
      '<button type="button" class="menu-toggle" aria-expanded="false" aria-controls="mobile-nav">' +
      '<span class="visually-hidden">Open menu</span>' +
      '<span class="menu-toggle__bars" aria-hidden="true"></span>' +
      "</button>" +
      "</div>" +
      "</div>" +
      '<nav class="mobile-nav" id="mobile-nav" hidden aria-label="Mobile">' +
      '<div class="container mobile-nav__inner">' +
      navLinks() +
      "</div>" +
      "</nav>";
    return header;
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="container footer__grid">' +
      "<div>" +
      '<p class="footer__name">' +
      esc(site.businessName) +
      "</p>" +
      '<p class="footer__description">' +
      esc(site.description) +
      "</p>" +
      socialLinks() +
      "</div>" +
      "<div>" +
      '<h2 class="footer__heading">Contact</h2>' +
      "<ul class=\"footer__list\">" +
      "<li>" +
      contactControl("tel", site.phone, site.phone, "footer-phone") +
      "</li>" +
      "<li>" +
      contactControl("sms", site.textNumber, "Text " + site.textNumber, "footer-text") +
      "</li>" +
      "<li>" +
      contactControl("mail", site.email, site.email, "footer-email") +
      "</li>" +
      hoursLine() +
      "<li>Serving " +
      esc(site.serviceAreaLabel) +
      "</li>" +
      "</ul>" +
      "</div>" +
      "<div>" +
      '<h2 class="footer__heading">Explore</h2>' +
      '<ul class="footer__list">' +
      linkList(site.nav) +
      "</ul>" +
      "</div>" +
      "<div>" +
      '<h2 class="footer__heading">Services</h2>' +
      '<ul class="footer__list">' +
      linkList(serviceLinks()) +
      "</ul>" +
      "</div>" +
      "</div>" +
      '<div class="footer__legal">' +
      '<div class="container footer__legal-inner">' +
      "<p>© " +
      year +
      " " +
      esc(site.businessName) +
      "</p>" +
      '<p class="footer__legal-links">' +
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
    const nav = document.createElement("nav");
    nav.className = "action-bar";
    nav.setAttribute("aria-label", "Quick contact");
    nav.innerHTML =
      contactControl("tel", site.phone, barLabel("call", "Call"), "action-bar__btn", true) +
      contactControl("sms", site.textNumber, barLabel("text", "Text"), "action-bar__btn", true) +
      '<a class="action-bar__btn" href="' +
      href(site.bookHref) +
      '">' +
      icon("book") +
      "<span>" +
      esc(barLabel("book", "Book")) +
      "</span>" +
      "</a>";
    return nav;
  }

  function bindMenu() {
    const header = document.querySelector(".site-header");
    const toggle = header.querySelector(".menu-toggle");
    const panel = header.querySelector(".mobile-nav");
    const label = toggle.querySelector(".visually-hidden");

    function setOpen(open) {
      const bar = header.querySelector(".header__bar");
      document.documentElement.style.setProperty(
        "--header-offset",
        bar.getBoundingClientRect().height + "px"
      );
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      label.textContent = open ? "Close menu" : "Open menu";
      panel.hidden = !open;
      document.body.classList.toggle("nav-open", open);
      header.classList.toggle("is-open", open);
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
      if (window.innerWidth >= 960) setOpen(false);
    });

    window.addEventListener("scroll", function () {
      header.classList.toggle("is-stuck", window.scrollY > 4);
    });
  }

  function navLinks() {
    return site.nav
      .map(function (item) {
        const current = isCurrent(item.href) ? ' aria-current="page"' : "";
        return (
          '<a href="' +
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
      '<a class="btn btn--primary" href="' +
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
          "<li><a href=\"" +
          href(item.href) +
          "\">" +
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
          '<li><a href="' +
          esc(site.social[key]) +
          '" rel="noopener noreferrer">' +
          esc(SOCIAL_LABELS[key]) +
          "</a></li>"
        );
      });
    if (!items.length) return "";
    return (
      '<div class="footer__find">' +
      '<h2 class="footer__heading">Find us</h2>' +
      '<ul class="footer__social">' +
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
    const textClass = iconOnly ? "visually-hidden" : "";
    const pendingNote = url ? "" : '<span class="visually-hidden"> Not set yet.</span>';
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
        ' is-pending" aria-disabled="true">' +
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
    };
    return (
      '<svg class="icon" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round">' +
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
