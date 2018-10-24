/*
  canvasID - 0 - intro
  canvasID - 1 - main menu
  canvasID - 2 - easy
*/

var canvasID;

function preload()
{

	preloadIntro();
	preloadMainMenu();
	preloadEasy();

}

function setup()
{
	createCanvas(800,600);

	setupIntro();
	setupMainMenu();
	setupEasy();

	canvasID = 0;
}

function draw()
{
	textSize(32);

	background(125,125,125)

	if (canvasID == 0)
	{
		drawIntro();
	}
	if (canvasID == 1)
	{
		drawMainMenu();
	}
	if (canvasID == 2)
	{
		drawEasy();
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