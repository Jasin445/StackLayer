import { getStackLayerData, getToolLogo, getPageParam, getParam, setParams, removeParam } from "../utils.js";

const renderSuggestion = async () => {
  const stackLayerData = await getStackLayerData();

  // ── DOM ELEMENTS (cache once)
  const toolsContainer = document.querySelector("#toolsGrid");
  const paginationContainer = document.querySelector(".pagination");
  const paginationInfo = document.querySelector(".pagination-info");
  const heading = document.querySelector("#headerText");
  const subtitle = document.querySelector("#descText");
  const clearFilter = document.querySelector("#clearFilter");

  // ── CATEGORY FROM URL/STORAGE
  const params = new URLSearchParams(location.search);
  const category =
    params.get("category") || localStorage.getItem("selectedCategory");

  const categoryData = stackLayerData.find(
    (c) => c.category.toLowerCase() === category.toLowerCase()
  );
  
  if (!categoryData) return;

  heading.textContent = categoryData.category;
  subtitle.textContent = categoryData.description;

  const ITEMS_PER_PAGE = 6;
  let currentPage = getPageParam();           // ← reads from URL
  let activeFilter = getParam("filter");      // ← reads from URL
  const tools = categoryData.tools || [];

  // ── FILTER CACHE
  let filteredCache = null;
  function getFilteredTools() {
    if (!activeFilter) return tools;
    if (filteredCache?.filter === activeFilter) return filteredCache.data;

    const filtered = tools.filter((tool) => tool.filter.includes(activeFilter));
    filteredCache = { filter: activeFilter, data: filtered };
    return filtered;
  }

  function getPaginatedTools() {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return getFilteredTools().slice(start, start + ITEMS_PER_PAGE);
  }

  // ── RENDER TOOLS
  async function renderTools() {
    const pageTools = getPaginatedTools();
    toolsContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();

    for (const tool of pageTools) {
      const card = document.createElement("div");
      card.className = "tool-card";

      const tierClass = tool.tier.toLowerCase().replace(/\s+/g, "-");
      const tags = (tool.tags || []).map(t => `<span class="tag">${t}</span>`).join("");
      const logo = await getToolLogo(tool);

      card.innerHTML = `
        <div class="card-top">
          ${logo}
          <span class="badge badge-${tierClass}">${tool.tier}</span>
        </div>
        <div class="tool-name">${tool.name}</div>
        <div class="tool-desc">${tool.description}</div>
        <div class="tool-tags">${tags}</div>
        <button class="btn-view" data-name="${tool.name}">View Details</button>
      `;

      fragment.appendChild(card);
    }

    toolsContainer.appendChild(fragment);
  }

  // ── RENDER PAGINATION
  function renderPagination() {
    const filtered = getFilteredTools();
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    paginationContainer.innerHTML = "";

    if (totalPages <= 1) return;

    const fragment = document.createDocumentFragment();

    const createBtn = (label, page, disabled = false, active = false) => {
      const btn = document.createElement("button");
      btn.className = "page-btn";
      if (active) btn.classList.add("active");
      btn.disabled = disabled;
      btn.dataset.page = page;
      btn.innerHTML = label;
      return btn;
    };

    fragment.appendChild(
      createBtn(
        `<svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        "prev",
        currentPage === 1
      )
    );

    for (let p = 1; p <= totalPages; p++) {
      fragment.appendChild(createBtn(p, p, false, p === currentPage));
    }

    fragment.appendChild(
      createBtn(
        `<svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        "next",
        currentPage === totalPages
      )
    );

    paginationContainer.appendChild(fragment);
  }

  function updatePaginationInfo() {
    const filtered = getFilteredTools();
    const start = (currentPage - 1) * ITEMS_PER_PAGE + 1;
    const end = Math.min(currentPage * ITEMS_PER_PAGE, filtered.length);
    paginationInfo.textContent = `Showing ${start}–${end} of ${filtered.length} tools in ${category ?? ""} stage`;
  }

  function render() {
    renderTools();
    renderPagination();
    updatePaginationInfo();
  }

  // ── FILTER TABS
  function renderFilterTabs() {
    const validFilters = new Set(tools.flatMap((tool) => tool.filter));

    document.querySelectorAll(".filter-tab").forEach((btn) => {
      const hasResults = validFilters.has(btn.dataset.filter);
      btn.style.display = hasResults ? "" : "none";

      // restore active state from URL on load
      if (btn.dataset.filter === activeFilter) {
        btn.classList.add("active");
        clearFilter.style.color = "red";
        clearFilter.firstElementChild.style.stroke = "red";
      }
    });
  }

  document.querySelectorAll(".filter-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach((t) => t.classList.remove("active"));
      btn.classList.add("active");
      clearFilter.style.color = "red";
      clearFilter.firstElementChild.style.stroke = "red";
      activeFilter = btn.dataset.filter;
      currentPage = 1;
      setParams({ page: 1, filter: activeFilter }); // ← updates URL
      render();
    });
  });

  document.querySelector(".clear-filter")?.addEventListener("click", () => {
    activeFilter = null;
    currentPage = 1;
    clearFilter.style.color = "gray";
    clearFilter.firstElementChild.style.stroke = "gray";
    document.querySelectorAll(".filter-tab").forEach((t) => t.classList.remove("active"));
    removeParam("filter");        // ← removes filter from URL
    setParams({ page: 1 });      // ← resets page in URL
    render();
  });

  paginationContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".page-btn");
    if (!btn || btn.disabled) return;

    const page = btn.dataset.page;
    const totalPages = Math.ceil(getFilteredTools().length / ITEMS_PER_PAGE);

    if (page === "prev" && currentPage > 1) currentPage--;
    else if (page === "next" && currentPage < totalPages) currentPage++;
    else if (!isNaN(page)) currentPage = Number(page);

    setParams({ page: currentPage }); // ← updates URL
    render();
    toolsContainer.scrollIntoView({ behavior: "smooth" });
  });

  toolsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-view");
    if (!btn) return;

    const idx = Array.from(toolsContainer.querySelectorAll(".btn-view")).indexOf(btn);
    const AIName = getPaginatedTools()[idx]?.name;
    if (!AIName) return;

    localStorage.setItem("toolToView", AIName);
    location.href = `/ai-details.html?tool=${String(AIName).toLowerCase()}`;
  });

  renderFilterTabs();
  render();
};

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".filter-tab").forEach((filter) => {
    filter.style.display = "none";
  });
  setTimeout(() => {
    document.querySelectorAll(".filter-tab").forEach((filter) => {
      filter.style.display = "block";
    });
    renderSuggestion();
  }, 500);
});