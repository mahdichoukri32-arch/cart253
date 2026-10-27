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
  createCanvas(640, 640);

  userInput = createInput("");
  userInput.attribute("id", "alien-input");
  userInput.position(220, 230);
  userInput.size(180);

  translateButton = createButton("Translate");
  translateButton.position(350, 300);
  translateButton.mousePressed(translateText);
}

/**
 * Do you want to be understand by the alien ? Then use this translation tool, it will connect humanity to it intelligent counterpart.
 */
function draw() {
  //An green background face new, stuff become scpacy
  background("#00ff9d");

  //An title screen
  push();
  fill("#4d6aff");
  textAlign(CENTER, CENTER);
  textSize(24);
  text("Alien Translator", width / 2, 100);
  pop();

  //An devices to showed up the translation
  push();
  stroke("#ffec70");
  strokeWeight(10);
  fill("#000000");
  rect(140, 380, 400, 150, 20);
  pop();

  //An translation
  push();
  fill("#ff00b7");
  stroke("#8d4478");
  strokeWeight(5);
  textSize(75);
  text(alienText, width / 2.3, 490);
  pop();
}

function translateText() {
  console.log(alienText);
  if (userInput.value() !== "") {
    alienText = createAlienText();
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
  console.log();
}
