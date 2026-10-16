/**
 * Event Prototype
 * Mariam-Choukri Mahdi
 * 
 * Oscar, a little ghost want to play hide and seek with you but it will take to see him. 
 */

"use strict";

let ghostlight = 0;
let ghostColor;

const ghost = {
    //Position
    x: 75,
    y: 350,

    //Size
    size: 100,

    //Speed
    speed: 30

};

/**
 * Create the playground 
*/
function setup() {
    createCanvas(640, 480);

}


/**
 * Draw a forest and a little ghost 
*/
function draw() {

    background(72, 61, 139);

    increaseGhostlight ();
    checkGhostColor();

    drawGhost();

    // First tree
    // Draw trunk 

      push()
    fill(139, 69, 19)
    noStroke();
    rect(80, 250, 60, 200);
    pop();

    // Draw leafs

     push();
    fill(106, 90, 205);
    noStroke();
    circle(120, 120, 150);
    pop();

    push();
    fill(106, 90, 205);
    noStroke();
    circle(80, 200, 150);
    pop();

    push();
    fill(123, 104, 238);
    noStroke();
    circle(170, 200, 150);
    pop();

    push();
    fill(147, 112, 219);
    noStroke();
    circle(150, 260, 100);
    pop();

    // 2nd Tree
     
    //Trunk

     push()
    fill(139, 69, 19)
    noStroke();
    rect(340, 250, 60, 200);
    pop();


    // Leafs

     push();
    fill(106, 90, 205);
    noStroke();
    circle(380, 120, 150);
    pop();

     push();
    fill(106, 90, 205);
    noStroke();
    circle(340, 200, 150);
    pop();

    push();
    fill(123, 104, 238);
    noStroke();
    circle(420, 200, 150);
    pop();

    push();
    fill(147, 112, 219);
    noStroke();
    circle(350, 260, 100);
    pop();

    // Last tree 
    
    //Trunk
     push()
    fill(139, 69, 19)
    noStroke();
    rect(580, 250, 60, 200);
    pop();

    //Leafs 

     push();
    fill(106, 90, 205);
    noStroke();
    circle(630, 120, 150);
    pop();

     push();
    fill(106, 90, 205);
    noStroke();
    circle(590, 200, 150);
    pop();

    push();
    fill(123, 104, 238);
    noStroke();
    circle(690, 200, 150);
    pop();

    push();
    fill(147, 112, 219);
    noStroke();
    circle(600, 260, 100);
    pop();

}

function drawGhost () {
    push();
    fill(ghostColor);
    noStroke();
    ellipse(ghost.x, ghost.y, ghost.size);

    //Eyes
    fill(0);
    circle(ghost.x + 5, ghost.y - 5, 15)
    pop();
}

function keyPressed() {
        if (keyIsDown(LEFT_ARROW)) {
            ghost.x -= ghost.speed;
        }
        else if (keyIsDown(RIGHT_ARROW)) {
            ghost.x += ghost.speed;
        }
}

function increaseGhostlight() {
    if(keyPressed) {
        ghostlight += 1;
    }
    if (ghostlight > 255) {
        ghostlight = 255;
    }
}

function checkGhostColor(){
    if(ghostlight < 100) {
    ghostColor = color(75, 60, 130);
    }
    else if(ghostlight < 200) {
    ghostColor = color(130, 115, 175);
    }
else {
    ghostColor = color(255, 255, 255);
}

}