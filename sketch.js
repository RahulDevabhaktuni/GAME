//design all our objects 
//add images 
// movement of your PC 


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crims = []
var rand; 

var spawnCrim = 4; 


var criminal1, playerTest
function preload(){
	//this.image = loadImage("images/criminal.jpg")
}

function setup() {
	createCanvas(1250, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//criminal1 = new Criminal(random(0, 400), random(0, 400))
	ground = new Ground(625, 575, 1250, 50)
	Engine.run(engine);

	if (frameCount % 160 === 0){
		for(var i = 0; i < spawnCrim; i++ )
		crims.push(new Criminal(100, 525)); 
	}
	playerTest = new Player(1000, 525)
//	if (frameCount % 160 === 0){
//		for(var j = 0; j < spawnCrim2; j++ )
//		crims2.push(new Criminal(1100, 500)); 
//	}
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");


 //criminal1.display();
ground.display();
playerTest.display();
 for (var i = 0; i < spawnCrim; i++ ){
	 crims[i].display(); 
	 crims[i].updateX(); 
 }
 //for (var j = 0; j < spawnCrim2; j++ ){
	//crims2[j].display(); 
	//crims2[j].updateX2(); 
//}
 drawSprites()
}
 


