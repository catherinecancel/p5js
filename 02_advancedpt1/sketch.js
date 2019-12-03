//MMP100-Proj5
//Size changing squares with a purple fill

var diameter = 50;
var beginning = 150;
var space = 100;
var rectwidth = 25; //custom variable

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("#003366");

  //background text of "WELCOME"
  //When mouseIsPressed squares become larger and colorful
  //A small square followed by mouse
  background("#005577");
  fill("#002288");
  rect(mouseX, mouseY, 25, 25);
    textSize(40);
    textFont("ARIAL");
    textStyle(BOLD);
    textAlign(LEFT);
    text('WELCOME', 75, 100);
  //A few system variables:
  //mouseX - gives us the value of the X coordinate of our mouse
  //mouseY - gives us the value of the Y coordinate of our mouse

  if (mouseIsPressed) {
    diameter = 100; //if the mouseIsPressed, diameter = 100
    fill(random(255, 255), random(0, 255), random(255, 255)); //fill is a random color-purple
  } else {
    diameter = 50; //else the diameter = 50
    fill(0, 0, 255); //fill is blue
  }



  rect(beginning + (space * 0), 125, diameter, diameter);
  rect(beginning + (space * 1), 225, diameter, diameter);
  rect(beginning + (space * 2), 325, diameter, diameter);
  rect(beginning + (space * 3), 425, diameter, diameter);

}
