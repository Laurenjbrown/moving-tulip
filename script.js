function drawStamen(xOffset, rotationOffset, stamenHeight) {
	var xPosition = windowWidth / 2 - xOffset;
	var yPosition = windowHeight / 2 - 100;
	var ellipseRadius = 20;
	
	fill(76, 22, 1);
	stroke(76, 22, 1);
	strokeWeight(5);
	
	line(xPosition, yPosition - stamenHeight, xPosition + rotationOffset, yPosition);
	
	noStroke();
	ellipse(xPosition, yPosition - stamenHeight, ellipseRadius, ellipseRadius);
}

function drawPetal(width, height, xOffset, yOffset, rotationValue) {
	var xPosition = windowWidth / 2 + xOffset;
	var yPosition = windowHeight / 2 - yOffset;
	
	fill(244, 116, 66);
	stroke(255, 233, 127);
	strokeWeight(6);

	push();
	//ellipseMode	(CORNERS) //how to use this to move the two petals at the bottom so the flower opens and closes
	translate(xPosition, yPosition);
	rotate(radians(rotationValue));
	ellipse(0, 0, width, height);
  pop();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
//taken from your Move Exercise sketch https://www.openprocessing.org/sketch/585761
	var MaxNum = 300;
	var Range = 45;
	var Count = frameCount % MaxNum; // starts at 0 and goes up to 300 then resets to 0
	var ratio = Count/(MaxNum/2)-1;  // ranges from 1 to -1
	var petalRotation = ratio*Range; // ranges from -65 to 65
		
	background(62, 173, 175);
	
	drawStamen(-25, -25, 135);
	drawStamen(0, 0, 150);
	drawStamen(25, 25, 130);
	
	fill(0, 200, 0)
	rect(windowWidth / 2 - 40, windowHeight / 2, 80, 600)
	
	drawPetal(400, 250, 0, -105, 0); // bottom petal
  drawPetal(200, 300, 0, 20, 0); // midddle petal
	drawPetal(200, 400, -100, 0, petalRotation); // left petal
	drawPetal(200, 400, 100, 0, -petalRotation); // right petal
	
	
}
