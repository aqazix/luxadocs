document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".accordion").forEach((acc) => {
        acc.addEventListener("click", () => {
            acc.classList.toggle("active");
            let panel = acc.nextElementSibling;
            panel.style.maxHeight
                ? (panel.style.maxHeight = null)
                : (panel.style.maxHeight = panel.scrollHeight + "px");
        });
    });

    document.querySelectorAll(".anchor").forEach((anchor) => {
        anchor.addEventListener("click", () => {
            let target = document.querySelector("[data-anchor='" + anchor.dataset.target + "']");
            scrollIt(target);
        });
    });
});

const scrollIt = (element) => {
    window.scrollTo({
        "behavior": "smooth",
        "left": 0,
        "top": element.offsetTop
    });
}