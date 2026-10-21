/**
 * Event Prototype
 * Mariam-Choukri Mahdi
 *
 * Oscar, a little ghost want to play hide and seek with you but it will take to see him.
 */

"use strict";

let ghostlight = 0;
let ghostColor;

const ghost = {
  //Position
  x: 75,
  y: 350,

  //Size
  size: 100,

  //Speed
  speed: 30,
};

//Choose a new font
let myFont;

//Background music
let bgm;

let musicStart = false;

function preload() {
  //Load a custom font before the sketch starts
  myFont = loadFont("Creepster/Creepster-Regular.ttf");
  //Load a music when the ghost move
  bgm = loadSound("./assets/sounds/freesound_community-spooky-keys-63764.mp3");
}

/**
 * Create the playground
 */
function setup() {
  createCanvas(640, 480);
}
/**
 * Draw a forest during the night but it's full moon and a little ghost want to play with you.
 */
function draw() {
  background(72, 61, 139);

  increaseGhostlight();
  checkGhostColor();

  //Moon

  push();
  fill(230, 230, 250);
  noStroke();
  circle(25, 30, 100);
  pop();

  drawGhost();

  // First tree
  // Draw trunk

  push();
  fill(139, 69, 19);
  noStroke();
  rect(80, 250, 60, 200);
  pop();

  // Draw leaves

  push();
  fill(106, 90, 205);
  noStroke();
  circle(120, 120, 150);
  pop();

  push();
  fill(106, 90, 205);
  noStroke();
  circle(80, 200, 150);
  pop();

  push();
  fill(123, 104, 238);
  noStroke();
  circle(170, 200, 150);
  pop();

  push();
  fill(147, 112, 219);
  noStroke();
  circle(150, 260, 100);
  pop();

  // 2nd Tree

  //Trunk

  push();
  fill(139, 69, 19);
  noStroke();
  rect(340, 250, 60, 200);
  pop();

  // Leaves

  push();
  fill(106, 90, 205);
  noStroke();
  circle(380, 120, 150);
  pop();

  push();
  fill(106, 90, 205);
  noStroke();
  circle(340, 200, 150);
  pop();

  push();
  fill(123, 104, 238);
  noStroke();
  circle(420, 200, 150);
  pop();

  push();
  fill(147, 112, 219);
  noStroke();
  circle(350, 260, 100);
  pop();

  // Last tree

  //Trunk
  push();
  fill(139, 69, 19);
  noStroke();
  rect(580, 250, 60, 200);
  pop();

  //Leaves

  push();
  fill(106, 90, 205);
  noStroke();
  circle(630, 120, 150);
  pop();

  push();
  fill(106, 90, 205);
  noStroke();
  circle(590, 200, 150);
  pop();

  push();
  fill(123, 104, 238);
  noStroke();
  circle(690, 200, 150);
  pop();

  push();
  fill(147, 112, 219);
  noStroke();
  circle(600, 260, 100);
  pop();

  //Grass

  push();
  fill(147, 112, 219);
  noStroke();
  rect(0, 450, 800, 50);
  pop();

  // Explanation Text
  push();
  textFont(myFont);
  fill(255, 0, 0);
  textSize(20);
  strokeWeight(10);
  textAlign(CENTER);
  text("Use the left and right arrow to find the ghost", width / 2, 30);
  pop();
}

//Oscar is a little ghost and he have most of the time a shocking expression : two eye holes wider than its mouth.
function drawGhost() {
  //its spirit
  push();
  fill(ghostColor);
  noStroke();
  ellipse(ghost.x, ghost.y, ghost.size);
  rectMode(CENTER);
  rect(ghost.x, ghost.y + ghost.size / 4, ghost.size, ghost.size / 2);

  fill(75, 60, 130);
  let eyeSize = ghost.size / 5;
  circle(ghost.x - ghost.size / 4, ghost.y - ghost.size / 10, eyeSize); // Left Eyes
  circle(ghost.x + ghost.size / 4, ghost.y - ghost.size / 10, eyeSize); // Right Eyes

  //mouth
  ellipse(ghost.x, ghost.y + ghost.size / 5, ghost.size / 3, ghost.size / 4);
  pop();
}

//The music don't start before you play
function keyPressed() {
  //Start the music
  if (!musicStart && bgm.isLoaded()) {
    bgm.loop();
    musicStart = true;
  }

  //Move the ghost
  if (keyIsDown(LEFT_ARROW)) {
    ghost.x -= ghost.speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    ghost.x += ghost.speed;
  }
}

// Ghost become more visible to you
function increaseGhostlight() {
  ghostlight = map(ghost.x, 0, 640, 0, 255);
}

// Transition to transparent to white
function checkGhostColor() {
  console.log(ghostlight);
  if (ghostlight < 100) {
    ghostColor = color(75, 60, 130);
  } else if (ghostlight < 200) {
    ghostColor = color(130, 115, 175);
  } else {
    ghostColor = color(255, 255, 255);
  }
}
