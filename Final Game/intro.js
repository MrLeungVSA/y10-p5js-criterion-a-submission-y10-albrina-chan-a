
var juegoDEmesa
var table

function preloadIntro()
{
	juegoDEmesa = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/original-84221-1.jpg')
	table = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/others/original-1745661-1.jpg')
}


function setupIntro()
{
	
  
}

function drawIntro()
{
	background(255,51,51)

	fill(255,255,51)
	rect(-1,125,801,250)

	image(juegoDEmesa,230,115)



	strokeWeight(0)
	fill(200,200,200)
	text("Welcome to the Spanish Conjugation Game!",270,50)
	text("Click anywhere to continue",30,80);

	if(mouseIsPressed)
	{
		canvasID = 2;
	}

	text("Credit for music goes to Benjamin TISSOT from www.bensound.com",30,450);
}
