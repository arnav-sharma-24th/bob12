
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(100,300,98);
	bob2 = new Bob(200,300,98);
	bob3 = new Bob(300,300,98);
	bob4 = new Bob(400,300,98);
	bob5 = new Bob(500,300,98);
	ground = new Roof(400,600,800,60);
	roof = new Roof(400,50,800,30);
	rope1=new Rope(bob1.body, roof.body, -bob1.radius*2, 0);
    rope2=new Rope(bob2.body, roof.body, -bob2.radius*2, 0);
    rope3=new Rope(bob3.body, roof.body, -bob3.radius*2, 0);
    rope4=new Rope(bob4.body, roof.body, -bob4.radius*2, 0);
    rope5=new Rope(bob5.body, roof.body, -bob5.radius*2, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



