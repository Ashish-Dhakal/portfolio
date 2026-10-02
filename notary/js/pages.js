/* About, services, mobile notary, loan signing, service areas, and city pages.
   Copy comes from site-data.js. Empty credentials stay empty. */

(function () {
  const site = window.SITE;
  const main = document.getElementById("main");
  if (!site || !main) return;

  const script = document.currentScript;
  const ROOT = script
    ? script.getAttribute("src").replace(/js\/pages\.js(?:\?.*)?$/, "")
    : "";

  const pages = {
    about: renderAbout,
    services: renderServices,
    "mobile-notary": renderMobile,
    "loan-signing": renderLoan,
    "service-areas": renderServiceAreas,
    "city-page": renderCityPage,
    faq: renderFaq,
    pricing: renderPricing,
    contact: renderContact,
    disclaimer: renderDisclaimer,
    "privacy-policy": renderPrivacyPolicy,
  };

  const render = pages[document.body.dataset.page];
  if (!render) return;

  main.innerHTML = render();
  scrollToHash();

  function renderAbout() {
    const about = site.about || {};
    return [
      '<section class="' + UI.hero + '">' +
        '<div class="' + UI.aboutGrid + '">' +
        photo() +
        "<div>" +
        '<p class="' + UI.eyebrow + '">About</p>' +
        '<h1 class="' + UI.h1 + '">' +
        esc(site.ownerName) +
        "</h1>" +
        "<p>" +
        esc(about.intro || "") +
        "</p>" +
        "<p>Serving " +
        esc(site.serviceAreaLabel) +
        ".</p>" +
        "</div></div></section>",
      proseSection(
        "experience-title",
        "Experience",
        about.experience,
        false,
        "Experience details will appear here."
      ),
      proseSection(
        "background-title",
        "Background",
        about.background,
        true,
        "Background details will appear here."
      ),
      credentials(),
      areas(),
      approach(),
      why(),
      closing(site.cta.book, site.bookHref),
    ].join("");
  }

  function renderServices() {
    const blocks = (site.services || [])
      .map(function (service) {
        return (
          '<article class="' + UI.card + '" id="' +
          esc(service.id) +
          '">' +
          '<span class="' + UI.iconWrap + '" aria-hidden="true">' +
          icon(service.icon) +
          "</span>" +
          '<div class="' + UI.heading + '"><h2>' +
          esc(service.name) +
          "</h2><p>" +
          esc(service.summary) +
          "</p></div>" +
          facts(service) +
          serviceActions(service) +
          "</article>"
        );
      })
      .join("");

    return [
      '<section class="' + UI.hero + '">' +
        '<div class="' + UI.heroInner + '">' +
        '<p class="' + UI.eyebrow + '">' +
        esc(site.city + ", " + site.state) +
        "</p>" +
        '<h1 class="' + UI.h1 + '">Notary services</h1>' +
        '<p class="' + UI.lede + '">A notary meets you for the documents and visits listed here.</p>' +
        '<p class="' + UI.notice + '">' +
        esc(site.qualifyNote) +
        "</p>" +
        '<p class="' + UI.notice + '">' +
        esc(site.legalNotice) +
        "</p>" +
        "</div></section>",
      '<section class="' + UI.section + '" aria-labelledby="service-list-title">' +
        '<div class="' + UI.narrow + '">' +
        '<h2 id="service-list-title" class="' + UI.sr + '">All services</h2>' +
        '<div class="' + UI.serviceList + '">' +
        blocks +
        "</div></div></section>",
      closing(site.cta.book, site.bookHref),
    ].join("");
  }

  function renderMobile() {
    const service = serviceById("mobile-notary");
    const places = (site.mobileLocations || [])
      .map(function (place) {
        return "<li>" + esc(place) + "</li>";
      })
      .join("");

    return [
      detailHero(service, "Mobile notary"),
      service
        ? '<section class="' + UI.section + '"><div class="' + UI.narrow + '"><article class="' + UI.card + '">' +
          facts(service) +
          "</article></div></section>"
        : "",
      '<section class="' + UI.sectionBand + '" aria-labelledby="places-title">' +
        '<div class="' + UI.narrow + '">' +
        heading(
          "places-title",
          "We come to you.",
          "A mobile notary meets you at a place that works for you."
        ) +
        '<ul class="' + UI.chipList + '">' +
        places +
        "</ul>" +
        '<div class="' + UI.buttonRow + '">' +
        button(site.cta.mobile, site.bookHref, UI.btnPrimary) +
        "</div></div></section>",
    ].join("");
  }

  function renderLoan() {
    const service = serviceById("loan-signing");
    const packages = (site.signingPackages || []).filter(function (item) {
      return item && item.offered !== false && String(item.name || "").trim();
    });
    const list = packages.length
      ? '<ul class="' + UI.checkList + '">' +
        packages
          .map(function (item) {
            return "<li>" + esc(item.name) + "</li>";
          })
          .join("") +
        "</ul>"
      : '<p class="' + UI.empty + '">Signing packages will appear here.</p>';

    return [
      detailHero(service, "Loan signing"),
      service
        ? '<section class="' + UI.section + '"><div class="' + UI.narrow + '"><article class="' + UI.card + '">' +
          facts(service) +
          "</article></div></section>"
        : "",
      '<section class="' + UI.sectionBand + '" aria-labelledby="packages-title">' +
        '<div class="' + UI.narrow + '">' +
        heading(
          "packages-title",
          "Signing packages",
          "Notary signing for loan packages that this business handles."
        ) +
        list +
        '<p class="' + UI.notice + '">' +
        esc(site.signingNotice) +
        "</p>" +
        '<div class="' + UI.buttonRow + '">' +
        button(site.cta.signing, site.bookHref, UI.btnPrimary) +
        "</div></div></section>",
    ].join("");
  }

  // ── Phase 5: Service areas ────────────────────────────────────────────────

  function renderServiceAreas() {
    const list = site.areas || [];
    const cards = list.length
      ? '<div class="' + UI.grid + '">' +
        list
          .map(function (area) {
            const slug = area.slug || "";
            const nearby = (area.nearby || []).filter(Boolean);
            const nearbyHtml = nearby.length
              ? "<p>Nearby: " + esc(nearby.join(", ")) + ".</p>"
              : "";
            return (
              '<article class="' + UI.card + '">' +
              '<h2>' + esc(area.name) + '</h2>' +
              '<p>' + esc(area.blurb || "") + '</p>' +
              nearbyHtml +
              (slug
                ? '<div class="' + UI.buttonRow + '"><a class="' + UI.btnPrimary + '" href="' +
                  esc(href("service-areas/" + slug + ".html")) +
                  '">View ' + esc(area.name) + '</a></div>'
                : "") +
              '</article>'
            );
          })
          .join("")
        + "</div>"
      : '<p>Service area details are coming soon.</p>';

    return [
      '<section class="' + UI.hero + '">' +
        '<div class="' + UI.heroInner + '">' +
        '<p class="' + UI.eyebrow + '">Mobile notary</p>' +
        '<h1 class="' + UI.h1 + '">Service areas</h1>' +
        '<p class="' + UI.lede + '">We travel to you inside the communities listed here.</p>' +
        '</div></section>',
      '<section class="' + UI.section + '" aria-labelledby="areas-index-title">' +
        '<div class="' + UI.container + '">' +
        '<div class="' + UI.heading + '"><h2 id="areas-index-title" class="' + UI.sr + '">All service areas</h2></div>' +
        cards +
        '</div></section>',
      closing(site.cta.book, site.bookHref),
    ].join("");
  }

  function renderCityPage() {
    const slug = document.body.dataset.pageCity || "";
    const area = (site.areas || []).find(function (a) {
      return a.slug === slug;
    });

    if (!area) {
      return (
        '<section class="' + UI.hero + '"><div class="' + UI.heroInner + '">' +
        '<h1 class="' + UI.h1 + '">Area not found</h1>' +
        '<p>This service area page could not be loaded.</p>' +
        '</div></section>'
      );
    }

    const nearby = (area.nearby || []).filter(Boolean);
    const previewServices = (site.services || []).filter(function (s) {
      return s.preview;
    });

    const serviceCards = previewServices.length
      ? '<ul class="' + UI.areaList + '">' +
        previewServices
          .map(function (s) {
            return (
              '<li class="' + UI.cardCompact + '">' +
              '<span class="' + UI.iconWrap + '" aria-hidden="true">' + icon(s.icon) + '</span>' +
              '<div>' +
              '<h3>' + esc(s.name) + '</h3>' +
              '<p>' + esc(s.summary) + '</p>' +
              '</div>' +
              '</li>'
            );
          })
          .join("")
        + '</ul>'
      : '';

    const nearbyHtml = nearby.length
      ? '<section class="' + UI.sectionBand + '" aria-labelledby="city-nearby-title">' +
        '<div class="' + UI.narrow + '">' +
        '<div class="' + UI.heading + '">' +
        '<h2 id="city-nearby-title">Nearby areas</h2>' +
        '<p>We also serve communities close to ' + esc(area.name) + '.</p>' +
        '</div>' +
        '<ul class="' + UI.chipList + '">' +
        nearby.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') +
        '</ul>' +
        '</div></section>'
      : '';

    return [
      // Breadcrumb
      '<nav class="' + UI.crumb + '" aria-label="Breadcrumb">' +
        '<div class="' + UI.container + '">' +
        '<ol class="' + UI.crumbList + '">' +
        '<li><a href="' + esc(href('index.html')) + '">Home</a></li>' +
        '<li><a href="' + esc(href('service-areas.html')) + '">Service Areas</a></li>' +
        '<li aria-current="page">' + esc(area.name) + '</li>' +
        '</ol>' +
        '</div></nav>',

      // Hero
      '<section class="' + UI.hero + '">' +
        '<div class="' + UI.heroInner + '">' +
        '<p class="' + UI.eyebrow + '">Service area</p>' +
        '<h1 class="' + UI.h1 + '">Mobile Notary in ' + esc(area.name) + ', ' + esc(site.state) + '</h1>' +
        '<p class="' + UI.lede + '">' + esc(area.blurb || '') + '</p>' +
        '<dl class="' + UI.metaSingle + '">' +
        '<div><dt>Service area</dt><dd>Serving ' + esc(area.name) + ', ' + esc(site.state) + '</dd></div>' +
        '</dl>' +
        '</div></section>',

      // Services offered
      previewServices.length
        ? '<section class="' + UI.section + '" aria-labelledby="city-services-title">' +
          '<div class="' + UI.container + '">' +
          '<div class="' + UI.heading + '">' +
          '<h2 id="city-services-title">Services in ' + esc(area.name) + '</h2>' +
          '<p>These are the notary services available in this area.</p>' +
          '</div>' +
          serviceCards +
          '</div></section>'
        : '',

      // Mobile note
      '<section class="' + UI.sectionBand + '" aria-labelledby="city-mobile-title">' +
        '<div class="' + UI.narrow + '">' +
        '<div class="' + UI.heading + '">' +
        '<h2 id="city-mobile-title">We come to you in ' + esc(area.name) + '</h2>' +
        '<p>A mobile notary meets you at a home, office, hospital, or another location you choose inside the service area.</p>' +
        '</div>' +
        '<p class="' + UI.notice + '">' + esc(site.qualifyNote) + '</p>' +
        '<p class="' + UI.notice + '">' + esc(site.legalNotice) + '</p>' +
        '<div class="' + UI.buttonRow + '">' +
        '<a class="' + UI.btnPrimary + '" href="' + esc(href(site.bookHref)) + '">' +
        esc(site.cta.mobile) + '</a>' +
        '</div>' +
        '</div></section>',

      // Nearby areas
      nearbyHtml,

      // Contact + CTA
      '<section class="' + UI.section + '" aria-labelledby="city-contact-title">' +
        '<div class="' + UI.narrow + '">' +
        '<div class="' + UI.heading + '">' +
        '<h2 id="city-contact-title">Contact</h2>' +
        '<p>Call, text, or request an appointment in ' + esc(area.name) + '.</p>' +
        '</div>' +
        '<dl class="' + UI.facts + '">' +
        '<div><dt>Phone</dt><dd>' + phoneLink() + '</dd></div>' +
        '<div><dt>Email</dt><dd>' + emailLink() + '</dd></div>' +
        '<div><dt>Hours</dt><dd>' + esc(site.hours || "") + '</dd></div>' +
        '</dl>' +
        '</div></section>',

      closing(site.cta.book, site.bookHref),
    ].join("");
  }

  // ── End Phase 5 ────────────────────────────────────────────────────────────

  // ── Phase 6: FAQ, pricing, and contact ──────────────────────────────────

  function renderFaq() {
    const faqs = site.faqs || [];
    const items = faqs
      .map(function (faq, i) {
        return (
          '<details class="' + UI.accordionItem + '" id="faq-item-' + i + '">' +
          '<summary class="' + UI.accordionSummary + '">' +
          '<span class="' + UI.accordionQuestion + '">' + esc(faq.question) + '</span>' +
          '<svg class="' + UI.chevron + '" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7.5 10 12.5 15 7.5"/></svg>' +
          '</summary>' +
          '<div class="' + UI.accordionBody + '"><p>' + esc(faq.answer) + '</p></div>' +
          '</details>'
        );
      })
      .join("");

    return [
      '<section class="' + UI.hero + '">' +
        '<div class="' + UI.heroInner + '">' +
        '<p class="' + UI.eyebrow + '">' + esc(site.city + ", " + site.state) + '</p>' +
        '<h1 class="' + UI.h1 + '">Frequently asked questions</h1>' +
        '<p class="' + UI.lede + '">Common questions about notary appointments and services in ' + esc(site.city) + '.</p>' +
        '</div></section>',
      '<section class="' + UI.section + '" aria-labelledby="faq-list-title">' +
        '<div class="' + UI.narrow + '">' +
        '<h2 id="faq-list-title" class="' + UI.sr + '">All questions</h2>' +
        (items
          ? '<div class="' + UI.accordion + '">' + items + '</div>'
          : '<p class="' + UI.empty + '">Questions will appear here.</p>') +
        '<p class="' + UI.notice + '">' + esc(site.legalNotice) + '</p>' +
        '</div></section>',
      closing(site.cta.book, site.bookHref),
    ].join("");
  }

  function renderPricing() {
    const pricing = site.pricing || {};
    const note = String(pricing.note || "").trim();
    const categories = pricing.categories || [];

    const catCards = categories.length
      ? '<div class="' + UI.grid + '">' +
        categories
          .map(function (cat) {
            return (
              '<article class="' + UI.cardFee + '">' +
              '<h3>' + esc(cat) + '</h3>' +
              '<p class="' + UI.empty + '">Amount confirmed on request.</p>' +
              '</article>'
            );
          })
          .join("") +
        '</div>'
      : "";

    return [
      '<section class="' + UI.hero + '">' +
        '<div class="' + UI.heroInner + '">' +
        '<p class="' + UI.eyebrow + '">' + esc(site.city + ", " + site.state) + '</p>' +
        '<h1 class="' + UI.h1 + '">Pricing</h1>' +
        '<p class="' + UI.lede + '">Fees depend on the service, location, and appointment details.</p>' +
        '</div></section>',
      note
        ? '<section class="' + UI.section + '" aria-labelledby="pricing-note-title">' +
          '<div class="' + UI.narrow + '">' +
          '<div class="' + UI.heading + '"><h2 id="pricing-note-title">How fees work</h2>' +
          '<p>' + esc(note) + '</p></div>' +
          '</div></section>'
        : "",
      categories.length
        ? '<section class="' + UI.sectionBand + '" aria-labelledby="fee-types-title">' +
          '<div class="' + UI.container + '">' +
          '<div class="' + UI.heading + '">' +
          '<h2 id="fee-types-title">Types of fees</h2>' +
          '<p>These are the categories of fees that may apply. Contact us for the exact amount before you book.</p>' +
          '</div>' +
          catCards +
          '</div></section>'
        : "",
      '<section class="' + UI.cta + '">' +
        '<div class="' + UI.narrow + '">' +
        '<h2 class="' + UI.ctaTitle + '">Request a quote</h2>' +
        '<p class="' + UI.ctaText + '">Share your service details and we will confirm the fee before the appointment.</p>' +
        '<div class="' + UI.buttonRow + '">' +
        button(
          (site.cta && site.cta.quote) || "Get a Quote",
          site.quoteHref || site.bookHref,
          UI.btnOnDark
        ) +
        '</div></div></section>',
    ].join("");
  }

  function renderContact() {
    const services = site.appointmentServices || [];
    const serviceOptions = services
      .map(function (s) {
        return '<option value="' + esc(s) + '">' + esc(s) + '</option>';
      })
      .join("");

    const phoneUrl = contactUrl("tel", site.phone);
    const textUrl  = contactUrl("sms", site.textNumber);
    const emailUrl = contactUrl("mail", site.email);

    const infoItems = [
      phoneUrl
        ? ciCard("Phone", '<a href="' + esc(phoneUrl) + '">' + esc(site.phone) + '</a>')
        : ciCard("Phone", esc(site.phone || "Not yet set.")),
      textUrl
        ? ciCard("Text", '<a href="' + esc(textUrl) + '">' + esc(site.textNumber) + '</a>')
        : ciCard("Text", esc(site.textNumber || "Not yet set.")),
      emailUrl
        ? ciCard("Email", '<a href="' + esc(emailUrl) + '">' + esc(site.email) + '</a>')
        : ciCard("Email", esc(site.email || "Not yet set.")),
      ciCard("Hours", esc(site.hours || "Contact us for availability.")),
      site.serviceAreaLabel
        ? ciCard("Service area", esc(site.serviceAreaLabel))
        : "",
    ]
      .filter(Boolean)
      .join("");

    return [
      '<section class="' + UI.hero + '">' +
        '<div class="' + UI.heroInner + '">' +
        '<p class="' + UI.eyebrow + '">' + esc(site.city + ", " + site.state) + '</p>' +
        '<h1 class="' + UI.h1 + '">Contact</h1>' +
        '<p class="' + UI.lede + '">Call, text, or send the appointment form below.</p>' +
        '</div></section>',
      '<section class="' + UI.sectionBand + '" aria-labelledby="contact-info-title">' +
        '<div class="' + UI.container + '">' +
        '<div class="' + UI.heading + '"><h2 id="contact-info-title">Get in touch</h2></div>' +
        '<div class="' + UI.infoGrid + '">' + infoItems + '</div>' +
        '</div></section>',
      '<section class="' + UI.section + '" aria-labelledby="form-title">' +
        '<div class="' + UI.narrow + '">' +
        '<div class="' + UI.heading + '">' +
        '<h2 id="form-title">Request an appointment</h2>' +
        '<p>Fill in the details and we will get back to you to confirm the time and location.</p>' +
        '</div>' +
        apptForm(serviceOptions) +
        '</div></section>',
    ].join("");
  }

  // ── Phase 6 helpers ────────────────────────────────────────────────────────

  function ciCard(label, valueHtml) {
    return (
      '<div class="' + UI.infoItem + '">' +
      '<span class="' + UI.infoLabel + '">' + esc(label) + '</span>' +
      '<span class="' + UI.infoValue + '">' + valueHtml + '</span>' +
      '</div>'
    );
  }

  function apptForm(serviceOptions) {
    return (
      '<div id="form-success" class="' + UI.formSuccess + '" hidden tabindex="-1">' +
      '<p>Thank you \u2014 your request has been received.</p>' +
      '<p class="' + UI.notice + '">This is a demo site. No email has been sent. A real appointment service would follow up by phone or email to confirm the details.</p>' +
      '</div>' +
      '<form id="appointment-form" class="' + UI.form + '" novalidate>' +
      '<p class="' + UI.formNote + '"><abbr title="Required">*</abbr> Required field</p>' +
      '<div id="form-error" class="' + UI.formError + '" aria-live="polite" aria-atomic="true" tabindex="-1"></div>' +
      fField("field-name",    "Full name",    "text",   "name",         true,  'autocomplete="name"') +
      '<div class="' + UI.formRow + '">' +
      fField("field-phone",   "Phone",        "tel",    "phone",        true,  'autocomplete="tel"') +
      fField("field-email",   "Email",        "email",  "email",        true,  'autocomplete="email"') +
      '</div>' +
      fSelect("field-service", "Service needed", "service", true, serviceOptions) +
      '<div class="' + UI.formRow + '">' +
      fField("field-date",    "Preferred date", "date",  "preferred-date", false, "") +
      fField("field-time",    "Preferred time", "time",  "preferred-time", false, "") +
      '</div>' +
      fField("field-location", "Meeting location", "text", "location", false,
        'placeholder="Home, office, hospital, or other"') +
      '<div class="' + UI.formRow + '">' +
      fField("field-city-zip",   "City / ZIP",          "text",   "city-zip",  false, 'autocomplete="postal-code"') +
      fField("field-doc-count",  "Number of documents", "number", "doc-count", false, 'min="1" max="99"') +
      '</div>' +
      fTextarea("field-message", "Message", "message") +
      // Honeypot: hidden from real users, filled by bots
      '<div class="' + UI.sr + '" aria-hidden="true">' +
      '<label for="field-website">Website</label>' +
      '<input type="text" id="field-website" name="website" tabindex="-1" autocomplete="off">' +
      '</div>' +
      // Cloudflare Turnstile hook (un-comment when ready):
      // '<div class="cf-turnstile" data-sitekey="YOUR_SITE_KEY"></div>' +
      '<div class="' + UI.formActions + '">' +
      '<button type="submit" id="form-submit" class="' + UI.btnPrimary + '">Send Request</button>' +
      '</div>' +
      '</form>'
    );
  }

  function fField(id, label, type, name, required, extra) {
    const star = required
      ? ' <abbr title="Required" aria-hidden="true">*</abbr>'
      : "";
    const reqAttrs = required ? ' required aria-required="true"' : "";
    return (
      '<div data-field class="' + UI.field + '">' +
      '<label class="' + UI.label + '" for="' + id + '">' + esc(label) + star + '</label>' +
      '<input class="' + UI.input + '" id="' + id + '" name="' + name + '" type="' + type + '"' +
      reqAttrs +
      ' aria-describedby="' + id + '-error"' +
      (extra ? ' ' + extra : "") +
      '>' +
      '<span data-field-error class="' + UI.fieldError + '" id="' + id + '-error" aria-live="polite"></span>' +
      '</div>'
    );
  }

  function fSelect(id, label, name, required, optionsHtml) {
    const star = required
      ? ' <abbr title="Required" aria-hidden="true">*</abbr>'
      : "";
    const reqAttrs = required ? ' required aria-required="true"' : "";
    return (
      '<div data-field class="' + UI.field + '">' +
      '<label class="' + UI.label + '" for="' + id + '">' + esc(label) + star + '</label>' +
      '<select class="' + UI.select + '" id="' + id + '" name="' + name + '"' +
      reqAttrs +
      ' aria-describedby="' + id + '-error">' +
      '<option value="">Select a service</option>' +
      optionsHtml +
      '</select>' +
      '<span data-field-error class="' + UI.fieldError + '" id="' + id + '-error" aria-live="polite"></span>' +
      '</div>'
    );
  }

  function fTextarea(id, label, name) {
    return (
      '<div data-field class="' + UI.field + '">' +
      '<label class="' + UI.label + '" for="' + id + '">' + esc(label) + '</label>' +
      '<textarea class="' + UI.textarea + '" id="' + id + '" name="' + name + '" rows="4"' +
      ' aria-describedby="' + id + '-error"></textarea>' +
      '<span data-field-error class="' + UI.fieldError + '" id="' + id + '-error" aria-live="polite"></span>' +
      '</div>'
    );
  }

  // ── End Phase 6 ────────────────────────────────────────────────────────────

  // ── Phase 7: Legal pages ───────────────────────────────────────────────

  function renderDisclaimer() {
    const name = esc(site.businessName);
    const city = esc(site.city + ", " + site.state);

    return [
      legalHero("Disclaimer", city),
      '<section class="' + UI.section + '" aria-labelledby="disclaimer-title">' +
        '<div class="' + UI.narrow + '">' +
        '<div class="' + UI.legal + '">' +

        legalSection(
          "disclaimer-title",
          "Notarial services, not legal advice",
          '<p>' + name + ' provides notarial services and does not provide legal advice unless otherwise explicitly stated and legally authorized.</p>' +
          '<p>A notary public identifies signers, witnesses signatures, and completes the notarial act as defined by applicable law. A notary does not explain the legal meaning or effect of a document, prepare legal documents, or act as a legal representative for any party.</p>' +
          '<p>If you have questions about the legal meaning of a document you are signing, consult a qualified attorney before the appointment.</p>'
        ) +

        legalSection(
          "disclaimer-scope",
          "Scope of services",
          '<p>' + name + ' performs only the notarial acts listed on this site. Listing a service on this site does not guarantee availability for every document type or situation. Contact us before booking to confirm that your document and circumstances qualify.</p>'
        ) +

        legalSection(
          "disclaimer-accuracy",
          "Accuracy of information",
          '<p>This website is provided for informational purposes. ' + name + ' makes reasonable efforts to keep the information current but does not warrant that all information is complete or error-free. Contact us directly to confirm details before relying on them for an appointment.</p>'
        ) +

        legalSection(
          "disclaimer-demo",
          "Demo site notice",
          '<p>This site is a portfolio demonstration. Submission through the contact form does not send any data to a server or create an actual appointment until a live endpoint is connected.</p>'
        ) +

        '</div>' +
        '</div></section>',
    ].join("");
  }

  function renderPrivacyPolicy() {
    const name = esc(site.businessName);
    const email = esc(site.email || "[EMAIL]");
    const city  = esc(site.city + ", " + site.state);

    return [
      legalHero("Privacy Policy", city),
      '<section class="' + UI.section + '" aria-labelledby="privacy-title">' +
        '<div class="' + UI.narrow + '">' +
        '<div class="' + UI.legal + '">' +

        legalSection(
          "privacy-title",
          "What this policy covers",
          '<p>This policy describes how ' + name + ' handles information submitted through the appointment request form on this website.</p>'
        ) +

        legalSection(
          "privacy-collected",
          "Information collected",
          '<p>When you use the appointment request form, you may provide:</p>' +
          '<ul>' +
          '<li>Your name, phone number, and email address</li>' +
          '<li>The service you are requesting</li>' +
          '<li>A preferred date, time, and meeting location</li>' +
          '<li>The city or ZIP code of your location</li>' +
          '<li>The number of documents and any additional notes</li>' +
          '</ul>' +
          '<p>This information is used only to respond to your appointment request and to confirm the service details with you.</p>'
        ) +

        legalSection(
          "privacy-demo-note",
          "Demo site — no data is sent yet",
          '<p>This site is a portfolio demonstration. The contact form does not transmit data to any server until a live form endpoint is connected. Until that endpoint is active, information entered into the form stays in the browser session only and is not stored or transmitted.</p>' +
          '<p>When a real endpoint is connected, it will be configured to accept only the fields listed above and to send a confirmation to the submitter and a notification to ' + name + '.</p>'
        ) +

        legalSection(
          "privacy-sharing",
          "How information is used and shared",
          '<p>Information you provide is used to schedule and confirm your notary appointment. ' + name + ' does not sell, rent, or share your personal information with third parties for marketing purposes.</p>' +
          '<p>Information may be shared only as required by law or to complete the notarial act (for example, with a title company or signing service that arranged the appointment).</p>'
        ) +

        legalSection(
          "privacy-cookies",
          "Cookies and tracking",
          '<p>This website does not use tracking cookies, analytics scripts, or advertising pixels. No personal data is collected by the site outside of what you voluntarily submit through the contact form.</p>'
        ) +

        legalSection(
          "privacy-contact",
          "Questions",
          '<p>If you have questions about this policy, contact ' + name + ' at <a href="mailto:' + email + '">' + email + '</a>.</p>'
        ) +

        '</div>' +
        '</div></section>',
    ].join("");
  }

  // ── Phase 7 helpers ─────────────────────────────────────────────────────

  function legalHero(title, city) {
    return (
      '<section class="' + UI.hero + '">' +
      '<div class="' + UI.heroInner + '">' +
      '<p class="' + UI.eyebrow + '">' + city + '</p>' +
      '<h1 class="' + UI.h1 + '">' + esc(title) + '</h1>' +
      '</div></section>'
    );
  }

  function legalSection(id, title, bodyHtml) {
    return (
      '<section class="' + UI.legalSection + '" aria-labelledby="' + id + '">' +
      '<h2 id="' + id + '">' + esc(title) + '</h2>' +
      bodyHtml +
      '</section>'
    );
  }

  // ── End Phase 7 ────────────────────────────────────────────────────────────

  function detailHero(service, eyebrow) {
    const title = service && service.name ? service.name : eyebrow;
    const summary = service && service.summary ? service.summary : "";
    return (
      '<section class="' + UI.hero + '">' +
      '<div class="' + UI.heroInner + '">' +
      '<p class="' + UI.eyebrow + '">' +
      esc(eyebrow) +
      "</p>" +
      '<h1 class="' + UI.h1 + '">' +
      esc(title) +
      "</h1>" +
      (summary ? '<p class="' + UI.lede + '">' + esc(summary) + "</p>" : "") +
      '<dl class="' + UI.metaSingle + '"><div><dt>Service area</dt><dd>Serving ' +
      esc(site.serviceAreaLabel) +
      "</dd></div></dl>" +
      '<p class="' + UI.notice + '">' +
      esc(site.qualifyNote) +
      "</p>" +
      '<p class="' + UI.notice + '">' +
      esc(site.legalNotice) +
      "</p></div></section>"
    );
  }

  function proseSection(id, title, text, band, emptyNote) {
    const value = String(text || "").trim();
    return (
      '<section class="' +
      (band ? UI.sectionBand : UI.section) +
      '" aria-labelledby="' +
      id +
      '">' +
      '<div class="' + UI.narrow + '">' +
      heading(id, title, value) +
      (value ? "" : '<p class="' + UI.empty + '">' + esc(emptyNote) + "</p>") +
      "</div></section>"
    );
  }

  function credentials() {
    const show =
      site.flags &&
      site.flags.showCredentials &&
      site.certifications &&
      site.certifications.length;
    const items = show
      ? site.certifications.filter(function (item) {
          return item && String(item.name || "").trim();
        })
      : [];
    const body = items.length
      ? '<div class="' + UI.grid + '">' +
        items
          .map(function (item) {
            const detail = String(item.detail || "").trim();
            return (
              '<article class="' + UI.card + '"><h3>' +
              esc(item.name) +
              "</h3>" +
              (detail ? "<p>" + esc(detail) + "</p>" : "") +
              "</article>"
            );
          })
          .join("") +
        "</div>"
      : '<p class="' + UI.empty + '">Credentials will appear here.</p>';

    return (
      '<section class="' + UI.section + '" aria-labelledby="credentials-title">' +
      '<div class="' + UI.narrow + '">' +
      heading("credentials-title", "Credentials", "") +
      body +
      "</div></section>"
    );
  }

  function areas() {
    const list = site.areas || [];
    const cards = list.length
      ? '<div class="' + UI.grid + '">' +
        list
          .map(function (area) {
            const nearby = (area.nearby || []).filter(Boolean);
            const extra = nearby.length
              ? "<p>Nearby: " + esc(nearby.join(", ")) + ".</p>"
              : "";
            return (
              '<article class="' + UI.card + '"><h3>' +
              esc(area.name) +
              "</h3><p>" +
              esc(area.blurb) +
              "</p>" +
              extra +
              "</article>"
            );
          })
          .join("") +
        "</div>"
      : "<p>Serving " + esc(site.serviceAreaLabel) + ".</p>";

    return (
      '<section class="' + UI.sectionBand + '" aria-labelledby="areas-title">' +
      '<div class="' + UI.container + '">' +
      heading("areas-title", "Areas served", "Serving " + site.serviceAreaLabel + ".") +
      cards +
      "</div></section>"
    );
  }

  function approach() {
    const about = site.about || {};
    return (
      '<section class="' + UI.section + '" aria-labelledby="approach-title">' +
      '<div class="' + UI.narrow + '">' +
      heading("approach-title", "Approach", about.philosophy || "") +
      '<p class="' + UI.notice + '">' +
      esc(site.legalNotice) +
      "</p></div></section>"
    );
  }

  function why() {
    const items = (site.trust || [])
      .map(function (item) {
        return (
          '<li class="' + UI.trustItem + '"><h3>' +
          esc(item.title) +
          "</h3><p>" +
          esc(item.text) +
          "</p></li>"
        );
      })
      .join("");
    return (
      '<section class="' + UI.sectionBand + '" aria-labelledby="why-title">' +
      '<div class="' + UI.container + '">' +
      heading("why-title", "Why choose " + site.businessName, "") +
      '<ul class="' + UI.trustGrid + '">' +
      items +
      "</ul></div></section>"
    );
  }

  function facts(service) {
    return (
      '<dl class="' + UI.facts + '">' +
      field("Who may need this", service.audience) +
      documentsField(service.documents) +
      "</dl>"
    );
  }

  function field(label, text) {
    const value = String(text || "").trim();
    return (
      "<div><dt>" +
      esc(label) +
      "</dt><dd>" +
      esc(value || "Details will appear here.") +
      "</dd></div>"
    );
  }

  function documentsField(documents) {
    const items = documents || [];
    const body = items.length
      ? '<ul class="' + UI.checkList + '">' +
        items
          .map(function (item) {
            return "<li>" + esc(item) + "</li>";
          })
          .join("") +
        "</ul>"
      : "Examples will appear here.";
    return "<div><dt>Common documents</dt><dd>" + (items.length ? body : esc(body)) + "</dd></div>";
  }

  function serviceActions(service) {
    return (
      '<div class="' + UI.buttonRow + '">' +
      button(site.cta.book, site.bookHref, UI.btnPrimary) +
      moreLink(service) +
      "</div>"
    );
  }

  function moreLink(service) {
    if (!service.href || service.href.indexOf("#") !== -1) return "";
    const labels = {
      "mobile-notary": "Where we travel",
      "loan-signing": "Signing packages",
    };
    const label = labels[service.id] || "Learn more";
    return (
      '<a class="' + UI.textLink + '" href="' +
      esc(href(service.href)) +
      '">' +
      esc(label) +
      "</a>"
    );
  }

  function closing(label, path) {
    return (
      '<section class="' + UI.cta + '">' +
      '<div class="' + UI.ctaLayout + '">' +
      '<div class="' + UI.ctaCopy + '">' +
      '<p class="' + UI.eyebrowLight + '">' +
      esc(site.city + ", " + site.state) +
      "</p>" +
      '<h2 class="' + UI.ctaTitle + '">Ready to set a time?</h2>' +
      '<p class="' + UI.ctaText + '">Call, text, or request an appointment. The visit comes to a place you choose.</p>' +
      '<div class="' + UI.buttonRow + '">' +
      button(label, path, UI.btnOnDark) +
      callButton(UI.btnSecondaryOnDark) +
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
    if (site.hours && !/\[[^\]]+\]/.test(String(site.hours))) {
      rows.push(fact("Hours", esc(site.hours)));
    }
    const area = site.serviceAreaLabel || (site.city ? site.city + ", " + site.state : "");
    if (area) rows.push(fact("Service area", esc(area)));
    if (!rows.length) return "";
    return '<dl class="' + UI.ctaFacts + '">' + rows.join("") + "</dl>";
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
      '<span class="' + UI.ctaReach + '">' +
      call +
      '<a class="' + UI.ctaTextLink + '" href="' +
      esc(sms) +
      '">Text</a></span>'
    );
  }

  function photo() {
    if (site.flags && site.flags.showPhoto && site.photo) {
      return (
        '<img class="' + UI.photo + '" src="' +
        esc(href(site.photo)) +
        '" alt="Portrait of ' +
        esc(site.ownerName) +
        '" width="640" height="800" loading="lazy" onerror="this.onerror=null;var n=document.createElement(\'div\');n.className=window.UI.photoPh;n.innerHTML=\'<span>Photo coming soon</span>\';this.replaceWith(n)">'
      );
    }
    return '<div class="' + UI.photoPh + '"><span>Photo coming soon</span></div>';
  }

  function heading(id, title, text) {
    return (
      '<div class="' + UI.heading + '"><h2 id="' +
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
      esc(href(path)) +
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

  function emailLink() {
    const addr = String(site.email || "").trim();
    if (!addr || /\[[^\]]+\]/.test(addr)) return esc(addr || "Not set.");
    return '<a href="mailto:' + esc(addr) + '">' + esc(addr) + "</a>";
  }

  function contactUrl(kind, value) {
    if (!value || /\[[^\]]+\]/.test(String(value))) return "";
    const digits = String(value).replace(/[^\d+]/g, "");
    if (!digits) return "";
    return kind === "sms" ? "sms:" + digits : "tel:" + digits;
  }

  function serviceById(id) {
    const list = site.services || [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return null;
  }

  function scrollToHash() {
    if (!location.hash) return;
    const id = decodeURIComponent(location.hash.slice(1));
    const target = document.getElementById(id);
    if (target) target.scrollIntoView();
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
      '<svg class="' + UI.icon + '" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round">' +
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
