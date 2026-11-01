/**
 * Soap
 * Mariam-Choukri
 *
 * Are you being  fast enough to pop the buble!
 */

"use strict";

/**
 * Create a Canvas
 */
function setup() {
  createCanvas(640, 640);
}

/**
 * An bright pink foaming soap near by a water source
 */
function draw() {
  background("#B0E0E6");

  //Water
  push();
  fill("#4682B4");
  noStroke();
  rect(0, 400, 500, 880);
  pop();

  //Bathhub
  push();
  fill("#e6fcff");
  stroke("#91b8bd");
  strokeWeight(2);
  rect(0, 400, 640, 840);
  pop();

  //Water
  push();
  fill("#aad9ff");
  noStroke();
  rect(0, 430, 640, 300);
  pop();

  //Soap
  push();
  fill("#ff63b6");
  stroke("#e068a8");
  strokeWeight(2);
  rect(280, 465, 100, 80, 8);
  pop();
}
