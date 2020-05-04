export default function menuHamburger() {

    const hamburger = document.querySelector(".hamburger");
    const menu = document.getElementById("list-menu");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("is-active");
        menu.classList.toggle("active");
    });
}