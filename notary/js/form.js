/* Appointment form — js/form.js
   Handles validation, honeypot, and a simulated submission for the demo.

   ─────────────────────────────────────────────────────────────────────────────
   TO CONNECT A REAL ENDPOINT (e.g. Formspree):
   1. Set FORM_ENDPOINT below to your Formspree or other endpoint URL.
      Example: "https://formspree.io/f/YOUR_FORM_ID"
   2. The fetch POST below already sends FormData; no extra headers needed for
      Formspree. Adjust if your endpoint expects JSON.
   3. On the server side, configure:
      a. Notary notification — email to the business when a request arrives.
      b. Customer confirmation — auto-reply to the sender with next steps.
   4. Remove the simulated-delay branch (the `else` block around line 75).

   Cloudflare Turnstile hook:
   When you are ready to add a CAPTCHA, un-comment the widget placeholder in
   pages.js (renderContact → apptForm) and add the Turnstile script tag to
   contact.html. Validate `cf-turnstile-response` server-side. No client-side
   secret is needed here.
   ─────────────────────────────────────────────────────────────────────────────
*/

(function () {
  "use strict";

  var FORM_ENDPOINT = ""; // ← Paste Formspree URL or other endpoint here.
  var DEMO_DELAY_MS = 1100;

  var form = document.getElementById("appointment-form");
  if (!form) return;

  var submitBtn = document.getElementById("form-submit");
  var successEl = document.getElementById("form-success");
  var formErrEl = document.getElementById("form-error");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();

    // ── Honeypot check ────────────────────────────────────────────────────────
    // Bots fill every visible field; real users leave the hidden one empty.
    var honeypot = form.querySelector('[name="website"]');
    if (honeypot && honeypot.value.trim()) {
      // Silently appear to succeed so bots get no signal they were blocked.
      showSuccess();
      return;
    }

    // ── Validation ────────────────────────────────────────────────────────────
    var errors = validate();
    if (errors.length) {
      errors.forEach(function (e) {
        markError(e.id, e.msg);
      });
      var firstErrField = form.querySelector("[data-invalid]");
      if (firstErrField) {
        var input = firstErrField.querySelector("input, select, textarea");
        if (input) input.focus();
      }
      return;
    }

    // ── Submit ────────────────────────────────────────────────────────────────
    setLoading(true);

    if (FORM_ENDPOINT) {
      // Live mode — send to a real endpoint.
      fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (res) {
          if (res.ok) {
            showSuccess();
          } else {
            setLoading(false);
            showFormError(
              "Submission failed. Please call or email us directly."
            );
          }
        })
        .catch(function () {
          setLoading(false);
          showFormError(
            "Could not send the form. Please call or email us directly."
          );
        });
    } else {
      // Demo mode — simulate a round-trip. No data is sent anywhere.
      // The payload is logged to the console for inspection only.
      var payload = collectPayload();
      console.info("[Demo] Appointment request (not sent to any server):", payload);
      setTimeout(function () {
        showSuccess();
      }, DEMO_DELAY_MS);
    }
  });

  // ── Validation rules ────────────────────────────────────────────────────────

  function validate() {
    var errors = [];
    var required = [
      { id: "field-name",    label: "Full name",       type: "text"  },
      { id: "field-phone",   label: "Phone",            type: "phone" },
      { id: "field-email",   label: "Email",            type: "email" },
      { id: "field-service", label: "Service needed",   type: "text"  },
    ];

    required.forEach(function (f) {
      var el = document.getElementById(f.id);
      if (!el) return;
      var val = el.value.trim();

      if (!val) {
        errors.push({ id: f.id, msg: f.label + " is required." });
      } else if (f.type === "phone" && !isPhone(val)) {
        errors.push({ id: f.id, msg: "Enter a valid phone number." });
      } else if (f.type === "email" && !isEmail(val)) {
        errors.push({ id: f.id, msg: "Enter a valid email address." });
      }
    });

    return errors;
  }

  function isPhone(val) {
    // Allows digits, spaces, dashes, parentheses, plus, dots — at least 7 digits.
    var digits = val.replace(/\D/g, "");
    return digits.length >= 7 && /^[\d\s\-()+.]+$/.test(val);
  }

  function isEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val);
  }

  // ── UI helpers ──────────────────────────────────────────────────────────────

  function markError(fieldId, message) {
    var el = document.getElementById(fieldId);
    if (!el) return;
    el.setAttribute("aria-invalid", "true");
    var wrapper = el.closest("[data-field]");
    if (wrapper) wrapper.dataset.invalid = "true";
    var errSpan = document.getElementById(fieldId + "-error");
    if (errSpan) errSpan.textContent = message;
  }

  function clearErrors() {
    form.querySelectorAll("[data-invalid]").forEach(function (el) {
      delete el.dataset.invalid;
    });
    form.querySelectorAll("[aria-invalid]").forEach(function (el) {
      el.removeAttribute("aria-invalid");
    });
    form.querySelectorAll("[data-field-error]").forEach(function (el) {
      el.textContent = "";
    });
    if (formErrEl) formErrEl.textContent = "";
  }

  function showFormError(message) {
    if (!formErrEl) return;
    formErrEl.textContent = message;
    formErrEl.focus();
  }

  function setLoading(loading) {
    submitBtn.disabled = loading;
    submitBtn.textContent = loading ? "Sending\u2026" : "Send Request";
  }

  function showSuccess() {
    setLoading(false);
    form.reset();
    form.hidden = true;
    if (successEl) {
      successEl.hidden = false;
      successEl.focus();
    }
  }

  function collectPayload() {
    var data = {};
    new FormData(form).forEach(function (val, key) {
      if (key !== "website") data[key] = val; // exclude honeypot
    });
    return data;
  }
})();
