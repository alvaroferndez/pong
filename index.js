import {Bola} from "./bola.js";
import {Jugador} from "./jugador.js";

function iniciar(){
      //bola
      let bola = new Bola();
      bola.crearElemento();

      //barras
      let jugador1 = new Jugador(10,125,1);
      let jugador2 = new Jugador(980,125,2);
      jugador1.crearElemento();
      jugador2.crearElemento();

      //cargamos la puntuacion de cada jugador
      jugador1.cargarPuntuacion();
      jugador2.cargarPuntuacion();
      
      //añadimos el movimiento a las barras
      jugador1.movimientoBarra();
      jugador2.movimientoBarra();

      //añadimos el movimiento a la bola
      function callbackDibujarBola(){
            bola.dibujarBola(jugador1,jugador2)
      }
      setInterval(callbackDibujarBola, 10);
}





window.addEventListener("load", () => {
      var botones = document.getElementsByTagName("button");
      botones[0].addEventListener("click", iniciar);
      botones[1].addEventListener("click", () => {
            sessionStorage.clear();
            location.reload();
      })
})