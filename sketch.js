var garden,gardenImage;
var tom,tom_running,tomImage;
var jerry,jerryImage,jerry_running;
var PLAY = 1;
var END = 0;
var gameState = 1;

function preload() {
    //load the images here
    gardenImage = 
      loadImage("garden.png");

      tomImage = 
        loadImage("tomOne.png");

    tom_running = 
      loadImage("tomOne.png,tomTwo.png,tomThree.png,tomFour.png");

      jerryImage = 
        loadImage("jerryOne.png");

        jerry_running = 
         loadImage("jerryOne.png,jerryTwo.png,jerryThree.png,jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   
    garden = createSprite(500,400);
    garden.addImage(gardenImage);
    garden.velocityX = -3;

    tom = createSprite(800,700,20,20);
    tom.addImage(tomImage);
    tom.scale = 0.5;

    jerry = createSprite(200,400,20,20);
    jerry.addImage(jerryImage);
    jerry.scale = 0.5;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (gameState === 1)
    {
        if(keyDown("space"))
    { 
        garden.velocityX = -3;
        tom.addAnimation(tomImage);
        jerry.addAnimation(jerry_running);
    }

    if(keyDown("left_arrow"))
    {
        tom.addAnimation("tom_running");
        tom.velocityX = -5;
    }

    if(garden < 600)
    {
        garden.x =1000;
    }
        
    if(isTouching(tom,jerry))
    {
        gameState = 0;
    }

    }

    else if(gameState === 0)
    {
        garden.velocityX = 0;
        jerry.addImage(jerryImage);
        tom.addImage(tomImage);
        tom.velocityX = 0;
        Text("YOU WIN",500,400);
        

    }
   
    


    drawSprites();
}

function isTouching(object1,object2)
{
  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) 
    {
     return true;
    }
else 
    {
     return false;
    }
}


