var sleep ,bath,gym,eat,brush,m ,drink,bg,astro,bg1;




function preload(){
  bath=loadAnimation("images/bath1.png","images/bath2.png");
  sleep=loadAnimation("images/sleep.png");
  gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  drink=loadAnimation("images/drink1.png","images/drink2.png");
  eat=loadAnimation("images/eat1.png","images/eat2.png");
  move=loadAnimation("images/move1.png","images/move.png");
  bg=loadAnimation("images/iss.png");
  brush=loadAnimation("brush.png");


function setup() {
   createCanvas(800,400);
bg1=createSprite(400,200,800,400);
bg1.addAnimation(bg)
  astro  =createSprite(400, 200, 50, 50);
  astro.addAnimation("sleeping",sleep);
}

function draw() {
 // background(bg); 
  textSize(20) 
  textSize(20);
   fill("white");
    text("Instructions:",20, 35); 
    textSize(15);
     text("Up Arrow = Brushing",20, 55);
      text("Down Arrow = Gymming",20, 70);
       text("Left Arrow = Eating",20, 85);
        text("Right Arrow = Bathing",20, 100);
         text("m key = Moving",20, 115);


    if(keyDown("UP_ARROW")) {
      astro.addAnimation("brushing",brush);
astro.changeAnimation("brushing");
astro.y=350;
astro.velocityX=0;
astro.velocityY=0;


    }

    if(keyDown("DOWN_ARROW")) {
      astro.addAnimation("gymming",gym);
astro.changeAnimation("gymming");
astro.y=350;
astro.velocityX=0;
astro.velocityY=0;


    }

    if(keyDown("RIGHT_ARROW")) {
      astro.addAnimation("eating",eat);
astro.changeAnimation("eating");
astro.y=350;
astro.velocityX=0;
astro.velocityY=0;


    }

    
    if(keyDown("m_ARROW")) {
      astro.addAnimation("moving",m);
astro.changeAnimation("moving");
astro.y=350;
astro.velocityX=0;
astro.velocityY=0;


    }

  drawSprites();

}










