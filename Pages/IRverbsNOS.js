
var buttonEMOS
var buttonIMOS

function preloadIRverbsNOS()
{
	buttonEMOS = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-ir verbs/yo/button_emos.png')
	buttonIMOS = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-ir verbs/yo/button_imos.png')
}

function setupIRverbsNOS()
{
  
}


function drawIRverbsNOS()
{
	background(32,32,32)
	
	fill(225,225,225)
	text("What is the first person plural (We) ending for a regular -ir verb in present tense?",30,100)
	
	if(mouseX > 250 && mouseX < 250+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -25;
		}
	}
	else
	{
		image(buttonEMOS,250,200);
	}
	
	if(mouseX > 500 && mouseX < 500+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -25;
		}
	}
	else
	{
		image(buttonIMOS,500,200);
	}
}