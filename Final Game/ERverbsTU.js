
var buttonES;
var buttonIS;
var Correct;
var Wrong;

function preloadERverbsTU()
{
	buttonES = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-er verbs/yo/button_es.png')
	buttonIS = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-er verbs/yo/button_is.png')
	Correct = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/True question correct answer sound effect.mp3")
	Wrong = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/WRONG BUZZER SOUND EFFECT (FREE DOWNLOAD).mp3")
}

function setupERverbsTU()
{
  
}


function drawERverbsTU()
{
	background(32,32,32)
	
	fill(225,225,225)
	text("What is the second person singular (You) ending for a regular -er verb in present tense?",30,100)
	
	if(mouseX > 250 && mouseX < 250+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -16;
		increaseScore();
		}
	}
	else
	{
		image(buttonES,250,200);
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
		canvasID = -16;
		}
	}
	else
	{
		image(buttonIS,500,200);
	}
			if (mouseX > 500 && mouseX < 500+100 && mouseY > 200 && mouseY < 200+50)
				{
				if (mouseIsPressed)
					{
						Wrong.play();
					}
				}
}