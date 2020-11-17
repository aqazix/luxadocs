document.addEventListener("DOMContentLoaded", () => {
    const navbarBurger = document.querySelector(".lx-nav-burger");
    const navbarMenu = document.querySelector(".lx-nav-menu");

    navbarBurger.addEventListener("click", () => {
        navbarBurger.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
    });
});