
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var binimg
function preload()
{
binimg = loadImage("dustbingreen.png")
	
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine)

	//Create the Bodies Here.
	//bin1 = new bin(700,620,100,10)
	binL = new bin(650,610,10,50)
	binR = new bin(750,610,10,50)
	paper1 = new paper(100,300,70)
	ground1 = new Ground(400,630,800,10)





	
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
 
  binL.display()
  binR.display()
  paper1.display()
  image(binimg,700,580,120,100)
  ground1.display()
  
 
}
function keyPressed(){
	if( keyCode=== UP_ARROW){
		console.log("just the consle message")
		Matter.Body.applyForce(paper1.body,paper1.body.position,{
			x:43,
			y:-43
	
})}}
