/**
 * Keep the Pressure On
 * Mariam-Choukri Mahdi
 * 
 * Until when will you be able to keep up the pressure
 */

"use strict";

// The balloon
let balloon = {
    x: 320,
    y: 240,
    size: 80,
    red: 100,
    green: 20,
    blue: 20
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(640, 480); 
}


/**
 * Draw a ballon that growth more to a point it take the whole canvas
*/
function draw() {
background(150);

//Balloon take all over the place
balloon.size = balloon.size + 1.8;

//Pression of the ballon impact its looks
balloon.red = balloon.red + 1;
balloon.green = balloon.green + 0.6;
balloon.blue = balloon.blue + 0.6;

// Draw the balloon
push();
fill(balloon.red, balloon.green, balloon.blue);
noStroke();
ellipse(balloon.x, balloon.y, balloon.size);
pop();
}