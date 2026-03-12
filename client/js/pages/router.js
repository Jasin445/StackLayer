// const app = document.getElementById("app");

// const routes = {
//   "/": "./pages/landing-page.html",
//   "/work-selection": "./pages/work-selection.html",
//   "/tools": "./pages/project-phase.html",
//   "/ai-suggestion": "./pages/ai-suggestion.html",
//   "/ai-details": "./pages/ai-details.html",
//   "/discover": "./pages/discover.html"
// };

//  function router() {

//   const path = location.hash.replace("#", "") || "/";

//   const route = routes[path] || routes["/"];

//     fetch(route).then(res => res.text()).then(html => {

//       app.innerHTML = html;
  
//       history.pushState({}, "", path)
//     }).catch(err => "<h1>404 Page Not Found</h1>");

// }

// document.addEventListener("click", (e) => {

//   const link = e.target.closest("[data-link]");
//   console.log(link)

//   if (!link) throw Error("Hello Bad");

//   const path = link.getAttribute("data-link");

//   location.hash = path;

// });

// window.addEventListener("hashchange", router);

// window.addEventListener("popstate", router)

// router();