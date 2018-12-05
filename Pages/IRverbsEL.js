
var buttonE
var buttonI

function preloadIRverbsEL()
{
	buttonE = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-ir verbs/yo/button_e.png')
	buttonI = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-ir verbs/yo/button_i (1).png')
}

function setupIRverbsEL()
{
  
}


function drawIRverbsEL()
{
	background(32,32,32)
	
	fill(225,225,225)
	text("What is the third person singular (He/She/It) ending for a regular -ir verb in present tense?",30,100)
	
	if(mouseX > 250 && mouseX < 250+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -24;
		}
	}
	else
	{
		image(buttonE,250,200);
	}

	if(mouseX > 500 && mouseX < 500+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -24;
		}
	}
	else
	{
		image(buttonI,500,200);
	}
}