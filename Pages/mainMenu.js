

var buttonEasyGame;
var buttonHardGame;
var buttonEasyGameLight;
var buttonHardGameLight
var sfx1;
var buttonStart;

function preloadMainMenu()
{
	buttonEasyGame = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.2-master (Current)/button_easy-game.png')
	buttonHardGame = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.2-master (Current)/button_hard-game.png')
	buttonEasyGameLight = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.2-master (Current)/button_easy-game (1).png')
	buttonHardGameLight = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.2-master (Current)/button_hard-game (1).png')

}


function setupMainMenu()
{

}

function drawMainMenu()
{
	background (128,128,128)

	fill(0,0,0)
	text("This is the Main Menu",30,50)
	text("Select a game",30,100)

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
