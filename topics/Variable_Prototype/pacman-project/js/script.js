/**
 * Are you eating yourself ?
 * Mariam-Choukri Mahdi
 * 
 * You are putting too much stress to yourself to the point it consume you.
 */

"use strict";

// The pacman
let pacman={
  x:400,
  y:50,
  width:65,
  height: 65,
  velocity: {
    x: 1.5,
    y: 0
  }
}

let pacman2={
  x:-500.5,
  y:150,
  width:65,
  height: 65,
  velocity: {
    x: 1.5,
    y: 0
  }
}
let pacman3={
  x:1380,
  y:250,
  width:65,
  height: 65,
  velocity: {
    x: 1.5,
    y: 0
  }
}

let pacman4={
  x:-1000,
  y:250,
  width:65,
  height: 65,
  velocity: {
    x: 1.5,
    y: 0
  }
}

let point={
  x: 370.5,
  y: 50,
  width: 20,
  height: 20

}

let point2={
  x: -470.5,
  y: 150,
  width: 20,
  height: 20
}

/**
 * Create a canvas
*/
function setup() {
  createCanvas(400, 300)
}



/**
 * Draw a pacman figure who follow up a small circle he tries to eat but instead eat itself
*/
function draw() {
  background(0);
    

    //Draw a pacman
    push();
    fill(255, 255, 0);
    noStroke();
    arc(pacman.x, pacman.y, pacman.width, pacman.height,PI + QUARTER_PI, PI - QUARTER_PI, PIE);
    pop();
    //Draw a circle (a representation of your problems)
    push();
    fill(255, 20, 147);
    noStroke();
    circle(point.x, point.y, point.width, point.height);
    //Draw another pacman (to represent yourself also)
    push();
    fill(255, 255, 0);
    noStroke();
    arc(pacman2.x, pacman2.y, pacman2.width, pacman2.height, QUARTER_PI,
  TWO_PI - QUARTER_PI,
  PIE);
  //Draw a circle (a representation of your problems)
    push();
    fill(255, 20, 147);
    noStroke();
    circle(point2.x, point2.y, point2.width, point2.height);
  //Draw a third pacman
  push();
  fill(255, 255, 0);
  noStroke();
  arc(pacman3.x, pacman3.y, pacman3.width, pacman3.height,PI + QUARTER_PI, PI - QUARTER_PI, PIE);
  //Draw  pacman4 
    push();
    fill(255, 255, 0);
    noStroke();
    arc(pacman4.x, pacman4.y, pacman4.width, pacman4.height, QUARTER_PI, TWO_PI - QUARTER_PI, PIE);
  //Move the pacman
    pacman.x = pacman.x - pacman.velocity.x;
  //Move the point
    point.x = point.x - 1.5;
  //Move the pacman 2
  pacman2.x = pacman2.x + pacman2.velocity.x;
  //Move the point 2
    point2.x = point2.x + 1.5;
  //Move the pacman 3
  pacman3.x = pacman3.x - pacman3.velocity.x;
  //Move the pacman 4
  pacman4.x = pacman4.x + pacman4.velocity.x;
    

}
