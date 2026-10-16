/**
 * Eggs
 * Mariam-Choukri Mahdi
 * 
 *You have cook an egg. Don't forget to watch the timer.
 */

"use strict";

/**
 * Create a kitchen oven to cook the egg.
*/
function setup() {
    createCanvas(400, 400);
}


/**
 * Draw an egg that will slowly burn if you don't pay attention
*/
function draw() {
    background(100, 149, 237)

    //Pan 
    push()
    fill(0)
    stroke(112, 128, 144);
    strokeWeight(5)
    rect(175,300,50,100);
    pop();

    push();
    fill(0);
    stroke(112, 128, 144);
    strokeWeight(5)
    circle(200, 200, 250);
    pop();

    //Eggs
    push();
    fill(255)
    noStroke
    circle(200,200,120);
    pop();

    push();
    fill(255, 215, 0);
    noStroke();
    circle(200, 200, 50);
    pop();

}