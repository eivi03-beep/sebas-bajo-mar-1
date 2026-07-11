const boton = document.getElementById("entrar");

const olas = document.getElementById("sonidoOlas");
const musica = document.getElementById("musica");


boton.addEventListener("click", function(){

    olas.volume = 0.4;
    musica.volume = 0.3;

    olas.play();
    musica.play();

    document.querySelector(".bienvenida").scrollIntoView({
        behavior:"smooth"
    });

});
