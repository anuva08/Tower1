const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;
var stand1,stand2;
var ball,ballBody;
var polygon_img;
var blocks1,blocks2,blocks3,blocks3,blocks4,blocks5,blocks6,blocks7,blocks8,blocks9;
var chain;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  blocks1= new Block (640,175,30,40);
  blocks2 = new Block (670,175,30,40);
  blocks3 = new Block (690,175,30,40);
  blocks4 = new Block (720,175,30,40);
  blocks5 = new Block (750,175,30,40);
  blocks6 = new Block (670,135,30,40);
  blocks7 = new Block (690,135,30,40);
  blocks8 = new Block (720,135,30,40);
  blocks9 = new Block (690,95,30,40);

  ball = Bodies.circle(100 , 100 ,20,{restitution:0.5, isStatic:false});
	World.add(world, ball);

  chain = new Slingshot (ball.body,{x :100,y:100});
	
  Engine.run(engine);
  
}
function draw() {
  background(56,44,44); 
  Engine.update(engine);
  
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  
  fill("turquoise");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();

  fill("pink");
  blocks6.display();
  blocks7.display();
  blocks8.display();

  fill("skyblue");
  blocks9.display();

  chain.display();
  
  imageMode(CENTER);
  image(polygon_img,ballBody.position.x,ballBody.position.y,50,50);
}
 //function mouseDragged(){
 //Matter.Body.setPosition(ball.body,{x : mouseX , y : mouseY});
	  
//	}
	
	//function mouseReleased(){
	//	chain.fly();
//	}
