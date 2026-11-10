/**
 * Tarot
 * Pippin Barr
 *
 * Some experiments with data representing a Tarot deck
 */

"use strict";

// Our tarot data

let tarot = undefined;

//

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

  //   const card = tarot.tarot_interpretations[0];
  //   const meanings = card.meanings;
  //   const shadows = meanings.shadow;
  //   const fool = shadows[0];

  const fool = tarot.tarot_interpretations[0].meanings.shadow[0];

  //Display the information
  push();
  textSize(16);
  fill("yellow");
  textAlign(CENTER, CENTER);
  text(fool, width / 2, height / 2);
  pop();
}
