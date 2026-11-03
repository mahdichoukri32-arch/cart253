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
  for (x = 0; x <= width; x += 15) {
    line(x, 0, x, width);
  }

  for (y = 0; y <= height; y += 15) {
    line(0, y, height, y);
  }
  let lineHue = map(mouseX, 0, width, 0, 360);
  console.log(lineHue);
  stroke(lineHue, 80, 90);
}

//   stroke(0);
//   line(0, 0, 0, height);

//   stroke(25);
//   line(50, 0, 50, height);

//   stroke(50);
//   line(100, 0, 100, height);

//   stroke(75);
//   line(150, 0, 150, height);

//   stroke(100);
//   line(200, 0, 200, height);

//   stroke(125);
//   line(250, 0, 250, height);

//   stroke(150);
//   line(300, 0, 300, height);

//   stroke(175);
//   line(350, 0, 350, height);

//   stroke(200);
//   line(400, 0, 400, height);

//   stroke(225);
//   line(450, 0, 450, height);

//   stroke(250);
//   line(500, 0, 500, height);
// }
