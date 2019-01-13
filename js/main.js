var swiper = new Swiper('.swiper-container', {
    duration: 2000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
    },
});
  
$(window).parallaxmouse({
  invert: false,
  range: 200,
  elms: [
    { el: $('#warpbg'), rate: 0.5 },
    { el: $('#star1'), rate: 0.2 },
    { el: $('#star2'), rate: 0.2 },
    { el: $('#star3'), rate: 0.2 },
    { el: $('#star4'), rate: 0.2 },
    { el: $('#star5'), rate: 0.2 },
    { el: $('#star6'), rate: 0.2 },
    { el: $('#planet'), rate: 0.2 },
    { el: $('#robot'), rate: 0.2 },
    { el: $('#astronaut'), rate: 0.2 },
    { el: $('#asteroid'), rate: 0.2 }
  ]
});