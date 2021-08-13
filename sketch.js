var path, leftBoundary, rightBoundary;
var boy, pathImage, boyImage;
var edges;

function preload(){
  //pre-load images
  pathImage=loadImage("path.png");
  boyImage=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(180,340,30,30);
  boy.scale = 0.08;
  boy.addAnimation("JakeRunning",boyImage);

  leftBoundary = createSprite(0,0,100,800);
  leftBoundary.visible = false;

  rightBoundary = createSprite(410,0,100,800);
  rightBoundary.visible = false;

  edges = createEdgeSprites();
}

function draw() {
  background(0);

  path.velocityY = 4;

  boy.x = mouseX; 

  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  if(path.y>400){
    path.y = height/2;
  }

  drawSprites();
}
