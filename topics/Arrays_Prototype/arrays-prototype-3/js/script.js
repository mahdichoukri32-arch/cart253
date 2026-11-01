/**
 * Bubble Tea
 * Mariam-Choukri Mahdi
 *
 * Are you be able to eat all tapioca buble in your brown sugar tea !
 */

"use strict";

/**
 * Create a canvas
 */
function setup() {
  createCanvas(640, 640);
}

/**
 * I draw a bubble tea drink where you will find tapioca bubles.
 * You like tapioca bubbles, this time you want them to disappear so you drink the delicious tea.
 * Maybe this time, the tapioca were not well conserve.
 */
function draw() {
  background("#d3ffd3");

  //Tea
  push();
  fill("#ffbd84");
  noStroke();
  quad(145, 280, 495, 280, 460, 620, 180, 620);
  pop();

  //Straw
  push();
  fill("#ff69b4");
  noStroke();
  rect(300, 40, 35, 450);
  pop();

  //Cup
  push();
  fill(255, 255, 255, 30);
  stroke("#c0e7ff");
  strokeWeight(5);
  arc(320, 280, 350, 350, PI, TWO_PI, CHORD);
  pop();

  //Tea cup
  push();
  fill(255, 255, 255, 30);
  stroke("#c0e7ff");
  strokeWeight(5);
  quad(145, 280, 495, 280, 460, 620, 180, 620);
  pop();
}
