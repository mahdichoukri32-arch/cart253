/**
 * Do you control it ?
 * Mariam-Choukri Mahdi
 * 
 * Oh look, someone drew a mouse, you want to draw it. But can you do it ? 
 */

/**
 * Create a canvas and a white background, so it's seem the whole web browser was the canvas
*/
function setup() {
         createCanvas(1500, 800);
             background(255, 255, 255);
}




/**
 * Draw a mouse has a reference to the user to try out its drawing skills
*/
function draw() {

//The cursor and its limits

push();
strokeWeight(100);
const weight = map(abs(movedX), 0, 30, 10, 6);
pop();

//The cursor itself
 line(pmouseX, pmouseY, mouseX, mouseY);
 
pop();

// Draw a mouse 
push();
fill(211,211,211);
noStroke();
circle(750,400,200,200);


fill(211,211,211);
noStroke();
circle(680,320,100,100);


fill(211,211,211);
noStroke();
circle(820,320,100,100);
pop();

push();
fill(0,0,0);
noStroke();
circle(720,400,25,25);


fill(0,0,0);
noStroke();
circle(780,400,25,25);
pop();

push();
fill(255, 192, 203);
noStroke();
circle(750,450,15,15);
pop();
}
