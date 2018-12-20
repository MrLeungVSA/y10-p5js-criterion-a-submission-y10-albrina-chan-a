
var buttonTENO;
var buttonTENGO;
var buttonTENGA;
var Correct;
var Wrong;

function preloadTenerYO()
{
	buttonTENO = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Hard Game/tener/yo/button_teno.png')
	buttonTENGO = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Hard Game/tener/yo/button_tengo.png')
	buttonTENGA = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Hard Game/tener/yo/button_tenga.png')
	Correct = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/True question correct answer sound effect.mp3")
	Wrong = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/WRONG BUZZER SOUND EFFECT (FREE DOWNLOAD).mp3")
}

function setupTenerYO()
{
  
}


function drawTenerYO()
{
	background(32,32,32)
	
	fill(225,225,225)
	text("What is the first person singular (I) ending for the verb tener in present tense?",30,100)

	if(mouseX > 175 && mouseX < 175+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -57;
		}
	}
	else
	{
		image(buttonTENO,175,200);
	}
			if (mouseX > 175 && mouseX < 175+100 && mouseY > 200 && mouseY < 200+50)
				{
				if (mouseIsPressed)
					{
						Wrong.play();
					}
				}

	if(mouseX > 350 && mouseX < 350+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -57;
		increaseScore();
		}
	}
	else
	{
		image(buttonTENGO,350,200);
	}
			if (mouseX > 350 && mouseX < 350+100 && mouseY > 200 && mouseY < 200+50)
				{
				if (mouseIsPressed)
					{
						Correct.play();
					}
				}

	if(mouseX > 525 && mouseX < 525+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -57;
		}
	}
	else
	{
		image(buttonTENGA,525,200);
	}
			if (mouseX > 525 && mouseX < 525+100 && mouseY > 200 && mouseY < 200+50)
				{
				if (mouseIsPressed)
					{
						Wrong.play();
					}
				}
}