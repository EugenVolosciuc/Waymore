const main = document.querySelector("main");

// MENU BUTTON TOGGLE
const btn = document.querySelector(".btn");
const sideMenu = document.querySelector("#side-menu");

sideMenu.setAttribute("style", "display: none");

btn.addEventListener("click", function (event) {
    this.classList.toggle("active");
    this.classList.toggle("not-active");
    if (this.classList.contains("active")) {
        sideMenu.removeAttribute("style", "display: none");
        sideMenu.classList.toggle("menu-animation-appear");
    } else if (this.classList.contains("not-active")) {
        sideMenu.setAttribute("style", "display: none");
        sideMenu.classList.toggle("menu-animation-appear");
    }
})

// CONTAINER
const container = document.querySelector("#container");

// I don't need this code, I guess
// const nodeSections = document.querySelectorAll("section");

// // Convert nodeSections to array
// const sections = [];
// for (let i = 0; i < nodeSections.length; i++) {
//     var self = nodeSections[i];
//     sections.push(self);
// }

function containerToggle(link) {
    link.addEventListener("click", function (event) {
        container.classList.remove("display-none");
    })
}

// SECTION TOGGLE

const links = document.querySelectorAll(".links");

function sectionToggle(section) {
    section.addEventListener("mousedown", function (event) {
        containerToggle(section);
        main.classList.add("darken");

    })
}

for (let i = 0; i < links.length; i++) {
    sectionToggle(links[i]);
}

// Go back to main
const backButton = document.querySelector("#back");

backButton.addEventListener("mousedown", (event) => {
    container.classList.add("display-none");
    main.classList.remove("darken");

})

// Todo:
// 1. Clean up the code
// 2. Hide menu when container shows