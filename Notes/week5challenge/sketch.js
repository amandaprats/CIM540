var circleButton, hideButton;
var showingOrHiding;

function setup() {
  // put setup code here
  createCanvas (500,500);
  background(250);
  circleButton = createButton("Hey there!");
  circleButton.position(10,40);
  circleButton.mousePressed(function(){
    // fill (250);
    // ellipse (width/2,height/2,100,100);
    showingOrHiding = 1;
  });

  hideButton = createButton("I'm shy");
  hideButton.position(100,40);
  hideButton.mousePressed(function(){
    // fill (0);
    // ellipse (width/2,height/2,100,100);
      showingOrHiding = 0;
  });
}


function draw() {
  // put drawing code here
  if(showingOrHiding == 1){
  fill(0);
  ellipse(mouseX,mouseY,100,100);
}

if(showingOrHiding == 0){
background (255);
}
}
