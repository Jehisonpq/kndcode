import "../scss/main.scss";

import { maxWidth } from "./variables";
import { menuHamburger, menuMobileHidde, menuScroll } from "./menu";
import animation from "./intro";
import { animationElementsScroll, changeHrefScroll, scrollTop } from "./scroll";
import { sliderVertical, imageVisibleFromHashtag } from "./sliderVertical";
import { allSliders, sliderMobile } from "./slider";

window.onload = function () {
  animation();

  menuHamburger();
  menuMobileHidde();
  menuScroll();
  scrollTop();

  changeHrefScroll();
  animationElementsScroll();

  sliderVertical();
  imageVisibleFromHashtag();

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

  if (screen.width > maxWidth) {
    jQuery('[data-toggle="tooltip"]').tooltip();
  }

  /*Modulo Carusel Interna*/
  jQuery(".module-carousel ul").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    responsive: [
      {
        breakpoint: maxWidth,
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
};
