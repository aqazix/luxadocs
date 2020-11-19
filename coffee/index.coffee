animation = bodymovin.loadAnimation({
    container: document.querySelector("#astronaut"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "assets/media/astronaut.json"
})