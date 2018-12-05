/*
canvasID

canvas ID - 1 = Intro
canvas ID - 2 = MainMenu
canvas ID - 3 = Easy
canvas ID - 4 = Hard

canvas ID - 5 = Correct
canvas ID - 6 = Wrong

canvas ID - 7 = ARverbsYO
canvas ID - 8 = ARverbsTU
canvas ID - 9 = ARverbsEL
canvas ID - 10 = ARverbsNOS
canvas ID - 11 = ARverbsVOS
canvas ID - 12 = ARverbsELLOS
canvas ID - 13 = EndOfARverbs

canvas ID - 14 = ERverbsYO
canvas ID - 15 = ERverbsTU
canvas ID - 16 = ERverbsEL
canvas ID - 17 = ERverbsNOS
canvas ID - 18 = ERverbsVOS
canvas ID - 19 = ERverbsELLOS
canvas ID - 20 = EndOfERverbs

canvas ID - 21 = IRverbsYO
canvas ID - 22 = IRverbsTU
canvas ID - 23 = IRverbsEL
canvas ID - 24 = IRverbsNOS
canvas ID - 25 = IRverbsVOS
canvas ID - 26 = IRverbsELLOS
canvas ID - 27 = EndOfIRverbs

canvas ID - 28 = HacerYO
canvas ID - 29 = HacerTU


declare bgm variable
*/

var canvasID;
var bgm;


function preload()
{
	preloadIntro();
	preloadMainMenu();
	preloadEasy();
	preloadHard();
	preloadCorrect();
	preloadWrong();

	preloadARverbsYO();
	preloadARverbsTU();
	preloadARverbsEL();
	preloadARverbsNOS();
	preloadARverbsVOS();
	preloadARverbsELLOS();
	preloadEndOfARverbs();

	preloadERverbsYO();
	preloadERverbsTU();
	preloadERverbsEL();
	preloadERverbsNOS();
	preloadERverbsVOS();
	preloadERverbsELLOS();
	preloadEndOfERverbs();

	preloadIRverbsYO();
	preloadIRverbsTU();
	preloadIRverbsEL();
	preloadIRverbsNOS();
	preloadIRverbsVOS();
	preloadIRverbsELLOS();
	preloadEndOfIRverbs();

	preloadHacerYO();

	// load sound file into variable bgm
	bgm = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/bensound-creativeminds.mp3");

	// load sound file into variable sfx1
	sfx1 = loadSound("https://bleungwpg.github.io/p5jsTutorial4.2/sounds/zapsplat_multimedia_game_sound_positive_action_tone_032_25091.mp3");

	buttonStart = loadImage("https://bleungwpg.github.io/p5jsTutorial4.2/images/button_press-for-sfx.png");
}


function setup()
{
	setupIntro();
	setupMainMenu();
	setupEasy();
	setupHard();
	setupCorrect();
	setupWrong();

	setupARverbsYO();
	setupARverbsTU();
	setupARverbsEL();
	setupARverbsNOS();
	setupARverbsVOS();
	setupARverbsELLOS();
	setupEndOfARverbs();

	setupERverbsYO();
	setupERverbsTU();
	setupERverbsEL();
	setupERverbsNOS();
	setupERverbsVOS();
	setupERverbsELLOS();
	setupEndOfERverbs();

	setupIRverbsYO();
	setupIRverbsTU();
	setupIRverbsEL();
	setupIRverbsNOS();
	setupIRverbsVOS();
	setupIRverbsELLOS();
	setupEndOfIRverbs();

	setupHacerYO();

	canvasID = 1;

	createCanvas(800,500);

	// play music during setup so that it doesn't loop infinitely
	bgm.play();

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
		drawCorrect();
	}
	if(canvasID == 6)
	{
		drawWrong();
	}
	if(canvasID == 7)
	{
		drawARverbsYO();
	}
	if(canvasID == 8)
	{
		drawARverbsTU();
	}
	if(canvasID == 9)
	{
		drawARverbsEL();
	}
	if(canvasID == 10)
	{
		drawARverbsNOS();
	}
	if(canvasID == 11)
	{
		drawARverbsVOS();
	}
	if(canvasID == 12)
	{
		drawARverbsELLOS();
	}
	if(canvasID == 13)
	{
		drawEndOfARverbs();
	}
	if(canvasID == 14)
	{
		drawERverbsYO();
	}
	if(canvasID == 15)
	{
		drawERverbsTU();
	}
	if(canvasID == 16)
	{
		drawERverbsEL();
	}
	if(canvasID == 17)
	{
		drawERverbsNOS();
	}
	if(canvasID == 18)
	{
		drawERverbsVOS();
	}
	if(canvasID == 19)
	{
		drawERverbsELLOS();
	}
	if(canvasID == 20)
	{
		drawEndOfERverbs();
	}
	if(canvasID == 21)
	{
		drawIRverbsYO();
	}
	if(canvasID == 22)
	{
		drawIRverbsTU();
	}
	if(canvasID == 23)
	{
		drawIRverbsEL();
	}
	if(canvasID == 24)
	{
		drawIRverbsNOS();
	}
	if(canvasID == 25)
	{
		drawIRverbsVOS();
	}
	if(canvasID == 26)
	{
		drawIRverbsELLOS();
	}
	if(canvasID == 27)
	{
		drawEndOfIRverbs();
	}
	if(canvasID == 28)
	{
		drawHacerYO();
	}

	fill(0,0,0);
	text("canvas ID   "+canvasID,700,450);
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
	if (canvasID == -3)
	{
		canvasID = 3;
	}
	if (canvasID == -4)
	{
		canvasID = 4;
	}
	if(canvasID == -5)
	{
		canvasID = 5;
	}
	if(canvasID == -6)
	{
		canvasID = 6;
	}
	if(canvasID == -7)
	{
		canvasID = 7;
	}
	if(canvasID == -8)
	{
		canvasID = 8;
	}
	if(canvasID == -9)
	{
		canvasID = 9;
	}
	if(canvasID == -10)
	{
		canvasID = 10;
	}
	if(canvasID == -11)
	{
		canvasID = 11;
	}
	if(canvasID == -12)
	{
		canvasID = 12;
	}
	if(canvasID == -13)
	{
		canvasID = 13;
	}
	if(canvasID == -14)
	{
		canvasID = 14;
	}
	if(canvasID == -15)
	{
		canvasID = 15;
	}
	if(canvasID == -16)
	{
		canvasID = 16;
	}
	if(canvasID == -17)
	{
		canvasID = 17;
	}
	if(canvasID == -18)
	{
		canvasID = 18;
	}
	if(canvasID == -19)
	{
		canvasID = 19;
	}
	if(canvasID == -20)
	{
		canvasID = 20;
	}
	if(canvasID == -21)
	{
		canvasID = 21;
	}
	if(canvasID == -22)
	{
		canvasID = 22;
	}
	if(canvasID == -23)
	{
		canvasID = 23;
	}
	if(canvasID == -24)
	{
		canvasID = 24;
	}
	if(canvasID == -25)
	{
		canvasID = 25;
	}
	if(canvasID == -26)
	{
		canvasID = 26;
	}
	if(canvasID == -27)
	{
		canvasID = 27;
	}
	if(canvasID == -28)
	{
		canvasID = 28;
	}
}

function showScore()
{
	score = 0;
}



/*showScore();*/
