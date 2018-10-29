/*
canvasID

canvas ID - 1 = Intro
canvas ID - 2 = MainMenu
canvas ID - 3 = Easy
canvas ID - 4 = Hard
canvas ID - 5 = EasyGame
canvas ID - 6 = HardGame
*/

var canvasID;

function preload()
{
	preloadIntro();
	preloadMainMenu();
	preloadEasy();
	preloadHard();
	preloadEasyGame();
	preloadHardGame();
}


function setup()
{
	setupIntro();
	setupMainMenu();
	setupEasy();
	setupHard();
	setupEasyGame();
	setupHardGame();

	canvasID = 1;

	createCanvas(800,500);


}

function draw()
{	
	if(canvasID == 1)
	{
		drawIntro();
	}
	if(canvasID == 2)
	{
		drawMainMenu();
	}
	if(canvasID == 3)
	{
		drawEasy();
	}
	if(canvasID == 4)
	{
		drawHard();
	}
	if(canvasID == 5)
	{
		drawEasyGame();
	}
	if(canvasID == 6)
	{
		drawHardGame();
	}
}

function mouseReleased()
{
	if (canvasID == -1)
	{
		canvasID = 1;
	}
	if (canvasID == -2)
	{
		canvasID = 2;
	}
}