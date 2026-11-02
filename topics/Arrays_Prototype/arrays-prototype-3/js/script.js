/**
 * Bubble Tea
 * Mariam-Choukri Mahdi
 *
 * Are you be able to eat all tapioca buble in your brown sugar tea !
 */

"use strict";

let pearls = [];
/**
 * Create a canvas
 */
function setup() {
  createCanvas(640, 640);
}

//To draw pearl tapioca that taste to good it's bad
function createPearls() {
  let y = random(300, 600);

  let left = map(y, 280, 620, 145, 180);
  let right = map(y, 280, 620, 495, 460);

  //Random pearl
  let pearl = {
    x: random(left + 15, right - 15),
    y: y,
    size: random(15, 20),
  };
  return pearl;
}

/**
 * I draw a bubble tea drink where you will find tapioca bubles.
 * You like tapioca bubbles, this time you want them to disappear so you drink the delicious tea.
 * Maybe this time, the tapioca were not well conserve.
 */
function draw() {
  background("#d3ffd3");

  //Tea
  push();
  fill("#ffbd84");
  noStroke();
  quad(145, 280, 495, 280, 460, 620, 180, 620);
  pop();

  //Tapioca Pearl and it's movement
  for (let pearl of pearls) {
    drawPearl(pearl);
  }

  if (frameCount % 60 === 0) {
    const newPearl = createPearls();
    pearls.push(newPearl);
    console.log(pearls.length);
  }

  //Straw
  moveStraw();
  drawStraw();

  //Cup
  push();
  fill(255, 255, 255, 30);
  stroke("#c0e7ff");
  strokeWeight(5);
  arc(320, 280, 350, 350, PI, TWO_PI, CHORD);
  pop();

  //Tea cup
  push();
  fill(255, 255, 255, 30);
  stroke("#c0e7ff");
  strokeWeight(5);
  quad(145, 280, 495, 280, 460, 620, 180, 620);
  pop();
}

//Bubble Tapioca

function drawPearl(pearl) {
  push();
  fill("#201002");
  stroke("#000000");
  strokeWeight(3);
  circle(pearl.x, pearl.y, pearl.size);
  pop();
}

function moveStraw() {
  let strawY = constrain(mouseY, 350, 600);

  let left = map(strawY, 280, 620, 145, 180);
  let right = map(strawY, 280, 620, 495, 460);

  let strawX = constrain(mouseX, left + 10, right - 10);
}

function drawStraw() {
  // Straw
  push();
  fill("#ff69b4");
  noStroke();
  rect(mouseX - 10, 20, 20, mouseY - 20);
  pop();
}

function mousePressed() {
  for (let i = pearls.length - 1; i >= 0; i--) {
    let pearl = pearls[i];

    let distance = dist(strawX, strawY, pearl.x, pearl.y);

    if (distance < pearl.size / 2) {
      pearl.splice(i, 1);
    }
  }
}
