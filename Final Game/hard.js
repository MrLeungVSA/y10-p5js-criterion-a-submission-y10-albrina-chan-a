
var buttonHacer
var buttonHacerDARK
var buttonIr
var buttonIrDARK
var buttonPoder
var buttonPoderDARK
var buttonSer 
var buttonSerDARK
var buttonTener
var buttonTenerDARK
var buttonBackToMainMenu1
var buttonBackToMainMenuDARK1
var sfx1;

function preloadHard()
{
	buttonHacer = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_hacer.png')
	buttonHacerDARK = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_hacerDARK.png')
	buttonIr = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_ir.png')
	buttonIrDARK = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_irDARK.png')
	buttonPoder = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_poder.png')
	buttonPoderDARK = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_poderDARK.png')
	buttonSer = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_ser.png')
	buttonSerDARK = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_serDARK.png')
	buttonTener = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_tener.png')
	buttonTenerDARK = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_tenerDARK.png')
	buttonBackToMainMenu = ('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_back-to-main-menu.png')
	buttonBackToMainMenuDARK = ('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_back-to-main-menu DARK.png')
	button100 = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_back-to-main-menu.png')
	button99 = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_back-to-main-menu DARK.png')
	sfx1 = loadSound("https://bleungwpg.github.io/p5jsTutorial4.2/sounds/zapsplat_multimedia_game_sound_positive_action_tone_032_25091.mp3");
}


function setupHard()
{
	
  
}

function drawHard()
{
	background (0,51,102)
	fill(225,225,225)

	text("Welcome to the Hard Game!",30,100)
	text("The Hard Game is much more difficult than the Easy Game",30,125)
	text("Here, you are expected to have a basis of knowledge about Spanish conjugation for irregular verbs",30,150)
	text("In this section, there will be a series of questions about the endings of commonly used irregular verbs",30,175)
	text("You will be given three options, and your job will be to select the correct answer",30,200)
	text("Make sure you think carefully before selecting the answer",30,225)
	text("Good luck! And remember: For some of the irregular verbs, the stem also changes.",30,250)
	text("When you're ready, select the section you want to play first.",50,325)

	
	if(mouseX > 80 && mouseX < 80+100 && mouseY > 380 && mouseY < 380+50)
	{
		image(buttonHacer,80,380);
		if(mouseIsPressed)
		{
		canvasID = 28;
		}
	}
	else
	{
		image(buttonHacerDARK,80,380);
	}
		if (mouseX > 80 && mouseX < 80+100 && mouseY > 380 && mouseY < 380+50)
			{
				if (mouseIsPressed)
				{
					sfx1.play();
				}
			}


	if(mouseX > 225 && mouseX < 225+50 && mouseY > 380 && mouseY < 380+50)
	{
		image(buttonIr,225,380);
		if(mouseIsPressed)
	{
		canvasID = 35;
	}
	}
	else
	{
		image(buttonIrDARK,225,380);
	}
		if (mouseX > 225 && mouseX < 225+100 && mouseY > 380 && mouseY < 380+50)
			{
				if (mouseIsPressed)
				{
					sfx1.play();
				}
			}


	if(mouseX > 340 && mouseX < 340+100 && mouseY > 380 && mouseY < 380+50)
	{
		image(buttonPoder,340,380);
		if(mouseIsPressed)
	{
		canvasID = 42;
	}
	}
	else
	{
		image(buttonPoderDARK,340,380);
	}
		if (mouseX > 340 && mouseX < 340+100 && mouseY > 380 && mouseY < 380+50)
			{
				if (mouseIsPressed)
				{
					sfx1.play();
				}
			}


	if(mouseX > 497 && mouseX < 497+100 && mouseY > 380 && mouseY < 380+50)
	{
		image(buttonSer,497,380);
		if(mouseIsPressed)
	{
		canvasID = 49;
	}
	}
	else
	{
		image(buttonSerDARK,497,380);
	}
		if (mouseX > 497 && mouseX < 497+100 && mouseY > 380 && mouseY < 380+50)
			{
				if (mouseIsPressed)
				{
					sfx1.play();
				}
			}


	if(mouseX > 639 && mouseX < 639+100 && mouseY > 380 && mouseY < 380+50)
	{
		image(buttonTener,639,380);
		if(mouseIsPressed)
	{
		canvasID = 56;
	}
	}
	else
	{
		image(buttonTenerDARK,639,380);
	}
		if (mouseX > 639 && mouseX < 639+100 && mouseY > 380 && mouseY < 380+50)
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


	/*
	if(mouseX > 530 && mouseX < 530+100 && mouseY > 30 && mouseY < 30+50)
	{
		image(buttonBackToMainMenu,530,30)
		if(mouseIsPressed)
		{
			canvasID = 2;
		}
	}
	else
	{
		image(buttonBackToMainMenuDARK,530,30)
	}
	*/
}