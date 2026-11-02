/**
 * Are you eating yourself ?
 * Mariam-Choukri Mahdi
 *
 * You are putting too much stress to yourself to the point it consume you.
 */

"use strict";

// All pacmans
let pacmans = [
  {
    x: 400,
    y: 50,
    fill: "#ffff00",
    size: 65,
    velocity: -1,
    direction: "left",
  },

  // The pacman 2
  {
    x: -500.5,
    y: 150,
    fill: "#ffa500",
    size: 65,
    velocity: 5,
    direction: "right",
  },

  // The pacman 3
  {
    x: 1380,
    y: 250,
    fill: "#ff0000",
    size: 65,
    velocity: -1.5,
    direction: "left",
  },

  // The pacman 4
  {
    x: -1000,
    y: 250,
    fill: "#ff0000",
    size: 65,
    velocity: 4,
    direction: "right",
  },
];

// The Pain that stressed you out
let pains = [
  {
    x: 370.5,
    y: 50,
    fill: "#ff00ff",
    size: 20,
    velocity: -3,
    direction: "left",
  },

  // The point 2
  {
    x: -470.5,
    y: 150,
    fill: "#ff00ff",
    size: 20,
    velocity: 3,
    direction: "right",
  },
];

// //Text

// let message = {
//   x: 450,
//   y: 50,
// };

// let message2 = {
//   x: -680,
//   y: 150,
// };

/**
 * Create a canvas
 */
function setup() {
  createCanvas(400, 300);
}

/**
 * Draw a pacman figure who follow up a small circle he tries to eat but instead eat itself
 */
function draw() {
  background(0);

  // // Write a text that follow it
  // push();
  // fill(255, 0, 255);
  // strokeWeight(2);
  // text("ARE YOU EATING YOURSELF ?", message.x, message.y);
  // text("ARE YOU EATING YOURSELF ?", message2.x, message2.y);
  // pop();

  for (let pacman of pacmans) {
    pacman.x += pacman.velocity;
    drawPacman(pacman);
  }

  for (let pain of pains) {
    pain.x += pain.velocity;
    drawPain(pain);
  }

  // //Move the text
  // message.x = message.x - 3.05;
  // //Move the text
  // message2.x = message2.x + 2.80;
  // //Move the pacman
  //   pacman.x = pacman.x - pacman.velocity.x;
  // //Move the point
  //   point.x = point.x - 3;
  // //Move the pacman 2
  // pacman2.x = pacman2.x + pacman2.velocity.x;
  // //Move the point 2
  //   point2.x = point2.x + 3;
  // //Move the pacman 3
  // pacman3.x = pacman3.x - pacman3.velocity.x;
  // //Move the pacman 4
  // pacman4.x = pacman4.x + pacman4.velocity.x;
  // //Stop the two last pacman
  // pacman3.x = constrain(pacman3.x, 200, 1500);
  // pacman4.x = constrain(pacman4.x, -1500, 200);
}

function drawPacman(pacman) {
  push();
  fill(pacman.fill);
  noStroke();

  if (pacman.direction === "left") {
    arc(
      pacman.x,
      pacman.y,
      pacman.size,
      pacman.size,
      PI + QUARTER_PI,
      PI - QUARTER_PI,
      PIE,
    );
  } else if (pacman.direction === "right") {
    arc(
      pacman.x,
      pacman.y,
      pacman.size,
      pacman.size,
      QUARTER_PI,
      TWO_PI - QUARTER_PI,
      PIE,
    );
  }
  pop();
}

function drawPain(pain) {
  push();
  fill("#ff00ff");
  noStroke();
  if (pain.direction === "left") {
    circle(pain.x, pain.y, pain.size);
  } else if (pain.direction === "right") {
    circle(pain.x, pain.y, pain.size, pain.size);
  }
  pop();
}
