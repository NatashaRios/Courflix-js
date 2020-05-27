const menuOn = document.querySelector(".js-menuOn");
const listaNav = document.querySelector(".js-listaNav");

menuOn.onclick = function (event) {
    if(listaNav.style.display == "none") {
    listaNav.style.display = "block";
    }else {
        listaNav.style.display = "none"
    }
}

