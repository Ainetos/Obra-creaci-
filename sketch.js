let tiempoVer = 2;
let tiempoAdivinar = 5;

let rojo, azul, rosa, verde, naranja, lila;
let colores = [];
let coloresSTR = ["rojo", "azul", "rosa", "verde", "naranja", "lila"];

let formasSTR = ["rombo", "cuadrado", "rectángulo", "trapecio", "pentágono", "polígono estrellado"];

function setup() {
  createCanvas(windowWidth, windowHeight); // equivalente a fullScreen()

  rojo = color(255, 0, 0);
  azul = color(0, 0, 255);
  rosa = color(255, 105, 180);
  verde = color(0, 255, 0);
  naranja = color(255, 140, 0);
  lila = color(153, 50, 204);

  colores = [rojo, azul, rosa, verde, naranja, lila];
}

function draw() {
  background(255);
}