let tiempoVer = 2;
const tiempoAdivinar = 5;
let colorAleatorio = 0;
let formaAleatorio = 0;
let colorFalso = 0;
let tiempo = 0;

let rojo, azul, rosa, verde, naranja, lila;
let colores = [];
let coloresSTR = ["rojo", "azul", "rosa", "verde", "naranja", "lila"];

let formasSTR = ["rombo", "cuadrado", "rectángulo", "trapecio", "pentágono", "polígono estrellado"];

function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(1);

  rojo = color(255, 0, 0);
  azul = color(0, 0, 255);
  rosa = color(255, 105, 180);
  verde = color(0, 255, 0);
  naranja = color(255, 140, 0);
  lila = color(153, 50, 204);

  colores = [rojo, azul, rosa, verde, naranja, lila];
  controlFrames = 0;
  textSize(50);
  tiempo = 6;

  ValoresAleatorios();
}

function draw() {
  background(220);
  fill(0);
  tiempo = tiempo - frameCount;
  text(tiempo, 50, 50);
  tiempo = 6;


  if((frameCount <= 2) && (frameCount > 0)){
    fill(colores[colorFalso]);
    text(coloresSTR[colorAleatorio], (width/2) - 45, height/2);
    fill(220);
  } else if(frameCount <= 0) {
    ValoresAleatorios();
  }

  fill(220);
  // print(frameCount);
  if(frameCount > 5){
    frameCount = 0;
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