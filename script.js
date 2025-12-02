/*ESTA PEQUEÑA CLASE ME ARA QUE SEA RESPONSIVE LA BARRA DE NAVEGACION*/ 


document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById("nav");
    const navResponsive = document.querySelector(".nav-responsive");

    navResponsive.addEventListener("click", function() {
        nav.classList.toggle("responsive");
    });
});



let menuvisible = false;
// funcion ocultar menu
function mostrarOcultarmenu(){
    if(menuvisible){
        document.getElementById("nav").classList ="";
        menuvisible = false;
    }else{
        document.getElementById("nav").classList ="responsive"
        menuvisible = true;
    }
}
function seleccionar(){
    //esta funcion es para ocultar el menu una vez que se seleciona
    document.getElementById("nav").classList ="";
    menuvisible = false;
}

//funcion que aplica la animacion de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills>=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("csharp");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoenequipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("liderazgo");
        habilidades[9].classList.add("resoluciondeproblemas");

    }
}
//detectar el scroling para aplicar la animacion de la barra
window.onscroll = function(){
    efectoHabilidades();
}