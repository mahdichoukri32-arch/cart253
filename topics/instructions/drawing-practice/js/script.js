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
    ellipse(320, 320, 250, 250);

    //A yellow rectangle and a blue rectangle
    fill(250,220,130)
    stroke(250,220,130)
     rect(-10,350,660,150)

     fill(68,154,178)
    stroke(68,154,178)
     rect(-10,500,660,150)


    
}
