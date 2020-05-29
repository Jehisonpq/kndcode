import "../scss/main.scss";

import { menuHamburger, menuMobileHidde, menuScroll } from "./menu";
import init from "./intro";
import { animationElementsScroll, changeHrefScroll } from "./scroll";
import { changeImage } from "./sliderVertical";
import { allSliders, sliderMobile } from "./slider";

window.onload = function () {
  init();

  menuHamburger();
  menuMobileHidde();
  menuScroll();

  changeHrefScroll();
  animationElementsScroll();

  if (this.document.getElementById("scroll")) {
    const seccionesHome = document.getElementsByClassName("section-home-int");
    const seccionesImages = document.getElementsByClassName("section-images");

    for (let i = 0; i < seccionesHome.length; i++) {
      let seccion = seccionesHome[i];
      let imagen = seccionesImages[i];

      let idSeccion = `#${seccion.getAttribute("id")}`;
      let idSeccionImagen = `#${imagen.getAttribute("id")}`;

      changeImage(idSeccion, idSeccionImagen);
    }

    changeImage("#section1");
  }

  const modales = document.querySelectorAll("[data-toggle='modal']");

  for (let i = 0; i < modales.length; i++) {
    let modal = modales[i];
    modal.addEventListener("click", function () {
      let contenido = this.nextSibling.nextElementSibling.innerHTML;
      let modalContainer = document.querySelector(".modal-body");

      modalContainer.innerHTML = contenido;
    });
  }

  sliderMobile();
  allSliders();

  if (screen.width > 992) {
    jQuery('[data-toggle="tooltip"]').tooltip();
  }

  /*Modulo Carusel Interna*/
  jQuery(".module-carousel ul").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  if (this.document.querySelector(".no-front")) {
    $("[data-fancybox]").fancybox();
  }

  window.scrollTo(0, 0);
};
