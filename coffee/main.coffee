toggleActive = () ->
    navbarBurger.classList.toggle("is-active")
    navbarMenu.classList.toggle("is-active")

navbarBurger = document.querySelector(".lx-nav-burger")
navbarMenu = document.querySelector(".lx-nav-menu")

navbarBurger.addEventListener("click", toggleActive)