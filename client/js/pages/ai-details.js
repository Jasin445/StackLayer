import { getStackLayerData, getToolLogo, nameAbbr, randColors } from "../utils.js";
import { hideSkeleton } from "../skeleton.js";

const stackLayerData = await getStackLayerData();

const toolName = document.querySelectorAll(".toolName");
const description = document.querySelector("#detailedDesc");
const stage = document.querySelector("#stage");
const tier = document.querySelector("#tier");
const bestFor = document.querySelector("#bestFor");
const visitUrl = document.querySelector("#visitUrl");
const strengthContainer = document.querySelector("#strengthContainer");
const limitationContainer = document.querySelector("#limitationContainer");
const alternativesContainer = document.querySelector("#alternativesContainer");
const quickInfoContainer = document.querySelector("#quickInfoContainer");
const pricingContainer = document.querySelector("#pricingContainer");
const toolLogo = document.querySelector("#toolLogo");
const backBtn = document.querySelector("#backBtn");
const breadCrumb = document.querySelector("#breadCrumb");

const param = new URLSearchParams(location.search);
const AIName = param.get("tool") || localStorage.getItem("toolToView");

// ── DERIVE CATEGORY FROM TOOL NAME, FALLBACK TO localStorage
const allTools = stackLayerData.flatMap((cat) =>
  cat.tools.map((tool) => ({ ...tool, category: cat.category })),
);

const matchedTool = allTools.find(
  (t) => t.name.toLowerCase() === AIName?.toLowerCase(),
);

const category =
  matchedTool?.category || localStorage.getItem("selectedCategory");

// ── FIND THE TOOL TO DISPLAY
const AIToDisplay = matchedTool;

if (!AIToDisplay) {
  console.warn("Tool not found:", AIName);
}

// ── POPULATE DOM
toolName.forEach((el) => {
  el.textContent = AIToDisplay?.name;
});

const logo = await getToolLogo(AIToDisplay);
toolLogo.innerHTML = logo;

breadCrumb.textContent = category ?? "";
breadCrumb.style.textTransform = "capitalize";

description.textContent = AIToDisplay?.detailedDesc;
stage.textContent = AIToDisplay?.stage;
tier.textContent = AIToDisplay?.tier;
bestFor.textContent = AIToDisplay?.bestFor;
visitUrl.href = AIToDisplay?.visitUrl ?? "#";
visitUrl.target = "_blank";
visitUrl.rel = "noopener noreferrer";

// ── STRENGTHS
const strengthList = (AIToDisplay?.strengths || [])
  .map(
    (strength) => `
    <div class="analysis-item">
      <svg viewBox="0 0 24 24" stroke="#16a34a" fill="none" stroke-width="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      ${strength}
    </div>
  `,
  )
  .join("");

const strengthWrapper = document.createElement("div");
strengthWrapper.innerHTML = strengthList;
strengthContainer.appendChild(strengthWrapper);

// ── LIMITATIONS
const limitationList = (AIToDisplay?.limitations || [])
  .map(
    (limitation) => `
    <div class="analysis-item">
      <svg viewBox="0 0 24 24" stroke="#d97706" fill="none" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      ${limitation}
    </div>
  `,
  )
  .join("");

const limitationWrapper = document.createElement("div");
limitationWrapper.innerHTML = limitationList;
limitationContainer.appendChild(limitationWrapper);

const bg = randColors[Math.floor(Math.random() * randColors.length)];
// ── ALTERNATIVES
const alternativesUIArray = await Promise.all(
  (AIToDisplay?.alternatives || []).map(async (alt) => {
    const altTool = allTools.find(
      (t) => t.name.toLowerCase() === alt.name.toLowerCase(),
    );
    const altLogo = await getToolLogo(
      altTool || { name: alt.name, logo: {bg} },
    );

    return `
      <div data-tool="${alt?.name}" class="alt-item">
        <div class="alt-item-left">
          ${altLogo}
          <div>
            <div class="alt-name">${alt?.name}</div>
            <div class="alt-desc">${alt?.tagline}</div>
          </div>
        </div>
        <svg class="alt-chevron" viewBox="0 0 24 24">
          <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    `;
  }),
);

alternativesContainer.innerHTML = alternativesUIArray.join("");

// ── ALTERNATIVE CLICK HANDLERS
document.querySelectorAll(".alt-item").forEach((alt) => {
  const name = alt.dataset.tool;
  alt.addEventListener("click", () => {
    localStorage.setItem("toolToView", name);
    window.location.href = `/ai-details.html?tool=${name.toLowerCase()}`;
  });
});

// ── QUICK INFO
const quickInfoUI = Object.entries(AIToDisplay?.quickInfo || {})
  .map(
    ([key, value]) => `
    <div class="quick-info-row">
      <span class="quick-info-label">${key}</span>
      <span class="quick-info-value">${value}</span>
    </div>
  `,
  )
  .join("");

quickInfoContainer.innerHTML = quickInfoUI;

const quickTags = (AIToDisplay?.tags || [])
  .map((tag) => `<span class="quick-tag">${tag}</span>`)
  .join("");

const quickTagsWrapper = document.createElement("div");
quickTagsWrapper.innerHTML = `
  <div id="quickTagContainer" class="quick-tags">
    ${quickTags}
  </div>
`;
quickInfoContainer.appendChild(quickTagsWrapper);

// ── PRICING
const pricingCard = (AIToDisplay?.pricing || [])
  .map((priceInfo) => {
    const features = (priceInfo?.features || [])
      .map(
        (feature) => `
        <li>
          <svg viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          ${feature}
        </li>
      `,
      )
      .join("");

    const popularHTML = priceInfo?.popular
      ? `<div class="pricing-badge-popular">POPULAR</div>`
      : "";

    return `
      <div class="pricing-card ${priceInfo?.popular ? "featured" : ""}">
        ${popularHTML}
        <div class="pricing-tier">${priceInfo?.plan}</div>
        <div class="pricing-price">${priceInfo?.price}</div>
        <div class="pricing-period">${priceInfo?.period ? `/${priceInfo.period}` : "—"}</div>
        <ul class="pricing-features">${features}</ul>
        <button id="AIBtn" class="btn-pricing ${priceInfo?.popular ? "pro" : "free"}">
          ${priceInfo?.cta}
        </button>
      </div>
    `;
  })
  .join("");

pricingContainer.innerHTML = pricingCard;

// ── BACK BUTTON
backBtn.addEventListener("click", () => {
  location.href = `/ai-suggestion.html?category=${category?.toLowerCase()}`;
});

// ── PRICING CTA BUTTONS
document.querySelectorAll("#AIBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const url = AIToDisplay?.visitUrl;
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  });
});

hideSkeleton();
