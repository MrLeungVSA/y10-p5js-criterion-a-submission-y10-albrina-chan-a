
var buttonA
var buttonO

function preloadARverbsEL()
{
	buttonA = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-ar verbs/yo/button_a.png')
	buttonO = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-ar verbs/yo/button_o.png')
}

function setupARverbsEL()
{
  
}



function drawARverbsEL()
{
	background(32,32,32)
	
	fill(225,225,225)
	text("What is the third person singular (He/She/It) ending for a regular -ar verb in present tense?",30,100)


	if(mouseX > 250 && mouseX < 250+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -10;
		}
	}
	else
	{
		image(buttonA,250,200);
	}

	if(mouseX > 500 && mouseX < 500+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -10;
		}
	}
	else
	{
		image(buttonO,500,200);
	}
}