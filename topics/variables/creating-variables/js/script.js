/**
 * Creating variables
 * Mariam-Choukri Mahdi
 * 
 * Experimenting with creating variables 
 */

"use strict";

let cheeseRed = 250;
let cheeseGreen = 150;
let cheeseBlue = 0;

let holeShade = 0;
let holeSize = 40;
let holeX = 10;
let holeY = 400;
/**
 * Create the canvas
*/
function setup() {
    createCanvas(480, 480);

}

/**
 * Drawing a hole in a piece of cheese
*/

function draw() {
   // The cheese
   background(cheeseRed, cheeseGreen, cheeseBlue);

   //The hole 
   push();
   noStroke();
   fill(0);
   ellipse(140, 175, holeSize);
   pop();
}