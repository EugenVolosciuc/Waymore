const main = document.querySelector("main");
const containerBg = document.querySelector("#container-bg");
const container = document.querySelector(".container");
const sideMenu = document.querySelector("#side-menu");
const links = document.querySelectorAll(".links");
const btn = document.querySelector(".btn");
const backButton = document.querySelector("#back");
const sections = document.querySelectorAll("section");

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
        menuBtnPress();
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
        menuBtnPress();
        section.classList.add("display-none");
        container.classList.add("display-none");
        containerBg.classList.add("display-none");
        main.classList.remove("darken");
    })
}

// Todo:
// 1. Clean up the code - ongoing
// 2. Hide menu when container shows (Update: menu disappears every two times only)
// 3. Write markup for portraits sections - DONE
// 4. Make links from menu link to correct section - DONE
// 5. Make a scroll bar - for later
// 6. Make logo and motto disappear when sections appear
// 7. Optimize new images from portraits

