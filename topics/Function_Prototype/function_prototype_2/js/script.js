/**
 * Spaceship
 * Mariam-Choukri
 *
 * Spaceship are in competition, the one which drives faster will be the winner. Pays attention to them or you will miss!
 */

"use strict";

let spaceship1 = {
  //Positions
  x: 150,
  y: 80,
  //Dimensions
  size: 100,
  //Colour
  fill: "#00ffff",
};

let spaceship2 = {
  //Positions
  x: 300,
  y: 80,
  //Dimensions
  size: 100,
  //Colour
  fill: "#ffb700",
};

let spaceship3 = {
  //Position
  x: 450,
  y: 80,
  //Dimensions
  size: 100,
  //Colour
  fill: "#ff00a6",
};

/**
 * Create a inifite race track
 */
function setup() {
  createCanvas(600, 600);
}

/**
 * 3 big space ship are driving in the same direction towards victory (?)
 */
function draw() {
  // Deep cosmos around the spaceship
  background("#1c0030");
  // The barier to separate the spaceship to the rest

  // Left barrier
  drawBarrierSection(50, 65, 45);

  //Right barrier
  drawBarrierSection(550, 65, 45);
}

//To repeat the meteroid to right and to left making a barrier
function drawBarrierSection(x, y, spacing) {
  drawBarrier(x, y);
  drawBarrier(x, y + spacing);
  drawBarrier(x, y + spacing * 2);
  drawBarrier(x, y + spacing * 3);
  drawBarrier(x, y + spacing * 4);
  drawBarrier(x, y + spacing * 5);
  drawBarrier(x, y + spacing * 6);
  drawBarrier(x, y + spacing * 7);
  drawBarrier(x, y + spacing * 8);
  drawBarrier(x, y + spacing * 9);
  drawBarrier(x, y + spacing * 10);
  drawBarrier(x, y + spacing * 11);
  drawBarrier(x, y + spacing * 12);

  //Draw three flying saucer
  drawSpaceship(spaceship1);
  drawSpaceship(spaceship2);
  drawSpaceship(spaceship3);
}

//The visual look of the barrier : meteroid
function drawBarrier(x, y) {
  push();
  fill("#BC8F8F");
  stroke("#816363");
  strokeWeight(2);
  ellipse(x, y, 25, 40);
  pop();
}

function drawSpaceship(ship) {
  push();

  //Cockpit -> half circle
  fill("#A5D8F3");
  arc(ship.x, ship.y, 60, 60, PI, TWO_PI, CHORD);

  //Body of the spaceship
  fill(ship.fill);
  ellipse(ship.x, ship.y, ship.size, 30);

  pop();
}
