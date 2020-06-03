const menuOn = document.querySelector(".js-menuOn");
const listaNav = document.querySelector(".js-listaNav");

//Al clickear el menu hamburguesa se abre el menu y si esta abierto se cierra
menuOn.onclick = function(e) {
  e.stopPropagation();
  toggleMenu ();
};
listaNav.onclick = function (e) {
  e.stopPropagation();
}
document.body.onclick = function () {
  listaNav.classList.remove("open");
}
function toggleMenu () {
  listaNav.classList.toggle("open");
}




//El carrousel con slick
 $(document).ready(function(){
    $('.series').slick({
      infinite: true,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 3,
    
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
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
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
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
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        })   
    });
