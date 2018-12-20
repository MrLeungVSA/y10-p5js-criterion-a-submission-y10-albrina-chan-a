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
canvas ID - 30 = HacerEL
canvas ID - 31 = HacerNOS
canvas ID - 32 = HacerVOS
canvas ID - 33 = HacerELLOS
canvas ID - 34 = EndOfHACER

canvas ID - 35 = IrYO
canvas ID - 36 = IrTU
canvas ID - 37 = IrEL
canvas ID - 38 = IrNOS
canvas ID - 39 = IrVOS
canvas ID - 40 = IrELLOS
canvas ID - 41 = EndOfIR

canvas ID - 42 = PoderYO
canvas ID - 43 = PoderTU
canvas ID - 44 = PoderEL
canvas ID - 45 = PoderNOS
canvas ID - 46 = PoderVOS
canvas ID - 47 = PoderELLOS
canvas ID - 48 = EndOfPODER

canvas ID - 49 = SerYO
canvas ID - 50 = SerTU
canvas ID - 51 = SerEL
canvas ID - 52 = SerNOS
canvas ID - 53 = SerVOS
canvas ID - 54 = SerELLOS
canvas ID - 55 = EndOfSER

canvas ID - 56 = TenerYO
canvas ID - 57 = TenerTU
canvas ID - 58 = TenerEL
canvas ID - 59 = TenerNOS
canvas ID - 60 = TenerVOS
canvas ID - 61 = TenerELLOS
canvas ID - 62 = EndOfTENER

canvas ID - 63 = Scores

declare bgm variable
*/

var canvasID;
var bgm;
var score;

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
	preloadHacerTU();
	preloadHacerEL();
	preloadHacerNOS();
	preloadHacerVOS();
	preloadHacerELLOS();
	preloadEndOfHACER();

	preloadIrYO();
	preloadIrTU();
	preloadIrEL();
	preloadIrNOS();
	preloadIrVOS();
	preloadIrELLOS();
	preloadEndOfIR();

	preloadPoderYO();
	preloadPoderTU();
	preloadPoderEL();
	preloadPoderNOS();
	preloadPoderVOS();
	preloadPoderELLOS();
	preloadEndOfPODER();

	preloadSerYO();
	preloadSerTU();
	preloadSerEL();
	preloadSerNOS();
	preloadSerVOS();
	preloadSerELLOS();
	preloadEndOfSER();

	preloadTenerYO();
	preloadTenerTU();
	preloadTenerEL();
	preloadTenerNOS();
	preloadTenerVOS();
	preloadTenerELLOS();
	preloadEndOfTENER();

	preloadScores();


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
	setupHacerTU();
	setupHacerEL();
	setupHacerNOS();
	setupHacerVOS();
	setupHacerELLOS();
	setupEndOfHACER();

	setupIrYO();
	setupIrTU();
	setupIrEL();
	setupIrNOS();
	setupIrVOS();
	setupIrELLOS();
	setupEndOfIR();

	setupPoderYO();
	setupPoderTU();
	setupPoderEL();
	setupPoderNOS();
	setupPoderVOS();
	setupPoderELLOS();
	setupEndOfPODER();

	setupSerYO();
	setupSerTU();
	setupSerEL();
	setupSerNOS();
	setupSerVOS();
	setupSerELLOS();
	setupEndOfSER();

	setupTenerYO();
	setupTenerTU();
	setupTenerEL();
	setupTenerNOS();
	setupTenerVOS();
	setupTenerELLOS();
	setupEndOfTENER();

	setupScores();

	score = 0;
	canvasID = 1;

	createCanvas(800,500);

	// play music during setup so that it doesn't loop infinitely
	bgm.play();

}

