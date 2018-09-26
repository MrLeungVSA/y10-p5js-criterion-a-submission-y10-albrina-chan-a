var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 10;
  button2Y = 150;

  
}

function draw()
{
	background(125,125,125)


	if (mouseX > 100 && mouseX < 100 + 100 && mouseY > 100 && mouseY < 100+50)
	{
		fill(0,255,0);
		stroke(0,0,0);
		strokeWeight(5);
		rect(100,100,100,50);		
	}
	else
	{
		fill(255,0,0);
		stroke(0,0,0);
		strokeWeight(5);
		rect(100,100,100,50);		
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);
	text("Practice 1",100+20,130);



	if (mouseX > 0 && mouseX < 0+100 && mouseY > 450 && mouseY < 450+50)
	{
		fill(0,255,255)
		stroke (255,255,255)
		strokeWeight(2)
		rect(0,450,100,50)
	}
	else
	{
		fill(255,0,255)
		stroke(0,0,255)
		strokeWeight(6)
		rect(0,450,100,50)
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(10)
	text("Albrina",30,480)

if(mouseX > 300 && mouseX < 300+100 && mouseY > 200 && mouseY < 200+50)
{
	fill(0,255,0)
	stroke(0,0,0)
	strokeWeight(3)
	rect(300,200,100,50)
}
else
{
	fill(0,255,255)
	stroke(0,0,0)
	strokeWeight(6)
	rect(300,200,100,50)
}

fill(0,0,0)
stroke(255,255,255)
textSize(11)
text("Chan",335,230)

}