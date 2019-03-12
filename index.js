const main = document.querySelector("main");
const container = document.querySelector("#container");
const sideMenu = document.querySelector("#side-menu");
const links = document.querySelectorAll(".links");
const btn = document.querySelector(".btn");
const backButton = document.querySelector("#back");

// MENU BUTTON TOGGLE

sideMenu.setAttribute("style", "display: none");

btn.addEventListener("click", function (event) {
    this.classList.toggle("active");
    this.classList.toggle("not-active");
    if (this.classList.contains("active")) {
        sideMenu.removeAttribute("style", "display: none");
        sideMenu.classList.toggle("animation-appear");
    } else if (this.classList.contains("not-active")) {
        sideMenu.setAttribute("style", "display: none");
        sideMenu.classList.toggle("animation-appear");
    }
})

// CONTAINER
function containerToggle(link) {
    link.addEventListener("click", function (event) {
        container.classList.remove("display-none");
        container.classList.add("animation-appear");
    })
}

// SECTION TOGGLE
function sectionToggle(section) {
    section.addEventListener("mouseup", function (event) {
        containerToggle(section);
        main.classList.add("darken");
    })
}

for (let i = 0; i < links.length; i++) {
    sectionToggle(links[i]);
}

// Go back to main
backButton.addEventListener("mouseup", (event) => {
    container.classList.add("display-none");
    main.classList.remove("darken");
})

// Todo:
// 1. Clean up the code
// 2. Hide menu when container shows