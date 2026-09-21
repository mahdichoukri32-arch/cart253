/**
 * Confusion
 * Mariam-Choukri Mahdi
 * 
 * You seem confused and it is visble throught your eyes. 
 */

"use strict";

//  The iris
let irisLeft= {
    x: 250,
    y: 250,
    size: 20,
    minX: 275,
    maxX: 275,
    minY: 225,
    maxY: 275,
    fill: 0
};

let irisRight= {
    x: 450, 
    y: 250,
    size: 20,
    minX: 425,
    maxX: 475,
    minY: 225,
    maxY: 275,
    fill: 0
}




/**
 * Create a canvas
*/
function setup() {
        createCanvas(640, 480);

}



/**
 * Draw a face where the iris is moving inside the eyes.
*/
function draw() {
    background(100);
    //Draw the face 
    push();
    fill(160,82,45);
    stroke(139, 69, 19);
    strokeWeight(5);
    ellipse(320, 240, 400);
    pop();

    //Draw the eyes
    push();
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(2);
    ellipse(250, 250, 100);
    pop();

      push();
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(2);
    ellipse(450, 250, 100);
    pop();

    //Uptade the iris
    // Constrain the iris to be within its defined minimum and maximum
    irisLeft.x = constrain(irisLeft.x, irisLeft.minX, irisLeft.maxX);
    irisLeft.y = constrain(irisLeft.y, irisLeft.minY, irisLeft.maxY);
    irisRight.x = constrain(irisRight.x, irisRight.minX, irisRight.maxX);
    irisRight.y = constrain(irisRight.y, irisRight.minY, irisRight.maxY);
    //Move the iris
    irisLeft.x = irisLeft.x + 1;
    irisLeft.y = irisLeft.y - 0.5;
    irisRight.x = irisRight.x - 1;
    irisRight.y = irisRight.y + 0.5;


    //Draw the iris 
    push();
    noStroke();
    fill(irisLeft.fill);
    ellipse(irisLeft.x, irisLeft.y, irisLeft.size);
    pop();

    push();
    noStroke();
    fill(irisRight.fill);
    ellipse(irisRight.x, irisRight.y, irisRight.size);
    pop();

    //Draw the mouth 
    push();
    fill(210, 43, 43);
    stroke(0, 0, 0);
    strokeWeight(2);
    ellipse(350, 350, 50);
    pop();
}
