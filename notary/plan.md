# Notary Demo Website — Phase Plan

Source: `notary/docs.txt`

This is a demo site for a US mobile notary / notary signing agent. Work happens one phase at a time. Finish and review a phase before starting the next. Do not build the whole site in one pass.

## Status

Done: Phase 1, Phase 2, Phase 3, Phase 4, Phase 5, Phase 6, Phase 7, Phase 8, Phase 9.

Next: None.

Left: None (All phases complete).

Current business facts in `js/site-data.js`: Digital Notary, Amber Jennings, Austin, TX. The city page slug is `austin-notary`. Reviews, credentials, a portrait, prices, and a public office are still empty on purpose.

Future features listed in the docs (calendar booking, payments, SMS, CRM, blog, admin, maps radius, travel-fee calculator) stay out of scope until explicitly requested.

---

## Constraints

- The portfolio deploys the whole repo to GitHub Pages with no build step. The site must be plain HTML, CSS, and JavaScript that works when `notary/` is served as static files.
- All business facts live in one config file. Pages read from that file. Do not copy the business name, phone, cities, hours, or services into random markup.
- Do not invent license numbers, commission dates, certifications, NNA membership, background checks, insurance, bonding, years of experience, reviews, prices, a public office address, or 24/7 availability.
- Unknown facts stay as clearly marked placeholders from section 40 of the docs.
- Testimonials start empty or as labeled placeholders. No fake reviews, and no fake ratings in Schema.org.
- A notary does not give legal advice. Copy and the disclaimer must say that.
- Mobile is the primary layout. Desktop follows.

## Suggested folder

```
notary/
  docs.txt
  plan.md
  index.html
  about.html
  services.html
  services/mobile-notary.html
  services/loan-signing.html
  service-areas.html
  service-areas/austin-notary.html
  faq.html
  contact.html
  pricing.html
  privacy-policy.html
  disclaimer.html
  css/styles.css
  js/site-data.js
  js/layout.js
  js/form.js
  assets/
```

City page filenames follow the cities in `site-data.js`. Right now that is Austin only: `service-areas/austin-notary.html`. Add another city in the config, then add one matching HTML file.

---

## Phase 1 — Foundation and design system — Done

Goal: a shared shell that every later page can drop into.

- Create `css/styles.css` with the visual system: white/light background, deep navy primary, optional warm gold accent, readable type, generous spacing, soft shadows, rounded cards.
- Skip neon colors, heavy gradients, playful UI, and extra animation.
- Define layout primitives: container, section, section heading, button (primary and secondary), card.
- Sticky header: logo/business name, Home, About, Services, Service Areas, FAQ, Contact, Book Appointment.
- Mobile: hamburger, and a call control when a real phone exists. Until the phone is a placeholder, show the control but do not pretend it dials a real number.
- Sticky footer action bar on small screens only: Call, Text, Book. Keep it short and out of the way of form fields.
- Footer: business name, short description, phone, email, service area, quick links, service links, Privacy, Disclaimer, copyright. Social links render only when the config has a URL.
- Shared `js/layout.js` injects header, footer, and the mobile bar from config so pages do not duplicate them.
- Visible focus states, semantic landmarks, and a skip link.

Done when: one blank page shows header, footer, and the mobile bar, and the nav works on a phone-width viewport.

## Phase 2 — Central content config — Done

Goal: one place to change the business later.

Create `js/site-data.js` with:

- Business name, owner name, phone, text number, email, primary city, state, domain
- Business hours
- Service areas (name, slug, short blurb, nearby areas)
- Services (id, name, short text, who it is for, example documents, page path)
- Trust items that are safe to claim (mobile service, flexible appointments, local travel) — no unconfirmed credentials
- How-it-works steps
- FAQ questions and answers, with a line that the notary does not give legal advice
- Testimonials array, empty by default, with a note that real reviews are added later
- Pricing note only: fees depend on document type, location, distance, and time. No dollar amounts.
- Certifications array, empty by default
- Social links, empty by default
- Flags so the UI can hide empty reviews, missing photos, and missing credentials

Every string that is still unknown uses the bracket placeholders from the docs, for example `[NOTARY BUSINESS NAME]`.

Done when: header, footer, and phone/email links on the shell page all come from this file.

## Phase 3 — Homepage — Done

Build `index.html` in this order:

1. Header
2. Hero — headline, subheading, Book Appointment, Call Now, optional Get a Quote, phone, service area, availability line
3. Trust indicators
4. Services preview cards (icon, name, short text, Learn more)
5. About preview — photo placeholder, name, short intro, philosophy, Learn More About Me
6. Mobile notary — “We come to you,” location types, Schedule a Mobile Notary
7. Loan signing preview — only services listed in config, Request Signing Services
8. Service areas
9. How it works — three steps
10. Testimonials — if the list is empty, show a quiet “Reviews will appear here” state, not invented quotes
11. FAQ accordion (short set; full list lives on the FAQ page)
12. Final CTA
13. Footer

