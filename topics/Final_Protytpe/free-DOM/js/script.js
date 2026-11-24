/**
 * free-DOM
 * Mariam-Choukri Mahdi
 *
 * How far can you guide without dictate ?
 */

"use strict";

/** Text to display for the title and ending */
let titleString = "free-Dom Demo";
let endingString = "you lose";

//We start by the title
let state = "title";

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
  velocity: 1,
};

let obstacle2 = {
  color: "#9932CC",
  x: 600,
  y: 200,
  width: 100,
  height: 50,
  velocity: 1,
};

/**
 * Create a Canvas
 */
function setup() {
  createCanvas(900, 500);

  //Text settings
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  //Check the state and call the appropriate function
  if (state === "title") {
    titlePresentation();
  } else if (state === "gameplay") {
    gameplay();
  } else if (state === "ending") {
    ending();
  }
}
function titlePresentation() {
  background("#D8BFD8");

  /* The position of our creature -> turn to start button*/
  push();
  fill(255);
  noStroke();
  textSize(32);
  circle(65, 450, 100);

  /* The text*/

  fill("#D8BFD8");
  text("start", 65, 450 - 0);
  pop();

  push();
  fill("#ffff");
  text(titleString, width / 2, height / 2);
  pop();
}

/**
 * We will start drawing a circle (our creature) who is guide by us with our mouse (string). The creature will face obstacles.
 */
function gameplay() {
  background("#DDA0DD");

  rope.x = mouseX;
  rope.y = mouseY;

  moveCreature();
  moveObstacle();
  checkCollision();

  drawObstacle();
  drawRope();
  drawCreature();
}

// The creature move along the rope

function moveCreature() {
  if (creature.canMove === true) {
    creature.x = lerp(creature.x, rope.x, 0.1);
    creature.y = lerp(creature.y, rope.y, 0.1);
  }
}

// The obstacle are moving back and fourth as soon as they touch the screen

function moveObstacle() {
  if (creature.canMove === true) {
    obstacle1.x += obstacle1.velocity;

    obstacle2.x += obstacle2.velocity;

    if (obstacle1.x === 0) {
      obstacle1.velocity = 1;
    } else if (obstacle1.x > 900) {
      obstacle1.velocity = -1;
    }

    if (obstacle2.x === 0) {
      obstacle2.velocity = 1;
    } else if (obstacle2.x > 900) {
      obstacle2.velocity = -1;
    }
  }
}

/** Our creature get guide by you */

// The creature

function drawCreature() {
  push();
  fill("#fae4ff");
  noStroke();
  circle(creature.x, creature.y, creature.size);
  pop();
}

//The rope that guide the creature

function drawRope() {
  push();
  stroke("#FF00FF");
  strokeWeight(2);
  line(creature.x, creature.y, rope.x, rope.y);
  pop();
}

//The Obstacle that you have to avoid

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
    state = "ending";
  }
}

// How to detect a collision

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

function ending() {
  background("#800080");
  push();
  fill("#ffff");
  text(endingString, width / 2, height / 2);
  pop();
}

function resetGame() {
  push();
  fill(255);
  noStroke();
  circle(65, 450, 100);
  pop();

  /*Creature initial position*/
  creature.x = 65;
  creature.y = 450;

  /*Obstacles initial position*/
  obstacle1.x = 300;
  obstacle1.y = 300;

  obstacle2.x = 600;
  obstacle2.y = 600;

  /** Title apppartion  */
  state = "title";
}

function mousePressed() {
  if (state === "title") {
    let d = dist(creature.x, creature.y, mouseX, mouseY);

    if (d < 30) {
      state = "gameplay";
    }
  } else if (state === "ending") {
    resetGame();
  }
}
