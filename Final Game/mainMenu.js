

var buttonEasyGame;
var buttonHardGame;
var buttonEasyGameLight;
var buttonHardGameLight
var sfx1;
var buttonStart;
var buttonINTRO
var buttonINTROlight
var buttonScores
var buttonScoresLIGHT


function preloadMainMenu()
{
	buttonEasyGame = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.2-master (Current)/button_easy-game.png')
	buttonHardGame = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.2-master (Current)/button_hard-game.png')
	buttonEasyGameLight = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.2-master (Current)/button_easy-game (1).png')
	buttonHardGameLight = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.2-master (Current)/button_hard-game (1).png')
	buttonINTRO = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_back-to-intro-page.png')
	buttonINTROlight = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_back-to-intro-pageLIGHT.png')
	buttonScores = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_scores.png')
	buttonScoresLIGHT = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_scoresLIGHT.png')
	
}


function setupMainMenu()
{

}

function drawMainMenu()
{
	background (128,128,128)

	fill(0,0,0)
	
	text("Welcome to the Main Menu!",40,70)
	text("Please select a game:",130,140)


	if(mouseX > 350 && mouseX < 350+100 && mouseY > 200 && mouseY < 200+50)
	{
		image(buttonEasyGameLight,350,200);
		if(mouseIsPressed)
	{
		canvasID = -3;
	}
	}
	else
	{
		image(buttonEasyGame,350,200);
	}


	if(mouseX > 350 && mouseX < 350+100 && mouseY > 300 && mouseY < 300+50)
	{
		image(buttonHardGameLight,350,300);
		if(mouseIsPressed)
		{
			canvasID = -4;
		}
	}
	else
	{
		image(buttonHardGame,350,300);
	}


	if(mouseX > 60 && mouseX < 60+100 && mouseY > 400 && mouseY < 400+50)
	{
		image(buttonINTROlight,60,400);
		if(mouseIsPressed)
		{
			canvasID = -1;
		}
	}
	else
	{
		image(buttonINTRO,60,400);
	}

	if(mouseX > 600 && mouseX < 600+100 && mouseY > 100 && mouseY < 100+50)
	{
		image(buttonScoresLIGHT,600,100);
		if(mouseIsPressed)
		{
			canvasID = -63;
		}
	}
	else
	{
		image(buttonScores,600,100);
	}


// Check if we have clicked on the button
	if (mouseX > 350 && mouseX < 350 + 100 && mouseY > 200 && mouseY < 200 + 50 && mouseIsPressed)
	{
		// check that the sound effect is NOT (!) already playing; it is usually not desired to have the sound effect overlap
		if (!sfx1.isPlaying())
		{
			// play the sound effect
			sfx1.play();
		}
	}
	// Check if we have clicked on the button
	if (mouseX > 350 && mouseX < 350 + 100 && mouseY > 300 && mouseY < 300 + 50 && mouseIsPressed)
	{
		// check that the sound effect is NOT (!) already playing; it is usually not desired to have the sound effect overlap
		if (!sfx1.isPlaying())
		{
			// play the sound effect
			sfx1.play();
		}
	}
}
