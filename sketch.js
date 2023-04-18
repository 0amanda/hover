let sq1 = 'blue'
let sq2 = 'red'
let fr = 6;
let circle = 'red'

function setup() {
  createCanvas(2080, 1080);
}
background(255);
frameRate(fr);

function draw() {
  
	fill(sq1);
	rect (300,300,150,150);
	fill(sq2);
	rect (125,125, 150,150);

noStroke();
fill(circle);
fill(255,0,0,50);
ellipse(mouseX, mouseY, 50,50);

frameRate(fr);

	
  
  //if my mouse is over the rectangle, make the rect purple
  //if mouseX is greater than 200 and less than 250 AND mouseY is greater than 200 and less than 250 then fill rectangle with purple
  sq1 = noStroke();    
  sq1 = 'yellow'	
			sq2 = 'yellow'
  
  if (mouseX > 300 && mouseX <450 && mouseY >300 && mouseY<450 ) {
		sq1 = 'purple'
    scale(5);
  }
	if (mouseX > 125 && mouseX <275 && mouseY >125 && mouseY<275 ) {
 sq2 = 'blue'
}
}