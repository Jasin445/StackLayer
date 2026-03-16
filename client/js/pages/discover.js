import { getStackLayerData, getToolLogo, getPageParam, getParam, setParams, removeParam } from "../utils.js";

const toolsContainer    = document.querySelector(".tools-grid");
const paginationContainer = document.querySelector(".pagination");
const paginationInfo    = document.querySelector(".pagination-info");
const resultCount       = document.querySelector("#resultCount");
const searchInput       = document.querySelector("#searchTools");
const professionPill    = document.querySelector(".filter-pill[data-type='profession'] .pill-value");
const workflowPill      = document.querySelector(".filter-pill[data-type='workflow'] .pill-value");
const pricingPill       = document.querySelector(".filter-pill[data-type='pricing'] .pill-value");
const clearAllBtn       = document.querySelector(".clear-all");
const sortRow           = document.querySelector(".sort-row");
const sortLabel         = sortRow.querySelector("strong");

const stackLayerData = await getStackLayerData();
const data = stackLayerData.flatMap((cat) =>
  cat.tools.map((tool) => ({ ...tool, workflow: cat.category }))
);

const ITEMS_PER_PAGE = 8;
let currentPage   = getPageParam();
let activeSort    = getParam("sort")   || "relevance";
let searchQuery   = getParam("search") || "";
let activeFilters = {
  profession: getParam("profession") || null,
  workflow:   getParam("workflow")   || null,
  pricing:    getParam("pricing")    || null,
};

// restore search input from URL
if (searchQuery) searchInput.value = searchQuery;

// ── DEBOUNCE
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// ── SORT OPTIONS
const sortOptions = [
  { label: "Relevance",   value: "relevance" },
  { label: "Name A → Z", value: "name-asc"  },
  { label: "Name Z → A", value: "name-desc" },
  { label: "Free first",  value: "tier-free" },
  { label: "Paid first",  value: "tier-paid" },
];

function getSortedTools(filtered) {
  switch (activeSort) {
    case "name-asc":
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
    case "tier-free":
      return [...filtered].sort((a, b) => {
        const order = ["free", "premium", "free trial", "paid only"];
        return order.indexOf(a.tier.toLowerCase()) - order.indexOf(b.tier.toLowerCase());
      });
    case "tier-paid":
      return [...filtered].sort((a, b) => {
        const order = ["paid only", "premium", "free trial", "free"];
        return order.indexOf(a.tier.toLowerCase()) - order.indexOf(b.tier.toLowerCase());
      });
    case "relevance":
    default:
      return filtered;
  }
}

// ── FILTERING + SEARCH
function getFilteredTools() {
  const query = searchQuery.toLowerCase().trim();

  const filtered = data.filter((tool) => {
    const matchProfession = !activeFilters.profession ||
      tool.tags.some(t => t.toLowerCase() === activeFilters.profession.toLowerCase());

    const matchWorkflow = !activeFilters.workflow ||
      tool.workflow.toLowerCase() === activeFilters.workflow.toLowerCase();

    const matchPricing = !activeFilters.pricing ||
      tool.tier.toLowerCase() === activeFilters.pricing.toLowerCase();

    const matchSearch = !query || [
      tool.name,
      tool.description,
      tool.workflow,
      tool.tier,
      ...(tool.tags || []),
    ].some(field => field?.toLowerCase().includes(query));

    return matchProfession && matchWorkflow && matchPricing && matchSearch;
  });

  return getSortedTools(filtered);
}

function getPaginatedTools() {
  const filtered = getFilteredTools();
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  return filtered.slice(start, start + ITEMS_PER_PAGE);
}

