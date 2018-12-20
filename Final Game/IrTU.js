
var buttonVES;
var buttonVAS;
var buttonIRAS;
var Correct;
var Wrong;

function preloadIrTU()
{
	buttonVES = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Hard Game/ir/yo/button_ves.png')
	buttonVAS = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Hard Game/ir/yo/button_vas.png')
	buttonIRAS = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Hard Game/ir/yo/button_iras.png')
	Correct = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/True question correct answer sound effect.mp3")
	Wrong = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/WRONG BUZZER SOUND EFFECT (FREE DOWNLOAD).mp3")
}

function setupIrTU()
{
  
}



function drawIrTU()
{
	background(32,32,32)
	
	fill(225,225,225)
	text("What is the second person singular (You) ending for the verb ir in present tense?",30,100)

	if(mouseX > 175 && mouseX < 175+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -37;
		}
	}
	else
	{
		image(buttonVES,175,200);
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
		canvasID = -37;
		increaseScore();
		}
	}
	else
	{
		image(buttonVAS,350,200);
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
		canvasID = -37;
		}
	}
	else
	{
		image(buttonIRAS,525,200);
	}
			if (mouseX > 525 && mouseX < 525+100 && mouseY > 200 && mouseY < 200+50)
				{
				if (mouseIsPressed)
					{
						Wrong.play();
					}
				}
}