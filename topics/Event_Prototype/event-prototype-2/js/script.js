/**
 * Eggs
 * Mariam-Choukri Mahdi
 * 
 *You have cook an egg. Don't forget to watch the timer.
 */

"use strict";


let score = 0;
let gameOver = false;

/**
 * Create a kitchen oven to cook the egg.
*/
function setup() {
    createCanvas(400, 400);
}

const pan = {
    x: 200,
    y: 200,
    size: 250,
    speed: 2
};

/**
 * Draw an egg that will slowly burn if you don't pay attention
*/
function draw() {
    background(100, 149, 237)

    displayScore();
    movePan();
    drawPan();

    //Eggs
    push();
    fill(255)
    noStroke
    circle(200,200,120);
    pop();

    push();
    fill(255, 215, 0);
    noStroke();
    circle(200, 200, 50);
    pop();

    if (!gameOver) {
        push();
        score += 0.05;
        pop();
    }

}

function displayScore() {
    push();
    textSize(30);
    textStyle(BOLD)
    fill(0, 0, 128);
    textAlign(CENTER, TOP);
    text(floor(score), width/2, 30);
    pop();
}

function drawPan() {
    push();
    translate(pan.x, pan.y)
    fill(0);
    stroke(112, 128, 144);
    strokeWeight(5);
    rect(-25, 100, 50, 100);
    circle(0, 0, pan.size);
    pop();
}


function movePan() {
    if (mouseIsPressed) {
        pan.y -= pan.speed;
    }
}
