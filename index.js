const main = document.querySelector("main");
const containerBg = document.querySelector("#container-bg");
const container = document.querySelector(".container");
const sideMenu = document.querySelector("#side-menu");
const links = document.querySelectorAll(".links");
const btn = document.querySelector(".btn");
const backButton = document.querySelector("#back");
const sections = document.querySelectorAll("section");
const logo = document.querySelector("#logo");
const modal = document.querySelector("#modal");
const modalImage = document.createElement("img");
const modalBg = document.querySelector("#modal-bg");

// MENU BUTTON TOGGLE
sideMenu.setAttribute("style", "display: none");

btn.addEventListener("click", function (event) {
    menuBtnPress();
})

// Menu button function
function menuBtnPress() {
    btn.classList.toggle("active");
    btn.classList.toggle("not-active");
    if (btn.classList.contains("active")) {
        sideMenu.removeAttribute("style", "display: none");
        sideMenu.classList.toggle("container-bg-appear");
    } else if (btn.classList.contains("not-active")) {
        sideMenu.setAttribute("style", "display: none");
        sideMenu.classList.toggle("container-bg-appear");
    }
}

// CONTAINER
function containerToggle() {
    container.classList.remove("display-none");
    containerBg.classList.remove("display-none");
    container.classList.add("animation-appear");
    containerBg.classList.add("container-bg-appear");
}

// SECTION TOGGLE

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('links')) {
        logo.style.opacity = "0";
        const hash = event.target.hash.substr(1);
        sections.forEach(function (section) {
            if (section.id === hash) {
                containerToggle();
                section.classList.remove("display-none");
                goBack(section);
            }
        })
    }
}, false);

// Go back to main
function goBack(section) {
    backButton.addEventListener("mouseup", (event) => {
        sideMenu.removeAttribute("style", "display: none");
        logo.style.opacity = "1";
        section.classList.add("display-none");
        container.classList.add("display-none");
        containerBg.classList.add("display-none");
        main.classList.remove("darken");
    })
}

// MODAL TOGGLE
document.addEventListener("click", function (event) {
    if (event.target.parentElement.classList.contains("img-container")) {
        modalImage.innerHTML = "";
        const imageSRC = event.target.attributes[0].value;
        modalImage.setAttribute("src", imageSRC);
        modalImage.classList.add("modal-image");
        modalImage.classList.add("animation-appear");
        modal.style.display = "inline-block";
        modalBg.classList.remove("display-none");
        modalBg.classList.add("container-bg-appear");
        modal.appendChild(modalImage);
    } else if (event.target.classList.contains("modal") || event.target.classList.contains("modal-bg")) {
        modal.style.display = "none";
        modalBg.classList.add("display-none");
    }
})
