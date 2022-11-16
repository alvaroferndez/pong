class Jugador{

      constructor(x,y,numero_jug) {
            this.numero_jug = numero_jug;
            this.jugador_html = undefined;
            this.height = 50;
            this.width = 10;
            this.x = x;
            this.y = y;
            this.rx = 5;
            this.ry = 5;
            this.direccion = 1;
            this.puntuacion = 0;
            this.fill = "black";
            this.svg = "http://www.w3.org/2000/svg";
            this.span = this.obtenerMarcador();
      }

      actualizarPosicion(){
            this.jugador_html.setAttributeNS(null,"y",this.y);
      }

      crearElemento(){
            let svg = document.getElementsByTagName("svg")[0];

            let nuevo_jugador = document.createElementNS(this.svg, "rect");

            //creamos los atributos al jugador
            nuevo_jugador.setAttributeNS(null, "x", this.x);
            nuevo_jugador.setAttributeNS(null, "y", this.y);
            nuevo_jugador.setAttributeNS(null, "rx", this.rx);
            nuevo_jugador.setAttributeNS(null, "ry", this.ry);
            nuevo_jugador.setAttributeNS(null, "height", this.height);
            nuevo_jugador.setAttributeNS(null, "width", this.width);
            nuevo_jugador.setAttributeNS(null, "fill", this.fill);

            svg.appendChild(nuevo_jugador);
            let jugador = document.getElementsByTagName("rect")[this.numero_jug-1];
            this.setJugador(jugador);
      }

      movimientoBarra(){
            document.addEventListener("keydown", (e) => {
                  if(this.numero_jug==1){
                        if(e.key == "w"){
                              this.y += -10;
                              this.actualizarPosicion();
                        }else if(e.key == "s"){
                              this.y += 10;
                              this.actualizarPosicion();
                        }
                  }else if(this.numero_jug==2){
                        if(e.key == "ArrowUp"){
                              this.y += -10;
                              this.actualizarPosicion();
                        }else if(e.key == "ArrowDown"){
                              this.y += 10;
                              this.actualizarPosicion();
                        }     
                  }
            })
      }

      setJugador(jugador){
            this.jugador_html = jugador;
      }

      obtenerMarcador(){
            if(this.numero_jug == 1){
                  var span = document.getElementsByTagName("span")[this.numero_jug-1]
            }else if(this.numero_jug == 2){
                  var span = document.getElementsByTagName("span")[this.numero_jug];
            }
            return span;
      }
      
      sumarJugador(){
            this.puntuacion++;
            if(this.numero_jug == 1){
                  sessionStorage.jugador1 = JSON.stringify(this.puntuacion);
            }else if(this.numero_jug == 2){
                  sessionStorage.jugador2 = JSON.stringify(this.puntuacion);
            }
            this.span.innerHTML = this.puntuacion;
      }

      cargarPuntuacion(){
            if(sessionStorage.jugador1 && sessionStorage.jugador2){
                  if(this.numero_jug == 1){
                        this.span.innerHTML = JSON.parse(sessionStorage.jugador1);
                        this.puntuacion = JSON.parse(sessionStorage.jugador1);
                  }else if(this.numero_jug == 2){
                        this.span.innerHTML = JSON.parse(sessionStorage.jugador2);
                        this.puntuacion = JSON.parse(sessionStorage.jugador2);
                  }
            }else{
                  sessionStorage.jugador1 = JSON.stringify(0);
                  sessionStorage.jugador2 = JSON.stringify(0);
            }     
      }

      reiniciarJugador(){
            this.y = 125;
            this.actualizarPosicion();
      }

      setX(x){
            this.x = x;
      }

      setY(y){
            this.y = y;
      }

      getX(){
            return this.x;
      }

      getY(){
            return this.y;
      }
}

export{Jugador};