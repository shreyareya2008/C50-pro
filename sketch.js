var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var egg;
var eggGroup;
var egg1_img, egg2_img;
var player_img;
var player1score =0;
var player2score =0;

var obstacleGroup,obstacle,obstacleImage;

function preload(){
  back_img = loadImage("images/farm.jpg");
  player_img = loadImage("images/basket.png");
  egg1_img = loadImage("images/egg1.png");
  egg2_img = loadImage("images/egg2.png");
  //egg3_img = loadImage("images/egg3.png");
  
  eggGroup = new Group();

  obstacleImage = loadImage("images/rock.png")
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}