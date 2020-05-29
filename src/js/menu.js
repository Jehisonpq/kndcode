function menuHamburger() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.getElementById("list-menu");
  const scroll = document.getElementById("scroll");
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
  const hamburger = document.querySelector(".hamburger");
  const menu = document.getElementById("list-menu");
  const scroll = document.getElementById("scroll");
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

const menuScroll = () => {
  document.addEventListener("scroll", function () {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;

    const hamburger = document.querySelector(".hamburger");
    const menu = document.getElementById("list-menu");

    if (screen.width > 992) {
      if (scroll > 100) {
        hamburger.classList.remove("is-active");
        menu.classList.remove("active");
      } else {
        hamburger.classList.add("is-active");
        menu.classList.add("active");
      }
    }

    if (scroll > 100) {
      document.querySelector(".container-1-logo").classList.add("small");
    } else {
      document.querySelector(".container-1-logo").classList.remove("small");
    }
  });
};

export { menuHamburger, menuMobileHidde, menuScroll };
