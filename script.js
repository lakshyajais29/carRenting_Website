document.getElementById("services-link").addEventListener("click", function () {
    document.getElementById("services-card").classList.add("visible");
    document.getElementById("about-card").classList.remove("visible");
});

document.getElementById("about-link").addEventListener("click", function () {
    document.getElementById("about-card").classList.add("visible");
    document.getElementById("services-card").classList.remove("visible");
});
