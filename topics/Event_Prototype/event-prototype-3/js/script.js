/**
 * Touch Grass
 * Mariam-Choukri Mahdi
 * 
 * We have consume to much internet lately, take a break. TOUCH GRASS !!!
 */

"use strict";

/**
 * Create a panting when the reality was not capture by the picture. 
*/
function setup() {
    createCanvas(700, 700);
}


/**
 * Black and white when internet, when offline it show a beautiful background.  
*/
function draw() {
    background(128, 128, 128);


    //Stem
    push();
    stroke(95, 95, 95);
    strokeWeight(12);
    line(350, 350, 350, 700);
    pop();

    //Flower
    push();
    noStroke();
    fill(105, 105, 105);
    circle(350, 350, 150);
    pop();

    //Petals
    push();
    noStroke();
    fill(169, 169, 169);
   circle(475, 350, 100); 
   circle(413, 458, 100); 
   circle(288, 458, 100); 
   circle(225, 350, 100); 
   circle(288, 242, 100); 
   circle(413, 242, 100); 
    pop();

    //Leaves
    push();
    fill(95, 95, 95);
    noStroke();
    ellipse(320,530,60,30);
    ellipse(380,620,60,30);
    pop();

    //Flames
    push();

    noStroke();
    
// Left flames

fill(150);
triangle(0, 700, 80, 700, 55, 330);

fill(160);
triangle(0, 700, 110, 700, 135, 380);


fill(192, 192, 192);
triangle(0, 700, 0, 350, 65, 315);
triangle(0, 700, 70, 700, 125, 420);


fill(211, 211, 211);
triangle(90, 700, 170, 700, 205, 490);
triangle(175, 700, 245, 700, 265, 560);
triangle(260, 700, 310, 700, 295, 625);



// Right flames

fill(150);
triangle(500, 700, 600, 700, 580, 475);

fill(160);
triangle(525, 700, 650, 700, 525, 420);


fill(192, 192, 192);
triangle(470, 700, 440, 465, 550, 700);
triangle(580, 700, 700, 700, 640, 500);


fill(211, 211, 211);
triangle(420, 700, 450, 530, 510, 700);
triangle(620, 700, 650, 450, 700, 700);





pop();



}
