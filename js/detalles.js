 $(document).ready(function(){
    $('.capitulosTemporada').slick({
      infinite: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 3,

      responsive: [
        {
          breakpoint: 768,
          settings: "unslick"
        }
      ]
    })   
    });
  

/* $slick_slider = $('.capitulosTemporada');
  settings = {
    // some settings
    infinite: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3
  }
  $slick_slider.slick(settings);

  // reslick only if it's not slick()
  $(window).on('resize', function() {
    if ($(window).width() < 768) {
      if ($slick_slider.hasClass('slick-initialized')) {
        $slick_slider.slick('unslick');
      }
      return
    }

    if (!$slick_slider.hasClass('slick-initialized')) {
      return $slick_slider.slick(settings);
    }
  }); */

 /*  function slickCarrousel() {
    $(".capitulosTemporada").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      variableWidth: true,
      accesibility: true,
      arrows: true,
      responsive: [
      {
        breakpoint: 600,
        settings: "unslick"
      },
     ]
    })
  };
  
  slickCarrousel()
  
  $(window).resize(function(){
    if ($(window).width() > 768) {
        slickCarrousel();
    }
  });  */