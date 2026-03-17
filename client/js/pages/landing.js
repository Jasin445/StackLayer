document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]");
  if (!link) return;

  e.preventDefault();
  const path = link.dataset.link;
  location.href = path + ".html";
});

const currentPath = window.location.pathname.replace(".html", "");

document.querySelectorAll("[data-link]").forEach(link => {
  let linkPath = link.getAttribute("data-link");

  if (linkPath === "/index") linkPath = "/";

  if (currentPath === linkPath) {
    link.classList.add("active");
  }
});