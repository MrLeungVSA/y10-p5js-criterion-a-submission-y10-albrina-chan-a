
var buttonBack

function preloadEasy()
{
	buttonBack = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.2-master (Current)/p5jsTutorial3.2-master (Current) /p5jsTutorial3.2-master/images/buttonBack.png')
}


function setupEasy()
{
	
  
}

function drawEasy()
{
	background (225,0,0)

	fill(0,0,0)
	text("This is the easy game",100,100)

	image(buttonBack,350,200)
	if(mouseIsPressed)
		{
			canvasID = -2
		}
		
}
