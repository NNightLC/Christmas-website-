$(document).ready(function(){
    $('.image-slider').slick({
    slidesToShow: 3,
    infinite: false,
    arrows: true,
    infinite: true,
    autoplay: true, 
    prevArrow:
    `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left"></i></button>"`,

    nextArrow:
    `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right"></i></button>`,

});
});
