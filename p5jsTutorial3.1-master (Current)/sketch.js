var buttonYes;
var buttonNo;
var buttonMaybe;
var imgWolf;
var button2X;
var button2Y;

var buttonATL
var buttonPATD
var buttonFOB

var buttonBut
var buttonWhy
var buttonWhyNot

var buttonWhatIs
var buttonThe
var buttonMeaningOfLife

var buttonI 
var buttonAm 
var buttonYou

function preload()
{
	imgWolf = loadImage(' https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.1-master (Current)/wolf.jpg');

	buttonMaybe = loadImage(' https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.1-master (Current)/button_maybe.png');
	buttonNo = loadImage(' https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.1-master (Current)/button_no.png');
	buttonYes = loadImage(' https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.1-master (Current)/button_yes.png');

	buttonATL = loadImage(' https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.1-master (Current)/button_atl.png ');
	buttonPATD = loadImage(' https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.1-master (Current)/button_patd.png ');
	buttonFOB = loadImage(' https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.1-master (Current)/button_fob.png ');

	buttonBut = loadImage(' https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.1-master (Current)/button_but.png');
	buttonWhy = loadImage(' https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.1-master (Current)/button_why.png');
	buttonWhyNot = loadImage(' https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.1-master (Current)/button_why-not.png');

	buttonWhatIs = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.1-master (Current)/button_what-is.png');
	buttonThe = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.1-master (Current)/button_the.png');
	buttonMeaningOfLife = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.1-master (Current)/button_meaning-of-life.png');

	buttonI = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.1-master (Current)/button_i.png');
	buttonAm = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.1-master (Current)/button_am.png');
	buttonYou = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-albrina-chan-a/p5jsTutorial3.1-master (Current)/button_you.png');
}


function setup()
{
	createCanvas(800,600);

	button2X = 1;
	button2Y = 1;
  
}

function draw()
{
	background(125,125,125)


	// Example 1: easy to understand - Start

	image(imgWolf,100,150);

	// Example 1: easy to understand - End




	// Example 2: less code but harder to understand - Start

	strokeWeight(3);



	if (mouseX > button2X && mouseX < button2X + 150 && mouseY > button2Y && mouseY < button2Y+50)
	{
		image(buttonNo,button2X,button2Y);
		if (mouseIsPressed)
		{
			image(buttonMaybe,button2X,button2Y);
		}
	}
	else
	{
		image(buttonYes,button2X,button2Y);
	}

	if(mouseX > 700 && mouseX < 700+100 && mouseY > 0 && mouseY < 0+50)
	{
		image(buttonPATD,700,0);
		if(mouseIsPressed)
		{
			image(buttonFOB,700,0);
		}
	}
	else
	{
		image(buttonATL,700,0);
	}

	if(mouseX > 0 && mouseX < 0+100 && mouseY > 560 && mouseY < 560+50)
	{
		image(buttonWhy,0,560);
		if(mouseIsPressed)
		{
			image(buttonWhyNot,0,560);
		}
	}
	else
	{
		image(buttonBut,0,560);
	}

	if(mouseX > 650 && mouseX < 650+100 && mouseY > 560 && mouseY < 560+50)
	{
		image(buttonThe,710,560);
		if(mouseIsPressed)
		{
			image(buttonMeaningOfLife,600,560);
		}
	}
	else
	{
		image(buttonWhatIs,680,560)
	}

	if(mouseX > 350 && mouseX < 350+100 && mouseY > 100 && mouseY < 100+50)
	{
		image(buttonAm,340,100);
		if(mouseIsPressed)
		{
			image(buttonYou,330,100);
		}
	}
	else
	{
		image(buttonI,350,100)
	}
	// Example 2: less code but harder to understand - End


}