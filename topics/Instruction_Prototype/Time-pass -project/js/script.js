/**
 * Did you see the time ?
 * Mariam-Choukri Mahdi
 * 
 * Time have been passing faster than you thinks. 
 */

"use strict";

let sky = {
    red: 0,
    green: 191,
    blue: 255
}

let sun = {
    red: 255,
    green: 215,
    blue: 0
}

let beach = {
    red: 250,
    green: 250,
    blue: 210
}

let sea = {
    red: 175, 
    green: 238,
    blue: 238
}


/**
 * Create the canvas
*/
function setup() {
    createCanvas(640, 480);


}


/**
 * Draw a background where the day pass it when we move the mouse.
 * The mouse change the colour of the sky,sun/moon and field.  
*/
function draw() {

    // Change the colour of the sky
    sky.green = 191 - mouseX / 3;
    sky.blue = 255 - mouseX / 3;

    sky.green = constrain(191 - mouseX / 3, 20, 191);
    sky.blue = constrain(255 - mouseX / 3, 60, 255);

    // Do the same for sun/moon
    sun.red = 255 - mouseX / 25;
    sun.blue = mouseX / 4;
    sun.green = 215 + mouseX / 40;
    
    // Change the colour of the beach
    beach.red =  250 - mouseX / 5;
    beach.blue = 210 - mouseX / 5;
    beach.green = 250 - mouseX / 5; 

    // Do the same for the sea
    sea.red = 175 - mouseX / 5;
    sea.green = 238 - mouseX / 5;
    sea.blue = 238 - mouseX / 5;



    background(sky.red, sky.green, sky.blue);

    //Draw a sun or moon
    push();
    fill(sun.red, sun.green, sun.blue);
    noStroke();
    ellipse(500, 150,130);
    pop();

    //Draw the beach 
    push();
    fill(beach.red, beach.green, beach.blue);
    noStroke();
    rect(0, 320, 680, 100);
    pop();

    //Draw the sea
    push();
    fill(sea.red, sea.green, sea.blue);
    noStroke();
    rect(-10, 380, 670, 165);
    pop();
}