const hash = location.hash;
const secciones = document.getElementsByClassName("section-home");

const imageVisibleFromHashtag = () => {
  if (hash) {
    const sectionsImages = document.querySelectorAll(
      ".section-right .section-images"
    );

    for (let i = 0; i < sectionsImages.length; i++) {
      let image = sectionsImages[i];
      let idImage = "#" + image.getAttribute("id-data");

      if (idImage == hash) {
        jQuery(image).addClass("visible");
        searchNextHref(hash);
      }
    }
  }
};

const sliderVertical = () => {
  if (document.querySelector(".path-frontpage")) {
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
};

const changeImage = (id1, id2) => {
  const idFirstSeccion =
    "#" + document.querySelector(".section-images").getAttribute("id");

  jQuery(window).scroll(function () {
    let top_of_element = jQuery(id1).offset().top;
    let top_element = top_of_element + 300;
    let bottom_of_element =
      jQuery(id1).offset().top + jQuery(id1).outerHeight();
    let bottom_of_screen = jQuery(window).scrollTop() + jQuery(window).height();
    let top_of_screen = jQuery(window).scrollTop();

    if (bottom_of_screen > top_element && top_of_screen < bottom_of_element) {
      if (id2) {
        jQuery(id2).addClass("visible");
      }

      searchNextHref(id1);
    } else {
      if (id2) {
        if (id2 != idFirstSeccion) {
          jQuery(id2).removeClass("visible");
        }
      }
    }

    if (
      jQuery(window).scrollTop() >=
      jQuery(".container-app").innerHeight() -
        jQuery("#section3").outerHeight() -
        400
    ) {
      document.getElementById("scroll").style.display = "none";
      document.querySelector(".scroll-top").classList.add("visible");
    } else {
      document.getElementById("scroll").style.display = "block";
      document.querySelector(".scroll-top").classList.remove("visible");
    }
  });
};

const searchNextHref = (id1) => {
  for (const seccion in secciones) {
    if (secciones[seccion].id === id1.split("#")[1]) {
      const idNextSection = "#" + secciones[parseInt(seccion) + 1].id;
      setHrefBtnScroll(idNextSection);
    }
  }
};

const setHrefBtnScroll = (idNextSection) => {
  const btnScroll = document.getElementById("scroll-link");
  btnScroll.setAttribute("href", idNextSection);
};

export { sliderVertical, imageVisibleFromHashtag };
