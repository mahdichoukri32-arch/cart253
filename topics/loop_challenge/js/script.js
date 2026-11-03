/**
 * Lines
 * Mariam-Choukri Mahdi, Alycia Malonga and Jeremy Duverseau
 *
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
  background("black");

  //Initial positon of our codes
  let x = 0;
  let y = 0;

  //We added 50 to the x and the width
  while (x <= width) {
    x += 50;

    push();
    stroke(x / 2);
    line(x, 0, x, width);
    pop();
  }
  while (y <= height) {
    y += 50;
    push();
    stroke(y / 2);
    line(0, y, height, y);
    pop();
  }

  // We made the line pretty close to each others
  for (x = 0; x <= width; x += 10) {
    line(x, 0, x, width);
  }

  for (y = 0; y <= height; y += 10) {
    line(0, y, height, y);
  }
  let lineHue = map(mouseX, 0, width, 0, 360);
  console.log(lineHue);
  stroke(lineHue, 80, 90);
}
