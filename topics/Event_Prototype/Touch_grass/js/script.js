/**
 * Touch Grass
 * Mariam-Choukri Mahdi
 *
 * We have consume to much internet lately, take a break. TOUCH GRASS !!!
 */

"use strict";

/**
 * Create a illusion where the reality wasn't capture by the picture.
 */

//Dramatic Font
let fontBogle;
//Marvelous Font
let fontLobster;
//Image when you went the offline
let violetImage;
//Beautiful sound of nature
let natureMusic;

let isOnline = navigator.onLine;

//Click the canva for making work
function mousePressed() {
  userStartAudio();
  if (!isOnline && natureMusic.isLoaded() && !natureMusic.isPlaying()) {
    natureMusic.loop();
  }
}

//The canva change to a ugly and lonely flower to a brighter one with window.addEventListener
async function setup() {
  createCanvas(700, 700);

  window.addEventListener("offline", function () {
    isOnline = false;

    if (
      getAudioContext().state === "running" &&
      natureMusic.isLoaded() &&
      !natureMusic.isPlaying()
    ) {
      natureMusic.loop();
    }
  });

  window.addEventListener("online", function () {
    isOnline = true;

    if (natureMusic.isPlaying()) {
      natureMusic.stop();
    }
  });

  //Dramatic Font charge
  fontBogle = await loadFont("assets/fonts/BBH_Bogle/BBHBogle-Regular.ttf");

  //Calm Font charge
  fontLobster = await loadFont("assets/fonts/Lobster_Two/LobsterTwo-Bold.ttf");

  //Picture making the second part of the project

  violetImage = await loadImage("./assets/images/violette.jpg");

  //The sound of nature come when you take interest ot it

  natureMusic = await loadSound("./assets/sounds/nature.mp3");
}

/**
 * Grey when internet, when offline it show a violette flower and its habitat.
 */
function draw() {
  if (isOnline) {
    background(128, 128, 128);

    //Draw a whole flower, dull and stoic, lacking of life

    drawFlower();

    //Draw flames attacking the lonely "living" organism

    drawFlames();

    //Devasting message

    drawText();
  } else {
    // Show a picture of real footage of this flower in its environment which isn't under danger but full of live
    drawNatureBackground();

    //Hopeful message
    drawText2();
  }
}

function drawFlower() {
  drawStem();
  drawLeaves();
  drawFlowerCenter();
  drawPetals();
}

// Stem -> barely stick to the ground
function drawStem() {
  push();
  stroke(95, 95, 95);
  strokeWeight(12);
  line(350, 350, 350, 700);
  pop();
}

//Pistils -> visible but nothing is pollinating them
function drawFlowerCenter() {
  push();
  noStroke();
  fill(105, 105, 105);
  circle(350, 350, 150);
  pop();
}

//Petals -> separate to each other lack of unity
function drawPetals() {
  push();
  noStroke();
  fill(169, 169, 169);
  circle(475, 350, 100);
  circle(413, 458, 100);
  circle(288, 458, 100);
  circle(225, 350, 100);
  circle(288, 242, 100);
  circle(413, 242, 100);
  pop();
}

//Leaves -> first victim of the fire
function drawLeaves() {
  push();
  fill(95, 95, 95);
  noStroke();
  ellipse(320, 530, 60, 30);
  ellipse(380, 620, 60, 30);
  pop();
}

function drawFlames() {
  drawLeftFlames();
  drawRightFlames();
}

function drawLeftFlames() {
  push();

  noStroke();

  // Left flames/grass

  //Dark flames -background-

  fill(150);
  triangle(0, 700, 80, 700, 110, 350);
  triangle(30, 700, 125, 700, 135, 430);

  fill(160);
  triangle(55, 700, 125, 700, 145, 430);
  triangle(245, 700, 320, 700, 300, 565);
  triangle(125, 700, 175, 700, 195, 430);

  //Medium grey flames/grass

  fill(192, 192, 192);
  triangle(0, 700, 0, 390, 55, 335);
  triangle(115, 700, 175, 700, 205, 485);

  //Light grey flames/grass

  fill(211, 211, 211);
  triangle(30, 700, 125, 700, 135, 430);
}

function drawRightFlames() {
  // Right flames/grass

  //Dark flames/grass -background-

  fill(150);
  triangle(500, 700, 600, 700, 580, 475);

  fill(160);
  triangle(525, 700, 650, 700, 525, 420);

  //Medium grey flames/grass

  fill(192, 192, 192);
  //triangle(470, 700, 440, 465, 550, 700);
  triangle(580, 700, 700, 700, 640, 500);

  //Light grey flames/grass

  fill(211, 211, 211);
  triangle(420, 700, 450, 530, 510, 700);
  triangle(620, 700, 650, 450, 700, 700);

  pop();
}

//What the Internet want you to think about the information
function drawText() {
  push();
  fill(0);
  textSize(30);
  textAlign(CENTER);
  textFont(fontBogle);
  text("The fatal fate of a flower captuared in a picture", 350, 120);
  pop();
}

//In a large green field, we discover an amazing and good looking flower to observe
function drawNatureBackground() {
  //A beautiful Violette is being expose aften opening its petals
  image(violetImage, 0, 0, 700, 700, 0, 470, 2485, 2485);
}

//What it looked like in reality

function drawText2() {
  push();
  fill(148, 0, 211);
  textSize(30);
  textAlign(CENTER);
  textFont(fontLobster);
  text("The wonderful life of flower in its habitat on this photo", 350, 120);
  pop();
}
