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
  invert: true,
  range: 400,
  elms: [
    { el: $('#warpbg'), rate: 0.1 },
    { el: $('#star1'), rate: 0.2 },
    { el: $('#star2'), rate: 0.2 },
    { el: $('#star3'), rate: 0.2 },
    { el: $('#star4'), rate: 0.2 },
    { el: $('#star5'), rate: 0.2 },
    { el: $('#planet'), rate: 0.3 },
    { el: $('#robot'), rate: 0.4 },
    { el: $('#astronaut'), rate: 0.48 },
    { el: $('#asteroid'), rate: 0.7 }
  ]
});