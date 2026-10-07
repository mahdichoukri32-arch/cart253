/**
 * Boom !
 * Mariam-Choukri Mahdi
 * 
 * Do you choose to explode the bomb or to not ? 
 */

"use strict";

/**
 * Create a wide canva so when it's explode the whole screen seem to be affected. 
*/
function setup() {
createCanvas(1500,800);
}

// Define the movement of the spark 

const spark = {
    //Position
    x : 1050,
    y : 15,

    //Size
    size: 30,
    //Maximum size
    maxSize:2500,

    //Speed
    speedX: -1.55,
    speedY: 1
}


/**
 * Draw a black bomb with a black circle, the wick is brown line and spark is represented by an orange circle. 
*/

//Draw the bomb
function draw() {

    //Background 
     background(255,255,255);
    
    //Bomb
    drawBomb();

    //Spark
    moveSpark();
    checkSparkSize();
    drawSpark();

    //Text 
    drawEndText();
}

//Check if the spark stop at the right time
function moveSpark () {
    if (keyIsPressed) {
        if (spark.x > 910) {
    spark.x += spark.speedX;
    spark.y += spark.speedY;
    }
  }
}

function checkSparkSize() {
    if (spark.x <= 910 && spark.size < spark.maxSize) {
        spark.size += 30;
    }

}

//Draw the wick, bomb and spark

function drawBomb () {
    push();
    stroke(222, 184, 135);
    strokeWeight(15);
    line(850,150,1050,8);
    pop();

    push();
    fill(0,0,0);
    noStroke ();
    circle(720,420,750,750);
    pop();

    push();
    fill(105,105,105);
    noStroke();
    circle(500,250,150,150)
    pop();
}

function drawSpark () {
    push();
    fill(255, 69, 0)
    noStroke();
    circle(spark.x,spark.y,spark.size);
    pop();
}

function drawEndText() {
    if (spark.size >= spark.maxSize) {
        push();
        fill(255,255,0);
        stroke(0);
        strokeWeight(4);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("BOOM! You made your choice.", width / 2, height / 2);
        pop();
        
  }
}
