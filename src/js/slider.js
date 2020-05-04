import 'slick-carousel';

var $ = require( "jquery" );

const allSliders = ()=> {
    $('.slider').slick({
        arrows: true,
        pauseOnHover:true,
        speed: 400,
        infinite:true
    });
    
}

export default allSliders;