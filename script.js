// ===============================
// INVITACIÓN SEBASTIÁN BAJO EL MAR
// Funciones: música, olas y cuenta regresiva
// ===============================


// 🎵 Música de entrada
window.addEventListener("load", () => {

    const musica = document.getElementById("musica");

    if (musica) {
        musica.volume = 0.5;

        musica.play().catch(() => {
            console.log("El navegador espera interacción del usuario para iniciar la música.");
        });
    }


    // 🌊 Sonido de olas
    const olas = document.getElementById("olas");

    if (olas) {
        olas.volume = 0.4;

        olas.play().catch(() => {
            console.log("El navegador espera interacción para iniciar las olas.");
        });
    }

});



// ⏳ Cuenta regresiva automática

const fechaEvento = new Date("August 25, 2026 15:00:00").getTime();


const contador = setInterval(() => {

    const ahora = new Date().getTime();

    const distancia = fechaEvento - ahora;


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



    if (distancia < 0) {

        clearInterval(contador);

        document.getElementById("contador").innerHTML =
        "🎉 ¡El gran día llegó!";

    }


}, 1000);

// ===============================
// BOTÓN ENTRAR A LA AVENTURA
// ===============================

const botonEntrar = document.getElementById("entrar");

if (botonEntrar) {

    botonEntrar.addEventListener("click", () => {

        const sonidoOlas = document.getElementById("sonidoOlas");
        const musica = document.getElementById("musica");

        if(sonidoOlas){
            sonidoOlas.play();
        }

        if(musica){
            musica.play();
        }

        document.querySelector(".contenido-marino")
        .scrollIntoView({
            behavior:"smooth"
        });

    });

}

// BOTON ENTRAR

document.addEventListener("DOMContentLoaded", function(){

    const boton = document.getElementById("entrar");

    if(boton){

        boton.onclick = function(){

            const destino = document.querySelector(".contenido-marino");

            if(destino){

                destino.scrollIntoView({
                    behavior:"smooth"
                });

            }

        };

    }

});
