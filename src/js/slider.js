const allSliders = () => {
  jQuery(".slider").slick({
    arrows: true,
    pauseOnHover: true,
    speed: 400,
    infinite: true,
  });
};

const sliderMobile = () => {
  if (screen.width < 992) {
    const images = document.querySelectorAll(".section-left .section-home");
    for (var i = 0; i < images.length; i++) {
      images[i].appendChild(
        document.querySelector(
          ".section-right div[id-data=" + images[i].getAttribute("id") + "]"
        )
      );
    }
  }
};

export { allSliders, sliderMobile };
