
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin1, dustbin2, dustbin3, ground;
function preload()
{
	
}

function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	
		
	Engine.run(engine);
	ground=new Surface(450, 399, 900, 20)

	paper= new Paper(200, 350,40/2);  
 dustbin1 = new Dustbin(700, 350, 100, PI/10)
 dustbin2 = new Dustbin(500, 350, 100, PI/10 )
 dustbin3 = new Dustbin2(600, 390, 200, PI/2)

}



function draw() {
  rectMode(CENTER);
  background("green");
  
  paper.display();
  
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed () {
		
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position, {x:85, y:85} )
	}

}


  







