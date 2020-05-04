import 'bootstrap';
import '../scss/main.scss';
var $ = require( "jquery" );

import parallax from './parallax';
import menuHamburger from './menu';
import onLoad from './intro';
import {allScroll, menuScroll, changeImage} from './scroll';
import allSliders from './slider'

onLoad();
menuHamburger();
parallax();
allScroll();
menuScroll();

changeImage('#section-about', '#section-images-about');
changeImage('#section-techno', '#section-images-techno');
changeImage('#section-services', '#section-images-services');
changeImage('#section-cases', '#section-images-cases');
changeImage('#section1');

allSliders();

$('[data-toggle="tooltip"]').tooltip()


