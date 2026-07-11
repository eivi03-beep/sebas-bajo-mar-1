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
// CONTADOR REGRESIVO

const fechaEvento = new Date("August 25, 2026 15:00:00").getTime();

const contador = setInterval(function(){

    const ahora = new Date().getTime();

    const distancia = fechaEvento - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);


    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;


},1000);
