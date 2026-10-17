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

const egg = {
    x: 200,
    y: 200,
    size: 120, 
    speed: 2,
    fill: {
        red: 255,
        green: 255, 
        blue: 255
    }
};

const yolk = {
    x: 200,
    y: 200,
    size: 50,
    speed: 2,
    fill: {
        red: 255,
        green: 215,
        blue: 0
    }
}
/**
 * Draw an egg that will slowly burn if you don't pay attention
*/
function draw() {
    background(100, 149, 237)

    displayScore();
    movePan();
    moveEgg();
    drawPan();
    drawEgg();
    loopcolor();


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
    text(floor(score), width/2, 15);
    pop();
}

function drawPan() {
    push();
    translate(pan.x, pan.y)
    fill(0);
    stroke(112, 128, 144);
    strokeWeight(5);
    rect(-25, 100, 50, 130);
    circle(0, 0, pan.size);
    pop();
}

function drawEgg() {
    push();
    fill(egg.fill.red, egg.fill.green, egg.fill.blue);
    noStroke();
    ellipse(egg.x, egg.y, egg.size);
    fill(yolk.fill.red, yolk.fill.green, yolk.fill.blue);
    circle(yolk.x, yolk.y, yolk.size);
    pop();
}

function movePan() {
    if (mouseIsPressed) {
        pan.y += pan.speed;
    }
    else {
        pan.y -= pan.speed;
    }

    pan.y = constrain(pan.y, 180, height - 180);
}

function moveEgg() {
    if (mouseIsPressed) {
        egg.y += egg.speed;
        yolk.y += yolk.speed;
    }
    else {
        egg.y -= egg.speed;
        yolk.y -= yolk.speed;
    }
    egg.y = constrain(egg.y, 180, height-180);
    yolk.y = constrain(yolk.y, 180, height-180);
}

function loopcolor() {

    let currentScore = floor(score);

    //At this point the egg burnt 
    if (mouseIsPressed) {
    if (currentScore < 5) {
        egg.fill.red = 255;
        egg.fill.green = 255;
        egg.fill.blue = 255;

        yolk.fill.red = 255;
        yolk.fill.green = 215; 
        yolk.fill.blue = 0;
    }

    else if (currentScore >= 5 && currentScore <= 15) {
        //Eggs turn burn 
       egg.fill.red = 255;
       egg.fill.green = 240;
       egg.fill.blue = 200;

        yolk.fill.red = 255;
        yolk.fill.green = 180;
        yolk.fill.blue = 0;

    }
    else if (currentScore > 15) {
      egg.fill.red   = constrain(egg.fill.red - 1, 80, 255);
      egg.fill.green = constrain(egg.fill.green - 1, 80, 255);
      egg.fill.blue  = constrain(egg.fill.blue - 1, 80, 255);

        yolk.fill.red   = constrain(yolk.fill.red - 1, 100, 255);
        yolk.fill.green = constrain(yolk.fill.green - 1, 60, 255);
        yolk.fill.blue  = constrain(yolk.fill.blue - 1, 30, 255);
    }
    if (egg.fill.red <= 80) {
        gameOver = true; 
    }
  }
}
