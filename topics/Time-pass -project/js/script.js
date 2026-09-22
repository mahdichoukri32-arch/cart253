/**
 * Did you see the time ?
 * Mariam-Choukri Mahdi
 * 
 * Time have been passing faster than you thinks. 
 */

"use strict";

/**
 * Create the canvas
*/
function setup() {
    createCanvas(640, 480);


}


/**
 * Draw a background where the day pass it when we move the mouse.
 * The mouse change the colour of the sky,sun/moon and field.  
*/
function draw() {
    background(0, 191, 255);
    //Draw a sun or moon
    push();
    fill(255, 215, 0);
    noStroke();
    ellipse(500, 150,130);
    pop();

    //Draw the beach 
    push();
    fill(250, 250, 210);
    noStroke();
    rect(0, 320, 680, 100);
    pop();

    //Draw the sea
    push();
    fill(175, 238, 238);
    noStroke();
    rect(-10, 380, 670, 165);
    pop();


    


}