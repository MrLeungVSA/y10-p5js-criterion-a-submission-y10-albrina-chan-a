
var buttonAIN
var buttonAN

function preloadARverbsELLOS()
{
	buttonAIN = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-ar verbs/yo/button_ain.png')
	buttonAN = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-ar verbs/yo/button_an.png')
}

function setupARverbsELLOS()
{
  
}


function drawARverbsELLOS()
{
	background(32,32,32)
	
	fill(225,225,225)
	text("What is the third person plural (They) ending for a regular -ar verb in present tense?",30,100)
	

	if(mouseX > 250 && mouseX < 250+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -13;
		}
	}
	else
	{
		image(buttonAIN,250,200);
	}

	if(mouseX > 500 && mouseX < 500+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -13;
		}
	}
	else
	{
		image(buttonAN,500,200);
	}
}