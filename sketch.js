
var backgroundImg
var killer_img, killer_img1, killer_img2, killer, player_img, player_img1, player
var level1, level2, level3, weapon, weapon_img, obstacle, obstable_img
var weaponlife, obstacle, weapon
var gameState = 1
var direction = 1

function preload() {
  backgroundImg = loadImage('assets/background.jpg')
  killer_img = loadImage('assets/killer1.png')
  killer_img1 = loadImage('assets/killer2.png')
  killer_img2 = loadImage('assets/killer3.png')
  player_img = loadImage('assets/player.png')
  player_img1 = loadImage('assets/player1.png')
  player_img2 = loadImage('assets/player2.png')
  weapon_img = loadImage('assets/tomato.png')
}
 

function setup() {
  createCanvas(1600, 800);
  game = new Game()
  //game.getState();
  game.start();
}

function draw() {
  background(backgroundImg);
  if(gameState==1){
    game.play()
  }
 
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//function keyPressed() {
//  if(keyCode === 32) {
//}
