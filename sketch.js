var runner, runner_running, runner_collided; 
var path, pathImage ; 
var leftBoundary ,rightBoundary;

function preload(){

  pathImage = loadImage("path.png")
  runner_running = loadAnimation("Runner-1.png","Runner-2.png")
  runner_collided = loadImage("power.png")
}

function setup(){
  createCanvas(400,400);
  
  path = createSprite (200,180,)
  path.addImage("path",pathImage)
  path.scale = 1.2;

  runner = createSprite(300,180);
  runner.addAnimation("running",runner_running);
  runner.scale = 0.2;
  

  rightBoundary = createSprite(300,180,400,20)
  rightBoundary.visible = false;

  leftBoundary = createSprite(100,180,400,20)
  leftBoundary.visible = false;
}

function draw() {
  background("black");
  console.log(runner.y)
  
  //runner.x = runner.mouseX
  path.velocityY = 3;


  if (path.y>400){
  path.y = path.height/8
  runner.velocityY = runner.velocityY -0.5 ;
  }

  if(keyDown ("RIGHT_ARROW")){
    runner.velocityX = 2.;
    }
  
    if(keyDown ("LEFT_ARROW")){
    runner.velocityX = -2.;
    }

    if(runner.collide(rightBoundary)){
    path.addImage(runner_collided)
    }
  drawSprites ();
}

 
