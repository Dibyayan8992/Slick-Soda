var a = 100
var b = 200
var c = 250
var d = 50

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(a,b,c);
  ellipse(d, 200, 50, 50);
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    a = 255;
    b = 40;
    c = 244;
  } else if (keyCode === DOWN_ARROW) {
    a = 50;
    b = 180;
    c = 67;
  } else if (keyCode == '81') {
    a = 100;
    b = 60;
    c = 200;
  } else if (keyCode == RIGHT_ARROW) {
    a = 200;
    b = 100;
    c = 20;
    d = d+10;
  } else if (keyCode == LEFT_ARROW) {
    a = 100;
    b = 60;
    c = 200;
    d = d-10;
  }
  return false; // Prevent Default
}