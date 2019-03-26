var page0,page1,page2,page3;
var image0,image1,image2,image3;
//

var imageArray = [];
var story = ["There once was a dinosaur","who shat his pants.","But a miracle happened!", "He got a second chance."];


var currentImage = 0;

function preload (){
  imageArray[0] = loadImage("assets/Thatwasclose0.jpg");
  imageArray[1] = loadImage("assets/Thatwasclose1.jpg");
  imageArray[2] = loadImage("assets/Thatwasclose2.jpg");
  imageArray[3] = loadImage("assets/Thatwasclose3.jpg");
}

function setup (){
createCanvas(700,700);

  page0 = createButton("Page 0");
  page0.position(0,0);
  page0.mousePressed(function(){
    currentImage = 0;
  });

  page1 = createButton("Page 1");
  page1.position(50,0);
  page1.mousePressed(function(){
    currentImage = 1;
  });

  page2 = createButton("Page 2");
  page2.position(100,0);
  page2.mousePressed(function(){
    currentImage = 2;
  });

  page3 = createButton("Page 3");
  page3.position(150,0);
  page3.mousePressed(function(){
    currentImage = 3;
  });
}

function draw (){
  background (255);

  image(imageArray[currentImage],0,0);
  text(story[currentImage],10,500);
}

// if (currentImage == 0){
//   image(imageArray[currentImage],0,0);
//   text(story[currentImage + 1],10,500);
// }
//
// else if (currentImage == 1){
//   image(imageArray[1],0,0);
//   text(story[1],10,500);
//   text(story[2],10,525);
// }
//
// else if (currentImage == 2){
//   image(imageArray[2],0,0);
//   text(story[3],10,500);
// }
//
// else if (currentImage == 3){
//   image(imageArray[3],0,0);
//   text(story[3],10,500);
//   text(story[4],10,525);
//
// }
//
// else{
//   text(story[0],10,50);
// }
//
// }
