//MMP100-Proj5
//Changing shapes-rectangles to circles when pressed with mouse

var diameter = 45; //declaring and initializing our variable

function setup() {
  createCanvas(500, 500);


}

function draw() {
  background(0, 255, 255);
  fill("#ADD8E6");
  stroke(100, 100, 255);
  strokeWeight(15);


  // small ellipse that follows mouse
  ellipse(mouseX, mouseY, 10, 10);




  if (mouseIsPressed) {
    diameter = 200; //if the mouseIsPressed, diameter = 200

  } else {
    diameter = 45; //else the diameter = 45
    fill(0, 255, 0); //fill is green
  }

  //System variables
  //mouseX - gives us the value of the X coordinate of our mouse
  //mouseY - gives us the value of the Y coordinate of our mouse

  rect(50,  100, 120, 120, diameter, diameter);
  rect(150, 200, 220, 220, diameter, diameter);
  rect(250, 300, 320, 320, diameter, diameter);
  rect(350, 400, 420, 420, diameter, diameter);


  
}
