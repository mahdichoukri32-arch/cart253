/**
 * free-DOM
 * Mariam-Choukri Mahdi
 *
 * How far can you guide without dictate ?
 */

"use strict";

//Score

let score = 0;

/** Text to display for the title and ending */
let titleString = "free-Dom Demo";
let endingString = "you lose";
let winString = "You Win!";

//We start by the title
let state = "title";

//Obstacles multiplication

let obstacles = [];

//Tails
let tails = [];

/** Your steed */

let creature = {
  //Head
  x: 65,
  y: 450,
  size: 80,
  canMove: true,

  //Tails
  x: 60,
  y: 450,
  size: 60,
  canMove: true,

  x: 55,
  y: 450,
  size: 40,
  canMove: true,
};

/** Your harness */

let rope = {
  x: 0,
  y: 0,
};

/**
 * Create a Canvas
 */
function setup() {
  createCanvas(900, 500);

  //Obstacles
  for (let i = 0; i < 5; i++) {
    let obstacle = createObstacle();
    obstacle.x = 300 + i * 350;
    obstacles.push(obstacle);
  }

  //Text settings
  textSize(32);
  textAlign(CENTER, CENTER);
}

//Create many obstacles

function createObstacle() {
  let obstacle = {
    color: "#9932CC",
    x: random(300, width),
    y: random(0, height - 200),
    width: 50,
    height: 200,
    velocity: -3,
  };
  if (random() < 0.5) {
    obstacle.width = 200;
    obstacle.height = 50;
    obstacle.y = random(0, height - obstacle.height);
  }
  return obstacle;
}

function draw() {
  //Check the state and call the appropriate function
  if (state === "title") {
    titlePresentation();
  } else if (state === "gameplay") {
    gameplay();
  } else if (state === "ending") {
    ending();
  } else if (state === "win") {
    win();
  }
}
function titlePresentation() {
  background("#D8BFD8");

  /* The position of our creature -> turn to start button*/
  push();
  fill(255);
  noStroke();
  textSize(32);
  circle(65, 450, 80);

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

  rope.x = constrain(mouseX, creature.size / 2, width - creature.size / 2);
  rope.y = constrain(mouseY, creature.size / 2, height - creature.size / 2);

  moveCreature();

  for (let obstacle of obstacles) {
    moveObstacle(obstacle);
    drawObstacle(obstacle);

    if (checkCollision(obstacle) === true) {
      state = "ending";
    }
  }

  drawRope();
  drawCreature();
  drawProgressBar();
  drawScore();
}

// The creature move along the rope

function moveCreature() {
  if (creature.canMove === true) {
    creature.x = lerp(creature.x, rope.x, 0.1);
    creature.y = lerp(creature.y, rope.y, 0.1);
  }
}

// The obstacle are moving back and fourth as soon as they touch the screen

function moveObstacle(obstacle) {
  if (creature.canMove === true) {
    obstacle.x += obstacle.velocity;

    if (obstacle.x <= -obstacle.width) {
      if (score < 15) {
        score += 1;
      } else {
        state = "win";
      }

      let rightEdge = width;

      for (let otherObstacle of obstacles) {
        if (otherObstacle.x + otherObstacle.width > rightEdge) {
          rightEdge = otherObstacle.x + otherObstacle.width;
        }
      }
      obstacle.x = rightEdge + random(150, 250);
      obstacle.y = random(0, height - obstacle.height);
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

function drawObstacle(obstacle) {
  push();
  fill(obstacle.color);
  noStroke();
  rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  pop();
}

// Progress Bar

function drawProgressBar() {
  let progress = constrain(score / 15, 0, 1);

  push();
  fill("#6A5ACD");
  noStroke();
  rect(30, 45, 300, 15);
  pop();

  push();
  fill("#483D8B");
  noStroke();
  rect(30, 45, 300 * progress, 15);
  pop();
}

//Score - Numbers
function drawScore() {
  push();
  fill(255);
  textSize(15);
  textAlign(RIGHT, CENTER);
  text("Score: " + score, 870, 52.5);
  pop();
}

// How to detect a collision

function checkCollision(obstacle) {
  let radius = creature.size / 2;

  if (
    creature.x + radius >= obstacle.x &&
    creature.x - radius <= obstacle.x + obstacle.width &&
    creature.y + radius >= obstacle.y &&
    creature.y - radius <= obstacle.y + obstacle.height
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

function win() {
  background("#ff00ff");
  push();
  fill("#ffff");
  text(winString, width / 2, height / 2);

  push();
  fill(0);
  noStroke();
  circle(450, 350, 100);
  pop();

  push();
  fill("#D8BFD8");
  text("level 2", 450, 350);
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

  //Score

  score = 0;

  //Obstacle

  obstacles = [];

  for (let i = 0; i < 5; i++) {
    let obstacle = createObstacle();
    obstacle.x = 300 + i * 350;
    obstacles.push(obstacle);
  }

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
  } else {
    state = "win";
    window.open("LEVEL_2.html");
  }
}
