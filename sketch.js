const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var maxDrops = 100;
var drops = []
console.log(drops)
var thunder1, thunder2;

function preload()
{
  thunder1 = loadImage("lightning.png")
  thunder2 = loadImage("lightningcopy.png")
}

function setup() {
	createCanvas(400, 600);


	engine = Engine.create();
	world = engine.world;
    
    umbrella = new Umbrella(200,500)
    if (frameCount%150===0){
    for (var i=0;i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400)))
    }
  } 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
   for (var i=0;i<maxDrops;i++){
  drops[i].display()
  drops[i].reset()
   }
  umbrella.display()
  
  
  rand = Math.round(random(1,2));
  
  if(frameCount%80===0){
  thunderCreatedFrame = frameCount;
  
  var thunder = createSprite(random(10,370), random(10,30))
  
  switch(rand){
  case 1: thunder.addImage(thunder1);
  break;
  case 2: thunder.addImage(thunder2);
  break;
  default: break;  
  } 
  thunder.scale = random(0.3,0.6);
   thunder.lifetime = 30
  }
  drawSprites();
 
}
