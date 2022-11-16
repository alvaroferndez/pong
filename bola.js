class Bola{
      
      constructor() {
            this.bola = undefined;
            this.cx = 500;
            this.cy = 150;
            this.radio = 10;
            this.speedx = 3;
            this.speedy = 3;
            this.fill = "white"
            this.direccionx = this.direccionRandom();
            this.direcciony = this.direccionRandom();
            this.svg = "http://www.w3.org/2000/svg";
            this.contador_paradas = 1;
      }

      direccionRandom() {
            let aleatorio = Math.random()
            if (aleatorio < 0.5){
                  return -1;
            }else if(aleatorio > 0.5){
                  return 1;
            }
      }

      actualizarAtributos(){
            this.bola.setAttributeNS(null,"cx",this.cx);
            this.bola.setAttributeNS(null,"cy",this.cy);
      }

      crearElemento(){
            let svg = document.getElementsByTagName("svg")[0];

            let nueva_bola = document.createElementNS(this.svg, "circle");

            //creamos los atributos a la bola
            nueva_bola.setAttributeNS(null,"cx", this.cx);
            nueva_bola.setAttributeNS(null,"cy", this.cy);
            nueva_bola.setAttributeNS(null,"speed", this.speed);
            nueva_bola.setAttributeNS(null,"r", this.radio);
            nueva_bola.setAttributeNS(null,"fill", this.fill);

            svg.appendChild(nueva_bola);
            let bola = document.getElementsByTagName("circle")[0];
            this.setBola(bola);
      }

      dibujarBola(jugador1,jugador2){

            if(this.cx>(1000-this.radio) || this.cx<(0+this.radio)){
                  if(this.cx>(1000-this.radio)){
                        jugador1.sumarJugador();
                        this.cx = 500;
                        jugador1.reiniciarJugador();
                        jugador2.reiniciarJugador();
                        this.actualizarAtributos;
                  }else if(this.cx<(0+this.radio)){
                        jugador2.sumarJugador();
                        this.cx = 500;
                        jugador1.reiniciarJugador();
                        jugador2.reiniciarJugador();
                        this.actualizarAtributos;
                  }
                  this.speedx = 3;
                  this.contador_paradas = 1;
            }

            if(this.cy>(300-this.radio) || this.cy<(10+this.radio)){
                  this.direcciony*=-1;
            }

            if((this.cx-(this.radio*2)) < jugador1.getX() && (this.cy<=(jugador1.getY() +50) && this.cy>= jugador1.getY())){
                 this.direccionx*=-1;
                 this.contador_paradas++;
            }


            if((this.cx+this.radio) > jugador2.getX() && (this.cy<=(jugador2.getY() +50) && this.cy>= jugador2.getY())){
                 this.direccionx*=-1;
                 this.contador_paradas++;
            }

            //comprobamos si debemos aumentar la velocidad
            if(this.contador_paradas.toString().split().reverse()[0] == 5 || this.contador_paradas.toString().split().reverse()[0] == 10){
                  this.speedx++;
            }/*else if(this.contador_paradas.toString().split().reverse()[0] == 5){
                  this.speedy++
            }*/

            this.cx +=this.direccionx*this.speedx;
            this.cy += this.direcciony*this.speedy;
            this.actualizarAtributos()
      }

      setBola(bola){
            this.bola = bola;
      }
}

export {Bola};