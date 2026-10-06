/**
 * Forest
 * Mariam-Choukri Mahdi
 * 
 * The forest is on many changes. Do you want to see the different shades of their leafs. 
 */

"use strict";

/**
 * Create a canvas to represent a deep blue sky
*/

let sunlight = 0; 

function setup() {
    createCanvas(640,480);

}

/**
 * I will draw a forest with green leaf touching a sky with some clouds and bright sun on the corner. 
*/
function draw() {
    background(135, 206, 250);

    checkSunlight ();

    //Sun 
    push();
    fill(255, 215, 0);
    noStroke();
    circle(550,90,100);
    pop();

    //Clouds
    push();
    fill(255);
    noStroke();
    circle(90, 100, 40);
    circle(115, 90, 55);
    circle(140,100,40);
    pop();

     push();
    fill(255);
    noStroke();
    circle(260, 150, 60);
    circle(300, 130, 80);
    circle(345,150,65);
    pop();

    //Trees
    drawTree();
}

function drawTree() {
    // Trunk
    push();
    fill(110, 70, 40);
    noStroke();
    rect(50, 350, 35, 130);
    rect(180, 330, 40, 150);
    rect(320, 360, 35, 120);
    rect(470, 340, 40, 140);
    pop();

    //Leaves 
   push();
    fill(60, 130, 70);
    noStroke();

    // Tree 1
    circle(45, 330, 90);
    circle(85, 310, 100);
    circle(115, 345, 90);

    // Tree 2
    circle(170, 315, 110);
    circle(215, 290, 120);
    circle(250, 330, 100);

    // Tree 3
    circle(305, 345, 90);
    circle(345, 325, 100);
    circle(375, 355, 90);

    // Tree 4
    circle(455, 325, 105);
    circle(500, 300, 115);
    circle(540, 335, 100);

    pop();
}

function checkSunlight () {
    if (sunlight < 100) {
        //Green
    }
    
    else if (sunlight < 200) {
        //Yellow
    }

    else if (sunlight < 300) {
        //0range
    }

    else {
        //Red
    }

}