/**
 * Are you eating yourself ?
 * Mariam-Choukri Mahdi
 * 
 * You are putting too much stress to yourself to the point it consume you.
 */

"use strict";

// The pacman
let pacman={
  x:50,
  y:50,
  width:95,
  height: 95
}

let point={
  x: 90,
  y: 50,
  width: 20,
  height: 20
}
/**
 * Create a canvas
*/
function setup() {
  createCanvas(500, 500)
}



/**
 * Draw a pacman figure who follow up a small circle he tries to eat but instead eat itself
*/
function draw() {
  background(0);
    

    //Draw a pacman
    push();
    fill(255, 255, 0);
    noStroke();
    arc(pacman.x, pacman.y, pacman.width, pacman.height, QUARTER_PI,
  TWO_PI - QUARTER_PI,
  PIE);
    pop();
    //Draw a circle (a representation of your problems)
    push();
    fill(255, 20, 147);
    noStroke();
    circle(point.x, point.y, point.width, point.h);


}
