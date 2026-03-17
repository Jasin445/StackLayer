let stackLayerDataCache = null;

export async function getStackLayerData() {

  console.log(stackLayerDataCache)
  if (stackLayerDataCache) return stackLayerDataCache;

  const res = await fetch("/data/data.json", { cache: "force-cache" });
  const data = await res.json();
  stackLayerDataCache = data;
  return data;
}

export function nameAbbr(name) {
  if (!name) return "";

  let abbr = name.match(/[A-Z]/g)?.join("") || "";

  if (abbr.length <= 1) {
    abbr = name.substring(0, 2).toUpperCase();
  }

  return abbr;
}

let logosCache = null;

export async function getLogos() {
  if (logosCache) return logosCache
  
  const res = await fetch("data/logo.json", { cache: "force-cache" });
  const data = await res.json();
  logosCache = data;

  return data
}


export const getToolLogo = async (tool) => {
  const placeholder = `
    <div class="tool-icon icon-elevenlabs" style="background-color:${tool?.logo?.bg}; padding: 10px; border-radius: 8px;">
      <div style="color: white">
        ${tool?.logo?.initials || nameAbbr(tool?.name) || "N/A"}
      </div>
    </div>
  `;
  console.log(tool)
  try {
    const stackLayerLogo = await getLogos();

    const logoSrc = stackLayerLogo[tool?.name];

    if (!logoSrc) return placeholder;

    return `
  <div class="tool-icon icon-elevenlabs">
    <img
      src="${logoSrc}"
      alt="${tool?.name?.toLowerCase()} logo"
      width="45"
      height="45"
      decoding="async"
      loading="lazy"
      style="border-radius:16px"
      onerror="this.closest('.tool-icon').outerHTML = \`
        <div class='tool-icon icon-elevenlabs' style='background-color:${tool?.logo?.bg};'>
          <div style='color:${tool?.logo?.color};'>${tool?.logo?.initials ?? 'N/A'}</div>
        </div>\`"
    />
  </div>
`;
  } catch {
    return placeholder;
  }
};

export function getParam(key) {
  return new URLSearchParams(location.search).get(key);
}


export function setParams(updates = {}) {
  const params = new URLSearchParams(location.search);

  Object.entries(updates).forEach(([key, value]) => {
    if (value === null || value === undefined || value === "") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
  });

  const newUrl = `${location.pathname}?${params.toString()}`;
  history.pushState({}, "", newUrl);
}

export function removeParam(key) {
  const params = new URLSearchParams(location.search);
  params.delete(key);
  const newUrl = `${location.pathname}?${params.toString()}`;
  history.pushState({}, "", newUrl);
}

export function getPageParam() {
  return Number(getParam("page")) || 1;
}


export const randColors = [
  "#6366f1",
  "#8b5cf6",
  "#ec4899",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#14b8a6",
  "#3b82f6",
  "#06b6d4",
  "#4f46e5",
  "#7c3aed",
  "#db2777",
  "#dc2626",
  "#ea580c",
  "#ca8a04",
  "#16a34a",
  "#0f766e",
  "#1d4ed8",
  "#0e7490",
  "#818cf8",
  "#a78bfa",
  "#f472b6",
  "#f87171",
  "#fb923c",
  "#1e1b4b",
  "#1a0533",
  "#4a044e",
  "#450a0a",
  "#431407",
  "#713f12",
  "#052e16",
  "#042f2e",
  "#1e3a5f",
  "#083344",
  "#44403c",
  "#292524",
  "#1c1917",
  ,
];
