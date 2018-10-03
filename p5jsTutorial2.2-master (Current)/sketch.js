var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 200;
  button2Y = 100;

  
}

function draw()
{
	background(125,125,125)


	// Example 1: easy to understand - Start

	if (mouseX > 200 && mouseX < 200 + 100 && mouseY > 10 && mouseY < 10+50)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(200,10,100,50);
		
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Shanghai",223,40)


		if (mouseIsPressed == true)
		{
			fill(47,247,114);
			stroke(0,0,0);
			strokeWeight(3);
			rect(200,10,100,50);

			fill(230,83,134);
			stroke(0,0,0);
			textSize(12);
			text("Academy",223,40)


		}
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(200,10,100,50);		


		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Victoria",223,40);
	}

	// Example 1: easy to understand - End


	if(mouseX > 400 && mouseX < 400+100 && mouseY > 30 && mouseY < 30+50)
	{
		fill(102,204,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(400,30,100,50)

		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Amazon",420,50)

		if(mouseIsPressed == true)
		{
			fill(204,0,0);
			stroke(0,0,0);
			strokeWeight(3);
			rect(400,30,100,50);

			fill(255,255,255);
			stroke(0,0,0);
			textSize(12);
			text("Nile",420,50)
		}
	}
	else
	{
		fill(76,0,153);
		stroke(0,0,0);
		strokeWeight(3);
		rect(400,30,100,50);

		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Danube",420,50)
	}

if(mouseX > 100 && mouseX < 100+100 && mouseY > 50 && mouseY < 50+50)
	{ 
		fill(255,0,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(100,50,100,50)

		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Joy",120,70)

		if(mouseIsPressed == true)
		{
			fill(255,50,150);
			stroke(0,0,0);
			strokeWeight(3);
			rect(100,50,100,50)

			fill(255,255,255);
			stroke(0,0,0);
			textSize(12);
			text("Virtue",120,70)
		}
	}
	else
	{
		fill(0,0,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(100,50,100,50)

		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Peace",120,70)
	}


	// Example 2: less code but harder to understand - Start

	strokeWeight(3);

	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y+50)
	{
		fill(248,89,255);
		if (mouseIsPressed)
		{
			fill(47,247,114);
		}

		rect(button2X,button2Y,100,50);
		textSize(16);
		fill(255,255,255);
		stroke(0,0,0);
		text("Options",button2X+30-5,button2Y+30+2);
	}
	else
	{
		fill(255,113,53);
		rect(button2X,button2Y,100,50);
		textSize(12);
		fill(255,255,255);
		stroke(0,0,0);
		text("Options",button2X+30,button2Y+30);
	}


	// Example 2: less code but harder to understand - End


}