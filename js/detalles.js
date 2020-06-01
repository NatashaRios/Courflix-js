
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
  

