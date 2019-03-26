var imageArray = [];

var guideText = ["","",];

var page0,page1,page2,page3,page4,page5,page6,page7;

var currentPage = 0;

function preload(){
  imageArray[0] = loadImage("assets/page0.jpg");
  imageArray[1] = loadImage("assets/page1.jpg");
  imageArray[2] = loadImage("assets/page2.jpg");
  imageArray[3] = loadImage("assets/page3.jpg");
  imageArray[4] = loadImage("assets/page4.jpg");
  imageArray[5] = loadImage("assets/page5.jpg");
  imageArray[6] = loadImage("assets/page6.jpg");
  imageArray[7] = loadImage("assets/page7.jpg");

  logo = loadImage("assets/tata.png");
}

function setup() {
  // put setup code here
  createCanvas(810,950);

  page0 = createButton("Tata");
  page0.position(10,920);
  page0.mousePressed(function(){
    currentPage = 0;
  });
  page1 = createButton("Welcome!");
  page1.position(80,920);
  page1.mousePressed(function(){
    currentPage = 1;
  });
  page2 = createButton("Your Cycle");
  page2.position(190,920);
  page2.mousePressed(function(){
    currentPage = 2;
  });
  page3 = createButton("Your Options");
  page3.position(300,920);
  page3.mousePressed(function(){
    currentPage = 3;
  });
  page4 = createButton("Your Options");
  page4.position(430,920);
  page4.mousePressed(function(){
    currentPage = 4;
  });
  page5 = createButton("Puberty");
  page5.position(560,920);
  page5.mousePressed(function(){
    currentPage = 5;
  });
  page6 = createButton("PMS");
  page6.position(650,920);
  page6.mousePressed(function(){
    currentPage = 6;
  });
  page7 = createButton("The End");
  page7.position(730,920);
  page7.mousePressed(function(){
    currentPage = 7;
  });
}

function draw(){
  // put drawing code here
  background("#f69676");
  image(logo,50,50,logo.width/3,logo.height/3);
  text("To jump to a specific page, click one of the buttons below.", 170,50);
  text("To jump through pages, use your number keys.", 170,70);
  text("To define a bolded word, hover over it. The definition will appear below.", 170,90);
  // text("To flip pages, use your left and right arrow keys.", 170,90);
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
      text("Click the logo to return to the first page", 480, 480);
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
