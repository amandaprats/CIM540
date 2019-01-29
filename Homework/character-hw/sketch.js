//Global Variables
var backgroundColor = "grey"; //Strings
var snoutColor = "	#8B4513";

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(255,0,0);
}

function draw() {
  // put drawing code here
  fill ("black");
  background (backgroundColor);

  //ears
  fill ("black");
  triangle(230,150,200,80,190,150);
  triangle(230+90,150,200+90,80,190+90,150);
  fill ("pink");
  triangle(220,150,200,100,195,150);
  triangle(220+90,150,200+90,100,195+90,150);

  //head
  fill ("black");
  ellipse (250,200,180,180);

  //eyes
  fill ("white");
  ellipse (210,180,30,30);
  ellipse (290,180,30,30);

  //pupils
  fill ("black");
  ellipse (205,174,25,25);
  ellipse (285,174,25,25);

  //nose
  fill ("pink");
  rect(240,225,20,10,5);

  //bottomsnout
  fill (snoutColor);
  ellipse (250,310,70,20);

  //bone
  fill ("white");
  strokeWeight(0);
  rect(140,250,225,60,10);
  ellipse (130,255,50,50);
  ellipse (130,300,50,50);
  ellipse (360,255,50,50);
  ellipse (360,300,50,50);

  //snout
  fill (snoutColor);
  ellipse (250,260,100,40);

}
