document.querySelectorAll(".anchor").forEach((anchor)->
    anchor.addEventListener("click", ()->
        scrollIt(document.querySelector("[data-anchor='" + anchor.dataset.target + "']"))
    )
)

document.querySelector("#scroll-to-top").addEventListener("click", ()->
    scrollIt(document.querySelector("body"))
)

scrollIt = (element)->
    window.scrollTo({
        "behavior": "smooth",
        "left": 0,
        "top": element.offsetTop
    })