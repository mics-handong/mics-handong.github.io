/* =============================================================
   members.js - lab members.
   photo: put a square image in assets/img/ and write "assets/img/name.jpg".
          Leave it as "" and the site will show the initials instead.
   NOTE: English spellings of names are best guesses - please check each
         person's own preferred romanization before publishing.
   ============================================================= */
const PI = {
  name:  "Shinwoong Kim",
  role:  "Principal Investigator",
  photo: "assets/img/shinwoong-kim.jpg",
  email: "shinwoong@handong.edu",
  bio:   "Prof. Kim received a Ph.D. in Electrical Engineering from POSTECH and designs semiconductor circuits that operate across the analog-digital boundary. In fractional-N digital PLLs and all-digital frequency synthesizers, Prof. Kim separates the roles of the control blocks - DCO, delta-sigma modulator, and TDC/DTC - and applies calibration schemes to contain the spurs and phase noise that PVT variation and quantization error would otherwise produce. For wide tuning ranges, the lab uses multi-loop architectures that keep loop switching stable, together with area-efficient reuse of digital modules.",
  links: [
    /* { label: "Google Scholar", url: "https://..." } */
  ]
};

const MEMBERS = [
  { name: "Yongjin Kwon", role: "M.S. Student", topic: "VCO-based ADC", photo: "assets/img/yongjin-kwon.jpg" },
  { name: "Mijeong Kwon", role: "M.S. Student", topic: "Machine learning for PLL design", photo: "assets/img/mijeong-kwon.jpg" }
];

const ALUMNI = [
  /* newest first. thesis / now: leave "" to hide that line */
  { name: "Solmon Shin",    degree: "M.S.", date: "2026/08",
    thesis: "ADPLL-based GFSK Modulators", now: "" },
  { name: "Jaeyoon Jang",   degree: "M.S.", date: "2026/02",
    thesis: "Analog-Digital Hybrid PLL", now: "" },
  { name: "Yekwang Choi",   degree: "M.S.", date: "2026/02",
    thesis: "Fractional-N DPLL with High-Resolution TDCs", now: "Ph.D. program, KAIST" },
  { name: "Seojin Kim",     degree: "M.S.", date: "2025/02",
    thesis: "Fractional-N DPLL with Calibrated Dual-Referenced Interpolating TDC", now: "Agency for Defense Development (ADD)" },
  { name: "Byungseok Kang", degree: "M.S.", date: "2024/08",
    thesis: "Triple-Loop Wideband Fractional-N All-Digital PLL", now: "Ph.D. program, POSTECH" }
];
