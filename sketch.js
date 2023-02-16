//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro  = 13;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//variaveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

let colidiu = false;

//sons do jogo
let raquetada
let ponto
let trilha
//chance de ganhar
let chanceDeErrar = 0

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa()
}

function mostraBolinha(){
  circle (xBolinha,yBolinha,diametro)
}
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){  
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio< 0){
    velocidadeYBolinha *= -1;
  } 
}  
function mostraRaquete(x,y){ 
    rect(x,y, comprimentoRaquete, alturaRaquete); 
  }

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }
   if (keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
}
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play()
  }
}
function verificaColisaoRaquete(x, y){
  colidiu =
  collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
     raquetada.play()
  }
}
function movimentaRaqueteOponente(){
    if (keyIsDown(87)){
    yRaqueteOponente -=10;
  }
   if (keyIsDown(83)){
    yRaqueteOponente +=10;
   }
}

function incluiPlacar(){
  stroke(255)
  textAlign(CENTER)
  textSize(16)
  fill(255,140,0)
  rect(150,10,40,20)
  fill(255)
  text(meusPontos,170,26)
  fill(255,140,0)
  rect(450,10,40,20)
  fill(255)
  text(pontosOponente,470,26)
}
function marcaPonto(){
  if(xBolinha > 593){
    meusPontos += 1;
  ponto.play()
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    ponto.play()
  }
}
function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
