/**
 * Do you control it ?
 * Mariam-Choukri Mahdi
 * 
 * Oh look, someone drew a mouse, you want to draw it. But can you do it ? 
 */

/**
 * Create a canvas
*/
function setup() {
         createCanvas(1500, 800);
}




/**
 * Draw a face where the iris is moving inside the eyes.
*/
function draw() {
    background(255, 255, 255);

// Draw a mouse 
push();
fill(211,211,211);
noStroke();
circle(750,400,200,200);

push();
fill(211,211,211);
noStroke();
circle(680,320,100,100);

push();
fill(211,211,211);
noStroke();
circle(820,320,100,100);

push();
fill(0,0,0);
noStroke();
circle(720,400,25,25);

push();
fill(0,0,0);
noStroke();
circle(780,400,25,25);

push();
fill(255, 192, 203);
noStroke();
circle(750,450,15,15);


}
