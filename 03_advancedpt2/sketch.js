// MMP100-Proj5
/// A growing circle with another growing circle within it

var diameter = 25;

function setup() {
  createCanvas(500, 500);
  background("#003399");
}

function draw() {
  ellipse(250, 250, diameter, diameter);
  textSize(40);
  textFont("ARIAL");
  textStyle(BOLD);
  textAlign(LEFT);
  text(' GOODMORNING ', 80, 100);

  // interactive
  // When mouseIsPressed, fill is random color
  if (mouseIsPressed) {
    fill(random(255), random(200, 255), random(255));
  } else {
    fill(255, 255, 0); //fill color of a light saturated yellow
  }
}

function mousePressed() {

  // if mouseIsPressed


  if (diameter > 450) {
    diameter = 50; //resets size to 50px
  } else {
    // else grow by 25px
    diameter = diameter + 25;
  }

}
