import "../scss/main.scss";

import { menuHamburger, menuMobileHidde } from "./menu";
import init from "./intro";
import { allScroll, menuScroll, changeImage } from "./scroll";
import { allSliders, sliderMobile } from "./slider";

window.onload = function () {
  init();

  menuHamburger();
  menuMobileHidde();
  allScroll();
  menuScroll();

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

  const modales = document.querySelectorAll("[data-toggle='modal']");

  for (let i = 0; i < modales.length; i++) {
    let modal = modales[i];
    modal.addEventListener("click", function () {
      console.log("abrio modal");
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
};
