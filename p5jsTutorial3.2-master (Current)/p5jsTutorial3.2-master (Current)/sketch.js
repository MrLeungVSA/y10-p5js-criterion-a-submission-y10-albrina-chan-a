/*
canvasID

canvas ID - 1 = Intro
canvas ID - 2 = MainMenu
canvas ID - 3 = Easy
canvas ID - 4 = Medium
canvas ID - 5 = Hard
*/

var canvasID;

function preload()
{
	preloadIntro();
	preloadMainMenu();
	preloadEasy();
	preloadMedium();
	preloadHard();
}


function setup()
{
	setupIntro();
	setupMainMenu();
	setupEasy();
	setupMedium();
	setupHard();

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
		drawMedium();
	}
	if(canvasID == 5)
	{
		drawHard();
	}
}