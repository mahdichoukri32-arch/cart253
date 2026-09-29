/**
 * Advertisment
 * Mariam-Choukri Mahdi
 * 
 * With is an ad out of place if they aren't any place anymore.
 */

"use strict";


/**
 * Create a canvas
*/
function setup () {
  createCanvas(600, 400);
}



/**
 * Draw the space with the planet Mars on ad display panel 
*/

//The sky
function draw() {
    background(95, 158, 160);

//The ad display panel
push();
fill(0,0,0);
noStroke();
rect(100, 60, 400, 300);
pop();

push();
fill(0,0,0);
noStroke();
rect(250,150,100,300);
pop();

//The space sky
push();
fill(72, 61, 139);
noStroke();
rect(115,75,370,270);
pop();

//The Mars
push();
fill(255,69,0);
stroke(255,0,0);
strokeWeight(5)
circle(380,200,120,120);
pop();

//The Earth
push();
fill(95, 158, 160);
noStroke();
circle(200,280,70,70);
pop();

//The continent
push();
fill(128, 128, 0);
noStroke();
rect(200,280,20,15);
pop();

push();
fill(128, 128, 0);
noStroke();
rect(175, 270, 10, 30);
pop();

push();
fill(128, 128, 0);
noStroke();
rect(195,255, 25, 15);
pop();

//The sun
push();
fill(255, 165, 0);
noStroke();
circle(0,35,130,130);
pop();
}
