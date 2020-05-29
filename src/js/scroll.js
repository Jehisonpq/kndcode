import ScrollReveal from "scrollreveal";

const changeHrefScroll = () => {
  const enlace = document
    .querySelector("#section2 .section-home")
    .getAttribute("id");

  const linkScroll = document.querySelector("#scroll a");

  linkScroll.setAttribute("href", "#" + enlace);
};

const animationElementsScroll = () => {
  ScrollReveal().reveal(".section-left .subtitle", { reset: true });
  ScrollReveal().reveal(".section-left .title", { reset: true });
  ScrollReveal().reveal(".section-left p", { reset: true });
  ScrollReveal().reveal(".section-left .btn", { reset: true });
  ScrollReveal().reveal(".section-left .title-section", {
    reset: true,
  });

  ScrollReveal().reveal(".section3 .subtitle", { reset: true });
  ScrollReveal().reveal(".section3 .title", { reset: true });
  ScrollReveal().reveal(".section3 p", { reset: true });
};

export { animationElementsScroll, changeHrefScroll };
