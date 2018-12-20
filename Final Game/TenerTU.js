
var buttonTENGAS;
var buttonTENGES;
var buttonTIENES;
var Correct;
var Wrong;

function preloadTenerTU()
{
	buttonTENGAS = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Hard Game/tener/yo/button_tengas.png')
	buttonTENGES = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Hard Game/tener/yo/button_tenges.png')
	buttonTIENES = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/Hard Game/tener/yo/button_tienes.png')
	Correct = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/True question correct answer sound effect.mp3")
	Wrong = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/WRONG BUZZER SOUND EFFECT (FREE DOWNLOAD).mp3")
}

function setupTenerTU()
{
  
}


function drawTenerTU()
{
	background(32,32,32)
	
	fill(225,225,225)
	text("What is the second person singular (You) ending for the verb tenerin present tense?",30,100)

	if(mouseX > 175 && mouseX < 175+100 && mouseY > 200 && mouseY < 200+50)
	{
	
		if(mouseIsPressed)
		{
		canvasID = -58;
		}
	}
	else
	{
		image(buttonTENGAS,175,200);
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
		canvasID = -58;
		}
	}
	else
	{
		image(buttonTENGES,350,200);
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
		canvasID = -58;
		increaseScore();
		}
	}
	else
	{
		image(buttonTIENES,525,200);
	}
			if (mouseX > 525 && mouseX < 525+100 && mouseY > 200 && mouseY < 200+50)
				{
				if (mouseIsPressed)
					{
						Correct.play();
					}
				}
}