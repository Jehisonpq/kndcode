export default function menuHamburger() {

    var hamburger = document.querySelector(".hamburger");
    var menu = document.getElementById("list-menu");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("is-active");
        menu.classList.toggle("active");
    });
}