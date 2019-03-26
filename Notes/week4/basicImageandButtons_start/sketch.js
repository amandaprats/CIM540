/* "Up-Close Sloth" by marissa_strniste, "Baby sloth, being cute" by Dave Gingrich is licensed under CC BY-SA 2.0. To view a copy of this license, visit: https://creativecommons.org/licenses/by-sa/2.0*/

var slothBaby;

function preload(){
slothBaby = "loadImage(assets/slothbaby.jpg)"
}

function setup() {
  // put setup code here
  createCanvas(500,500);


}

function draw() {
  // put drawing code here
  image(slothBaby,0,20,slothBaby.width/2,slothBaby.height/2);

}
