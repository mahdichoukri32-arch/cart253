/**
 * Touch Grass
 * Mariam-Choukri Mahdi
 * 
 * We have consume to much internet lately, take a break. TOUCH GRASS !!!
 */

"use strict";

/**
 * Create a panting when the reality was not capture by the picture. 
*/

let fontBogle;

async function setup() {
    createCanvas(700, 700);
    fontBogle = await
    loadFont('assets/fonts/BBH_Bogle/BBHBogle-Regular.ttf');
}


/**
 * Grey when internet, when offline it show a beautiful background.  
*/
function draw() {
    background(128, 128, 128);

    //Draw a whole flower, dull and stoic, lacking of life

    drawFlower ();

    //Draw flames attacking the lonely "living" organism  

    drawFlames();

    //Devasting message 

    drawText ();

}

function drawFlower () {
    drawStem ();
    drawLeaves ();
    drawFlowerCenter ();
    drawPetals();
}

// Stem -> barely stick to the ground
function drawStem () {
    push();
    stroke(95, 95, 95);
    strokeWeight(12);
    line(350, 350, 350, 700);
    pop();
}

//Pistils -> visible but nothing is pollinating them 
function drawFlowerCenter () {
    push();
    noStroke();
    fill(105, 105, 105);
    circle(350, 350, 150);
    pop();
}

//Petals -> separate to each other lack of unity
function drawPetals () {
    push();
    noStroke();
    fill(169, 169, 169);
   circle(475, 350, 100); 
   circle(413, 458, 100); 
   circle(288, 458, 100); 
   circle(225, 350, 100); 
   circle(288, 242, 100); 
   circle(413, 242, 100); 
    pop();
}

//Leaves -> first victim of the fire 
function drawLeaves () {
    push();
    fill(95, 95, 95);
    noStroke();
    ellipse(320,530,60,30);
    ellipse(380,620,60,30);
    pop();
}

function drawFlames () {
    drawLeftFlames ();
    drawRightFlames ();
}

function drawLeftFlames () {

push();

noStroke();
    
// Left flames/grass

//Dark flames -background-

fill(150);
triangle(0, 700, 80, 700, 110, 350);
triangle(30, 700, 125, 700, 135, 430);



fill(160);
triangle(55, 700, 125, 700, 145, 430);
triangle(245, 700, 320, 700, 300, 565);
triangle(125, 700, 175, 700, 195, 430);


//Medium grey flames/grass

fill(192, 192, 192);
triangle(0, 700, 0, 390, 55, 335);
triangle(115, 700, 175, 700, 205, 485);


//Light grey flames/grass

fill(211, 211, 211);
triangle(30, 700, 125, 700, 135, 430);
}

function drawRightFlames () {

// Right flames/grass

//Dark flames/grass -background-

fill(150);
triangle(500, 700, 600, 700, 580, 475);


fill(160);
triangle(525, 700, 650, 700, 525, 420);

//Medium grey flames/grass

fill(192, 192, 192);
//triangle(470, 700, 440, 465, 550, 700);
triangle(580, 700, 700, 700, 640, 500);

//Light grey flames/grass

fill(211, 211, 211);
triangle(420, 700, 450, 530, 510, 700);
triangle(620, 700, 650, 450, 700, 700);

pop();

}

function drawText () {
    push();
    fill(0);
    textSize(30);
    textAlign(CENTER);
    textFont(fontBogle);
    text("The fatal fate of a flower  captuared in a picture",350,120)
    pop();
}

