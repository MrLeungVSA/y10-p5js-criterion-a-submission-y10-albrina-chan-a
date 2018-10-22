/*
canvasID

canvas ID - 1 = Intro
canvas ID - 2 = MainMenu
canvas ID - 3 = Easy
canvas ID - 4 = Hard
*/

var canvasID;

function preload()
{
	preloadIntro();
	preloadMainMenu();
	preloadEasy();
	preloadHard();
}


function setup()
{
	setupIntro();
	setupMainMenu();
	setupEasy();
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
		drawHard();
	}
}