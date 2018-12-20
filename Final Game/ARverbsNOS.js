
var buttonAMOS;
var buttonIMOS;
var Correct;
var Wrong;

function preloadARverbsNOS()
{
	buttonAMOS = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-ar verbs/yo/button_amos.png')
	buttonIMOS = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Easy Game/-ar verbs/yo/button_imos.png')
	Correct = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/True question correct answer sound effect.mp3")
	Wrong = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/WRONG BUZZER SOUND EFFECT (FREE DOWNLOAD).mp3")
}


function setupARverbsNOS()
{
  
}


function drawARverbsNOS()
{
	background(32,32,32)
	
	fill(225,225,225)
	text("What is the first person plural (We) ending for a regular -ar verb in present tense?",30,100)

	

	if(mouseX > 250 && mouseX < 250+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -11;
		increaseScore();
		}
	}
	else
	{
		image(buttonAMOS,250,200);
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
		canvasID = -11;
		}
	}
	else
	{
		image(buttonIMOS,500,200);
	}
			if (mouseX > 500 && mouseX < 500+100 && mouseY > 200 && mouseY < 200+50)
				{
				if (mouseIsPressed)
					{
						Wrong.play();
					}
				}
}