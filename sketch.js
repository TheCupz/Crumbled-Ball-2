
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mainBox, rightBox, leftBox;
var trash;
var dustbin, dustbinImage;

function preload() {
  dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1400, 400);
	engine = Engine.create();
	world = engine.world;
  //Create the Bodies Here.
  //var dustbin = createSprite(942,240,210,200);
 // dustbin.addImage(dustbinImage);
	ground = new Ground(700,height,1480,20);
  trash = new Circle(100,100,80);
  dustbin = new Dustbin(940, 385);


	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(125);
  //displaying the Bodies.
  ground.display();
  trash.display();
  dustbin.display();
  //rect(850,310,16,170);
  //rect(1020,310,16,170);
  drawSprites();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(trash.body,trash.body.position,{x:180,y:-170});
  }
}