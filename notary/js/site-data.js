/* All business facts for the notary demo live in this file.
   Change the business here. Do not copy these values into page HTML.

   Leave unknown facts blank or in [BRACKETS].
   Do not add license numbers, commission dates, certifications, memberships,
   insurance, bonding, years of experience, reviews, prices, a street address,
   or a claim of 24/7 availability unless they are real.

   Add a testimonial only when a real review is supplied:
     { name: "", review: "", rating: null, source: "Google" }
   Then set flags.showTestimonials to true.

   Add a certification only when it is confirmed:
     { name: "", detail: "" }
   Then set flags.showCredentials to true.

   Add a city only where this notary actually travels:
     { name: "Round Rock", slug: "round-rock-notary", blurb: "Mobile notary appointments in Round Rock.", nearby: ["Austin"] }
*/

window.SITE = {
  businessName: "Digital Notary",
  ownerName: "Amber Jennings",
  phone: "512-444-1234",
  textNumber: "512-444-1234",
  email: "amber@digitalnotary.com",
  city: "Austin",
  state: "TX",
  domain: "",
  serviceAreaLabel: "Austin, TX",
  hours: "9:00 AM - 5:00 PM",
  availability: "Appointments during the business hours listed here.",
  description:
    "Professional digital notary services at your home, office, hospital, or another meeting place you choose.",
  qualifyNote:
    "Contact us to confirm whether your document and circumstances qualify for notarization.",
  legalNotice:
    "Digital Notary provides notarial services and does not provide legal advice unless otherwise explicitly stated and legally authorized.",
  signingNotice:
    "The signing services listed here are the ones currently offered. Contact us to confirm your package before you book.",

  social: {
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com/in",
    googleBusiness: "https://www.google.com/business",
    notaryCafe: "https://www.notarycafe.com",
  },

  cta: {
    book: "Book an Appointment",
    call: "Call Now",
    quote: "Get a Quote",
    text: "Text Us",
    mobile: "Schedule a Mobile Notary",
    signing: "Request Signing Services",
    about: "Learn More About Me",
  },

  actionBar: {
    home: "Home",
    services: "Services",
    contact: "Contact",
  },

  nav: [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "Services", href: "services.html" },
    { label: "Service Areas", href: "service-areas.html" },
    { label: "FAQ", href: "faq.html" },
    { label: "Contact", href: "contact.html" },
  ],

  bookHref: "contact.html",
  quoteHref: "contact.html",

  flags: {
    showPhoto: false,
    showCredentials: false,
    showTestimonials: false,
    showPublicOffice: false,
    showPricingAmounts: false,
  },

  photo: "",

  about: {
    intro:
      "Amber Jennings provides notary services for people who need documents signed in person, at a place that works for them.",
    experience: "",
    background: "",
    philosophy:
      "Providing professional, convenient, and dependable notary services while making the signing process simple and stress-free.",
  },

  trust: [
    {
      title: "Mobile notary service",
      text: "The appointment comes to a location you choose.",
    },
    {
      title: "Flexible appointments",
      text: "Request a time and we confirm what is open.",
    },
    {
      title: "Convenient visits",
      text: "Homes, offices, hospitals, and other meeting places.",
    },
    {
      title: "Local service",
      text: "Serving the communities listed on this site.",
    },
  ],

  services: [
    {
      id: "general-notary",
      name: "General Notary",
      icon: "stamp",
      summary: "Standard notarizations for documents that need a notary present.",
      audience: "Individuals, families, and businesses with a document to sign.",
      documents: ["Acknowledgments", "Jurats", "Oaths and affirmations"],
      href: "services.html#general-notary",
      preview: true,
      footer: true,
    },
    {
      id: "mobile-notary",
      name: "Mobile Notary",
      icon: "pin",
      summary: "We come to you, so the signing happens at a place you choose.",
      audience: "Anyone who cannot easily come to a fixed office.",
      documents: ["The documents you need signed at your location"],
      href: "services/mobile-notary.html",
      preview: true,
      footer: true,
    },
    {
      id: "loan-signing",
      name: "Loan Signing",
      icon: "pen",
      summary: "Notarization for loan packages arranged with title or signing companies.",
      audience: "Borrowers, and title or signing companies scheduling a closing.",
      documents: ["Mortgage signing packages listed under signing services"],
      href: "services/loan-signing.html",
      preview: true,
      footer: true,
    },
    {
      id: "real-estate",
      name: "Real Estate Documents",
      icon: "home",
      summary: "Notarization for real estate paperwork when the signers can meet in person.",
      audience: "Buyers, sellers, agents, and homeowners.",
      documents: ["Deeds", "Seller and buyer packages", "Related real estate forms"],
      href: "services.html#real-estate",
      preview: true,
      footer: true,
    },
    {
      id: "power-of-attorney",
      name: "Power of Attorney",
      icon: "file",
      summary: "Notarization of a power of attorney when the signer is present.",
      audience: "People signing a power of attorney for a family member or advisor.",
      documents: ["Powers of attorney prepared for signature"],
      href: "services.html#power-of-attorney",
      preview: true,
      footer: false,
    },
    {
      id: "affidavits",
      name: "Affidavits",
      icon: "file",
      summary: "Notarization of a sworn written statement.",
      audience: "People who need a statement sworn before a notary.",
      documents: ["Affidavits"],
      href: "services.html#affidavits",
      preview: false,
      footer: false,
    },
    {
      id: "acknowledgments",
      name: "Acknowledgments",
      icon: "stamp",
      summary: "A signer acknowledges that they signed a document willingly.",
      audience: "Signers who need an acknowledgment certificate.",
      documents: ["Documents that call for an acknowledgment"],
      href: "services.html#acknowledgments",
      preview: false,
      footer: false,
    },
    {
      id: "jurats",
      name: "Jurats",
      icon: "stamp",
      summary: "A signer swears or affirms that the contents of a document are true.",
      audience: "Signers who need a jurat.",
      documents: ["Documents that call for a jurat"],
      href: "services.html#jurats",
      preview: false,
      footer: false,
    },
    {
      id: "oaths",
      name: "Oaths and Affirmations",
      icon: "stamp",
      summary: "An oath or affirmation administered when the document requires it.",
      audience: "Signers whose document calls for an oath or affirmation.",
      documents: ["Documents that require an oath or affirmation"],
      href: "services.html#oaths",
      preview: false,
      footer: false,
    },
    {
      id: "estate",
      name: "Estate Documents",
      icon: "file",
      summary: "Notarization for estate paperwork when each required signer is present.",
      audience: "Families and advisors handling estate documents.",
      documents: ["Estate planning documents prepared for signature"],
      href: "services.html#estate",
      preview: false,
      footer: false,
    },
    {
      id: "business",
      name: "Business Documents",
      icon: "building",
      summary: "Notarization for business paperwork at an office or another meeting place.",
      audience: "Business owners, staff, and professional advisors.",
      documents: ["Business forms that require notarization"],
      href: "services.html#business",
      preview: false,
      footer: false,
    },
    {
      id: "hospital",
      name: "Hospital / Nursing Home Visits",
      icon: "heart",
      summary: "A notary visit for someone who is in a hospital, nursing home, or care facility.",
      audience: "Patients, residents, and the families arranging the visit.",
      documents: ["Documents the signer is ready to sign in person"],
      href: "services.html#hospital",
      preview: true,
      footer: true,
    },
  ],

  signingPackages: [
    { id: "purchase", name: "Purchase documents" },
    { id: "seller", name: "Seller packages" },
    { id: "refinance", name: "Refinance documents" },
    { id: "heloc", name: "HELOC" },
    { id: "reverse", name: "Reverse mortgages" },
    { id: "modification", name: "Loan modifications" },
    { id: "mortgage", name: "Mortgage signing packages" },
  ],

  mobileLocations: [
    "Homes",
    "Offices",
    "Hospitals",
    "Nursing homes",
    "Assisted living facilities",
    "Coffee shops",
    "Attorney offices",
    "Title companies",
    "Escrow offices",
  ],

  areas: [
    {
      name: "Austin",
      slug: "austin-notary",
      blurb: "Mobile notary appointments in Austin, TX.",
      nearby: [],
    },
  ],

  steps: [
    {
      title: "Request an Appointment",
      text: "Call, text, or send the form with the service you need.",
    },
    {
      title: "Confirm Location and Documents",
      text: "We confirm the meeting place, who will sign, and what to bring.",
    },
    {
      title: "Meet and Complete the Notarization",
      text: "We meet you, check identification, and complete the notarization.",
    },
  ],

  faqs: [
    {
      question: "What identification do I need?",
      answer:
        "Bring a current government-issued photo ID. If your document needs something more specific, contact us before the appointment and we will tell you what to bring. A notary does not provide legal advice about your document.",
      home: true,
    },
    {
      question: "What documents can you notarize?",
      answer:
        "Many routine documents can be notarized when the signer is present and the circumstances qualify. Contact us to confirm whether your document and circumstances qualify for notarization. A notary does not decide the legal effect of the document.",
      home: true,
    },
    {
      question: "Do you travel to my location?",
      answer:
        "Yes. Mobile appointments are available at a home, office, hospital, or another meeting place inside the service area.",
      home: true,
    },
    {
      question: "What areas do you serve?",
      answer:
        "The cities we serve are listed on this site. If you do not see your city, contact us before you book and ask.",
      home: false,
    },
    {
      question: "Do you provide same-day appointments?",
      answer:
        "Same-day appointments are sometimes available, depending on the schedule that day. Request a time and we will confirm what is open. Service is not offered around the clock.",
      home: true,
    },
    {
      question: "Can you visit hospitals or nursing homes?",
      answer:
        "Yes. Visits to hospitals, nursing homes, and assisted living facilities can be arranged. Share any visitor rules when you request the appointment.",
      home: false,
    },
    {
      question: "How much does notarization cost?",
      answer:
        "Pricing may depend on document type, location, travel distance, and appointment time. Request a quote and we will confirm the fee before the appointment.",
      home: true,
    },
    {
      question: "Do you provide loan signing services?",
      answer:
        "Loan signing is offered for the packages listed on the loan signing page. Contact us to confirm that your package is one we handle.",
      home: false,
    },
    {
      question: "What should I prepare before my appointment?",
      answer:
        "Bring the documents, a valid photo ID, and every person who must sign. Contact us before the appointment if you are unsure what the signing requires. A notary does not provide legal advice.",
      home: false,
    },
    {
      question: "Can a notary explain the legal meaning of my document?",
      answer:
        "No. A notary identifies the signer and completes the notarial act. Digital Notary does not explain the legal meaning of a document or provide legal advice, unless separately licensed and that role is explicitly stated. A qualified attorney can help with legal questions.",
      home: true,
    },
  ],

  testimonials: [],

  certifications: [],

  pricing: {
    note: "Pricing may depend on document type, location, travel distance, and appointment time.",
    categories: [
      "Notary fee",
      "Travel fee",
      "After-hours fee",
      "Distance-based fee",
      "Additional signer fee",
      "Other service fees",
    ],
  },

  appointmentServices: [
    "General Notary",
    "Mobile Notary",
    "Loan Signing",
    "Real Estate Documents",
    "Hospital / Nursing Home",
    "Other",
  ],
};
