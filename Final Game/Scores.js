
var buttonBackToMainMenu1
var buttonBackToMainMenuDARK1

function preloadScores()
{
	button100 = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_back-to-main-menu.png')
	button99 = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/button_back-to-main-menu DARK.png')
}


function setupScores()
{
	
  
}

function drawScores()
{
	background (0,0,51)
	fill(225,225,225)

	text("Score Page",350,70)
	text("What does my score mean?",30,100)
	text("Well:",30,125)

	fill(153,204,255)
	text("If you got 0-60 points, then congratulations! You get a Bronze award!",45,175)
	text("Well done! You made some mistakes, but nothing to worry about! You're still a beginner starting to learn basic present tense conjugation.",30,200)
	text("With more practice, you'll eventually get the hang of it!",30,225)

	fill(255,204,153)
	text("If you got 65-120 points, then congratulations! You get a Silver award!",45,250)
	text("Well done! You have a relatively good understanding of basic present tense conjugation.",30,275)
	text("Keep practicing, and you'll be an expert soon enough!",30,300)

	fill(153,255,153)
	text("If you got 125-180 points, then congratulations! You get a Gold award!",45,325)
	text("Excellent! You have an extensive knowledge of basic present tense conjugation. But just be careful of careless mistakes!",30,350)
	text("Keep practicing, and even try moving onto some other tenses if you feel confident!",30,375)

	fill(255,153,204)
	text("If you got 185-240 points, then congratulations! You get a Platinum award!",45,400)
	text("Amazing! You obviously know basic present tense conjugation very well.",30,425)
	text("You're definitely ready for some more challenging tenses if you're feeling up to it!",30,450)


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
}