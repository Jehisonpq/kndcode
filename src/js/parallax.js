const Parallax = require('parallax-js')

export default function parallax() {
    var scene = document.getElementById('parallax');

    var parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        hoverOnly: true,
        pointerEvents: true,
        selector: '.layer'
    });

    parallaxInstance.friction();
}