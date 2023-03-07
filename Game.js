class Game {
  constructor() {
    this.player = createSprite(800,330)
    this.player.addImage("player", player_img)
    this.player.scale = 0.65
    this.killer = createSprite(800,525)
    this.killer.addImage("killer",killer_img)
    this.killer.scale = 0.75
    this.level1 = createSprite(800,770,1600,30)
    
    this.level2 = createSprite(800,600,1600,30)

    this.level3 = createSprite(800,400,800,30)
    
   
    this.playerlife = 10
    this.killerlife = 10

  }
  getState() {
    
  }
  start() {
    //if(gameState === 0) {
     // player = new Player();
    //}
    //form = new Form();
   //form.display();
    
    
  
  


  }
  killerObstacle() {
    if(this.killer.position.x !== 800){
      for(var i = 0; i < 10; i++){
        obstacle = createSprite(random(200,800),590,10,10)
        }
        obstacle.velocityY = -10
    }
  }
  
  shot(){
    this.weapon.velocityY = 10
    this.weapon.lifetime = 6000
  }
  
  trigger(){
    this.weapon = createSprite(this.killer.position.x,520,10,10)
    this.weapon.addImage("weapon", weapon_img)
    this.weapon.scale = 0.025
    
  }
  playerMove(){   
    if(this.player.position.x > 400 && this.player.position.x < 1200){
      if(this.killer.position.x > 800){       
         this.direction = Math.random[0,1];  
        console.log(this.direction)  
        
        if(this.direction == 0){  
          console.log("a")       
          this.player.position.x += 5; 
          if(this.player.position.x > 1200){
            this.player.position.x = Math.random(600,1200);
          }    
        }      
        else{     
          console.log("b")     
            this.player.position.x -= 5;
            if(this.player.position.x < 600){
              this.player.position.x = Math.random(600,1200);
            }       
        }  
      }
    }
  }
  playerDie(){
    if(this.player.isColliding(this.weapon)){
      this.playerlife -= 1
    }
    if(this.playerlife <= 0){
      gameState = 2
    }
  }
  killerDie(){
    if(this.killer.isColliding(this.obstacle)){
      this.killerlife -= 1
    }
    if(this.killerlife <= 0){
      gameState = 0
    }
  }
     

  play(){
  //crouch(){

  //}
    this.playerMove()
    drawSprites()
    if(keyIsDown(LEFT_ARROW)){
      this.killer.position.x -= 5
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.killer.position.x += 5
    }
    if(keyIsDown(UP_ARROW)){
    
    }
    if(keyIsDown("S")){
      crouch()
    }
    if(keyIsDown(DOWN_ARROW)){
     
    this.trigger()
    }
    

}
}

