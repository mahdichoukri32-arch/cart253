/**
 * Alien Language
 * Mariam-Choukri Mahdi
 *
 *
 */

"use strict";

let userInput;
let alienText = "";
let translateButton;

/**
 * Create an Canvas
 */
function setup() {
  createCanvas(640, 460);

  userInput = createInput("");
  userInput.attribute("id", "alien-input");
  userInput.position(320, 230);

  translateButton = createButton("Translate");
  translateButton.position(350, 250);
  translateButton.mousePressed(translate);
}

/**
 * Do you want to be understand by the alien ? Then use this translation tool, it will connect humanity to it intelligent counterpart.
 */
function draw() {
  //An green background face new, stuff become scpacy
  background("#00ff9d");

  fill("#4d6aff");
  textAlign(CENTER);
  textSize(24);
  text("Alien Translator", width / 2, 150);

  fill("#ffec70");
  textSize(30);
  text(alienText, width / 2, 400);
}

function translate() {
  console.log("Button clicked!");

  if (userInput.value() !== "") {
    alienText = createAlienText();
    console.log(alienText);
  }
}

//The main of our alien language translation
function createAlienText() {
  let alien = {
    first: random([
      "⏃",
      "⏚",
      "☊",
      "⎅",
      "⟒",
      "⎎",
      "☌",
      "⊑",
      "⟟",
      "⟊",
      "☍",
      "⌰",
      "⋔",
      "⋏",
    ]),
    second: random([
      "⍜",
      "⌿",
      "⍾",
      "⍀",
      "⌇",
      "⏁",
      "⎍",
      "⎐",
      "⍙",
      "⌖",
      "⊬",
      "⋉",
    ]),
  };
  return alien.first + alien.second;
}
