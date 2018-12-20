
var buttonEN;
var buttonIEN;
var Correct;
var Wrong;

function preloadERverbsELLOS()
{
	buttonEN = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-er verbs/yo/button_en.png')
	buttonIEN = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-er verbs/yo/button_ien.png')
	Correct = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/True question correct answer sound effect.mp3")
	Wrong = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/WRONG BUZZER SOUND EFFECT (FREE DOWNLOAD).mp3")
}

function setupERverbsELLOS()
{
  
}


function drawERverbsELLOS()
{
	background(32,32,32)
	
	fill(225,225,225)
	text("What is the third person plural (They) ending for a regular -er verb in present tense?",30,100)
	
	if(mouseX > 250 && mouseX < 250+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -20;
		increaseScore();
		}
	}
	else
	{
		image(buttonEN,250,200);
	}
		if (mouseX > 250 && mouseX < 250+100 && mouseY > 200 && mouseY < 200+50)
				{
				if (mouseIsPressed)
					{
						Correct.play();
					}
				}

	if(mouseX > 500 && mouseX < 500+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -20;
		}
	}
	else
	{
		image(buttonIEN,500,200);
	}
			if (mouseX > 500 && mouseX < 500+100 && mouseY > 200 && mouseY < 200+50)
				{
				if (mouseIsPressed)
					{
						Wrong.play();
					}
				}
}