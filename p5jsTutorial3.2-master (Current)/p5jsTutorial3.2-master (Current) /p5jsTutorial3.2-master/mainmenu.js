var buttonMainMenuEasy;
var imageMainMenuTitle;


var buttonMainMenuEasyX;
var buttonMainMenuEasyY;


function preloadMainMenu()
{
	buttonMainMenuEasy = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonEasy.png');
	imageMainMenuTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleMainMenu.png');	
}

function setupMainMenu()
{
	
	buttonMainMenuEasyX = 200;
	buttonMainMenuEasyY = 110;

}

function drawMainMenu()
{
	background(255,125,0)

	image(imageMainMenuTitle,400,10);

	image(buttonMainMenuEasy,buttonMainMenuEasyX,buttonMainMenuEasyY);

	if (mouseX > buttonMainMenuEasyX && mouseX < buttonMainMenuEasyX + 200 && mouseY > buttonMainMenuEasyY && mouseY < buttonMainMenuEasyY+50 && mouseIsPressed)
	{
		canvasID = -2;
	}

}