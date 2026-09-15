/**
 * Beach day
 * Mariam-Choukri Mahdi/Alycia Malonga
 * 
 * We visit a beautiful beach during our vacantion this summer.
 * We're enjoying the beach for the last time.
 */

"use strict";

/**
 * CREATE THE CANVAS
*/
function setup() {
    //Create a nice canvas to work with it
    createCanvas(640, 640);
}


/**
 * A blue sky, a yellow sun
*/
function draw() {
    //A blue background
    background(82, 223, 255);



    //A yellow circle
    fill(255,255,36)
    stroke(255,152,20)
    strokeWeight(10)
    ellipse(320, 320, 250, 250);

    //A yellow rectangle and a blue rectangle
    fill(250,220,130)
    stroke(250,220,130)
     rect(-10,350,660,150)

     fill(68,154,178)
    stroke(68,154,178)
     rect(-10,500,660,150)

    // Adding scenic background of triangle 
    fill(112,97,66)
    stroke(112,97,66)
    triangle(-10,340,80,40,200,340)
    triangle(450,340,550,40,650,340)

    fill(143,125,99)
    stroke(143,125,99)
    triangle(-10,340,70,180,150,340)
    triangle(490,340,570,180,650,340)

    //Draw a bird
    stroke(64,199,162)
    strokeWeight(3)
    noFill()
    arc(100,100,40,30,PI,0)
    arc(140,100,40,30,PI,0)

    //Draw a fish
    fill(255,0,0)
    noStroke()
    ellipse(80,550,80,40)
    arc(40,550,40,40,PI+QUARTER_PI,PI-QUARTER_PI,PIE,5)
   

    //Draw a burrow 
    fill()
    stroke()
    

    
}
