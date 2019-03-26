var imageArray = [];

var Page0,Page1,Page2,Page3,Page4,Page5,Page6,Page7;

var currentPage = 0;

function preload(){
  imageArray[0] = loadImage("assets/Page0.jpg");
  imageArray[1] = loadImage("assets/Page1.jpg");
  imageArray[2] = loadImage("assets/Page2.jpg");
  imageArray[3] = loadImage("assets/Page3.jpg");
  imageArray[4] = loadImage("assets/Page4.jpg");
  imageArray[5] = loadImage("assets/Page5.jpg");
  imageArray[6] = loadImage("assets/Page6.jpg");
  imageArray[7] = loadImage("assets/Page7.jpg");

  logo = loadImage("assets/tata.png");
}

function setup() {
  // put setup code here
  createCanvas(810,950);

  Page0 = createButton("Tata");
  Page0.position(10,920);
  Page0.mousePressed(function(){
    currentPage = 0;
  });
  Page1 = createButton("Welcome!");
  Page1.position(80,920);
  Page1.mousePressed(function(){
    currentPage = 1;
  });
  Page2 = createButton("Your Cycle");
  Page2.position(190,920);
  Page2.mousePressed(function(){
    currentPage = 2;
  });
  Page3 = createButton("Your Options");
  Page3.position(300,920);
  Page3.mousePressed(function(){
    currentPage = 3;
  });
  Page4 = createButton("Your Options");
  Page4.position(430,920);
  Page4.mousePressed(function(){
    currentPage = 4;
  });
  Page5 = createButton("Puberty");
  Page5.position(560,920);
  Page5.mousePressed(function(){
    currentPage = 5;
  });
  Page6 = createButton("PMS");
  Page6.position(650,920);
  Page6.mousePressed(function(){
    currentPage = 6;
  });
  Page7 = createButton("The End");
  Page7.position(730,920);
  Page7.mousePressed(function(){
    currentPage = 7;
  });
}

function draw(){
  // put drawing code here
  background("#f69676");
  image(logo,50,50,logo.width/3,logo.height/3);
  text("To jump to a specific Page, click one of the buttons below.", 170,50);
  text("To jump through Pages, use your number keys.", 170,70);
  text("To define a bolded word, hover over it. The definition will appear below.", 170,90);
  // text("To flip Pages, use your left and right arrow keys.", 170,90);
  //image(imageArray[currentPage],0,0);

  if(currentPage == 0 || currentPage == 7){
    image(imageArray[currentPage],394,130);
  }else if(currentPage >= 1 && currentPage <= 6 ){
    image(imageArray[currentPage-1],10,130);
    image(imageArray[currentPage],404,130);
  }

  if(currentPage == 2 && mouseX > 420 && mouseX < 540 && mouseY < 600){
    text("The menstrual cycle is the hormonal process a woman's body goes through each month to prepare for a possible pregnancy.", 20, 850);
  }

  if(currentPage == 2 && mouseX > 420 && mouseX < 900 && mouseY < 480 && mouseY > 480){
    text("Your period is when blood and tissue from your uterus comes out of your vagina.", 20, 850);}

    if(currentPage == 7){
      text("Click the logo to return to the first Page", 480, 480);
    }




    if(currentPage == 7 && mouseX > 500 && mouseX < 700 && mouseY > 400 && mouseY < 500 && mouseIsPressed){
      currentPage = 0;
  }
}
//END OF DRAW loop

function keyPressed() {
    console.log ("letter: " + key + "keycode: " + keyCode);
    if(key == '1'){
    console.log("the letter is 1");
    currentPage = 1;
  }else if(key == '2') {
    currentPage = 2;
  }else if(key == '3'){
    currentPage = 3;
  }else if(key == '4') {
    currentPage = 4;
  }else if(key == '5'){
    currentPage = 5;
  }else if(key == '6') {
    currentPage = 6;
  }else if(key == '7'){
    currentPage = 7;
  }




}
