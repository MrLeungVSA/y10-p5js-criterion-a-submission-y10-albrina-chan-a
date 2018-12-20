
var buttonSO;
var buttonSOY;
var buttonSE;
var Correct;
var Wrong;

function preloadSerYO()
{
	buttonSO = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Hard Game/ser/yo/button_so.png')
	buttonSOY = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Hard Game/ser/yo/button_soy.png')
	buttonSE = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Hard Game/ser/yo/button_se.png')
	Correct = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/True question correct answer sound effect.mp3")
	Wrong = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/WRONG BUZZER SOUND EFFECT (FREE DOWNLOAD).mp3")
}

function setupSerYO()
{
  
}



function drawSerYO()
{
	background(32,32,32)
	
	fill(225,225,225)
	text("What is the first person singular (I) ending for the verb ser in present tense?",30,100)

	if(mouseX > 175 && mouseX < 175+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -50;
		}
	}
	else
	{
		image(buttonSO,175,200);
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
		canvasID = -50;
		increaseScore();
		}
	}
	else
	{
		image(buttonSOY,350,200);
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
		canvasID = -50;
		}
	}
	else
	{
		image(buttonSE,525,200);
	}
			if (mouseX > 525 && mouseX < 525+100 && mouseY > 200 && mouseY < 200+50)
				{
				if (mouseIsPressed)
					{
						Wrong.play();
					}
				}
}