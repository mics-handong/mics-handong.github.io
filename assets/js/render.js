/* =============================================================
   render.js - fills the pages with the contents of data/*.js
   You normally do NOT need to touch this file; edit data/ instead.
   ============================================================= */

/* escape HTML, then turn **text** into <strong>text</strong> */
function fmt(s) {
  const esc = String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return esc.replace(/\*\*(.+?)\*\*/g, '<span class="me">$1</span>');
}

function initials(name) {
  return name.replace(/TODO\s*/i, "").trim().split(/\s+/)
             .slice(0, 2).map(w => w[0] || "").join("").toUpperCase() || "?";
}

function photo(p) {
  return p.photo
    ? `<img src="${p.photo}" alt="${fmt(p.name)}">`
    : `<div class="avatar">${initials(p.name)}</div>`;
}

function put(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

/* ---------- header, footer, page title ---------- */
function renderBrand() {
  const text = `<a href="index.html"><span class="mark">${fmt(SITE.shortName)}</span></a>
                <span class="full">${fmt(SITE.fullName)}</span>`;
  put("brand", text);
  if (!SITE.logo) return;
  /* swap in the logo only once it has actually loaded, so a missing
     file leaves the text wordmark in place instead of a broken image */
  const probe = new Image();
  probe.onload = () => put("brand",
    `<a href="index.html"><img class="logo" src="${SITE.logo}" alt="${fmt(SITE.shortName)}"></a>
     <span class="full">${fmt(SITE.fullName)}</span>`);
  probe.src = SITE.logo;
}

function renderChrome() {
  renderBrand();
  document.querySelectorAll("[data-site-short]").forEach(e => e.textContent = SITE.shortName);
  document.querySelectorAll("[data-site-full]").forEach(e => e.textContent = SITE.fullName);
  document.title = document.title.replace("{SITE}", SITE.shortName);

  put("footer", `
    <div class="wrap">
      <strong>${fmt(SITE.fullName)}</strong> (${fmt(SITE.shortName)})<br>
      ${fmt(SITE.department)}, ${fmt(SITE.university)}<br>
      ${fmt(SITE.address)}<br>
      <a href="mailto:${fmt(SITE.email)}">${fmt(SITE.email)}</a>
      &nbsp;&middot;&nbsp; &copy; ${SITE.year} ${fmt(SITE.shortName)}. All rights reserved.
    </div>`);

  /* mark the current page in the nav */
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(a => {
    if (a.getAttribute("href") === here) a.classList.add("active");
  });
}

/* ---------- research ---------- */
function renderResearch(id, full) {
  put(id, RESEARCH.map(r => `
    <div class="card">
      <h3>${fmt(r.title)}</h3>
      <p>${fmt(full ? r.detail : r.summary)}</p>
    </div>`).join(""));
}

/* ---------- news ---------- */
function renderNews(id, limit) {
  const items = limit ? NEWS.slice(0, limit) : NEWS;
  put(id, `<ul>${items.map(n => `
    <li><span class="date">${fmt(n.date)}</span><span>${fmt(n.text)}</span></li>`).join("")}</ul>`);
}

/* ---------- people ---------- */
function renderPI(id) {
  put(id, `
    <div class="pi">
      <div class="person">${photo(PI)}</div>
      <div>
        <h2 style="margin-bottom:2px">${fmt(PI.name)}</h2>
        <div class="role" style="color:var(--ink-muted)">${fmt(PI.role)}</div>
        <p style="margin-top:14px">${fmt(PI.bio)}</p>
        <p style="margin-top:10px">
          <a href="mailto:${fmt(PI.email)}">${fmt(PI.email)}</a>
          ${PI.links.map(l => ` &middot; <a href="${l.url}">${fmt(l.label)}</a>`).join("")}
        </p>
      </div>
    </div>`);
}

function renderMembers(id) {
  put(id, MEMBERS.map(m => `
    <div class="person">
      ${photo(m)}
      <div class="name">${fmt(m.name)}</div>
      <div class="role">${fmt(m.role)}</div>
      <div class="topic">${fmt(m.topic)}</div>
    </div>`).join(""));
}

function renderAlumni(id) {
  put(id, `<ul>${ALUMNI.map(a => `
    <li><span class="date">${fmt(a.degree)}</span>
        <span><strong>${fmt(a.name)}</strong>${a.now ? ` &mdash; ${fmt(a.now)}` : ""}</span></li>`).join("")}</ul>`);
}

/* ---------- publications ---------- */
const PUB_SECTIONS = [
  ["International Journals & Conferences", "international"],
  ["Domestic Journals & Conferences",      "domestic"]
];

function pubHtml(p) {
  const venue = [p.venue, p.year].filter(Boolean).join(", ");
  return `
      <div class="pub">
        <div class="title">${fmt(p.title)}${p.type ? `<span class="tag">${fmt(p.type)}</span>` : ""}</div>
        <div class="authors">${fmt(p.authors)}</div>
        <div class="venue">${fmt(venue)}</div>
        ${p.links && p.links.length ? `<div class="links">${
          p.links.map(l => `<a href="${l.url}">${fmt(l.label)}</a>`).join("")}</div>` : ""}
      </div>`;
}

function renderPublications(id, limit) {
  /* home page: the first few entries, in the order written in the data file */
  if (limit) { put(id, PUBLICATIONS.slice(0, limit).map(pubHtml).join("")); return; }

  /* full page: grouped by section, newest first inside each group */
  let html = "";
  PUB_SECTIONS.forEach(([label, key]) => {
    const items = PUBLICATIONS.filter(p => p.category === key)
                              .sort((a, b) => (b.year || 0) - (a.year || 0));
    if (items.length) html += `<div class="pub-year">${label}</div>` + items.map(pubHtml).join("");
  });
  put(id, html);
}

/* ---------- contact ---------- */
function renderContact(id) {
  put(id, `
    <dl class="info">
      <dt>Address</dt><dd>${fmt(SITE.address)}</dd>
      <dt>Email</dt><dd><a href="mailto:${fmt(SITE.email)}">${fmt(SITE.email)}</a></dd>
      ${SITE.phone ? `<dt>Phone</dt><dd>${fmt(SITE.phone)}</dd>` : ""}
      <dt>Map</dt><dd><a href="${SITE.mapUrl}">Open in Google Maps</a></dd>
    </dl>`);
}
