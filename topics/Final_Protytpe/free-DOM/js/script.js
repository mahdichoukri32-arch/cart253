/**
 * free-DOM
 * Mariam-Choukri Mahdi
 *
 * How far can you guide without dictate ?
 */

"use strict";

/** Your steed */

let creature = {
  x: 65,
  y: 450,
  size: 100,
  canMove: true,
};

/** Your harness */

let rope = {
  x: 0,
  y: 0,
};

/** Obstacles */

let obstacle1 = {
  color: "#9932CC",
  x: 300,
  y: 300,
  width: 50,
  height: 200,
};

let obstacle2 = {
  color: "#9932CC",
  x: 600,
  y: 200,
  width: 100,
  height: 50,
};

/**
 * Create a Canvas
 */
function setup() {
  createCanvas(900, 500);
}

/**
 * We will start drawing a circle (our creature) who is guide by us with our mouse (string). The creature will face obstacles.
 */
function draw() {
  background("#DDA0DD");

  rope.x = mouseX;
  rope.y = mouseY;

  moveCreature();
  checkCollision();

  drawObstacle();
  drawRope();
  drawCreature();
}

/** Our creature get guide by you */
function drawCreature() {
  push();
  fill("#fae4ff");
  noStroke();
  circle(creature.x, creature.y, creature.size);
  pop();
}

function drawRope() {
  push();
  stroke("#FF00FF");
  strokeWeight(2);
  line(creature.x, creature.y, rope.x, rope.y);
  pop();
}

function moveCreature() {
  if (creature.canMove === true) {
    creature.x = lerp(creature.x, rope.x, 0.1);
    creature.y = lerp(creature.y, rope.y, 0.1);
  }
}

function drawObstacle() {
  push();
  fill(obstacle1.color);
  noStroke();
  rect(obstacle1.x, obstacle1.y, obstacle1.width, obstacle1.height);
  pop();

  push();
  fill(obstacle2.color);
  noStroke();
  rect(obstacle2.x, obstacle2.y, obstacle2.width, obstacle2.height);
  pop();

  if (checkCollision() === true) {
    creature.canMove = false;
  } else if (checkCollision() === false) {
    creature.canMove = true;
  }
}

function checkCollision() {
  if (
    creature.x > obstacle1.x &&
    creature.x < obstacle1.x + obstacle1.width &&
    creature.y > obstacle1.y &&
    creature.y < obstacle1.y + obstacle1.height
  ) {
    return true;
  }

  if (
    creature.x > obstacle2.x &&
    creature.x < obstacle2.x + obstacle2.width &&
    creature.y > obstacle2.y &&
    creature.y < obstacle2.y + obstacle2.height
  ) {
    return true;
  }
}
