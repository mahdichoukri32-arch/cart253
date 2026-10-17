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
    speed: 2
};

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
    translate(egg.x, egg.y);

    // Burning situation
    let burnLevel = map(egg.y, 180, height - 180, 0, 1);
    burnLevel = constrain(burnLevel, 0, 1);
    //burnLevel = constrain(burnLevel, 0, 255);
    
    //Burning process of egg 
    let whiteColor = lerp(255, 20, burnLevel);
    fill(whiteColor, whiteColor, whiteColor);
    noStroke();
    circle(0, 0, egg.size);

    // Burning process of yolk
    let yolkRed = lerp(255, 20, burnLevel);
    let yolkGreen = lerp(215, 20, burnLevel); 
    let yolkBlue = lerp(0, 20, burnLevel); 

    fill(yolkRed, yolkGreen, yolkBlue);
    circle(0, 0, 50);
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
    }
    else {
        egg.y -= egg.speed;
    }
    egg.y = constrain(egg.y, 180, height-180);
}

