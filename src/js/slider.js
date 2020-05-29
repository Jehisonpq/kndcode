const allSliders = () => {
  jQuery(".slider").slick({
    arrows: true,
    pauseOnHover: true,
    speed: 400,
    infinite: true,
  });
};

const sliderMobile = () => {
  const images = document.querySelectorAll(".section-left .section-home");
  for (var i = 0; i < images.length; i++) {
    let original = document.querySelector(
      ".section-right div[id-data=" + images[i].getAttribute("id") + "]"
    );
    let nuevo = original.cloneNode(true);
    nuevo.setAttribute("id", nuevo.getAttribute("id") + 1);

    images[i].appendChild(nuevo);
  }
};

export { allSliders, sliderMobile };
