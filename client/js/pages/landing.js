document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]");
  if (!link) return;

  e.preventDefault();
  const path = link.dataset.link;
  location.href = path + ".html";
});