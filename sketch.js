

var columnas = 200
var filas = 200
var lado = 50
var serpiente
var arriba
var abajo 
var derecha 
var izquierda
var comida
function setup(){
   frameRate(10)
    createCanvas(1000,1000)
    serpiente=new Serpiente()
    arriba = createVector(0,-1);
    abajo = createVector(0,1);
    derecha = createVector(1,0);
    izquierda = createVector(-1,0);
    posicionarComida()
}
function draw(){
   background("black")
   serpiente.dibujar()
fill("crimson")
//crimson es un tipo de rojo 
   rect(comida.x * lado, comida.y * lado,lado,lado)
   if (serpiente.position.dist(comida) == 0) {
     serpiente.tamaño++
     posicionarComida()
   }
function keyPressed() {
   if (!isLooping()) 
   // es para que se repita
   {
     juegoNuevo()
   }
   switch (keyCode) {
     case UP_ARROW:
       if (serpiente.cola.length && serpiente.aceleracion == abajo) {
         break
       }
       serpiente.aceleracion = arriba
       break;
     case RIGHT_ARROW:
       if (serpiente.cola.length && serpiente.aceleracion == izquierda) {
         break
       }
       serpiente.aceleracion = derecha
       break;
     case DOWN_ARROW:
       if (serpiente.cola.length && serpiente.aceleracion == arriba) {
         break
       }
       serpiente.aceleracion = abajo
       break;
     case LEFT_ARROW:
       if (serpiente.cola.length && serpiente.aceleracion == derecha) {
         break
       }
       serpiente.aceleracion = izquierda
       break;
     default:
       break;
   }
 }
    
function Serpiente ()
{
        this.position = createVector(columnas/2,filas/2)
        this.velocity = createVector()
        //create vector, permite almacenar varios productos de un mismo tipo como las velocidades
        this.cola = []
        this.tamaño = 0

       if(this.position){}
       this.dibujar= function (){
       fill("white")
       rect(this.position.x*lado,this.position.y*lado,lado,lado)
       this.position.add(this.aceleracion)

       this.sistemaDeChoques = function() {
       if (this.position.x < 0 || this.position.y < 0) {
        return true
       }
       if (this.position.x >= columnas || this.posicion.y >= filas) {
       return true
        }
        //sistema de choques
        for (const c of this.cola) {
         // esto hace que sea constante 
       if (this.position.equals(c)) {
         return true
       }
       // sistema de choques
       }
        return false
   } 
   this.dibujar = function() {
     fill("white")
     rect(
       constrain(this.posicion.x, 0, columnas - 1) * lado,
       constrain(this.posicion.y, 0, filas - 1) * lado,lado,lado)
       // el cuadradito
       for (const c of this.cola) {
       rect(
         constrain(c.x, 0, columnas - 1) * lado,
         constrain(c.y, 0, filas - 1) * lado,lado,lado)
     }
     juegoTerminado()
     this.cola.push(this.position.copy())
     if (this.cola.length > this.tamaño) {
       this.cola.splice(0, 1)
     }
     //que se repita cuando termine 
     //splice borra todo por algo nuevo
     this.posicion.add(this.aceleracion)
   }
 }
}
    }
    
function posicionarComida() {
   comida = createVector(
     int(random(COLUMNAS)),
     int(random(FILAS))
     //int= que no sean decimales 
   )
 }


 function juegoNuevo() {
   serpiente = new Serpiente()
   loop()
   //loop que se repita infinitamente 
 }

function juegoTerminado() {
   if (serpiente.sistemaDeChoques()) {
     textAlign(CENTER, CENTER)
     textSize(50)
     text("Juego terminado", width / 2, height / 2)
     noLoop()
     //que no se repita 
   }
 }

