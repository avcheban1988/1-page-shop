$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 300,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img scr="../icons/chevron-left-solid.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img scr="../icons/chevron-right-solid.png"></button>'
    });
  });