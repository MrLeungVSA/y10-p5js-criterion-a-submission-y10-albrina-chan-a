
var buttonEIS
var buttonISTEIS

function preloadERverbsVOS()
{
	buttonEIS = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-er verbs/yo/button_eis.png')
	buttonISTEIS = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-er verbs/yo/button_isteis.png')
}

function setupERverbsVOS()
{
  
}


function drawERverbsVOS()
{
	background(32,32,32)
	
	fill(225,225,225)
	text("What is the second person plural (You all) ending for a regular -er verb in present tense?",30,100)
	
	if(mouseX > 250 && mouseX < 250+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -19;
		}
	}
	else
	{
		image(buttonEIS,250,200);
	}

	if(mouseX > 500 && mouseX < 500+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -19;
		}
	}
	else
	{
		image(buttonISTEIS,500,200);
	}
}