Each section gets one primary action and, where it helps, one secondary action. Do not stack many buttons.

Done when: the homepage tells the story visit → service → trust → area → call / text / request, and it reads cleanly on a phone.

## Phase 4 — About and services — Done

- `about.html`: introduction, experience, background, credentials (only what config contains), areas served, approach, why choose this notary, photo placeholder.
- `services.html`: one block per service with title, description, who may need it, common document examples, and a CTA. Include the line that the customer should confirm the document can be notarized.
- `services/mobile-notary.html`: travel locations and Schedule CTA.
- `services/loan-signing.html`: purchase, seller, refinance, HELOC, reverse mortgage, modification, and similar packages that are actually listed in config. Notice that the list must match services the business really offers.

Service cards and section headings are shared patterns, not copy-pasted markup with different class names.

Done when: every Learn more link from the homepage lands on a real page, and credential sections stay blank when config has none.

## Phase 5 — Service areas — Left

- `service-areas.html`: all cities from config as cards.
- One static page per city, for example `service-areas/[slug].html`, containing a city H1, services offered, mobile service note, nearby areas, contact info, and a booking CTA.
- Breadcrumbs on these pages.
- Adding a city means adding it to config and adding one HTML file. Document that step at the top of the city template comments.

Done when: the areas section, the areas index, and at least the placeholder city pages all use the same city list.

## Phase 6 — FAQ, pricing, and contact — Left

- `faq.html`: full FAQ accordion. Answers stay practical. No legal advice.
- `pricing.html`: explain notary fee, travel, after-hours, distance, extra signer, and other fees as categories only. Body copy uses the placeholder sentence from the docs. CTA is Request a Quote.
- `contact.html`: phone, text, email, hours, service area, and the appointment form. No street address and no map until a public office exists.
- Form fields: full name, phone, email, service needed, preferred date, preferred time, location, city/ZIP, number of documents, message.
- Required-field checks, phone and email format checks, inline errors, disabled submit while sending, success message, and form reset after success.
- Honeypot field for spam. Leave a clear hook for Cloudflare Turnstile later; do not add a paid or keyed CAPTCHA in the demo.
- This is a static demo, so submission shows success and keeps the payload in memory for the session. Do not pretend an email was sent. Add a short code comment where a form endpoint (for example Formspree) can be plugged in later, including the notary notification and the customer confirmation.

Done when: an empty submit shows errors, a valid submit shows the thank-you message and clears the form, and the honeypot blocks a filled trap field.

## Phase 7 — Legal pages — Left

- `disclaimer.html`: the business provides notarial services and does not provide legal advice unless separately stated and authorized.
- `privacy-policy.html`: what the contact form collects, that it is used to respond to the appointment request, and that the demo does not send data to a server until an endpoint is connected.

Done when: footer links open both pages and the disclaimer sentence matches the business name from config.

## Phase 8 — SEO — Left

Per page:

- Unique title and meta description
- One H1
- Semantic headings
- Open Graph title, description, and URL
- Canonical URL built from the domain in config

Structured data where it fits:

- LocalBusiness / ProfessionalService on the homepage and contact page (name, phone, area served — no fake aggregate rating)
- FAQPage on the FAQ page
- BreadcrumbList on inner pages

Homepage title pattern: `Mobile Notary in [City, State] | [Business Name]`

Done when: view-source on home, a service page, a city page, FAQ, and contact shows unique titles and valid JSON-LD without ratings.

## Phase 9 — Quality pass — Done

- Keyboard path through header, menu, FAQ, and form.
- Labels on every field, alt text on images, contrast on navy/gold/white.
- Responsive images and lazy loading. Missing or broken images fall back to a simple placeholder block.
- No large libraries. Icons can be a small inline set or one icon stylesheet already used elsewhere in the portfolio.
- Check phone, tablet, and desktop widths.
- Tap targets, click-to-call, and click-to-text behave correctly once real numbers exist.
- Read the copy out loud against the tone rules: professional, friendly, local, plain. Remove corporate filler.

Done when: the main journey works on a phone-sized browser — open home, open a service, open a city, submit the form — and empty states (no reviews, no photo, no credentials) still look intentional.

---

## Out of scope until asked

Online scheduling, calendar sync, payments, SMS, real email delivery, Google Reviews API, CRM, blog, customer dashboard, admin panel, service-radius math, automatic travel fees, and an embedded map.

## How we work

1. Implement only the current phase.
2. Review it in the browser.
3. Then start the next phase.

Next implementation step is Phase 9.
