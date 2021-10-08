const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".menu ul");

navToggle.addEventListener("click", () => {

    let valor= navToggle.attributes["aria-label"].value;

    if(valor==="Abrir menú"){
        navMenu.style.display="block";
        navToggle.setAttribute("aria-label", "Cerrar menú");
 
    }else{
        navMenu.style.display="none";
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});