/**
 * Bubble Tea
 * Mariam-Choukri Mahdi
 *
 * Are you be able to eat all tapioca buble in your brown sugar tea !
 */

"use strict";

//The pearl that will appear
let pearls = [];

//The straw that will move
let strawX = 320;
let strawY = 450;

//Display a title
let titleString = "BUBBLE TEA";

let instructionString =
  "Use the arrow keys to move the straw\nand pop the tapioca pearls!";

let startString = "Press ENTER to start";

let state = "title";

//The font style
let Bobastyle;

//Added a font to give this program a more game related look
function preload() {
  Bobastyle = loadFont("./assets/fonts/Redaction_35/Redaction35-Regular.ttf");
}

/**
 * Create a canvas
 */
function setup() {
  createCanvas(640, 640);
}

//To draw pearl tapioca that taste to good it's bad
function createPearls() {
  let y = random(450, 600);

  let left = map(y, 280, 620, 145, 180);
  let right = map(y, 280, 620, 495, 460);

  let x = random(left + 20, right - 20);

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
  //Title
  if (state === "title") {
    title();
  } else if (state === "playing") {
    // Background of your boba shop
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

    //Pop pearls

    popPearls();
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
}

// Start the game
function title() {
  background("#d3ffd3");

  push();
  fill("#201002");
  noStroke();
  textFont();
  textSize(26);
  textAlign(CENTER, CENTER);

  //Main title
  textSize(48);
  text(titleString, 320, 170);

  //Instruction
  textSize(22);
  text(instructionString, 320, 320);

  // Start instruction
  textSize(24);
  text(startString, 320, 470);
  pop();
}

function keyPressed() {
  if (state === "title" && keyCode === ENTER) {
    state = "playing";
  }
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

// Make the Straw move
function moveStraw() {
  // Move left
  if (keyIsDown(LEFT_ARROW)) {
    strawX -= 3;
  }

  // Move right
  if (keyIsDown(RIGHT_ARROW)) {
    strawX += 3;
  }

  // Move up
  if (keyIsDown(UP_ARROW)) {
    strawY -= 3;
  }

  // Move down
  if (keyIsDown(DOWN_ARROW)) {
    strawY += 3;
  }

  // Vertical limits
  strawY = constrain(strawY, 350, 605);

  // Horizontal limits
  let left = map(strawY, 280, 620, 145, 180);
  let right = map(strawY, 280, 620, 495, 460);

  strawX = constrain(strawX, left + 35, right - 35);
}

function drawStraw() {
  // Straw
  push();
  fill("#ff69b4");
  noStroke();
  quad(310, 20, 330, 20, strawX + 10, strawY, strawX - 10, strawY);
  pop();
}

function popPearls() {
  for (let i = pearls.length - 1; i >= 0; i--) {
    let pearl = pearls[i];

    let distance = dist(strawX, strawY, pearl.x, pearl.y);

    if (distance < 40) {
      pearls.splice(i, 1);
      break;
    }
  }
}
