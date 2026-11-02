/**
 * Are you eating yourself ?
 * Mariam-Choukri Mahdi
 *
 * You are putting too much stress to yourself to the point it consume you.
 */

"use strict";

//Frequence of pacman appearence
let scene = 0;

//Are you be able of handling all the task that you wait
let merged = false;

//Progres of the fusion
let fusion = 0;

let fusionStart3;
let fusionStart4;

// All pacmans
let pacmans = [
  {
    x: 400,
    y: 50,
    fill: "#ffff00",
    size: 65,
    velocity: -1,
    acceleration: 0,
    direction: "left",
  },

  // The pacman 2
  {
    x: -500.5,
    y: 150,
    fill: "#ffa500",
    size: 65,
    velocity: 3,
    acceleration: 0.000001,
    direction: "right",
  },

  // The pacman 3
  {
    x: 450,
    y: 250,
    fill: "#ff0000",
    size: 65,
    velocity: -1,
    acceleration: -0.005,
    direction: "left",
  },

  // The pacman 4
  {
    x: -50,
    y: 250,
    fill: "#ff0000",
    size: 65,
    velocity: 2,
    acceleration: 0.008,
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
    velocity: 3.5,
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

  //Scene 1: Yellow Pacman
  if (scene === 0) {
    let pacman = pacmans[0];
    let pain = pains[0];

    pacman.x += pacman.velocity;
    pain.x += pain.velocity;

    drawPacman(pacman);
    drawPain(pain);

    //To the next scene
    if (pacman.x < -pacman.size) {
      scene = 1;
    }
  }

  //Scene 2: Orange Pacman
  else if (scene === 1) {
    let pacman = pacmans[1];
    let pain = pains[1];

    pacman.velocity += pacman.acceleration;
    pacman.x += pacman.velocity;
    pain.x += pain.velocity;

    drawPacman(pacman);
    drawPain(pain);

    //Next scene
    if (pacman.x > width + pacman.size) {
      scene = 2;
    }
  }

  //Scene 3: Two red Pacmans
  else if (scene === 2) {
    for (let i = 2; i < pacmans.length; i++) {
      let pacman = pacmans[i];

      pacman.velocity += pacman.acceleration;
      pacman.x += pacman.velocity;

      drawPacman(pacman);
    }

    let distance = dist(pacmans[2].x, pacmans[2].y, pacmans[3].x, pacmans[3].y);

    if (distance < 65) {
      fusionStart3 = pacmans[2].x;
      fusionStart4 = pacmans[3].x;

      scene = 3;
    }
  }

  // Final scene: One circle
  else if (scene === 3) {
    fusion += 0.02;
    fusion = constrain(fusion, 0, 1);

    // Both Pacmans move toward the same point
    pacmans[2].x = map(fusion, 0, 1, fusionStart3, 200);
    pacmans[3].x = map(fusion, 0, 1, fusionStart4, 200);

    if (fusion < 1) {
      drawPacman(pacmans[2]);
      drawPacman(pacmans[3]);
    } else {
      fill("#ff0000");
      noStroke();
      circle(200, 250, 65);
    }
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
