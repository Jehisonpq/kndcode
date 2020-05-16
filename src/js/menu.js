const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("list-menu");
const scroll = document.getElementById("scroll");

function menuHamburger() {
  if (screen.width > 992) {
    menu.classList.add("active");
    hamburger.classList.add("is-active");
  }

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("active");

    if (screen.width < 992) {
      scroll.classList.toggle("no-visible");
    }
  });
}

function menuMobileHidde() {
  const links = document.querySelectorAll(
    "nav .list-menu ul.primary-menu li a"
  );
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      menu.classList.remove("active");
      hamburger.classList.remove("is-active");
      scroll.classList.remove("no-visible");
    });
  }
}

export { menuHamburger, menuMobileHidde };
