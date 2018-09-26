function setup()
{
  createCanvas(700,500);
  
}

function draw()
{
	background(255,0,0)

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape
	fill(0,0,255);

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(0,0,0);

	// modifies the thickness of the border of an object
	strokeWeight(20);


	rect(0,0,100,50);
	rect(0,100,100,50);
	rect(0,200,100,50);
	rect(0,300,100,50);
	rect(0,400,100,50);
	rect(200,0,100,50);
	rect(200,100,100,50);
	rect(200,200,100,50);
	rect(200,300,100,50);
	rect(200,400,100,50);
	rect(400,0,100,50);
	rect(400,100,100,50);
	rect(400,200,100,50);
	rect(400,300,100,50);
	rect(400,400,100,50);
	rect(600,0,100,50);
	rect(600,100,100,50);
	rect(600,200,100,50);
	rect(600,300,100,50);
	rect(600,400,100,50);


	fill(255,255,0);    
	stroke(255,255,255);
	strokeWeight(3);

	rect(100,50,100,50);
	rect(100,150,100,50);
	rect(100,250,100,50);
	rect(100,350,100,50);
	rect(100,450,100,50);
	rect(500,50,100,50);
	rect(500,150,100,50);
	rect(500,250,100,50);
	rect(500,350,100,50);
	rect(500,450,100,50);


	fill(0,255,0);    
	stroke(0,255,255);
	strokeWeight(3);

	rect(300,50,100,50);
	rect(300,150,100,50);
	rect(300,250,100,50);
	rect(300,350,100,50);
	rect(300,450,100,50);


    
}