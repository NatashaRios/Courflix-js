// Carrousel con slick
const settings = {
  infinite: false,
  arrows: true,
  variableWidth: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: "unslick"
    }
  ]
};

const carrousel = $('.capitulosTemporada');
$(document).ready(function(){
  carrousel.slick(settings);
})
$(window).on("resize", function (){
  if($(window).width() > 480 && !carrousel.hasClass("slick-initalized")) {
    carrousel.slick(settings);
  }
});
