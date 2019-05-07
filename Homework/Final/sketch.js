var rectButtonX = 200;
var rectButtonY = 400;
var rectButtonSize = 100;
var currentColor;

var colorBox = [];
var capImage;
var button;

var colors = [];

var showButton;

var showingOrHiding = 1;


function setup() {
  // put setup code here
  createCanvas (414, 736);
  capture = createCapture(VIDEO);
  capture.hide();

  // create sliders
  resSlider = createSlider(1, 50, 5);
  resSlider.position(10, 50);
  //this only happens when you change the slider
  resSlider.changed(function(){
    colorBox = [];
    for(var h = 0; h < resSlider.value(); h++){
      for(var v = 0; v < resSlider.value(); v++){
      var boxWidth = width/resSlider.value();
      var boxHeight = (height-30)/resSlider.value();
      var xPos = h * boxWidth;
      var yPos = v * boxHeight;
      //rect(xPos,yPos,boxWidth, boxHeight);
      var tC = color('rgba(0, 0, 0, 0)');
      colorBox.push(new interfaces(xPos,yPos,boxWidth,boxHeight,tC));
      }

      // textColor('rgba(0, 0, 0, 1)');
      // textSize(20);
      // textAlign(RIGHT, RIGHT);


    }
  });

  for(var h = 0; h < 4; h++){
    for(var v = 0; v < 4; v++){
    var boxWidth = width/4;
    var boxHeight = (height-30)/4;
    var xPos = h * boxWidth;
    var yPos = v * boxHeight;
    //rect(xPos,yPos,boxWidth, boxHeight);
    var tC = color('rgba(0, 0, 0, 0)');
    colorBox.push(new interfaces(xPos,yPos,boxWidth,boxHeight,tC));
    }
  }

// making color boxes
  colors.push(new interfaces(10,710,20, 20, color('rgba(255, 0, 0, 1)')));
  colors.push(new interfaces(50,710,20, 20, color('rgba(0, 255, 0, 1)')));
  colors.push(new interfaces(90,710,20, 20, color('rgba(0, 0, 255, 1)')));
  colors.push(new interfaces(130,710,20, 20, color('rgba(0, 0, 0, 1)')));
  colors.push(new interfaces(170,710,20, 20, color('rgba(255, 255, 255, 1)')));


//
  colors.push(new interfaces(210,710,20, 20, color('rgba(0, 0, 0, 0)')));
  colors.push(new interfaces(250,710,20, 20, color('rgba(0, 255, 0, 1)')));
  colors.push(new interfaces(290,710,20, 20, color('rgba(0, 0, 255, 1)')));
  colors.push(new interfaces(330,710,20, 20, color('rgba(0, 0, 0, 1)')));
  colors.push(new interfaces(370,710,20, 20, color('rgba(255, 255, 255, 1)')));


  currentColor = color('rgba(0, 0, 0, 0)');

//   //create button
//   showButton = createButton('Show/Hide Instructions');
//   showButton.position(250,20);
//   showButton.mousePressed(function(){
//   showingOrHiding = 1;
// });



  // rect(50,200,300,300);



    // if state if showingOrHiding == 1 change it to zero
    // else if showingOrHiding == 0 change it to 1

    // if(showingOrHiding == 1){
    //   showingOrHiding = 0;

// take picture and get random colors

  picture = createButton('Take Picture');
  picture.position(155,50);
  picture.mousePressed(function(){
      capImage = capture.get();
     image(capImage, 0, 0);

     //loop through all colors[]
     //in loop
     //choose a random pixel
     //// var curImg = capture.get(random(width),random(height));
     //apply random pixel color to color box
     // colors[i].color = color(curImg[0], curImg[1], curImg[2])
     //for(var i = 0; i < colors.length; i++)
     for(var i in colors){
       if(i >= 5){
         var curImg = capture.get(random(width),random(height));
         colors[i].color = color(curImg[0], curImg[1], curImg[2])
       }
     }

  });
}

function draw() {
  // put drawing code here
    background("#000000");

    image(capture, 0, 0, capture.width*1.6, capture.height*1.6);

    fill("#FFFFFF");
    text("Take a picture, then use the slider to set your grid size.", 10, 25);
    text("Click a color below to select a color, then click on boxes to fill them in.",10,40);

    for(var i in colorBox){
      colorBox[i].display();
    }

    for(var i in colors){
      colors[i].display();
    }



    // ellipse(mouseX,mouseY,10,10);

    // for(){
    //
    // }
    //noFill();
    // for(var h = 0; h < resSlider.value(); h++){
    //   for(var v = 0; v < resSlider.value(); v++){
    //   var boxWidth = width/resSlider.value();
    //   var boxHeight = height/resSlider.value();
    //   var xPos = h * boxWidth;
    //   var yPos = v * boxHeight;
    //   rect(xPos,yPos,boxWidth, boxHeight);
    // }

  console.log(resSlider.value());

  // text(resSlider.value(), 10,10);
}


function mousePressed(){

  for(var i in colorBox){
    if(colorBox[i].check(mouseX, mouseY) == true){
      colorBox[i].color = currentColor;
    }
  }

  for(var i in colors){
    if(colors[i].check(mouseX, mouseY) == true){
      currentColor = colors[i].color;
    }
  }


}



  class interfaces{
    constructor(tempX,tempY,tempW,tempH, tempC){
      this.x = tempX;
      this.y = tempY;
      this.width = tempW;
      this.height = tempH;
      this.color = tempC;
    }

    display(){

      fill(this.color);
      rect(this.x,this.y,this.width,this.height);

    }

    check(mX,mY){
      if(mX > this.x && mX < this.x + this.width && mY > this.y && mY < this.y + this.height){
        return true;
      }else{
        return false;
      }
    }




  }
