var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    controls: false,
    responsive: {
      769: {
        edgePadding: 20,
        gutter: 500,
        nav: true,
        items: 2,
      },
      320: {
        gutter: 500
      },
      900: {
        items: 1,
        nav: false
      }
    }
  });

document.querySelector('.prev').onclick = function () {    //На кнопку, с классом prev слайдер пойдет назад
  slider.goTo('prev');
};

document.querySelector('.next').onclick = function () {    //На кнопку, с классом prev слайдер пойдет назад
  slider.goTo('next');
};