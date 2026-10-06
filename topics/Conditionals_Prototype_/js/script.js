/**
 * Boom !
 * Mariam-Choukri Mahdi
 * 
 * Do you choose to explode the bomb or to not ? 
 */

"use strict";

/**
 * Create a wide canva so when it's explode the whole screen seem to be affected. 
*/
function setup() {
createCanvas(1500,800);
background(255,255,255);
}


/**
 * Draw a black bomb with a black circle, the wick is brown line and spark is represented by an orange circle. 
*/

//Draw the bomb
function draw() {
    //Wick
    push();
    stroke(222, 184, 135);
    strokeWeight(15);
    line(850,150,1050,8);
    pop();

    //Boomb
    push();
    fill(0,0,0);
    noStroke ();
    circle(720,420,750,750);
    pop();

    //Shadow
    push();
    fill(105,105,105);
    noStroke();
    circle(500,250,150,150)
    pop();

    //Spark
    push();
    fill(255, 69, 0);
    noStroke();
    circle(1050,15,30);
    pop();
}