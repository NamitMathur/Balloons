

var player;
 var coin;
 var bomb;
 var score=0;
 var coinsGroup,bombGroup;
var crab;
var sound;
 
var green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage;
 
function preload(){
  
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  crab = loadImage("crab.png");
  sound = loadSound("251284__djgriffin__135-ravey-game-loop-6.wav");
}



function setup(){
 player=createSprite(200,360,10,10);
 player.addImage(crab);
 player.scale=0.25;
 coin=createSprite(200,200);
 coin.addImage(green_balloonImage);
 coin.scale=0.1;
 coin.x=random(40,360);
 coin.y=0;
 coin.velocityY=5;
 bomb=createSprite(200,200);
  bomb.addImage(red_balloonImage);
 bomb.scale=0.1;
 bomb.x=random(40,360);
 bomb.y=0;
 bomb.velocityY=5;
 var score=0;
 
 sound.play();
 sound.loop();
}

function draw() {
 
  
  background("lightblue");
  
  fill("green");
  text("Score:"+score,200,200);

  if (player.isTouching(coin)) {
   coins();
  }
  if(player.isTouching(bomb)){
   bombs();
  }
  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+6;
  }
  if(keyDown("LEFT_ARROW")){
    player.x=player.x-6;
  }
  
  drawSprites();
  if (coin.y > 400) {
    coin.x = random(40, 360);
    coin.y = 0;
  }
  if (bomb.y > 400) {
    bomb.x = random(40, 360);
    bomb.y = 0;
}
}
function coins(){
  coin.x=random(40,360);
  coin.y=0;
score=score+1;

bomb.y=0;
bomb.x=bomb.x;
}
function bombs(){
 bomb.x=random(40,360);
 bomb.y=0;
 score=0;
 
}
