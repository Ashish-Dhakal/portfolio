/* Homepage sections. All names, cities, services, and answers come from site-data.js. */

(function () {
  const site = window.SITE;
  const main = document.getElementById("main");
  if (!site || !main) return;

  const script = document.currentScript;
  const ROOT = script
    ? script.getAttribute("src").replace(/js\/home\.js(?:\?.*)?$/, "")
    : "";

  document.title =
    "Mobile Notary in " + site.city + ", " + site.state + " | " + site.businessName;

  const preview = (site.services || []).filter(function (item) {
    return item.preview;
  });
  const packages = (site.signingPackages || []).filter(function (item) {
    return item.offered !== false;
  });
  const homeFaqs = (site.faqs || []).filter(function (item) {
    return item.home;
  });
  const showReviews = site.flags && site.flags.showTestimonials && site.testimonials && site.testimonials.length;

  main.innerHTML = [
    hero(),
    trust(),
    services(),
    about(),
    mobile(),
    signing(),
    areas(),
    steps(),
    reviews(),
    faq(),
    finalCta(),
  ].join("");

  function hero() {
    return (
      '<section class="hero">' +
      '<div class="container hero__inner">' +
      '<p class="eyebrow">' +
      esc(site.city + ", " + site.state) +
      "</p>" +
      "<h1 class=\"page-title\">Professional Mobile Notary Services in " +
      esc(site.city + ", " + site.state) +
      "</h1>" +
      '<p class="lede">' +
      esc(site.description) +
      "</p>" +
      '<div class="button-row">' +
      button(site.cta.book, site.bookHref, "btn btn--primary") +
      callButton("btn btn--secondary") +
      "</div>" +
      '<p class="hero__quote">' +
      '<a class="text-link" href="' +
      href(site.quoteHref) +
      '">' +
      esc(site.cta.quote) +
      "</a></p>" +
      '<dl class="hero__meta">' +
      "<div><dt>Phone</dt><dd>" +
      phoneLink() +
      "</dd></div>" +
      "<div><dt>Service area</dt><dd>Serving " +
      esc(site.serviceAreaLabel) +
      "</dd></div>" +
      "<div><dt>Hours</dt><dd>" +
      esc(site.hours) +
      ". " +
      esc(site.availability) +
      "</dd></div>" +
      "</dl>" +
      "</div>" +
      "</section>"
    );
  }

  function trust() {
    const items = (site.trust || [])
      .map(function (item) {
        return (
          "<li class=\"trust-item\"><h3>" +
          esc(item.title) +
          "</h3><p>" +
          esc(item.text) +
          "</p></li>"
        );
      })
      .join("");
    return (
      '<section class="section" aria-labelledby="trust-title">' +
      '<div class="container">' +
      heading("trust-title", "Why people call", "Straightforward notary visits, arranged around your schedule.") +
      '<ul class="trust-grid">' +
      items +
      "</ul>" +
      "</div></section>"
    );
  }

  function services() {
    const cards = preview
      .map(function (item) {
        return (
          '<article class="card service-card">' +
          '<span class="card__icon" aria-hidden="true">' +
          icon(item.icon) +
          "</span>" +
          "<h3>" +
          esc(item.name) +
          "</h3>" +
          "<p>" +
          esc(item.summary) +
          "</p>" +
          '<a class="text-link" href="' +
          href(item.href) +
          '">Learn more<span class="visually-hidden"> about ' +
          esc(item.name) +
          "</span></a>" +
          "</article>"
        );
      })
      .join("");
    return (
      '<section class="section band" id="services" aria-labelledby="services-title">' +
      '<div class="container">' +
      heading("services-title", "Services", "Common reasons people book a notary.") +
      '<div class="card-grid card-grid--3">' +
      cards +
      "</div>" +
      '<p class="notice">' +
      esc(site.qualifyNote) +
      "</p>" +
      '<p class="section-link"><a class="text-link" href="' +
      href("services.html") +
      '">View all services</a></p>' +
      "</div></section>"
    );
  }

  function about() {
    const experience = String(site.about.experience || "").trim();
    const photo =
      site.flags && site.flags.showPhoto && site.photo
        ? '<img class="photo" src="' +
          esc(href(site.photo)) +
          '" alt="Portrait of ' +
          esc(site.ownerName) +
          '" width="640" height="800" loading="lazy" onerror="this.onerror=null;this.replaceWith(Object.assign(document.createElement(\'div\'),{className:\'photo-placeholder\',innerHTML:\'<span>Photo coming soon</span>\'}))">'
        : '<div class="photo-placeholder"><span>Photo coming soon</span></div>';
    return (
      '<section class="section" id="about" aria-labelledby="about-title">' +
      '<div class="container about-preview">' +
      photo +
      "<div>" +
      '<p class="eyebrow">About</p>' +
      '<h2 id="about-title">' +
      esc(site.ownerName) +
      "</h2>" +
      "<p>" +
      esc(site.about.intro) +
      "</p>" +
      (experience ? "<p>" + esc(experience) + "</p>" : "") +
      "<p>" +
      esc(site.about.philosophy) +
      "</p>" +
      button(site.cta.about, "about.html", "btn btn--primary") +
      "</div></div></section>"
    );
  }

  function mobile() {
    const places = (site.mobileLocations || [])
      .map(function (place) {
        return "<li>" + esc(place) + "</li>";
      })
      .join("");
    return (
      '<section class="section band" id="mobile-notary" aria-labelledby="mobile-title">' +
      '<div class="container narrow">' +
      heading("mobile-title", "We come to you.", "A mobile notary meets you at a place that works for you.") +
      '<ul class="chip-list">' +
      places +
      "</ul>" +
      button(site.cta.mobile, site.bookHref, "btn btn--primary") +
      "</div></section>"
    );
  }

  function signing() {
    const items = packages
      .map(function (item) {
        return "<li>" + esc(item.name) + "</li>";
      })
      .join("");
    return (
      '<section class="section" id="loan-signing" aria-labelledby="signing-title">' +
      '<div class="container narrow">' +
      heading("signing-title", "Loan signing", "Notary signing for loan packages that this business handles.") +
      '<ul class="check-list">' +
      items +
      "</ul>" +
      '<p class="notice">' +
      esc(site.signingNotice) +
      "</p>" +
      '<div class="button-row">' +
      button(site.cta.signing, site.bookHref, "btn btn--primary") +
      '<a class="text-link" href="' +
      href("services/loan-signing.html") +
      '">Signing details</a>' +
      "</div></div></section>"
    );
  }

  function areas() {
    const cards = (site.areas || [])
      .map(function (area) {
        return (
          '<article class="card">' +
          "<h3>" +
          esc(area.name) +
          "</h3>" +
          "<p>" +
          esc(area.blurb) +
          "</p>" +
          '<a class="text-link" href="' +
          href("service-areas/" + area.slug + ".html") +
          '">Notary service in ' +
          esc(area.name) +
          "</a></article>"
        );
      })
      .join("");
    const body = cards
      ? '<div class="card-grid">' + cards + "</div>"
      : "<p>Serving " + esc(site.serviceAreaLabel) + ".</p>";
    return (
      '<section class="section band" id="service-areas" aria-labelledby="areas-title">' +
      '<div class="container">' +
      heading("areas-title", "Service areas", "Serving " + site.serviceAreaLabel + ".") +
      body +
      '<p class="section-link"><a class="text-link" href="' +
      href("service-areas.html") +
      '">See the service area</a></p>' +
      "</div></section>"
    );
  }

  function steps() {
    const items = (site.steps || [])
      .map(function (step, index) {
        return (
          "<li><span class=\"step__num\" aria-hidden=\"true\">" +
          (index + 1) +
          "</span><h3>" +
          esc(step.title) +
          "</h3><p>" +
          esc(step.text) +
          "</p></li>"
        );
      })
      .join("");
    return (
      '<section class="section" id="how-it-works" aria-labelledby="steps-title">' +
      '<div class="container">' +
      heading("steps-title", "How it works", "Three steps from the first call to a finished notarization.") +
      '<ol class="steps">' +
      items +
      "</ol>" +
      button(site.cta.book, site.bookHref, "btn btn--primary") +
      "</div></section>"
    );
  }

  function reviews() {
    let body;
    if (showReviews) {
      body =
        '<div class="card-grid">' +
        site.testimonials
          .map(function (item) {
            const rating =
              typeof item.rating === "number"
                ? '<p class="review__rating">' + esc(String(item.rating)) + " out of 5</p>"
                : "";
            const source = item.source ? "<p class=\"review__source\">" + esc(item.source) + "</p>" : "";
            return (
              '<article class="card"><p>' +
              esc(item.review) +
              "</p>" +
              rating +
              '<p class="review__name">' +
              esc(item.name) +
              "</p>" +
              source +
              "</article>"
            );
          })
          .join("") +
        "</div>";
    } else {
      body = '<p class="empty-note">Reviews will appear here.</p>';
    }
    return (
      '<section class="section band" id="reviews" aria-labelledby="reviews-title">' +
      '<div class="container narrow">' +
      heading("reviews-title", "Reviews", "") +
      body +
      "</div></section>"
    );
  }

  function faq() {
    const items = homeFaqs
      .map(function (item) {
        return (
          "<details class=\"faq\"><summary>" +
          esc(item.question) +
          "</summary><p>" +
          esc(item.answer) +
          "</p></details>"
        );
      })
      .join("");
    return (
      '<section class="section" id="faq" aria-labelledby="faq-title">' +
      '<div class="container narrow">' +
      heading("faq-title", "Questions", "Short answers. The full list is on the FAQ page.") +
      items +
      '<p class="section-link"><a class="text-link" href="' +
      href("faq.html") +
      '">Read all questions</a></p>' +
      "</div></section>"
    );
  }

  function finalCta() {
    return (
      '<section class="final-cta" id="schedule" aria-labelledby="cta-title">' +
      '<div class="container final-cta__layout">' +
      '<div class="final-cta__copy">' +
      '<p class="eyebrow">' +
      esc(site.city + ", " + site.state) +
      "</p>" +
      "<h2 id=\"cta-title\">Ready to set a time?</h2>" +
      "<p>Call, text, or request an appointment. The visit comes to a place you choose.</p>" +
      '<div class="button-row">' +
      button(site.cta.book, site.bookHref, "btn btn--primary") +
      callButton("btn btn--secondary") +
      "</div>" +
      "</div>" +
      ctaFacts() +
      "</div></section>"
    );
  }

  function ctaFacts() {
    const rows = [];
    const phone = site.phone;
    const text = site.textNumber;
    if (phone && text && String(phone) === String(text)) {
      rows.push(fact("Call or text", reachMarkup(phone)));
    } else {
      if (phone) rows.push(fact("Call", contactMarkup("tel", phone)));
      if (text) rows.push(fact("Text", contactMarkup("sms", text)));
    }
    if (site.hours && !isPlaceholder(site.hours)) rows.push(fact("Hours", esc(site.hours)));
    const area = site.serviceAreaLabel || (site.city ? site.city + ", " + site.state : "");
    if (area) rows.push(fact("Service area", esc(area)));
    if (!rows.length) return "";
    return '<dl class="final-cta__facts">' + rows.join("") + "</dl>";
  }

  function fact(label, valueHtml) {
    return "<div><dt>" + esc(label) + "</dt><dd>" + valueHtml + "</dd></div>";
  }

  function contactMarkup(kind, value) {
    const url = contactUrl(kind, value);
    if (!url) return esc(value);
    return '<a href="' + esc(url) + '">' + esc(value) + "</a>";
  }

  function reachMarkup(value) {
    const call = contactMarkup("tel", value);
    const sms = contactUrl("sms", value);
    if (!sms) return call;
    return (
      '<span class="final-cta__reach">' +
      call +
      '<a class="final-cta__text" href="' +
      esc(sms) +
      '">Text</a></span>'
    );
  }

  function isPlaceholder(value) {
    return !value || /\[[^\]]+\]/.test(String(value));
  }

  function heading(id, title, text) {
    return (
      '<div class="section-heading"><h2 id="' +
      id +
      '">' +
      esc(title) +
      "</h2>" +
      (text ? "<p>" + esc(text) + "</p>" : "") +
      "</div>"
    );
  }

  function button(label, path, className) {
    return (
      '<a class="' +
      className +
      '" href="' +
      href(path) +
      '">' +
      esc(label) +
      "</a>"
    );
  }

  function callButton(className) {
    const url = contactUrl("tel", site.phone);
    if (!url) return button(site.cta.call, site.bookHref, className);
    return '<a class="' + className + '" href="' + esc(url) + '">' + esc(site.cta.call) + "</a>";
  }

  function phoneLink() {
    const url = contactUrl("tel", site.phone);
    if (!url) return esc(site.phone);
    return '<a href="' + esc(url) + '">' + esc(site.phone) + "</a>";
  }

  function contactUrl(kind, value) {
    if (!value || /\[[^\]]+\]/.test(String(value))) return "";
    const digits = String(value).replace(/[^\d+]/g, "");
    if (!digits) return "";
    return kind === "sms" ? "sms:" + digits : "tel:" + digits;
  }

  function href(path) {
    return ROOT + path;
  }

  function icon(name) {
    const paths = {
      stamp: '<circle cx="10" cy="10" r="6.2"/><circle cx="10" cy="10" r="2.3"/>',
      pin: '<path d="M10 17.5s5-4.2 5-8.1A5 5 0 0 0 5 9.4c0 3.9 5 8.1 5 8.1Z"/><circle cx="10" cy="9.2" r="1.6"/>',
      pen: '<path d="M12.5 3.5 16.5 7.5 7 17H3v-4L12.5 3.5Z"/>',
      home: '<path d="M3.5 9.5 10 4l6.5 5.5"/><path d="M5.5 8.5V16h9V8.5"/>',
      file: '<path d="M6 3.5h5l3.5 3.5V16.5H6V3.5Z"/><path d="M11 3.5V7h3.5"/>',
      building: '<path d="M4 16.5V5.5h7v11"/><path d="M11 8.5h5v8"/><path d="M6.5 8h2M6.5 11h2M6.5 14h2"/>',
      heart: '<path d="M10 16.5s-6-3.6-6-7.2A3.2 3.2 0 0 1 10 7a3.2 3.2 0 0 1 6 2.3c0 3.6-6 7.2-6 7.2Z"/>',
    };
    return (
      '<svg class="icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round">' +
      (paths[name] || paths.file) +
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
