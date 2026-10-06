/**
 * The Only Move Is Not To Play
 * Pippin Barr
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
  window.addEventListener("online", on);
}

/**
 * Update the score and display the UI
 */
function draw() {
  background("#87ceeb");
  
  // Only increase the score if the game is not over
  if (!gameOver && !window.navigator.onLine) {
    // Score increases relatively slowly
    score += 0.05;
  }
  displayUI();
  if (window.navigator.onLine) {
    gameOver = true;
  }
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
  if (gameOver) {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("You lose!", width/2, height/3);
    pop();
  }
  displayScore();
}

function lose() {
    gameOver = true;
}

function mouseWheel() {
    lose();
}

function mouseClicked(){
    lose();
}

function mousePressed(event){
    lose();
}

function keyPressed(event) {
 lose();
} 

function on() {
lose();
}


/**
 * Display the score
 */
function displayScore() {
  push();
  textSize(48);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(floor(score), width/2, height/2);
  pop();
}      