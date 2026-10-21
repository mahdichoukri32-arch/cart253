/**
 * Eggs
 * Mariam-Choukri Mahdi
 *
 *You have cook an egg. Don't forget to watch the timer.
 */

"use strict";

let score = 0;
let gameOver = false;
let stage = "raw";

//Display a title
let titleString = "Fried Egg simulator";
let endingString = "";

let state = "title";

// Background noise

let noise;

let noiseStart = false;

/**
 * Create a kitchen wall, where you can see what are you preparing.
 */
function setup() {
  createCanvas(400, 400);
}

//Noise to accompaign your cooking
function preload() {
  noise = loadSound("./assets/sounds/geriart-fried-eggs-8489.mp3");
}

//coordinated of the pan/egg/yolk

const pan = {
  x: 200,
  y: 200,
  size: 250,
  speed: 2,
};

const egg = {
  x: 200,
  y: 200,
  size: 120,
  speed: 2,
  fill: {
    red: 255,
    green: 255,
    blue: 255,
  },
};

const yolk = {
  x: 200,
  y: 200,
  size: 50,
  speed: 2,
  fill: {
    red: 255,
    green: 215,
    blue: 0,
  },
};
/**
 * Cook an egg that will slowly burn if you don't pay attention
 */
function draw() {
  //Title
  if (state === "title") {
    title();
  } else if (state === "playing") {
    //You have blue wall in your kitchen
    background(100, 149, 237);

    displayScore();
    movePan();
    moveEgg();
    drawPan();
    drawEgg();
    checkCooking();
    if (gameOver) {
      state = "ending";
    }
  } else if (state === "ending") {
    displayEnding();
  }
}

//Start the game
function title() {
  background(255, 228, 181);

  push();
  textSize(32);
  textAlign(CENTER);
  fill(255, 140, 0);
  text(titleString, width / 2, height / 2);
  pop();

  push();
  textSize(16);
  textAlign(CENTER);
  fill(255, 165, 0);
  text("Hold the mouse to cook your egg", width / 2, height / 2 + 45);
  text("Release to stop cooking and serve!", width / 2, height / 2 + 70);

  pop();
}

function mousePressed() {
  //Start the game
  if (state === "title") {
    state = "playing";
  }
}

//End the game
function displayEnding() {
  background(238, 232, 170);

  push();
  textSize(32);
  textAlign(CENTER);

  //Win
  if (stage === "cooked") {
    fill(189, 183, 107);
    endingString = "Perfectly cooked!";
  }
  //Lost 2nd option
  else if (stage === "burn") {
    fill(120, 115, 63);
    endingString = "You burned your egg !!!";
    //Lost 1st option
  } else if (stage === "raw") {
    fill(255, 255, 224);
    endingString = "Your egg is still raw.";
  }
  text(endingString, width / 2, height / 2);
  pop();
}

// How much time you have spend to cook this egg
function displayScore() {
  push();
  textSize(30);
  textStyle(BOLD);
  fill(0, 0, 128);
  textAlign(CENTER, TOP);
  text(floor(score), width / 2, 15);
  pop();
}

//Your powerful pan, help you in any situation
function drawPan() {
  push();
  translate(pan.x, pan.y);
  fill(0);
  stroke(112, 128, 144);
  strokeWeight(5);
  rect(-25, 100, 50, 130);
  circle(0, 0, pan.size);
  pop();
}
//A deliciou egg, ready to be prepare
function drawEgg() {
  push();
  fill(egg.fill.red, egg.fill.green, egg.fill.blue);
  noStroke();
  ellipse(egg.x, egg.y, egg.size);
  fill(yolk.fill.red, yolk.fill.green, yolk.fill.blue);
  circle(yolk.x, yolk.y, yolk.size);
  pop();
}

//Pan move down to like you are cooking
function movePan() {
  if (mouseIsPressed) {
    if (!gameOver && !noiseStart && noise.isLoaded()) {
      noise.loop();
      noiseStart = true;
    }
    pan.y += pan.speed;
  } else {
    pan.y -= pan.speed;
  }

  pan.y = constrain(pan.y, 180, height - 180);
}

//Egg move at the same speed like the pan
function moveEgg() {
  if (mouseIsPressed) {
    egg.y += egg.speed;
    yolk.y += yolk.speed;
  } else {
    egg.y -= egg.speed;
    yolk.y -= yolk.speed;
  }
  egg.y = constrain(egg.y, 180, height - 180);
  yolk.y = constrain(yolk.y, 180, height - 180);
}

function checkCooking() {
  // The speed of the time
  if (!gameOver && mouseIsPressed) {
    score += 0.05;

    let currentScore = floor(score);

    //At this point the egg burnt
    if (currentScore < 5) {
      stage = "raw";
    }
    if (currentScore >= 5 && currentScore <= 15) {
      stage = "cooked";
    }
    if (currentScore > 15) {
      stage = "burn";
    }

    // You lost the game -> ending title come
    setEggColor();
  } else if (!mouseIsPressed && score > 0) {
    gameOver = true;
    console.log(stage);

    if (noise.isPlaying()) {
      noise.stop();
    }
  }
}

function setEggColor() {
  //Egg not cooked
  if (stage === "raw") {
    egg.fill.red = 255;
    egg.fill.green = 255;
    egg.fill.blue = 255;

    yolk.fill.red = 255;
    yolk.fill.green = 215;
    yolk.fill.blue = 0;
  } else if (stage === "cooked") {
    //Eggs well cook
    egg.fill.red = 255;
    egg.fill.green = 240;
    egg.fill.blue = 200;

    yolk.fill.red = 255;
    yolk.fill.green = 180;
    yolk.fill.blue = 0;
  }

  //Burnt Egg
  else if (stage === "burn") {
    egg.fill.red = constrain(egg.fill.red - 1, 80, 255);
    egg.fill.green = constrain(egg.fill.green - 1, 80, 255);
    egg.fill.blue = constrain(egg.fill.blue - 1, 80, 255);

    yolk.fill.red = constrain(yolk.fill.red - 1, 100, 255);
    yolk.fill.green = constrain(yolk.fill.green - 1, 60, 255);
    yolk.fill.blue = constrain(yolk.fill.blue - 1, 30, 255);
  }
}
