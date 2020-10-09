
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

  mango1 = new Box1(450,450,20,20);
  
  mango2 = new Box1(550,470,20,20);

  mango3 = new Box1(600,420,20,20);

  mango4 = new Box1(560,350,20,20);

  mango5 = new Box1(700,430,20,20);

  mango6 = new Box1(650,360,20,20);

  stone = new Box(100,100,20,20);

  rope = new Rope(stone.body,{x:70,y:620});

  tree = new Tree(600,500,400,400);

  boy = new Boy(100,650,100,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  tree.display();
  mango1.display();
  mango2.display();
  stone.display();
  rope.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  boy.display();
 

  detectollision(mango1,stone);
  
  detectollision(mango2,stone);

  detectollision(mango3,stone);

  detectollision(mango4,stone);

  detectollision(mango5,stone);

  detectollision(mango6,stone);
 
  drawSprites();

 

 
}

function detectollision(box,box1){
  mango1BodyPosition = mango1.body.position;
  stoneBodyPosition = stone.body.position;

  var distance = dist(mango1BodyPosition.x,mango1BodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y);
  if (distance<=mango1.width+stone.width){
    Matter.Body.setStatic(mango1.body,false);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
rope.fly();
}



