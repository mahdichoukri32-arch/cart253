/**
 * Soap
 * Mariam-Choukri
 *
 * Are you being  fast enough to pop the buble!
 */

"use strict";

// Sound of bursting buble are comming
let bubbleSound;

//Bubble are starting around the soap
let bubbles = [];

function preload() {
  bubbleSound = loadSound("assets/sounds/bubble.mp3");
}

/**
 * Create a Canvas
 */
function setup() {
  createCanvas(640, 640);
}

function createBubble() {
  // Return a random buble
  let bubble = {
    x: constrain(mouseX, 290, 370),
    y: 465,
    size: 20,
    float: random(2, 8),
  };
  return bubble;
}

/**
 * An bright pink soap on a water inside in bathtub
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

  //Miror Framework
  push();
  fill("#66CDAA");
  noStroke();
  rect(75, 50, 500, 300);
  pop();

  //Miror
  push();
  fill("211, 255, 240, 100");
  noStroke();
  rect(85, 60, 480, 280);
  pop();

  for (let bubble of bubbles) {
    drawBuble(bubble);
    drawReflecction(bubble);
    moveBuble(bubble);
  }
}

/**
 * The soap is foaming and bubble start to come
 */

//Bubble are floating to the room

function moveBuble(bubble) {
  bubble.y -= bubble.float;
}

//Bubble took live
function drawBuble(bubble) {
  push();
  fill("#ffc3e3");
  noStroke();
  circle(bubble.x, bubble.y, bubble.size);
  pop();
}

//User interact with the soap
function mousePressed() {
  userStartAudio();
  if (mouseX >= 280 && mouseX <= 380 && mouseY >= 465 && mouseY <= 545) {
    const newBubble = createBubble();
    bubbles.push(newBubble);

    bubbleSound.play();
  }
}

function drawReflecction(bubble) {
  let reflectionX = 650 - bubble.x;
  let reflectionY = bubble.y;

  if (
    reflectionX >= 85 &&
    reflectionX <= 565 &&
    reflectionY >= 60 &&
    reflectionY <= 340
  ) {
    push();
    fill(211, 255, 240, 100);
    noStroke();
    circle(reflectionX, reflectionY, bubble.size);
    pop();
  }
}
