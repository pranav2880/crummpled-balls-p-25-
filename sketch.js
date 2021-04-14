const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dustbinimg

var ground;
var box1,box2,box3;
function preload(){
  dustbinimg=loadImage("dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  
    ground=new Ground(600,380,1200,20)
    ball=new Ball(100,100,20);
    box1=new Box(800,330,20,80);
    box2=new Box(840,370,100,20);
    box3=new Box(880,330,20,80);
}

function draw(){
    background(255);
    Engine.update(engine);
     ground.display();
   ball.display();
   box1.display();
   box2.display();
   box3.display();
   image(dustbinimg,770,200,150,200);
}
function keyPressed() { 
    if (keyCode === UP_ARROW) {
         Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-77}); } }
         