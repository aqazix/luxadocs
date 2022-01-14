toggleActive = () ->
    navbarBurger.classList.toggle("is-active")
    navbarMenu.classList.toggle("is-active")

navbarBurger = document.querySelector(".lx-nav-burger")
navbarMenu = document.querySelector(".lx-nav-menu")

navbarBurger.addEventListener("click", toggleActive)

docsearch(
  container: "#docsearch",
  appId: "SB7B8CE0BS",
  apiKey: "6c5835c7356f26a907436acc13bc8976",
  indexName: "luxonauta"
)