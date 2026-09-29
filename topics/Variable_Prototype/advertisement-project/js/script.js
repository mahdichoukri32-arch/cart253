/**
 * Advertisment
 * Mariam-Choukri Mahdi
 * 
 * With is an ad out of place if they aren't any place anymore.
 */

"use strict";

//The sun 

let sun = {
  x:0,
  y:35,
  size:130,
  r:255,
  g:165,
  b:0
};

let shake = {
  x:0,
  y:0,
};

let sky = {
  x:0,
  y:0
};



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
rect(100+shake.x, 60+shake.y, 400, 300);
pop();

push();
fill(0,0,0);
noStroke();
rect(250+shake.x,150+shake.y,100,300);
pop();

//The space sky
push();
fill(72, 61, 139);
noStroke();
rect(115+sky.x,75+sky.y,370,270);
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
fill(sun.r,sun.g,sun.b);
noStroke();
circle(sun.x, sun.y, sun.size);
pop();

//Sun size growth 
sun.size = sun.size + 5.0;

//Sun colour
sun.r = sun.r + 8;
sun.g = sun.g + 1;
sun.b = sun.b + 1;

//shake it 

shake.x = random(-2, 2);
shake.y = random(-2, 2);

sky.x = random(-2, 2);
sky.y = random(-2, 2);
}
