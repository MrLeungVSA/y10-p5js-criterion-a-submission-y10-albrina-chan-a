
/*

declare sfx1 variable

*/

var buttonBack
var buttonARverbs
var buttonERverbs
var buttonIRverbs
var buttonARverbsLight
var buttonERverbsLight
var buttonIRverbsLight
var buttonBackToMainMenu1
var buttonBackToMainMenuDARK1
var sfx1;
var Correct;
var Wrong;

function preloadEasy()
{
	buttonARverbs = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_ar-verbs.png')
	buttonERverbs = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_er-verbs.png')
	buttonIRverbs = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_ir-verbs.png')
	buttonARverbsLight = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_ar-verbsLIGHT.png')
	buttonERverbsLight = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_er-verbsLIGHT.png')
	buttonIRverbsLight = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_ir-verbsLIGHT.png')
	button100 = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_back-to-main-menu.png')
	button99 = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_back-to-main-menu DARK.png')
	sfx1 = loadSound("https://bleungwpg.github.io/p5jsTutorial4.2/sounds/zapsplat_multimedia_game_sound_positive_action_tone_032_25091.mp3");
	Correct = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/True question correct answer sound effect.mp3");
	Wrong = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/WRONG BUZZER SOUND EFFECT (FREE DOWNLOAD).mp3")
}


function setupEasy()
{
	
  
}

function drawEasy()
{
	background (102,0,51)
	fill(225,225,225)
	
	text("Welcome to the Easy Game!",30,100)
	text("Here, you are expected to have some basic knowledge about Spanish conjugation for regular verbs (in present tense, of course).",30,125)
	text("But don't worry! It's very simple.",40,150)
	text("In each section, there will be a series of questions about the endings of regular -ar, -er or -ir verbs",30,175)
	text("You will be given two options, and your job will be to select the correct answer",30,200)
	text("Make sure you think carefully before selecting the answer!",30,225)
	text("Good luck!",30,250)
	text("When you're ready, select the section you want to play first.",50,325)
	

	
	
	if(mouseX > 100 && mouseX < 100+100 && mouseY > 380 && mouseY < 380+50)
	{
		image(buttonARverbsLight,100,380);
		if(mouseIsPressed)
		{
			canvasID = 7;
		}
	}
	else
	{
		image(buttonARverbs,100,380);
	}

		if (mouseX > 100 && mouseX < 100+100 && mouseY > 380 && mouseY < 380+50)
			{
				if (mouseIsPressed)
				{
					sfx1.play();
				}
			}


	if(mouseX > 300 && mouseX < 300+100 && mouseY > 380 && mouseY < 380+50)
	{
		image(buttonERverbsLight,300,380);
		if(mouseIsPressed)
		{
			canvasID = 14;
		}
	}
	else
	{
		image(buttonERverbs,300,380);
	}

		if (mouseX > 300 && mouseX < 300+100 && mouseY > 380 && mouseY < 380+50)
		{
			if (mouseIsPressed)
				{
					sfx1.play();
				}
		}


	if(mouseX > 500 && mouseX < 500+100 && mouseY > 380 && mouseY < 380+50)
	{
		image(buttonIRverbsLight,500,380);
		if(mouseIsPressed)
		{
			canvasID = 21;
		}
	}
	else
	{
		image(buttonIRverbs,500,380);
	}

		if (mouseX > 500 && mouseX < 500+100 && mouseY > 380 && mouseY < 380+50)
		{
			if (mouseIsPressed)
				{
					sfx1.play();
				}
		}

	
	if(mouseX > 500 && mouseX < 500+100 && mouseY > 60 && mouseY < 60+50)
	{
		image(button99,500,60);
		if(mouseIsPressed)
		{
			canvasID = 2;
		}
	}
	else
	{
		image(button100,500,60);
	}
		//image(buttonBackToMainMenu,230,30)
		
		
}

