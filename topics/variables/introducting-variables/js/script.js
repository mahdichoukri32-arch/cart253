/**
 * Introducing variables
 * Mariam-Choukri Mahdi
 * 
 * Learning what a variable is and does
 *
 */

"use strict";

/**
 * Create a canvas
*/
function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(0);
    
    // Draw a circle in the centre of the canvas
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(320, 320, 100, 100);
    pop();
}

function draw() {
    background(0);
    
    // Draw a circle in the centre of the canvas
    push();
    noStroke();
    fill(mouseX, mouseY, 0);
    ellipse(width/2,height/2, mouseX, mouseY);
    pop();
}