
var buttonHA;
var buttonHACE;
var buttonHACEN;
var Correct;
var Wrong;

function preloadHacerEL()
{
	buttonHA = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Hard Game/hacer/yo/button_ha.png')
	buttonHACE = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Hard Game/hacer/yo/button_hace.png')
	buttonHACEN = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Hard Game/hacer/yo/button_hacen.png')
	Correct = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/True question correct answer sound effect.mp3")
	Wrong = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/WRONG BUZZER SOUND EFFECT (FREE DOWNLOAD).mp3")
}

function setupHacerEL()
{
  
}



function drawHacerEL()
{
	background(32,32,32)
	
	fill(225,225,225)
	text("What is the third person singular (He/She/It) ending for the verb hacer in present tense?",30,100)

	if(mouseX > 175 && mouseX < 175+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -31;
		}
	}
	else
	{
		image(buttonHA,175,200);
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
		canvasID = -31;
		}
	}
	else
	{
		image(buttonHACEN,350,200);
	}
			if (mouseX > 350 && mouseX < 350+100 && mouseY > 200 && mouseY < 200+50)
				{
				if (mouseIsPressed)
					{
						Wrong.play();
					}
				}

	if(mouseX > 525 && mouseX < 525+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -31;
		increaseScore();
		}
	}
	else
	{
		image(buttonHACE,525,200);
	}
			if (mouseX > 525 && mouseX < 525+100 && mouseY > 200 && mouseY < 200+50)
				{
				if (mouseIsPressed)
					{
						Correct.play();
					}
				}
}