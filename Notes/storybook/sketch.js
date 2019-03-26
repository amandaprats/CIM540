var page0,page1,page2,page3;
var image0,image1,image2,image3;
//

var imageArray = [];
var story = ["Instructions","Page 1","Page 2"];


var currentImage;

function preload (){
  image0 = loadImage("assets/Thatwasclose0.jpg");
  image1 = loadImage("assets/Thatwasclose1.jpg");
  image2 = loadImage("assets/Thatwasclose2.jpg");
  image3 = loadImage("assets/Thatwasclose3.jpg");
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

if (currentImage == 0){
  image(image0,0,0);
  text(story[0],10,50);
}

else if (currentImage == 1){
  image(image1,0,0);
  text(story[1],10,50);
}

else if (currentImage == 2){
  image(image2,0,0);
  text(story[2],10,50);text(story[0],10,50);

}

else if (currentImage == 3){
  image(image3,0,0);
  text("That's a different story, dummy",10,50);
}

else{
  text("Wanna hear a story?",10,50);
}

}
