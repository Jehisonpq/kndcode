import "../scss/main.scss";

import { menuHamburger, menuMobileHidde } from "./menu";
import init from "./intro";
import { allScroll, menuScroll, changeImage } from "./scroll";
import { allSliders, sliderMobile } from "./slider";

window.onload = function () {
  init();
};

menuHamburger();
menuMobileHidde();
allScroll();
menuScroll();

changeImage("#section-about", "#section-images-about");
changeImage("#section-techno", "#section-images-techno");
changeImage("#section-services", "#section-images-services");
changeImage("#section-cases", "#section-images-cases");
changeImage("#section1");

sliderMobile();
allSliders();

if (screen.width > 992) {
  jQuery('[data-toggle="tooltip"]').tooltip();
}
