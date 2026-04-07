// ── Helpers ───────────────────────────────────────────────────
function getFiles(a) {
  return a.files
    ? a.files
    : [{ label: "View", embedUrl: a.embedUrl, openUrl: a.openUrl }];
}

function getDriveId(embedUrl) {
  // Extract FILE_ID from https://drive.google.com/file/d/FILE_ID/preview
  const m = embedUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return m ? m[1] : null;
}

function isWebsite(embedUrl) {
  return embedUrl && !embedUrl.includes("drive.google.com");
}

// ── Card preview HTML ─────────────────────────────────────────
function cardPreviewHTML(a) {
  const files  = getFiles(a);
  const first  = files[0];
  const multi  = files.length > 1;
  const badge  = multi ? `<span class="multi-badge">${files.length} files</span>` : "";

  if (isWebsite(first.embedUrl)) {
    // Browser-mockup placeholder for website assignments
    const host = (() => { try { return new URL(first.embedUrl).hostname; } catch { return first.embedUrl; } })();
    return `
      <div class="card-preview card-preview--web">
        <div class="browser-bar">
          <span class="browser-dot"></span><span class="browser-dot"></span><span class="browser-dot"></span>
          <span class="browser-url">${host}</span>
        </div>
        <div class="browser-body">
          <svg class="web-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <span class="web-label">Website</span>
        </div>
        <div class="card-overlay">
          <button class="expand-btn" data-id="${a.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            Open Preview
          </button>
        </div>
      </div>`;
  }

  // Google Drive thumbnail (fast, always renders)
  const id   = getDriveId(first.embedUrl);
  const thumb = id
    ? `https://drive.google.com/thumbnail?id=${id}&sz=w600`
    : "";

  return `
    <div class="card-preview">
      ${thumb
        ? `<img src="${thumb}" class="card-thumb" alt="${a.title}" loading="lazy" />`
        : `<div class="card-thumb-fallback"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="40" height="40"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>`
      }
      ${badge}
      <div class="card-overlay">
        <button class="expand-btn" data-id="${a.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          Expand Preview
        </button>
      </div>
    </div>`;
}

// ── Build card ────────────────────────────────────────────────
function buildCard(a) {
  return `
    <article class="card" data-id="${a.id}">
      ${cardPreviewHTML(a)}
      <div class="card-body">
        <span class="card-num">No. ${String(a.id).padStart(2, "0")}</span>
        <h3 class="card-title">${a.title}</h3>
      </div>
    </article>`;
}

// ── Render grid ───────────────────────────────────────────────
function renderGrid() {
  const grid = document.getElementById("assignmentsGrid");
  grid.innerHTML = assignments.map(buildCard).join("");

  grid.querySelectorAll(".expand-btn, .card").forEach(el => {
    el.addEventListener("click", e => {
      e.stopPropagation();
      openModal(parseInt(el.closest("[data-id]").dataset.id));
    });
  });
}

// ── Modal ─────────────────────────────────────────────────────
let currentFiles = [];

function setModalFile(index) {
  const f = currentFiles[index];
  document.getElementById("modalBody").innerHTML = `
    <iframe
      src="${f.embedUrl}"
      class="modal-iframe"
      allowfullscreen
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      title="${f.label}"
    ></iframe>`;
  document.getElementById("modalOpenLink").href = f.openUrl;
  document.querySelectorAll(".tab-btn").forEach((b, i) => b.classList.toggle("active", i === index));
}

function openModal(id) {
  const a = assignments.find(x => x.id === id);
  currentFiles = getFiles(a);

  document.getElementById("modalTitle").textContent = a.title;

  const tabsEl = document.getElementById("modalTabs");
  if (currentFiles.length > 1) {
    tabsEl.style.display = "flex";
    tabsEl.innerHTML = currentFiles
      .map((f, i) => `<button class="tab-btn${i === 0 ? " active" : ""}" data-index="${i}">${f.label}</button>`)
      .join("");
    tabsEl.querySelectorAll(".tab-btn").forEach(btn =>
      btn.addEventListener("click", () => setModalFile(parseInt(btn.dataset.index)))
    );
  } else {
    tabsEl.style.display = "none";
    tabsEl.innerHTML = "";
  }

  setModalFile(0);
  document.getElementById("modalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.getElementById("modalBody").innerHTML = "";
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e => {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ── Init ──────────────────────────────────────────────────────
document.getElementById("totalCount").textContent = assignments.length;
renderGrid();
