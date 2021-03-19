var database;
var quiz;
var game;
var gameState = 0;
var playerCount;
var allPlayers;
var player;

function setup(){
  createCanvas(850,400);

  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("pink");

  if(playerCount===4) {
    game.update(1);
 }

 if(gameState===1) {
    clear();
    game.play();
 }
}
