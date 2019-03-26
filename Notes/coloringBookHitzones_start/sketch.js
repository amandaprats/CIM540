var brushColor = 0;
var brushSize = 10;

var circleButtonX = 100;
var circleButtonY = 450;
var CircleButtonSize = 100;

var rectButtonX = 200;
var rectButtonY = 400;
var rectButtonSize = 100;


function preload(){


}
function setup() {
  // put setup code here
  createCanvas (500,500);

}

function draw() {
  // put drawing code here
  fill(brushColor);
  stroke(none);
  ellipse(mouseX,mouseY,brushSize,brushSize);

//interface
fill (127);
ellipse(circleButtonX,circleButtonY,CircleButtonSize,CircleButtonSize);
fill (255);
text("clear", circleButtonX-10, circleButtonY);
var circleDist = dist(circleButtonX,circleButtonY,mouseX,mouseY);
console.log("circleDist: " + circleDist);

if(circleDist < CircleButtonSize/2 && mouseIsPressed == true){
  background(255);
}

fill (255,0,0);
rect(rectButtonX,rectButtonY,rectButtonSize,rectButtonSize)
fill(255);
text("Red",rectButtonX+50,rectButtonY+50);

if(mouseX > rectButtonX && mouseX < rectButtonX+rectButtonSize && mouseY > rectButtonY && mouseY < rectButtonY+rectButtonSize && mouseIsPressed){
  brushColor = color(255,0,0);

}

}








//end of code
