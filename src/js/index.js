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

  /*changeImage("#section-about", "#section-images-about");
  changeImage("#section-techno", "#section-images-techno");
  changeImage("#section-services", "#section-images-services");
  changeImage("#section-cases", "#section-images-cases");
  changeImage("#section1");*/

  sliderMobile();
  allSliders();

  if (screen.width > 992) {
    jQuery('[data-toggle="tooltip"]').tooltip();
  }
};
