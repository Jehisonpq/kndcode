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
        jQuery(id2).addClass("visible");
      }

      for (const seccion in secciones) {
        if (secciones[seccion].id === id1.split("#")[1]) {
          const idNextSection = "#" + secciones[parseInt(seccion) + 1].id;
          setHrefBtnScroll(idNextSection);
        }
      }
    } else {
      if (id2) {
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

const setHrefBtnScroll = (idNextSection) => {
  const btnScroll = document.getElementById("scroll-link");
  btnScroll.setAttribute("href", idNextSection);
};

export { changeImage };
