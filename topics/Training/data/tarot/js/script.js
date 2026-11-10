/**
 * Tarot
 * Pippin Barr
 *
 * Some experiments with data representing a Tarot deck
 */

"use strict";

// Our tarot data

let tarot = undefined;

// Our fortune
let fortune = "Click to show a fortune.";

/**
 * Load tarot data
 */
async function preload() {
  tarot = await loadJSON("assets/data/tarot_interpretations.json");
}

/**
 * Create a canvas
 */
async function setup() {
  createCanvas(800, 400);
  await preload();
}

/**
 * Display tarot
 */
function draw() {
  background(0);

  //Display the information
  push();
  textSize(16);
  fill("yellow");
  textAlign(CENTER, CENTER);
  text(fortune, width / 2, height / 2);
  pop();
}

function mousePressed() {
  // Choose a random cards
  const card = random(tarot.tarot_interpretations);
  // Choose a random fortune
  fortune = random(card.fortune_telling);
}
