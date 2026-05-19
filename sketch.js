let tiempoVer = 2;
const tiempoAdivinar = 5;
let correcto = false;
let click = false;
let contador = 0;

let colorAleatorio = 0;
let formaAleatorio = 0;
let colorFalso = 0;
let tiempo = 0;

let rojo, azul, rosa, verde, naranja, lila;
let colores = [];
let coloresSTR = ["Rojo", "Azul", "Rosa", "Verde", "Naranja", "Lila"];

let formasSTR = ["rombo", "cuadrado", "rectángulo", "trapecio", "círculo", "elipse"];

let teclaCol = [87, 65, 83, 68, 70, 71] //w,a,s,d,f,g
let teclaForm = [38, 40, 39, 37, false, 32] //up,down,right,left,click,space

function preload(){
  instagram=loadImage('icono-ig.png');
  twitter=loadImage('icono-x.png');
  youtube=loadImage('icono-yt.png');
  whatsapp=loadImage('icono-wa.png');
  facebook=loadImage('icono-fb.png');
  linkedin=loadImage('icono-lk.png');
}

function setup() {
createCanvas(windowWidth, windowHeight);

  frameRate(3);

  rojo = color(255, 0, 0);
  azul = color(0, 0, 255);
  rosa = color(255, 105, 180);
  verde = color(0, 255, 0);
  naranja = color(255, 140, 0);
  lila = color(153, 50, 204);

  colores = [rojo, azul, rosa, verde, naranja, lila];
  controlFrames = 0;
  tiempo = 30;

}

function draw() {
  CambioRandom();
  frameRate(3+ contador/2);
  
  if (correcto == true){
      background (0,255,0);
  }
  else{
      background(220);
  }
  
  fill(0);
  imageMode(CENTER);
  rectMode(RADIUS);
  tiempo = tiempo - frameCount;
  textSize(50);
  textAlign(CENTER, CENTER);
  noStroke();
  text(int (tiempo/3), 50, 50);
  tiempo = 30;
  
  textSize(25);
  text(("Puntos: "+ contador), width-75, 50);
  textSize(50);


  if((frameCount <= 6) && (frameCount > 0)){
    fill(colores[colorFalso]);
    textStyle(BOLD);
    textSize(80)
    text(coloresSTR[colorAleatorio], (width/2) - 45, height/2);
    fill(220);
    textStyle(NORMAL);
    textSize(50)
  } 
  else if((frameCount <= 15) && (frameCount > 6)){
    dibujoForma(formasSTR[formaAleatorio]);
  }
  else if ((frameCount <= 30) && (frameCount > 15)){
    if (formaAleatorio == 4){
        if (keyIsDown(teclaCol[colorAleatorio]) === true && click == true){
          correcto = true;
        }
      }
    else{
      if (keyIsDown(teclaCol[colorAleatorio]) === true && keyIsDown(teclaForm[formaAleatorio]) === true){
      correcto = true;
      }
    }
  }

  fill(220);
  if(frameCount > 27){
    frameCount = 0;
  }
}

function CambioRandom(){
  if(frameCount <= 1){
    ValoresAleatorios();
    if(correcto == true){
      contador++;
    }
    else{
      contador = 0;
    }
    correcto = false;
    click = false;
  }
}

function ValoresAleatorios(){
  colorAleatorio = int(random(0, 5.99));
  formaAleatorio = int(random(0, 5.99));
  colorFalso = int(random(0, 5.99));


  while(colorFalso == colorAleatorio){
    colorFalso = int(random(0, 5.99));
  }
}

function dibujoForma(forma){
  if(forma == "rombo"){
    image(instagram,width/2,height/2,200,200);
  }
  else if(forma == "cuadrado"){
    image(twitter,width/2,height/2,200,200);
  }
  else if(forma == "rectángulo"){
    image(youtube,width/2,height/2,200,200);
  }
  else if(forma == "trapecio"){
    image(whatsapp,width/2,height/2,200,200);
  }
  else if(forma == "círculo"){
    image(facebook,width/2,height/2,200,200);
  }
  else if(forma == "elipse"){
    image(linkedin,width/2,height/2,200,200);
  }
}

function mousePressed(){
  click = true;
}