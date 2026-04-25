let tiempoVer = 2;
const tiempoAdivinar = 5;
let correcto = false;
let click = false;
let contador = 0;

let colorAleatorio = 0;
let formaAleatorio = 0;
let colorFalso = 0;
let formaFalso = 0;
let tiempo = 0;

let rojo, azul, rosa, verde, naranja, lila;
let colores = [];
let coloresSTR = ["Rojo", "Azul", "Rosa", "Verde", "Naranja", "Lila"];

let formasSTR = ["rombo", "cuadrado", "rectángulo", "trapecio", "círculo", "elipse"];

let teclaCol = [87, 65, 83, 68, 70, 71] //w,a,s,d,f,g
let teclaForm = [38, 40, 39, 37, false, 32] //up,down,right,left,click,space

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
    fill(200);
    noStroke();
    push();
    translate (width/2, height/2);
    scale (1.2);
    dibujoForma(formasSTR[formaAleatorio]);
    pop();
    fill(colores[colorFalso]);
    stroke(0);
    push();
    translate (width/2, height/2);
    scale (0.8);
    dibujoFormaMini(formasSTR[formaFalso]);
    pop();
    fill(220);
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
  formaFalso = int(random(0, 5.99));


  while(colorFalso == colorAleatorio){
    colorFalso = int(random(0, 5.99));
  }
  while(formaFalso == formaAleatorio){
    formaFalso = int(random(0, 5.99));
  }
}

function dibujoForma(forma){
  if(forma == "rombo"){
    quad(
      0, -windowHeight/4,
      windowWidth/4, 0,
      0, windowHeight/4,
      -windowWidth/4, 0
    );
  }
  else if(forma == "cuadrado"){
    square(0, 0, windowHeight/3);
  }
  else if(forma == "rectángulo"){
    rect(0, 0, windowHeight/2, windowHeight/4);
  }
  else if(forma == "trapecio"){
    quad(
      -windowWidth/4, -windowHeight/4,
       windowWidth/4, -windowHeight/4,
       windowWidth/6, windowHeight/4,
      -windowWidth/6, windowHeight/4
    );
  }
  else if(forma == "círculo"){
    circle(0, 0, windowHeight*3/4);
  }
  else if(forma == "elipse"){
    ellipse(0, 0, windowHeight, windowHeight/2);
  }
}

function dibujoFormaMini(forma){
  if(forma == "rombo"){
    quad(
      0, -windowHeight/4,
      windowWidth/4, 0,
      0, windowHeight/4,
      -windowWidth/4, 0
    );
  }
  else if(forma == "cuadrado"){
    square(0, 0, windowHeight/3);
  }
  else if(forma == "rectángulo"){
    rect(0, 0, windowHeight/2, windowHeight/4);
  }
  else if(forma == "trapecio"){
    quad(
      -windowWidth/4, -windowHeight/4,
       windowWidth/4, -windowHeight/4,
       windowWidth/6, windowHeight/4,
      -windowWidth/6, windowHeight/4
    );
  }
  else if(forma == "círculo"){
    circle(0, 0, windowHeight*3/4);
  }
  else if(forma == "elipse"){
    ellipse(0, 0, windowHeight, windowHeight/2);
  }
}

function mousePressed(){
  click = true;
}