
var sfx1;

function preloadEndOfTENER()
{
	sfx1 = loadSound("https://bleungwpg.github.io/p5jsTutorial4.2/sounds/zapsplat_multimedia_game_sound_positive_action_tone_032_25091.mp3")
}

function setupEndOfTENER()
{
  
}


function drawEndOfTENER()
{
	background(32,32,32)
	
	fill(225,225,225)
	text("Congratulations! You have finished the section for the verb TENER ",30,100)
	text("Click anywhere to go back to the Hard Game Menu",30,130)
	
	if(mouseIsPressed)
	{
		canvasID = 4;
		sfx1.play();
	}

}