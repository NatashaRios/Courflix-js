const menuOn = document.querySelector(".js-menuOn");
const listaNav = document.querySelector(".js-listaNav");

menuOn.onclick = function (event) {
    if(listaNav.style.display == "none") {
    listaNav.style.display = "block";
    }else {
        listaNav.style.display = "none"
    }
}

 $(document).ready(function(){
    $('.series').slick({
      infinite: true,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 3,
    
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    })   

});

$(document).ready(function(){
    $('.seguirViendo').slick({
      infinite: true,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 3,
    
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    })   
});


    $(document).ready(function(){
        $('.agregadosRecientemente').slick({
          infinite: true,
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
        })   
    });
