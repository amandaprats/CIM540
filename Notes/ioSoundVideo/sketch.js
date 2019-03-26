var button1, button2;
var soundFile;
var vid;

function preload(){
  soundFile = loadSound('assets/CowMoo.mp3');
  vid = createVideo('assets/cow.mp4');
}

function setup() {
  createCanvas(400,400);
  button1 = new interfaces(100,200,50,"red", "Stop Button");
  button2 = new interfaces(200,200, 50, "green", "Play Button");

  vid.hide();
}

function draw() {


}

function mousePressed(){

}
