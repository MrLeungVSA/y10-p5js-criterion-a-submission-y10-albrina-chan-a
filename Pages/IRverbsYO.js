
var buttonI
var buttonO

function preloadIRverbsYO()
{
	buttonI = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-ir verbs/yo/button_i (1).png')
	buttonO = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-ir verbs/yo/button_o.png')
}

function setupIRverbsYO()
{
  
}


function drawIRverbsYO()
{
	background(32,32,32)
	
	fill(225,225,225)
	text("What is the first person singular (I) ending for a regular -ir verb in present tense?",30,100)
	
	if(mouseX > 250 && mouseX < 250+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -22;
		}
	}
	else
	{
		image(buttonI,250,200);
	}

	if(mouseX > 500 && mouseX < 500+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -22;
		}
	}
	else
	{
		image(buttonO,500,200);
	}
}