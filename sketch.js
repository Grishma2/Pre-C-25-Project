const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(10,60);
	
	ground1 = new Ground(400,670,800,30);

	box1 = new Trash(600,620,200,20);
	box2 = new Trash(510,590,20,50);
	box3 = new Trash(690,590,20,50);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	ball.display();
	ground1.display();
	box1.display();
	box3.display();
	box2.display();

	keyPressed();
	
	drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position, {x:95,y:5});
	}
}



