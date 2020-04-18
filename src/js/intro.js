import gsap from "gsap";

let tl = gsap.timeline({
    repeat: -1,
    defaults: { duration: .3 }
});

const loader = () => {
    
    let rect = n => '.rect:nth-child(' + (n || 1) + ')';
    
    tl.fromTo(
        '.wrapper',
        {
            fontSize: '1em'
        },
        {
            fontSize: '3em',
            duration: .5 + 4 * .3 + 1.3,
            ease: 'expoScale(1, 3)'
        }
    ).fromTo(
        rect(1),
        { left: '6em' },
        { left: 0, duration: .5 },
        '<'
    ).fromTo(
        rect(2),
        { top: '6em' },
        { top: 0, duration: .5 },
        '<'
    ).fromTo(
        rect(3),
        { right: '6em' },
        { right: 0, duration: .5 },
        '<'
    ).fromTo(
        rect(4),
        { bottom: '6em' },
        { bottom: 0, duration: .5 },
        '<'
    ).fromTo(
        rect(1),
        {
            bottom: '100%',
            width: '100%'
        },
        {
            bottom: 0,
            width: '66.666%'
        },
        '>'
    ).fromTo(
        rect(2),
        {
            left: '100%',
            height: '100%'
        },
        {
            left: 0,
            height: '66.666%'
        },
        '>'
    ).fromTo(
        rect(3),
        {
            top: '100%',
            width: '100%'
        },
        {
            top: 0,
            width: '66.666%'
        },
        '>'
    ).fromTo(
        rect(4),
        {
            right: '100%',
            height: '100%'
        },
        {
            right: 0,
            height: '66.666%'
        },
        '>'
    ).fromTo(
        rect(5),
        {
            left: '0em',
            top: '0em',
            width: '0.75em',
            height: '0.75em',
            rotate: 0
        },
        {
            left: '0.25em',
            top: '0.25em',
            width: '0.25em',
            height: '0.25em',
            rotate: '180deg',
            duration: 1,
            delay: .3
        },
        '>'
    );
    
    tl.timeScale(1.5);
}

const deleteLoader = () => {
	tl.pause();
}

const initIntro = () => {

    var intro = gsap.timeline({
        onComplete: deleteLoader
    });
    
    intro.delay(2)
    
    intro.to(".wrapper", {duration: 0.4, scale: 0}, 0);
    intro.to("#lado1", {duration: 0.5, y: "-100%"}, 0);
    intro.to("#lado2", {duration: 0.6, y: "100%"}, 0);
    intro.to(".loader", {duration: 0.1, x: "-100%"}, 1);
    intro.fromTo(".section1", {opacity: 0, scale: 2},  {ease: "expo", duration: 2, scale:1, opacity: 1}, 0);
    intro.fromTo(".fondo", {opacity: 0},  {duration: 1, opacity: 0.7}, 0);
    intro.fromTo(".cube1 .container-img-cube", {opacity: 0, scale: 3, rotation:45, blur:10},  {ease: "back", duration: 1, opacity: 1, scale: 1, rotation:0, blur:4}, 0.5);
    intro.fromTo(".cube2 .container-img-cube", {opacity: 0, scale: 2, rotation:90},  {ease: "back", duration: 1, opacity: 1, scale: 1, rotation:0}, 0.6);
    intro.fromTo(".cube3 .container-img-cube", {opacity: 0, scale: 4, rotation:-45},  {ease: "back", duration: 1, opacity: 1, scale: 1, rotation:0}, 0.7);
    intro.fromTo(".cube4 .container-img-cube", {opacity: 0, scale: 5, rotation:-90},  {ease: "back", duration: 1, opacity: 1, scale: 1, rotation:0}, 0.4);

    gsap.fromTo(".cube1 img", {scale: 1, rotation: 0}, {duration: 3, scale: 0.8, rotation: 20, yoyo: true, repeat: -1});
    gsap.fromTo(".cube2 img", {scale: 1, rotation: 0}, {duration: 3, scale: 0.9, rotation: 10, yoyo: true, repeat: -1});
    gsap.fromTo(".cube3 img", {scale: 1, rotation: 0}, {duration: 3, scale: 0.8, rotation: 20, yoyo: true, repeat: -1});
    gsap.fromTo(".cube4 img", {scale: 1, rotation: 0}, {duration: 3, scale: 0.9, rotation: 10, yoyo: true, repeat: -1});
}

export {loader, initIntro}