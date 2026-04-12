let tiempoVer = 2;
const tiempoAdivinar = 5;
let colorAleatorio = 0;
let formaAleatorio = 0;
let colorFalso = 0;
let formaFalso = 0;
let tiempo = 0;

let rojo, azul, rosa, verde, naranja, lila;
let colores = [];
let coloresSTR = ["Rojo", "Azul", "Rosa", "Verde", "Naranja", "Lila"];

let formasSTR = ["rombo", "cuadrado", "rectángulo", "trapecio", "círculo", "elipse"];

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
  textSize(50);
  tiempo = 30;

}

function draw() {
  background(220);
  fill(0);
  rectMode(RADIUS);
  tiempo = tiempo - frameCount;
  textAlign(CENTER, CENTER);
  text(int (tiempo/3), 50, 50);
  tiempo = 30;

   CambioRandom();


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
    fill(colores[colorFalso]);
    dibujoForma(formasSTR[formaAleatorio], colorFalso);
    text(formasSTR[formaAleatorio], 0, height/2);
    fill(220);
  }
  else if(frameCount <= 0) {
    ValoresAleatorios();
  }

  fill(220);
  // print(frameCount);
  if(frameCount > 27){
    frameCount = 0;
  }
}

function CambioRandom(){
  if(frameCount <= 1){
    ValoresAleatorios();
  }
}

function ValoresAleatorios(){
  colorAleatorio = int(random(0, 5.99));
  formaAleatorio = int(random(0, 5.99));
  colorFalso = int(random(0, 5.99));

  while(colorFalso == colorAleatorio){
    colorFalso = int(random(0, 5.99));
  }

  print(colorAleatorio, formaAleatorio, colorFalso);
}

function dibujoForma(forma){
  if(forma == "rombo"){
     quad(windowWidth/2, windowHeight/4, windowWidth*3/4, windowHeight/2, windowWidth/2, windowHeight*3/4, windowWidth/4, windowHeight/2);
  }
  else if(forma == "cuadrado"){
    square(windowWidth/2, windowHeight/2, windowHeight/3);
  }
  else if(forma == "rectángulo"){
    rect(windowWidth/2, windowHeight/2, windowHeight/2, windowHeight/4);
  }
  else if(forma == "trapecio"){
    quad(windowWidth/4, windowHeight/4, windowWidth*3/4, windowHeight/4, windowWidth*2/3, windowHeight*3/4, windowWidth*1/3, windowHeight*3/4);
  }
  else if(forma == "círculo"){
    circle(windowWidth/2, windowHeight/2, windowHeight*3/4);
  }
  else if(forma == "elipse"){
    ellipse(windowWidth/2, windowHeight/2, windowHeight, windowHeight/2);
  }
}