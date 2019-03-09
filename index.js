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