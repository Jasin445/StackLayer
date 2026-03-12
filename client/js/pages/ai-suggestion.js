import { stackLayerCategories } from "../../data/data.js";

const renderSuggestion = () => {
  // ── DOM ──
  const toolsContainer = document.querySelector("#toolsGrid");
  const paginationContainer = document.querySelector(".pagination");
  const paginationInfo = document.querySelector(".pagination-info");
  const heading = document.querySelector("#headerText");
  const subtitle = document.querySelector("#descText");

  // ── CATEGORY FROM URL/STORAGE ──
  const params = new URLSearchParams(location.search);
  const category =
    params.get("category") || localStorage.getItem("selectedCategory");

  const AITools = stackLayerCategories.filter(
    (c) => c.category.toLowerCase() === category.toLowerCase(),
  );

  heading.textContent = AITools[0].category;
  subtitle.textContent = AITools[0].description;

  // ── STATE ──
  const ITEMS_PER_PAGE = 6;
  let currentPage = 1;
  let activeFilter = null;
  const tools = AITools[0]?.tools || [];

  // ── FILTERING ──
  function getFilteredTools() {
    if (!activeFilter) return tools;
    return tools.filter((tool) => tool.filter.includes(activeFilter));
  }

  // ── PAGINATION SLICE ──
  function getPaginatedTools() {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return getFilteredTools().slice(start, start + ITEMS_PER_PAGE);
  }

  // ── RENDER TOOLS ──
  function renderTools() {
    const pageTools = getPaginatedTools();

    if (!pageTools.length) {
      toolsContainer.innerHTML = `<p class="no-results">No tools found.</p>`;
      return;
    }

    toolsContainer.innerHTML = pageTools
      .map((tool) => {
        const tags = tool.tags
          .map((tag) => `<span class="tag">${tag}</span>`)
          .join("");
        const tierClass = tool.tier.toLowerCase().replace(/\s+/g, "-");

        return `
        <div class="tool-card">
          <div class="card-top">
            <div class="tool-icon icon-elevenlabs" style="background-color: ${tool.logo.bg};">
              <div style="color: ${tool.logo.color};">
                ${tool.logo.initials}
              </div>
            </div>
            <span class="badge badge-${tierClass}">${tool.tier}</span>
          </div>
          <div class="tool-name">${tool.name}</div>
          <div class="tool-desc">${tool.description}</div>
          <div class="tool-tags">${tags}</div>
          <button class="btn-view" data-name="${tool.name}">View Details</button>
        </div>
      `;
      })
      .join("");
  }

  // ── RENDER PAGINATION ──
  function renderPagination() {
    const totalPages = Math.ceil(getFilteredTools().length / ITEMS_PER_PAGE);

    if (totalPages <= 1) {
      paginationContainer.innerHTML = "";
      return;
    }

    paginationContainer.innerHTML = `
    <button class="page-btn" data-page="prev" ${currentPage === 1 ? "disabled" : ""}>
      <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>

    ${Array.from({ length: totalPages }, (_, i) => i + 1)
      .map(
        (p) =>
          `<button class="page-btn ${p === currentPage ? "active" : ""}" data-page="${p}">${p}</button>`,
      )
      .join("")}

    <button class="page-btn" data-page="next" ${currentPage === totalPages ? "disabled" : ""}>
      <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  `;
  }

  // ── RENDER PAGINATION INFO ──
  function updatePaginationInfo() {
    const filtered = getFilteredTools();
    const start = (currentPage - 1) * ITEMS_PER_PAGE + 1;
    const end = Math.min(currentPage * ITEMS_PER_PAGE, filtered.length);
    paginationInfo.textContent = `Showing ${start}–${end} of ${filtered.length} tools in ${category ?? ""} stage`;
  }

  // ── FULL RENDER ──
  function render() {
    renderTools();
    renderPagination();
    updatePaginationInfo();
  }

  // ── FILTER TABS ──
  document.querySelectorAll(".filter-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-tab")
        .forEach((t) => t.classList.remove("active"));
      btn.classList.add("active");

      activeFilter = btn.dataset.filter;
      currentPage = 1;
      render();
    });
  });

  // ── CLEAR FILTER ──
  document.querySelector(".clear-filter")?.addEventListener("click", () => {
    activeFilter = null;
    currentPage = 1;
    document
      .querySelectorAll(".filter-tab")
      .forEach((t) => t.classList.remove("active"));
    render();
  });

  // ── PAGINATION CLICKS ──
  paginationContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".page-btn");
    if (!btn || btn.disabled) return;

    const page = btn.dataset.page;
    const totalPages = Math.ceil(getFilteredTools().length / ITEMS_PER_PAGE);

    if (page === "prev" && currentPage > 1) currentPage--;
    else if (page === "next" && currentPage < totalPages) currentPage++;
    else if (!isNaN(page)) currentPage = Number(page);

    render();
    toolsContainer.scrollIntoView({ behavior: "smooth" });
  });

  // ── VIEW DETAILS ──
  toolsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-view");
    if (!btn) return;

    const idx = Array.from(
      toolsContainer.querySelectorAll(".btn-view"),
    ).indexOf(btn);
    const AIName = getPaginatedTools()[idx]?.name;
    if (!AIName) return;

    localStorage.setItem("toolToView", AIName);
    location.href = `/ai-details.html?tool=${String(AIName).toLowerCase()}`;
  });

  // ── INIT ──
  render();
};

window.addEventListener("DOMContentLoaded", () => {
  // const loaderFilter = document.getElementById("skeletonFilter")
  document.querySelectorAll(".filter-tab").forEach((filter) => {
    filter.style.display = "none";
  });
  setTimeout(() => {
    // loaderFilter.style.display = "none";
    document.querySelectorAll(".filter-tab").forEach((filter) => {
      filter.style.display = "block";
    });
    renderSuggestion();
  }, 500);
});
