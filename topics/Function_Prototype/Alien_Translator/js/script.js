/**
 * Alien Language
 * Mariam-Choukri Mahdi
 * We encouter a weird and damage device, when you open it you can see an traslation tool to unknow language.
 * You tried to see if it's worked and showed up uncanny symboles from anothers worlds.
 */

"use strict";
//To create the button
let userInput;
//To made the text area appear
let alienText = "";
//To made the translation work
let translateButton;
//The font style choosen to be used
let alienStyle;

//Added a font to give this program a more space related look
function preload() {
  alienStyle = loadFont("./assets/fonts/Alien_Block/AlienBlock-Regular.ttf");
}

/**
 * Create an Canvas
 */
function setup() {
  createCanvas(640, 640);

  // To create a text area to write your message
  userInput = createInput("");
  userInput.attribute("id", "alien-input");
  userInput.position(220, 230);
  userInput.size(180);

  // The button that will generate the message
  translateButton = createButton("Translate");
  translateButton.position(350, 280);
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
  textFont(alienStyle);
  fill("#4d6aff");
  textAlign(CENTER, CENTER);
  textSize(50);
  text("Alien Translator", width / 2, 100);
  pop();

  //An devices to showed up the translation
  push();
  stroke("#ffec70");
  strokeWeight(10);
  fill("#000000");
  rect(140, 380, 400, 150, 20);
  pop();

  //The translation of your message
  push();
  fill("#ff00b7");
  stroke("#8d4478");
  strokeWeight(5);
  textSize(75);
  text(alienText, width / 2.3, 490);
  pop();
}

// The translation is created after your wrote a message on the text area
function translateText() {
  if (userInput.value() !== "") {
    alienText = createAlienText();
  }
}

//Alien language characthers
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
