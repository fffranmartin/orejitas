window.addEventListener("scroll", function(){
    let header = document.getElementById("header");
    let animacion = document.getElementById("nosotros");
    let posicion = animacion.getBoundingClientRect().top;
    if(posicion <= 80){
        header.classList.add("abajo");
    }
    else{
        header.classList.remove("abajo");
    }
} 
)

