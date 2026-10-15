/**
 * Introducing events 
 * Mariam-Choukri Mahdi
 * 
 * Taking a look at how events work in JavaScript and p5
 */

"use strict";

/**
 * Create a Canva with grey background 
*/
function setup() {
    createCanvas(400, 400);
    background(220, 220, 220);

}


/** Does nothing !
*/
function draw() {

}

function mousePressed() {
    push();
    noStroke();
    fill(255, 192, 203);
    ellipse(mouseX, mouseY, 50); 
    pop();
}