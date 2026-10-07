/**
 * Fishy
 * Mariam-Choukri Mahdi
 * 
 *A fish can be pretty fast but some time he needs help to slow down.
 */

"use strict";

/**
 * In deep sea, this were we can find many fish with different lives.
*/
function setup() {
    createCanvas(460,460);

}

const fish = {
    x: 15,
    y: 220,
    size: 70,
    speed: 2,
    massage: 0
};


/**
 * A fish is moving throught the screen in deep sea until it gets tired.
*/
function draw() {
    background(72, 209, 204);

    drawOceanFloor ();

    drawSeaweed ();
    
    drawRocks ();

    increaseMassage ();

    moveFish ();

    tiredFish ();

    drawFish();

    drawButton ();

}

function drawOceanFloor () {
    //Sands
    push();
    fill(245, 245, 220);
    noStroke();
    rect(0,380,460,80);
    pop();
}

function drawSeaweed () {
    //Seaweed 
    push();
    noStroke();

    //Left seaweed
    fill(40, 130, 80);
    ellipse(50, 400, 25, 120);
    ellipse(75, 420, 22, 90);
    ellipse(100, 410, 25, 110);

    //Rigth seaweed
    fill(55, 150, 90);
    ellipse(360, 410, 25, 110);
    ellipse(390, 390, 25, 150);
    ellipse(420, 420, 22, 90);
    pop();
}

function drawRocks () {
    push();
    noStroke();

    fill(100, 105, 110);
    ellipse(180, 445, 90, 55);
    ellipse(220, 450, 70, 45);

    fill(125, 130, 135);
    ellipse(200, 435, 55, 40);

    pop();
}

function drawFish() {
    push();
    noStroke();

    //Body
    fill(255, 99, 71);
    ellipse(fish.x, fish.y, fish.size, fish.size / 2);

    //Tail 
    triangle(
        fish.x - 30, fish.y,
        fish.x - 55, fish.y - 25,
        fish.x - 55, fish.y + 25
    );

    //Eye
    fill(255);
   circle(fish.x + 22, fish.y - 7, 5);

    pop();
 } 


function moveFish() {
    if (fish.massage < 50){
        fish.speed = 2;
    }
    else if (fish.massage < 100){
        fish.speed = 1.5;
    }
    else if (fish.massage < 150) {
        fish.speed = 0.5;
    }
    else {
        fish.speed = 0;
    }
    if (fish.x < 420) {
    fish.x += fish.speed;
    }
}

function increaseMassage () {
    if (mouseIsPressed &&
        mouseX > 75 &&
        mouseX < 125 &&
        mouseY > 275 &&
        mouseY < 325
    ) {
        fish.massage += 1;
    }
}

function tiredFish () {
    if (fish.massage >= 150 && fish.y < 320) {
        fish.y += 0.5;
    }
}

function drawButton() {
    if (fish.massage < 150) {
    push();

    fill(255);
    stroke(0);
    circle(100, 300, 50);

    fill(0);
    noStroke();
    textSize(8)
    textAlign(CENTER, CENTER);
    text("HOLD", 100, 300);

    pop();
 }
}