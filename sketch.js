var sea;
var seaImage;
var ship;
var ship_moving;

function preload(){
ship_moveing = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(900,600);

  sea = createSprite(200, 200 );
  sea.addImage(seaImage);
  sea.velocityX =-4;


  ship = createSprite (200,300,50,50);
  ship.addAnimation("moveing",ship_moveing);
  ship.scale=0.3;
  
  
}



function draw() {
  background("blue");

  
  

  if (sea.x < 0){
    sea.x = sea.width/2;
  }

 drawSprites();
}