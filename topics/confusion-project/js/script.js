/**
 * Confusion
 * Mariam-Choukri Mahdi
 * 
 * You seem confused and it is visble throught your eyes. 
 */

"use strict";

/**
 * Create a canvas
*/
function setup() {
        createCanvas(640, 480);

}


/**
 * Draw a face where the iris is moving inside the eyes.
*/
function draw() {
    background(100);
    //Draw the face 
    push();
    fill(160,82,45);
    stroke(139, 69, 19);
    strokeWeight(5);
    ellipse(320, 240, 400);
    pop();

    //Draw the eyes
    push();
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(2);
    ellipse(250, 250, 100);
    pop();

      push();
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(2);
    ellipse(450, 250, 100);
    pop();

    //Draw the iris 

    //Draw the mouth 
    push();
    fill(210, 43, 43);
    stroke(0, 0, 0);
    strokeWeight(2);
    ellipse(350, 350, 50)
}
