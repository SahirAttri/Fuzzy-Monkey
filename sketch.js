
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, background1, background2,  backgroundImage
var bar, invisibleGround
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  backgroundImage = loadImage("background0.png")
  
}



function setup() {

   createCanvas(600, 600); 
  
  bar = createSprite(-600,300,1,600)
  
  invisibleGround = createSprite(300,550, 600, 1)
  invisibleGround.visible = false
  
  background1 = createSprite(300,300,300,300);
  background1.addImage("background1",backgroundImage);
  background1.velocityX = -4.2;
  background1.scale = 1.51;

  background2 = createSprite(900,300,300,300);
  background2.addImage("background2",backgroundImage);
  background2.velocityX = -4.2;
  background2.scale = 1.51;
  
  monkey = createSprite(75,520,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale  = 0.11
  
  score = 0
  
}


function draw() {

  background(200);
  drawSprites();
  
console.log(monkey.y) 
  
    text("Survival Time: "+ score, 400,50);
   score = score + Math.round(frameCount/80);
  
  monkey.collide(invisibleGround);
  
   if(keyDown("space")&& monkey.y > 515) {
    monkey.velocityY = -16;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8  
  
if(bar.isTouching(background1)){
background1.x = 900          
}

if(bar.isTouching(background2)){
background2.x = 900          
}
  
  spawnBananas ()
 spawnObstacles ()
  
}

function spawnBananas () {
  
  if(frameCount%80===0) {
     banana =createSprite(610,400,20,8) 
     banana.addImage(bananaImage)
     banana.velocityX=-4.2
     banana.scale = 0.12
     banana.y=Math.round(random(350,420)) 
  }    
}

function spawnObstacles () {
  
  if(frameCount%80===0) {
     obstacle =createSprite(610,523,20,8) 
     obstacle.addImage(obstaceImage)
     obstacle.velocityX=-4.2
     obstacle.scale = 0.14
  }  
  
}




