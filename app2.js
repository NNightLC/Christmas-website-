$(document).ready(function(){
    $('.image-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplayspeed: 1000, 
    prevArrow:
    `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left"></i></button>"`,

    nextArrow:
    `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right"></i></button>`,

});

});
$(document).ready(function(){
    $('.image-slider2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplayspeed: 1000, 

});

});

