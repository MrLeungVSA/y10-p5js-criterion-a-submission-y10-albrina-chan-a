
var sfx1;

function preloadEndOfIRverbs()
{
	sfx1 = loadSound("https://bleungwpg.github.io/p5jsTutorial4.2/sounds/zapsplat_multimedia_game_sound_positive_action_tone_032_25091.mp3")
}

function setupEndOfIRverbs()
{
  
}


function drawEndOfIRverbs()
{
	background(32,32,32)
	
	fill(225,225,225)
	text("Congratulations! You have finished the section for -ir verbs. ",30,100)
	text("Click anywhere to go back to the Easy Game Menu",30,130)
	
	if(mouseIsPressed)
	{
		canvasID = 3;
		sfx1.play();
	}

}