// ── RENDER TOOLS
async function renderTools() {
  const pageTools = getPaginatedTools();
  toolsContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();

  if (pageTools.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No tools match your search.";
    toolsContainer.appendChild(empty);
    return;
  }

  for (const tool of pageTools) {
    const card = document.createElement("div");
    card.className = "tool-card";

    const tierClass = tool?.tier.toLowerCase().replace(/\s+/g, "-");
    const tags = (tool?.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
    const logo = await getToolLogo(tool);

    card.innerHTML = `
      <div class="card-top">
        ${logo}
        <span class="badge badge-${tierClass}">${tool?.tier}</span>
      </div>
      <div class="tool-name">${tool?.name}</div>
      <div class="tool-desc">${tool?.description}</div>
      <div class="tool-tags">${tags}</div>
      <button class="btn-view" data-name="${tool?.name}">View Details</button>
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
  resultCount.textContent = `${filtered.length} tools found`;

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

  fragment.appendChild(createBtn(
    `<svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "prev", currentPage === 1
  ));

  for (let p = 1; p <= totalPages; p++) {
    fragment.appendChild(createBtn(p, p, false, p === currentPage));
  }

  fragment.appendChild(createBtn(
    `<svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "next", currentPage === totalPages
  ));

  paginationContainer.appendChild(fragment);
}

function updatePaginationInfo() {
  const filtered = getFilteredTools();
  const start = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const end = Math.min(currentPage * ITEMS_PER_PAGE, filtered.length);
  paginationInfo.textContent = filtered.length
    ? `Showing ${start}–${end} of ${filtered.length} tools`
    : "No results found";
}

// ── UPDATE PILL + SORT DISPLAY
function updatePillDisplay() {
  professionPill.textContent = activeFilters.profession || "All";
  workflowPill.textContent   = activeFilters.workflow   || "All";
  pricingPill.textContent    = activeFilters.pricing    || "All";

  const matched = sortOptions.find(o => o.value === activeSort);
  if (matched) sortLabel.textContent = matched.label;
}

function render() {
  updatePillDisplay();
  renderTools();
  renderPagination();
  updatePaginationInfo();
}

// ── DROPDOWN BUILDER
function buildDropdown(items, onSelect, activeValue) {
  document.querySelector(".pill-dropdown")?.remove();

  const dropdown = document.createElement("div");
  dropdown.className = "pill-dropdown";

  items.forEach((item) => {
    const el = document.createElement("div");
    el.className = "pill-dropdown-item";
    el.textContent = typeof item === "string" ? item : item.label;
    const value = typeof item === "string" ? item : item.value;
    if ((activeValue || "All") === (value || "All")) el.classList.add("active");

    el.addEventListener("click", () => {
      onSelect(value);
      dropdown.remove();
    });

    dropdown.appendChild(el);
  });

  document.body.appendChild(dropdown);
  return dropdown;
}

function positionDropdown(dropdown, el) {
  const rect = el.getBoundingClientRect();
  dropdown.style.top  = `${rect.bottom + window.scrollY + 6}px`;
  dropdown.style.left = `${rect.left + window.scrollX}px`;
}

// ── FILTER PILL CLICKS
document.querySelectorAll(".filter-pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    const type = pill.dataset.type;

    let options = [];
    if (type === "profession") {
      options = ["All", ...new Set(data.flatMap((t) => t.tags))].sort();
    } else if (type === "workflow") {
      options = ["All", ...new Set(data.map((t) => t.workflow))].sort();
    } else if (type === "pricing") {
      options = ["All", ...new Set(data.map((t) => t.tier))].sort();
    }

    const dropdown = buildDropdown(
      options,
      (value) => {
        activeFilters[type] = value === "All" ? null : value;
        currentPage = 1;
        setParams({ page: 1, [type]: activeFilters[type] });
        render();
      },
      activeFilters[type] || "All"
    );

    positionDropdown(dropdown, pill);
  });
});

// ── SORT CLICK
sortRow.addEventListener("click", () => {
  const dropdown = buildDropdown(
    sortOptions,
    (value) => {
      activeSort = value;
      currentPage = 1;
      setParams({ sort: activeSort, page: 1 });
      render();
    },
    activeSort
  );

  positionDropdown(dropdown, sortRow);
});

// ── CLOSE DROPDOWN ON OUTSIDE CLICK
document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".filter-pill") &&
    !e.target.closest(".sort-row") &&
    !e.target.closest(".pill-dropdown")
  ) {
    document.querySelector(".pill-dropdown")?.remove();
  }
});

// ── SEARCH INPUT
searchInput.addEventListener("input", debounce((e) => {
  searchQuery = e.target.value;
  currentPage = 1;
  setParams({ search: searchQuery || null, page: 1 });
  render();
}, 350));

// ── CLEAR ALL
clearAllBtn?.addEventListener("click", () => {
  activeFilters = { profession: null, workflow: null, pricing: null };
  activeSort    = "relevance";
  searchQuery   = "";
  currentPage   = 1;
  searchInput.value = "";
  removeParam("profession");
  removeParam("workflow");
  removeParam("pricing");
  removeParam("search");
  setParams({ sort: "relevance", page: 1 });
  render();
});

// ── PAGINATION CLICKS
paginationContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".page-btn");
  if (!btn || btn.disabled) return;

  const page = btn.dataset.page;
  const totalPages = Math.ceil(getFilteredTools().length / ITEMS_PER_PAGE);

  if (page === "prev" && currentPage > 1) currentPage--;
  else if (page === "next" && currentPage < totalPages) currentPage++;
  else if (!isNaN(page)) currentPage = Number(page);

  setParams({ page: currentPage });
  render();
  toolsContainer.scrollIntoView({ behavior: "smooth" });
});

// ── TOOL CLICK
toolsContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-view");
  if (!btn) return;

  const idx = Array.from(toolsContainer.querySelectorAll(".btn-view")).indexOf(btn);
  const AIName = getPaginatedTools()[idx]?.name;
  if (!AIName) return;

  localStorage.setItem("toolToView", AIName);
  location.href = `/ai-details.html?tool=${String(AIName).toLowerCase()}`;
});

render();
