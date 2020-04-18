import 'bootstrap';
import '../scss/main.scss';

import parallax from './parallax';
import menuHamburger from './menu';
import {loader, initIntro} from './intro';


menuHamburger();
parallax();
loader();
initIntro();
