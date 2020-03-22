const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var box1;
var ground;


function setup(){
  createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,2000,20);
//---------------------------------------------
  box1 = new Box(600,400,100,100);
  box2 = new Box(600,350,100,100);
  box3 = new Box(600,250,100,100);
  tent = new Tent(600,100,100,100);
  castle = new MC(910,400);
  //--------------------------------------------
  box4 = new Box(1220,400,100,100);
  box5 = new Box(1220,350,100,100);
  box6 = new Box(1220,250,100,100);
  tent2 = new Tent(1220,150,100,100);

  //battletowers--------------------------------
  
  battle1 = new Battle(440,500);
  battle2 = new Battle(1400,500)
}

function draw() {

  Engine.update(engine);

  background(255);  
  box1.display();  
  box2.display();
  box3.display();
  tent.display();
  ground.display();
  castle.display();

  //______________________
  box4.display();
  box5.display();
  box6.display();
  tent2.display();
 battle1.display();
 battle2.display();
}