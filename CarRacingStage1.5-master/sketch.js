var bikeimg1,bikeimg2;
var bgimg;
var distance = 0;
var allPlayers;
var gameState = 0;
var playerCount;
var bike1,bike2;
var bikes;
var index=0;

var database;

var form,player,game;

function preload(){
    bikeimg1 = loadImage("images/sprite_0.png");
    bikeimg2 = loadImage("images/sprite_1.png");
    bgimg = loadImage("images/0.png");

}
function setup(){
    canvas = createCanvas(displayWidth -20,displayHeight -30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    console.log(gameState);
  }
  
  
  function draw(){
    if(playerCount === 2){
      game.update(1)
    }
    if(gameState === 1){
      clear();
      game.play()
    }
  }      //index of the array
