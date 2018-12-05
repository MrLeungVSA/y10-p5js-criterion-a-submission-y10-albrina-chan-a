
function preloadIntro()
{
	
}


function setupIntro()
{
	
  
}

function drawIntro()
{
	background(125,225,225)

	fill(1,1,1)
	text("This is the intro page\n\nClick anywhere to continue",30,50);

	if(mouseIsPressed)
	{
		canvasID = 2;

	}

	text("Credit for music goes to Benjamin TISSOT from www.bensound.com",30,450);
}