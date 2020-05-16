import ScrollReveal from "scrollreveal";

const allScroll = () => {
  ScrollReveal().reveal(".section-left .subtitle", { delay: 100 });
  ScrollReveal().reveal(".section-left .title", { delay: 200 });
  ScrollReveal().reveal(".section-left .text", { delay: 300 });
  ScrollReveal().reveal(".section-left .btn", { delay: 300 });
  ScrollReveal().reveal(".section-left .title-section", {
    reset: true,
    mobile: false,
  });

  ScrollReveal().reveal(".section3 .subtitle", { delay: 100 });
  ScrollReveal().reveal(".section3 .title", { delay: 200 });
  ScrollReveal().reveal(".section3 p", { delay: 300 });
};

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

const changeImage = (id1, id2) => {
  const secciones = document.getElementsByClassName("section-home");

  jQuery(window).scroll(function () {
    let top_of_element = jQuery(id1).offset().top;
    let top_element = top_of_element + 300;
    let bottom_of_element =
      jQuery(id1).offset().top + jQuery(id1).outerHeight();
    let bottom_of_screen = jQuery(window).scrollTop() + jQuery(window).height();
    let top_of_screen = jQuery(window).scrollTop();

    if (bottom_of_screen > top_element && top_of_screen < bottom_of_element) {
      if (id2) {
        jQuery(id1).find(".container-title").css({ top: "25%" });
        jQuery(id2).addClass("visible");
      }

      for (const seccion in secciones) {
        if (secciones[seccion].id === id1.split("#")[1]) {
          document
            .getElementById("scroll-link")
            .setAttribute("href", "#" + secciones[parseInt(seccion) + 1].id);
        }
      }
    } else {
      if (id2) {
        jQuery(id1).find(".container-title").css({ top: "70%" });
        jQuery(id2).removeClass("visible");
      }
    }

    if (
      jQuery(window).scrollTop() >=
      jQuery(".container-app").innerHeight() -
        jQuery("#section3").outerHeight() -
        400
    ) {
      document.getElementById("scroll").style.display = "none";
    } else {
      document.getElementById("scroll").style.display = "block";
    }
  });
};

export { allScroll, menuScroll, changeImage };
