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

//Sound when the two circle made into a fusion
let fusionSound;

function preload() {
  fusionSound = loadSound("./assets/sounds/fusion.mp3");
}

//Camera open
let camera;
let cameraStarted = false;

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

  // The second version of it
  {
    x: -470.5,
    y: 150,
    fill: "#ff00ff",
    size: 20,
    velocity: 3.5,
    direction: "right",
  },
];

/**
 * Create a canvas
 */
function setup() {
  createCanvas(400, 300);
  noLoop();
}

/**
 * Draw a pacman figure who follow up a small circle he tries to eat but instead eat itself
 */
function draw() {
  background(0);

  //Scene 1: Yellow Pacman -> procastrinate about the task you have to do
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

  //Scene 2: Orange Pacman -> hurry up about finsh the task in time
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

  // Scene 3: Two red Pacmans -> Facing the consequence. You don't longer have the time that you used to have it.
  // Your're going on a rythm that doesn't align with your capacity, the faster circle is you mental state and the second one is your body.
  else if (scene === 2) {
    for (let i = 2; i < pacmans.length; i++) {
      let pacman = pacmans[i];

      pacman.velocity += pacman.acceleration;
      pacman.x += pacman.velocity;

      drawPacman(pacman);
    }

    // To stop the two circle before making the full fusion
    let distance = dist(pacmans[2].x, pacmans[2].y, pacmans[3].x, pacmans[3].y);

    if (distance < 65) {
      fusionStart3 = pacmans[2].x;
      fusionStart4 = pacmans[3].x;

      //Sound started right now
      if (fusionSound && fusionSound.isLoaded()) {
        fusionSound.play();
      }

      scene = 3;
    }
  }

  // Final scene: One circle
  else if (scene === 3) {
    fusion += 0.015;
    fusion = constrain(fusion, 0, 1);

    // Smooth movement
    let smoothFusion = fusion * fusion * (3 - 2 * fusion);

    // Both Pacmans move toward the same point
    pacmans[2].x = map(smoothFusion, 0, 1, fusionStart3, 200);
    pacmans[3].x = map(smoothFusion, 0, 1, fusionStart4, 200);

    // Mouths gradually close
    let mouth = map(smoothFusion, 0, 1, QUARTER_PI, 0);

    drawPacman(pacmans[2], mouth);
    drawPacman(pacmans[3], mouth);
  }

  //Final scene: Camera
  if (fusion >= 1) {
    fill(255);
    textAlign(CENTER);
    textSize(16);
    text("CLICK TO ACTIVATE THE CAMERA", width / 2, 150);
  } else if (scene === 4) {
    if (cameraStarted) {
      image(camera, 0, 0, 400, 300);
    }

    fill("#ff0000");
    textAlign(CENTER, CENTER);
    textSize(20);
    text("ARE YOU EATING YOURSELF ?", width / 2, height / 2);
    pop();
  }
}

//The Pacman is a representation of you during stressful event
function drawPacman(pacman, mouth = QUARTER_PI) {
  push();
  fill(pacman.fill);
  noStroke();

  //Draw pacman 1/3
  if (pacman.direction === "left") {
    arc(
      pacman.x,
      pacman.y,
      pacman.size,
      pacman.size,
      PI + mouth,
      PI - mouth,
      PIE,
    );

    //Draw pacman 2/4
  } else if (pacman.direction === "right") {
    arc(
      pacman.x,
      pacman.y,
      pacman.size,
      pacman.size,
      mouth,
      TWO_PI - mouth,
      PIE,
    );
  }
  pop();
}

//Draw the task that sowly become pain for you to do it
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

//To made the audio work
function mousePressed() {
  userStartAudio();

  if (scene === 0) {
    loop();
  }

  if (scene === 3 && fusion >= 1 && !cameraStarted) {
    openCamera();
    scene = 4;
  }
}

function openCamera() {
  camera = createCapture(VIDEO);
  camera.size(400, 400);
  camera.hide();

  cameraStarted = true;
}
