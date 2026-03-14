import { stackLayerCategories } from "../../data/data.js";

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
const backBtn = document.querySelector("#backBtn");
const breadCrumb = document.querySelector("#breadCrumb");
const category = localStorage.getItem("selectedCategory");

const param = new URLSearchParams(location.search);
const AIName = param.get("tool") || localStorage.getItem("toolToView");
const AITools = stackLayerCategories.find(
  (allTools) => allTools.category.toLowerCase() === category.toLowerCase(),
);
// console.log(AITools);
const AIToDisplay = AITools?.tools?.find(
  (data) => data.name.toLowerCase() === AIName.toLowerCase(),
);
// console.log(AIToDisplay);

toolName.forEach((el) => {
  el.textContent = AIToDisplay?.name;
});

breadCrumb.textContent = category;
breadCrumb.style.textTransform = "capitalize";
description.textContent = AIToDisplay?.detailedDesc;
stage.textContent = AIToDisplay?.stage;
tier.textContent = AIToDisplay?.tier;
bestFor.textContent = AIToDisplay?.bestFor;
visitUrl.href = AIToDisplay?.visitUrl ?? "#";
visitUrl.target = "_blank";
visitUrl.rel = "noopener noreferrer";

const strengthList = AIToDisplay?.strengths
  .map((strength) => {
    return `<div class="analysis-item">
              <svg viewBox="0 0 24 24" stroke="#16a34a" fill="none" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              ${strength}
            </div>`;
  })
  .join("");

const strengthWrapper = document.createElement("div");
strengthWrapper.innerHTML = strengthList;
strengthContainer.appendChild(strengthWrapper);

const limitationList = AIToDisplay?.limitations
  ?.map((limitation) => {
    return `<div class="analysis-item">
              <svg viewBox="0 0 24 24" stroke="#d97706" fill="none" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              ${limitation}
            </div>`;
  })
  .join("");

const limitationWrapper = document.createElement("div");
limitationWrapper.innerHTML = limitationList;
limitationContainer.appendChild(limitationWrapper);

const alternativesUI = AIToDisplay?.alternatives
  ?.map((data) => {
    const logo = getToolLogo(data?.name, stackLayerCategories);
    return ` <div data-tool="${data?.name}" class="alt-item">
            <div class="alt-item-left">
                <div class="tool-icon icon-elevenlabs" style="background-color: ${logo?.bg || "blue"}; padding:8px; border-radius: 14px;">
              <div style="color: ${logo?.color || "white"};">
                ${logo?.initials ?? "???"}
              </div>
              </div>
              <div>
                <div class="alt-name">${data?.name}</div>
                <div class="alt-desc">${data?.tagline}</div>
              </div>
            </div>
            <svg class="alt-chevron" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>`;
  })
  .join("");

alternativesContainer.innerHTML = alternativesUI;

function getToolLogo(name, stackData) {
  // Flatten all tools from all categories into one array
  const allTools = stackData.flatMap((category) => category.tools);
  console.log("all tools", allTools, name);

  const tool = allTools.find(
    (t) => t.name.toLowerCase() === name.toLowerCase(),
  );

  return tool?.logo ?? null;
}
function getToolLinks(names, stackData) {
  // Flatten all tools from all categories into one array
  const allTools = stackData.flatMap((category) => category.tools);

  return names.reduce((acc, name) => {
    const tool = allTools.find(
      (t) => t.name.toLowerCase() === name.toLowerCase(),
    );
    acc[name] = tool ? tool.visitUrl : null;
    return acc;
  }, {});
}

if (AIToDisplay?.alternatives) {
  const altNames = AIToDisplay.alternatives.map((a) => a.name);
  const links = getToolLinks(altNames, stackLayerCategories);

  document.querySelectorAll(".alt-item").forEach((alt) => {
    const name = alt.dataset.tool;
    const url = links[name];

    if (url) {
      alt.addEventListener("click", () => {
        window.location.href = `/ai-details.html?tool=${name}`;
      });
    }
  });
}

const quickInfoUI = Object.entries(AIToDisplay?.quickInfo)
  ?.map(([key, value]) => {
    return `<div class="quick-info-row">
            <span class="quick-info-label">${key}</span>
            <span class="quick-info-value">${value}</span>
          </div>`;
  })
  .join("");

quickInfoContainer.innerHTML = quickInfoUI;

const quickTags = AIToDisplay?.tags
  ?.map((tag) => {
    return ` 
            <span class="quick-tag">${tag}</span>`;
  })
  .join("");

const quickTagsUI = `<div id="quickTagContainer" class="quick-tags">
                    ${quickTags}
                    </div>`;

const quickTagsWrapper = document.createElement("div");
quickTagsWrapper.innerHTML = quickTagsUI;

quickInfoContainer.appendChild(quickTagsWrapper);

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
        <div class="pricing-period">${priceInfo?.period ? `/${priceInfo.period}` : "__"}</div>

        <ul class="pricing-features">
          ${features}
        </ul>

        <button id="AIBtn" class="btn-pricing ${!priceInfo?.popular ? "free" : "pro"} ">${priceInfo?.cta}</button>
      </div>
    `;
  })
  .join("");

pricingContainer.innerHTML = pricingCard;

backBtn.addEventListener("click", () => {
  history.back();
});

const ctaBtn = document.querySelectorAll("#AIBtn");

if (ctaBtn) {
  ctaBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const url = AIToDisplay?.visitUrl;

      if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    });
  });
}
