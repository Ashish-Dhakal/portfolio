/* js/seo.js — Phase 8: per-page meta, Open Graph, canonical, and JSON-LD.
   Must load AFTER site-data.js, layout.js, and pages.js.

   How it works
   ─────────────────────────────────────────────────────────────────────────────
   1. Reads window.SITE (site-data.js) and document.body.dataset.page.
   2. Builds a per-page descriptor (title, description, canonical path).
   3. Writes <title>, <meta>, and <link rel="canonical"> into <head>.
   4. Injects a JSON-LD <script> for:
        LocalBusiness / ProfessionalService  → home, contact
        FAQPage                               → faq
        BreadcrumbList                        → all inner pages

   Domain
   ─────────────────────────────────────────────────────────────────────────────
   Set window.SITE.domain to the real domain (e.g. "https://example.com") so
   canonical URLs are absolute. While domain is empty this falls back to
   window.location.origin + the current path, which is good enough for testing.

   Rating policy
   ─────────────────────────────────────────────────────────────────────────────
   No aggregateRating is emitted anywhere — the plan prohibits fake reviews.
*/

(function () {
  "use strict";

  var site = window.SITE;
  if (!site) return;

  var body   = document.body;
  var PAGE   = body.dataset.page   || "";
  var CITY   = body.dataset.pageCity || "";

  // ── Origin / domain ───────────────────────────────────────────────────────

  var ORIGIN = (site.domain || "").replace(/\/$/, "") || window.location.origin;

  // Build absolute URL from a root-relative or relative path.
  function abs(path) {
    if (!path) return ORIGIN + "/";
    // Already absolute
    if (/^https?:\/\//.test(path)) return path;
    // Root-relative
    if (path.charAt(0) === "/") return ORIGIN + path;
    // Relative — resolve against current page location
    var base = window.location.href.replace(/[^/]*$/, "");
    return base + path;
  }

  // Canonical path for each page (relative to site root).
  var CANONICAL_PATHS = {
    home:            "notary/index.html",
    about:           "notary/about.html",
    services:        "notary/services.html",
    "mobile-notary": "notary/services/mobile-notary.html",
    "loan-signing":  "notary/services/loan-signing.html",
    "service-areas": "notary/service-areas.html",
    faq:             "notary/faq.html",
    pricing:         "notary/pricing.html",
    contact:         "notary/contact.html",
    disclaimer:      "notary/disclaimer.html",
    "privacy-policy":"notary/privacy-policy.html",
  };

  function canonicalUrl() {
    if (PAGE === "city-page" && CITY) {
      return ORIGIN + "/" + "notary/service-areas/" + CITY + ".html";
    }
    var path = CANONICAL_PATHS[PAGE];
    return path ? ORIGIN + "/" + path : window.location.href;
  }

  // ── Per-page descriptors ──────────────────────────────────────────────────

  var loc     = site.city + ", " + site.state;
  var bizName = site.businessName;
  var owner   = site.ownerName || bizName;

  var DESC = {
    home:
      "Mobile notary services in " + loc + ". " + (owner) +
      " comes to your home, office, or hospital. Call to schedule.",
    about:
      "Learn about " + bizName + " and the notary services offered in " +
      loc + ". Professional, mobile, and flexible appointments.",
    services:
      "Notary services offered by " + bizName + " in " + loc +
      " including general notary, mobile notary, and loan signing.",
    "mobile-notary":
      "Mobile notary in " + loc + ". " + bizName +
      " travels to your location for signatures and notarizations.",
    "loan-signing":
      "Loan signing services in " + loc + ". " + bizName +
      " works with borrowers and title companies on mortgage packages.",
    "service-areas":
      bizName + " serves " + loc + " and surrounding communities." +
      " Find your city and request a mobile notary appointment.",
    faq:
      "Answers to common questions about notary appointments in " + loc +
      " including ID requirements, document types, and fees.",
    pricing:
      "Notary pricing in " + loc + ". " + bizName +
      " confirms fees before every appointment. Request a quote.",
    contact:
      "Contact " + bizName + " to schedule a notary appointment in " +
      loc + ". Call, text, or use the request form.",
    disclaimer:
      bizName + " provides notarial services and does not provide legal advice. Read our disclaimer.",
    "privacy-policy":
      "Privacy policy for " + bizName + ". Learn how contact form data is handled.",
  };

  function cityDesc(cityName) {
    return (
      "Mobile notary in " + cityName + ", TX. " + bizName +
      " comes to your home, office, or hospital in " + cityName + "."
    );
  }

  // ── Title pattern ─────────────────────────────────────────────────────────

  var TITLES = {
    home:            "Mobile Notary in " + loc + " | " + bizName,
    about:           "About | " + bizName,
    services:        "Notary Services in " + loc + " | " + bizName,
    "mobile-notary": "Mobile Notary in " + loc + " | " + bizName,
    "loan-signing":  "Loan Signing in " + loc + " | " + bizName,
    "service-areas": "Service Areas | " + bizName,
    faq:             "FAQ | " + bizName,
    pricing:         "Pricing | " + bizName,
    contact:         "Contact | " + bizName,
    disclaimer:      "Disclaimer | " + bizName,
    "privacy-policy":"Privacy Policy | " + bizName,
  };

  function cityTitle(cityName) {
    return "Notary in " + cityName + ", TX | " + bizName;
  }

  // ── Resolve page metadata ─────────────────────────────────────────────────

  var pageTitle, pageDesc;

  if (PAGE === "city-page" && CITY) {
    var cityObj = (site.areas || []).find(function (a) { return a.slug === CITY; });
    var cityName = cityObj ? cityObj.name : CITY.replace(/-notary$/, "").replace(/-/g, " ");
    // Capitalize first letter of each word
    cityName = cityName.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
    pageTitle = cityTitle(cityName);
    pageDesc  = cityObj && cityObj.blurb ? cityObj.blurb : cityDesc(cityName);
  } else {
    pageTitle = TITLES[PAGE] || (body.dataset.pageLabel ? body.dataset.pageLabel + " | " + bizName : bizName);
    pageDesc  = DESC[PAGE]   || site.description || "";
  }

  // ── Write <head> tags ─────────────────────────────────────────────────────

  var head = document.head;

  // Title (layout.js sets a basic title; we refine it here for the home page pattern)
  document.title = pageTitle;

  // Helper: upsert a meta tag
  function setMeta(attr, attrVal, content) {
    var sel = 'meta[' + attr + '="' + attrVal + '"]';
    var el  = head.querySelector(sel);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, attrVal);
      head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  // Helper: upsert a <link>
  function setLink(rel, href) {
    var sel = 'link[rel="' + rel + '"]';
    var el  = head.querySelector(sel);
    if (!el) {
      el = document.createElement("link");
      el.setAttribute("rel", rel);
      head.appendChild(el);
    }
    el.setAttribute("href", href);
  }

  // Standard meta
  setMeta("name", "description", pageDesc);
  setMeta("name", "robots", "index, follow");

  // Open Graph
  setMeta("property", "og:type",        "website");
  setMeta("property", "og:site_name",   bizName);
  setMeta("property", "og:title",       pageTitle);
  setMeta("property", "og:description", pageDesc);
  setMeta("property", "og:url",         canonicalUrl());

  // Canonical
  setLink("canonical", canonicalUrl());

  // ── Inject JSON-LD ────────────────────────────────────────────────────────

  function injectJsonLd(obj) {
    var script   = document.createElement("script");
    script.type  = "application/ld+json";
    script.textContent = JSON.stringify(obj, null, 2);
    head.appendChild(script);
  }

  // LocalBusiness / ProfessionalService (home + contact)
  if (PAGE === "home" || PAGE === "contact") {
    var areaServed = (site.areas || []).map(function (a) {
      return { "@type": "City", "name": a.name };
    });
    if (!areaServed.length) {
      areaServed = [{ "@type": "City", "name": site.city }];
    }

    var biz = {
      "@context": "https://schema.org",
      "@type":    ["LocalBusiness", "ProfessionalService"],
      "name":     bizName,
      "telephone": site.phone || undefined,
      "email":    site.email  || undefined,
      "url":      abs("notary/index.html"),
      "address": {
        "@type":           "PostalAddress",
        "addressLocality": site.city,
        "addressRegion":   site.state,
        "addressCountry":  "US",
      },
      "areaServed": areaServed,
      "description": site.description || "",
      "openingHours": site.hours ? ["Mo-Fr " + site.hours] : undefined,
      // No aggregateRating — plan prohibits fake reviews
    };

    // Remove keys with undefined values
    Object.keys(biz).forEach(function (k) {
      if (biz[k] === undefined) delete biz[k];
    });

    injectJsonLd(biz);
  }

  // FAQPage (faq page)
  if (PAGE === "faq") {
    var faqs = site.faqs || [];
    if (faqs.length) {
      injectJsonLd({
        "@context": "https://schema.org",
        "@type":    "FAQPage",
        "mainEntity": faqs.map(function (f) {
          return {
            "@type":          "Question",
            "name":           f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text":  f.answer,
            },
          };
        }),
      });
    }
  }

  // BreadcrumbList (every inner page)
  if (PAGE !== "home") {
    var crumbs = [
      { "@type": "ListItem", "position": 1, "name": "Home",
        "item": abs("notary/index.html") },
    ];

    if (PAGE === "city-page") {
      crumbs.push(
        { "@type": "ListItem", "position": 2, "name": "Service Areas",
          "item": abs("notary/service-areas.html") },
        { "@type": "ListItem", "position": 3, "name": pageTitle.split("|")[0].trim(),
          "item": canonicalUrl() }
      );
    } else if (PAGE === "mobile-notary" || PAGE === "loan-signing") {
      crumbs.push(
        { "@type": "ListItem", "position": 2, "name": "Services",
          "item": abs("notary/services.html") },
        { "@type": "ListItem", "position": 3, "name": body.dataset.pageLabel || PAGE,
          "item": canonicalUrl() }
      );
    } else {
      crumbs.push(
        { "@type": "ListItem", "position": 2,
          "name": body.dataset.pageLabel || PAGE,
          "item": canonicalUrl() }
      );
    }

    injectJsonLd({
      "@context":        "https://schema.org",
      "@type":           "BreadcrumbList",
      "itemListElement": crumbs,
    });
  }
})();
