import gsap from "gsap";

const init = () => {
  var load = gsap.timeline({
    onComplete: animation,
  });

  load
    .to("#load", { duration: 1, opacity: 0, ease: "expo" }, 0)
    .to("#lado1", { duration: 1, x: "-100%", ease: "expo" }, 0.2)
    .to("#lado2", { duration: 1, x: "100%", ease: "expo" }, 0.2);
};

const animation = () => {
  var intro = gsap.timeline();

  intro
    .to(".loader", { duration: 1, y: "-100%" }, 0)
    .to("video", { duration: 1, opacity: 0.6 }, 0)

    //Copy
    .fromTo(
      ".copy1 h1",
      { opacity: 0, x: 100 },
      { ease: "back", duration: 1, opacity: 1, x: 0 }
    )
    .fromTo(
      ".copy2 p",
      { opacity: 0, x: -100 },
      { ease: "back", duration: 1, opacity: 1, x: 0 },
      0.5
    )

    .fromTo(
      "#logo",
      { opacity: 0, x: -50 },
      { ease: "back", duration: 1.5, opacity: 1, x: 0 },
      1
    )
    .fromTo(
      "#menu",
      { opacity: 0, x: 50 },
      { ease: "back", duration: 1.5, opacity: 1, x: 0 },
      1.2
    )
    .fromTo(
      ".social-media",
      { opacity: 0, x: -50 },
      { ease: "back", duration: 1.5, opacity: 1, x: 0 },
      1.4
    )
    .fromTo(
      ".lang",
      { opacity: 0, x: 50 },
      { ease: "back", duration: 1, opacity: 1.5, x: 0 },
      1.6
    )
    .fromTo(".scroll", { opacity: 0 }, { ease: "back.inOut", opacity: 1 }, 2.8);

  gsap.to(".scroll", { bottom: 40, duration: 1, yoyo: true, repeat: -1 });
  gsap.to(".btn-more", { scale: 0.6, duration: 0.8, yoyo: true, repeat: -1 });
};

export default init;
