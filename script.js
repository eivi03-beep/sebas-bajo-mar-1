/* ==========================
   ENTRAR A LA FIESTA
========================== */

function entrarFiesta(){

    const musica = document.getElementById("musica");
    const olas = document.getElementById("olas");

    if(musica){

        musica.play();

    }

    if(olas){

        olas.play();

    }


    document.querySelector(".invitacion")
    .scrollIntoView({

        behavior:"smooth"

    });

}



/* ==========================
   CUENTA REGRESIVA
========================== */


const fechaFiesta = new Date("August 25, 2026 15:00:00").getTime();



const contador = setInterval(function(){


    const ahora = new Date().getTime();


    const distancia = fechaFiesta - ahora;



    const dias = Math.floor(
        distancia / (1000 * 60 * 60 * 24)
    );


    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const segundos = Math.floor(
        (distancia % (1000 * 60)) /
        1000
    );



    document.getElementById("dias").innerHTML = dias;

    document.getElementById("horas").innerHTML = horas;

    document.getElementById("minutos").innerHTML = minutos;

    document.getElementById("segundos").innerHTML = segundos;



},1000);

/* ==========================
   MÚSICA AUTOMÁTICA AL TOCAR
========================== */


document.addEventListener("click", function(){

    const musica = document.getElementById("musica");
    const olas = document.getElementById("olas");


    if(musica && musica.paused){

        musica.play();

    }


    if(olas && olas.paused){

        olas.play();

    }


},{once:true});



/* ==========================
   SI TERMINA EL CONTADOR
========================== */


if(fechaFiesta < new Date().getTime()){


    document.getElementById("dias").innerHTML = "0";

    document.getElementById("horas").innerHTML = "0";

    document.getElementById("minutos").innerHTML = "0";

    document.getElementById("segundos").innerHTML = "0";


}
