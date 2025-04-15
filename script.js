let samanta = window.document.getElementById("img3");
let img1 = window.document.getElementById("img1");
let btnE = window.document.getElementById("btnE")
let btnD = window.document.getElementById("btnD")

function esquerda() {

    samanta.style = "display:flex;"
    btnE.style = "display: flex;"
    img1.style = "display: none;"
    btnD.style = "display:none;"
}

function direita(){

    samanta.style = "display:none;"
    btnE.style = "display: none;"
    img1.style = "display: flex;"
    btnD.style = "display:flex;"
}