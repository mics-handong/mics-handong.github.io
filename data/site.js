/* =============================================================
   site.js - basic lab information.
   Everything here appears in the header, footer and contact page.
   Leave a field as "" to hide it (e.g. phone).
   ============================================================= */
const SITE = {
  shortName: "MICS",
  fullName:  "Mixed Signal Circuit and System Lab",
  logo:      "assets/img/logo.png",   // header lockup; set to "" to fall back to text
  university:"Handong Global University",
  department:"School of AI, Computer Science and Electrical Engineering",  // CHECK: official English name
  tagline:   "We design semiconductor circuits that live on the analog-digital boundary - fractional-N digital PLLs, all-digital frequency synthesis, and the calibration techniques that make them accurate.",
  email:     "shinwoong@handong.edu",
  phone:     "",
  address:   "Newton Hall, Room 317, Handong Global University, 558 Handong-ro, Buk-gu, Pohang, Gyeongbuk 37554, Republic of Korea",  // CHECK: postal address
  mapUrl:    "https://maps.google.com/?q=Handong+Global+University+Newton+Hall",
  year:      new Date().getFullYear()
};