function increaseScore()
{
	score += 5;
	console.log('increase score');
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
		showScore();
	}
	if(canvasID == 3)
	{
		drawEasy();
		showScore();
	}
	if(canvasID == 4)
	{
		drawHard();
		showScore();
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
		showScore();
	}
	if(canvasID == 8)
	{
		drawARverbsTU();
		showScore();
	}
	if(canvasID == 9)
	{
		drawARverbsEL();
		showScore();
	}
	if(canvasID == 10)
	{
		drawARverbsNOS();
		showScore();
	}
	if(canvasID == 11)
	{
		drawARverbsVOS();
		showScore();
	}
	if(canvasID == 12)
	{
		drawARverbsELLOS();
		showScore();
	}
	if(canvasID == 13)
	{
		drawEndOfARverbs();
		showScore();
	}
	if(canvasID == 14)
	{
		drawERverbsYO();
		showScore();
	}
	if(canvasID == 15)
	{
		drawERverbsTU();
		showScore();
	}
	if(canvasID == 16)
	{
		drawERverbsEL();
		showScore();
	}
	if(canvasID == 17)
	{
		drawERverbsNOS();
		showScore();
	}
	if(canvasID == 18)
	{
		drawERverbsVOS();
		showScore();
	}
	if(canvasID == 19)
	{
		drawERverbsELLOS();
		showScore();
	}
	if(canvasID == 20)
	{
		drawEndOfERverbs();
		showScore();
	}
	if(canvasID == 21)
	{
		drawIRverbsYO();
		showScore();
	}
	if(canvasID == 22)
	{
		drawIRverbsTU();
		showScore();
	}
	if(canvasID == 23)
	{
		drawIRverbsEL();
		showScore();
	}
	if(canvasID == 24)
	{
		drawIRverbsNOS();
		showScore();
	}
	if(canvasID == 25)
	{
		drawIRverbsVOS();
		showScore();
	}
	if(canvasID == 26)
	{
		drawIRverbsELLOS();
		showScore();
	}
	if(canvasID == 27)
	{
		drawEndOfIRverbs();
		showScore();
	}
	if(canvasID == 28)
	{
		drawHacerYO();
		showScore();
	}
	if(canvasID == 29)
	{
		drawHacerTU();
		showScore();
	}
	if(canvasID == 30)
	{
		drawHacerEL();
		showScore();
	}
	if(canvasID == 31)
	{
		drawHacerNOS();
		showScore();
	}
	if(canvasID == 32)
	{
		drawHacerVOS();
		showScore();
	}
	if(canvasID == 33)
	{
		drawHacerELLOS();
		showScore();
	}
	if(canvasID == 34)
	{
		drawEndOfHACER();
		showScore();
	}
	if(canvasID == 35)
	{
		drawIrYO();
		showScore();
	}
	if(canvasID == 36)
	{
		drawIrTU();
		showScore();
	}
	if(canvasID == 37)
	{
		drawIrEL();
		showScore();
	}
	if(canvasID == 38)
	{
		drawIrNOS();
		showScore();
	}
	if(canvasID == 39)
	{
		drawIrVOS();
		showScore();
	}
	if(canvasID == 40)
	{
		drawIrELLOS();
		showScore();
	}
	if(canvasID == 41)
	{
		drawEndOfIR();
		showScore();
	}
	if(canvasID == 42)
	{
		drawPoderYO();
		showScore();
	}
	if(canvasID == 43)
	{
		drawPoderTU();
		showScore();
	}
	if(canvasID == 44)
	{
		drawPoderEL();
		showScore();
	}
	if(canvasID == 45)
	{
		drawPoderNOS();
		showScore();
	}
	if(canvasID == 46)
	{
		drawPoderVOS();
		showScore();
	}
	if(canvasID == 47)
	{
		drawPoderELLOS();
		showScore();
	}
	if(canvasID == 48)
	{
		drawEndOfPODER();
		showScore();
	}
	if(canvasID == 49)
	{
		drawSerYO();
		showScore();
	}
	if(canvasID == 50)
	{
		drawSerTU();
		showScore();
	}
	if(canvasID == 51)
	{
		drawSerEL();
		showScore();
	}
	if(canvasID == 52)
	{
		drawSerNOS();
		showScore();
	}
	if(canvasID == 53)
	{
		drawSerVOS();
		showScore();
	}
	if(canvasID == 54)
	{
		drawSerELLOS();
		showScore();
	}
	if(canvasID == 55)
	{
		drawEndOfSER();
		showScore();
	}
	if(canvasID == 56)
	{
		drawTenerYO();
		showScore();
	}
	if(canvasID == 57)
	{
		drawTenerTU();
		showScore();
	}
	if(canvasID == 58)
	{
		drawTenerEL();
		showScore();
	}
	if(canvasID == 59)
	{
		drawTenerNOS();
		showScore();
	}
	if(canvasID == 60)
	{
		drawTenerVOS();
		showScore();
	}
	if(canvasID == 61)
	{
		drawTenerELLOS();
		showScore();
	}
	if(canvasID == 62)
	{
		drawEndOfTENER();
		showScore();
	}
	if(canvasID == 63)
	{
		drawScores();
		showScore();
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
	if(canvasID == -29)
	{
		canvasID = 29;
	}
	if(canvasID == -30)
	{
		canvasID = 30;
	}
	if(canvasID == -31)
	{
		canvasID = 31;
	}
	if(canvasID == -32)
	{
		canvasID = 32;
	}
	if(canvasID == -33)
	{
		canvasID = 33;
	}
	if(canvasID == -34)
	{
		canvasID = 34;
	}
	if(canvasID == -35)
	{
		canvasID = 35;
	}
	if(canvasID == -36)
	{
		canvasID = 36;
	}
	if(canvasID == -37)
	{
		canvasID = 37;
	}
	if(canvasID == -38)
	{
		canvasID = 38;
	}
	if(canvasID == -39)
	{
		canvasID = 39;
	}
	if(canvasID == -40)
	{
		canvasID = 40;
	}
	if(canvasID == -41)
	{
		canvasID = 41;
	}
	if(canvasID == -42)
	{
		canvasID = 42;
	}
	if(canvasID == -43)
	{
		canvasID = 43;
	}
	if(canvasID == -44)
	{
		canvasID = 44;
	}
	if(canvasID == -45)
	{
		canvasID = 45;
	}
	if(canvasID == -46)
	{
		canvasID = 46;
	}
	if(canvasID == -47)
	{
		canvasID = 47;
	}
	if(canvasID == -48)
	{
		canvasID = 48;
	}
	if(canvasID == -49)
	{
		canvasID = 49;
	}
	if(canvasID == -50)
	{
		canvasID = 50;
	}
	if(canvasID == -51)
	{
		canvasID = 51;
	}
	if(canvasID == -52)
	{
		canvasID = 52;
	}
	if(canvasID == -53)
	{
		canvasID = 53;
	}
	if(canvasID == -54)
	{
		canvasID = 54;
	}
	if(canvasID == -55)
	{
		canvasID = 55;
	}
	if(canvasID == -56)
	{
		canvasID = 56;
	}
	if(canvasID == -57)
	{
		canvasID = 57;
	}
	if(canvasID == -58)
	{
		canvasID = 58;
	}
	if(canvasID == -59)
	{
		canvasID = 59;
	}
	if(canvasID == -60)
	{
		canvasID = 60;
	}
	if(canvasID == -61)
	{
		canvasID = 61;
	}
	if(canvasID == -62)
	{
		canvasID = 62;
	}
	if(canvasID == -63)
	{
		canvasID = 63;
	}
}





function showScore()
{
	fill(255,255,255);
	text("Score: "+score,10,20);
	console.log('show score');
}
