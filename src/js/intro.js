import gsap from "gsap";

const onLoad = () => {
    setTimeout(function(){
      outLoad();
    }, 5000);
}

const outLoad = () => {
  var load = gsap.timeline({
    onComplete: initIntro 
  });

  load.to("#load", {duration: 1, opacity: 0, ease: "expo"}, 0)
       .to("#lado1", {duration: 1, x: "-100%", ease: "expo"}, 0.2)
       .to("#lado2", {duration: 1, x: "100%", ease: "expo"}, 0.2)
       
}

const initIntro = () => {

    var intro = gsap.timeline({
      onComplete: points
    });
    
    intro
        .fromTo(".fondo-container", {opacity: 0, scale: 4}, {ease: "expo", duration: 2, scale:1, opacity: 0.8}, 0)
        .fromTo(".continer-section1", {opacity: 0, scale: 2},  {ease: "expo", duration: 2, scale:1, opacity: 1}, 0)
        .fromTo(".fondo", {opacity: 0},  {duration: 1, opacity: 0.7}, 0)
        .to(".loader", {duration: 1, y: "-100%"}, 0)

         //Cubos
         .fromTo(".cube1 .container-img-cube", {opacity: 0, scale: 3, rotation:45, blur:10},  {ease: "power4", duration: 1, opacity: 1, scale: 1, rotation:0, blur:4}, 0.5)

         .fromTo(".cube2 .container-img-cube", {opacity: 0, scale: 2, rotation:90},  {ease: "power4", duration: 1, opacity: 1, scale: 1, rotation:0}, 0.6)

         .fromTo(".cube3 .container-img-cube", {opacity: 0, scale: 4, rotation:-45},  {ease: "power4", duration: 1, opacity: 1, scale: 1, rotation:0}, 0.7)

         .fromTo(".cube4 .container-img-cube", {opacity: 0, scale: 5, rotation:-90},  {ease: "power4", duration: 1, opacity: 1, scale: 1, rotation:0}, 0.4)

         .fromTo(".cube5 .container-img-cube", {opacity: 0, scale: 3, rotation:-30},  {ease: "power4", duration: 1, opacity: 1, scale: 1, rotation:0}, 0.6)

         .fromTo(".cube6 .container-img-cube", {opacity: 0, scale: 4, rotation:-60},  {ease: "power4", duration: 1, opacity: 1, scale: 1, rotation:0}, 0.4)

         .fromTo(".cube7 .container-img-cube", {opacity: 0, scale: 2, rotation:40},  {ease: "power4", duration: 1, opacity: 1, scale: 1, rotation:0}, 0.7)

         .fromTo(".cube8 .container-img-cube", {opacity: 0, scale: 5, rotation:-40},  {ease: "power4", duration: 1, opacity: 1, scale: 1, rotation:0}, 0.3)
         
         //Copy
         .fromTo(".copy1 h1", {opacity: 0, x: 100},  {ease: "back", duration: 1, opacity: 1, x:0}, 1)
         .fromTo(".copy2 h3", {opacity: 0, x: -100},  {ease: "back", duration: 1, opacity: 1, x:0}, 1.5)

         .fromTo("#logo", {opacity: 0, x: -50},  {ease: "back", duration: 1.5, opacity: 1, x:0}, 2)
         .fromTo("#menu", {opacity: 0, x: 50},  {ease: "back", duration: 1.5, opacity: 1, x:0}, 2.2)
         .fromTo(".social-media", {opacity: 0, x: -50},  {ease: "back", duration: 1.5, opacity: 1, x:0}, 2.4)
         .fromTo(".lang", {opacity: 0, x: 50},  {ease: "back", duration: 1, opacity: 1.5, x:0}, 2.6)
         .fromTo(".scroll", {opacity: 0},  {ease: "back.inOut", opacity: 1}, 2.8)
         

    //Movimientos propios cuboes
    gsap.fromTo(".cube1 img", {scale: 1, rotation: 0}, {duration: 3, scale: 0.7, rotation: -30, yoyo: true, repeat: -1});
    gsap.fromTo(".cube2 img", {scale: 1, rotation: 0}, {duration: 3, scale: 0.8, rotation: -20, yoyo: true, repeat: -1});
    gsap.fromTo(".cube3 img", {scale: 1, rotation: 0}, {duration: 4, scale: 0.7, rotation: 30, yoyo: true, repeat: -1});
    gsap.fromTo(".cube4 img", {scale: 1, rotation: 0}, {duration: 4, scale: 0.8, rotation: 20, yoyo: true, repeat: -1});
    gsap.fromTo(".cube5 img", {scale: 1, rotation: 0}, {duration: 3, scale: 0.6, rotation: -10, yoyo: true, repeat: -1});
    gsap.fromTo(".cube6 img", {scale: 1, rotation: 0}, {duration: 3, scale: 0.8, rotation: -20, yoyo: true, repeat: -1});
    gsap.fromTo(".cube7 img", {scale: 1, rotation: 0}, {duration: 4, scale: 0.6, rotation: 30, yoyo: true, repeat: -1});
    gsap.fromTo(".cube8 img", {scale: 1, rotation: 0}, {duration: 3, scale: 0.7, rotation: -10, yoyo: true, repeat: -1});
    gsap.fromTo(".fondo", {opacity: 0.4},  {opacity: 0.7, duration: 2, yoyo: true, repeat: -1});
    gsap.to(".scroll", {bottom: 40, duration: 1, yoyo: true, repeat: -1});

    gsap.fromTo(".pointOut", {scale: 0.2},  {scale: 1.2, duration: 1.8, yoyo: true, repeat: -1});
    gsap.fromTo(".pointIn", {scale: 0.5},  {scale: 1, duration: 1.3, yoyo: true, repeat: -1});

    gsap.to(".btn-more", {scale: 0.6, duration: 0.8, yoyo: true, repeat: -1});
}

const points = () => {
  gsap.fromTo(".container-point", {
    scale: 4, 
    opacity: 0
  }, {
    duration: 1, 
    opacity: 1, 
    scale: 1, 
    stagger: 0.1,
    ease: "back.out"
  });
}

export default onLoad