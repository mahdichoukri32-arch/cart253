/**
 * Solar System
 * Mariam-Choukri Mahdi
 *
 * A project represent  the full solar system and learn a silly fun fact about sun and planets
 */

"use strict";

let Mercure = {
  //Positions
  x: 80,
  y: 350,

  //Colour
  fill: "#778899",
  stroke: "#535e67",
  strokeWeight: 10,

  //Dimensions
  size: 100,

  //Overlap
  //isClicked: false,
};

let Venus = {
  //Positions
  x: 240,
  y: 350,

  //Colour
  fill: "#efd99b",
  stroke: "rgb(217, 188, 135)",
  strokeWeight: 10,

  //Dimensions
  size: 150,

  //Overlap
  //isClicked: false,
};

let Earth = {
  //
  //Positions
  x: 480,
  y: 350,

  //Colour
  fill: "#4682B4",
  stroke: "#3b6e98",
  strokeWeight: 10,

  //Dimensions
  size: 240,

  //Overlap
  //isClicked: false,
};

let March = {
  //
  //Positions
  x: 765,
  y: 350,

  //Colour
  fill: "#FF4500",
  stroke: "#e33e02",
  strokeWeight: 10,

  //Dimensions
  size: 230,

  //Overlap
  //isClicked: false,
};

let Jupiter = {
  //
  //Positions
  x: 1100,
  y: 350,

  //Colour
  fill: "#fad3a6",
  stroke: "#d29f14",
  strokeWeight: 10,

  //Dimensions
  size: 390,

  //Overlap
  //isClicked: false,
};

let Saturn = {
  //
  //Positions
  x: 1500,
  y: 350,

  //Colour
  fill: "#ffc760",
  stroke: "#865f30",
  strokeWeight: 10,

  //Dimensions
  size: 330,

  //Overlap
  //isClicked: false,
};

let Uranus = {
  //Positions
  x: 1850,
  y: 350,

  //Colour
  fill: "#B0C4DE",
  stroke: "#95a7be",
  strokeWeight: 10,

  //Dimensions
  size: 280,

  //Overlap
  //isClicked: false,
};

let Neptune = {
  //Positions
  x: 2180,
  y: 350,

  //Colour
  fill: "#4169E1",
  stroke: "#3554b1",
  strokeWeight: 10,

  //Dimensions
  size: 280,

  //Overlap
  //isClicked: false,
};

let Celestial = undefined;
let Celestial2 = undefined;
let Celestial3 = undefined;
let Celestial4 = undefined;
let Celestial5 = undefined;
let Celestial6 = undefined;
let Celestial7 = undefined;
let Celestial8 = undefined;
let Celestial9 = undefined;
let Celestial10 = undefined;
let Celestial11 = undefined;
let Celestial12 = undefined;
let Celestial13 = undefined;
let Celestial14 = undefined;
let Celestial15 = undefined;
let Celestial16 = undefined;
let Celestial17 = undefined;
let Celestial18 = undefined;
let Celestial19 = undefined;
let Celestial20 = undefined;

/**
 * Create the canvas where our space environment started it
 */

function setup() {
  createCanvas(2350, 720);
  background("#483D8B");

  //Many stars shine in the milk ways
  Celestial = createStars();
  Celestial2 = createStars();
  Celestial3 = createStars();
  Celestial4 = createStars();
  Celestial5 = createStars();
  Celestial6 = createStars();
  Celestial7 = createStars();
  Celestial8 = createStars();
  Celestial9 = createStars();
  Celestial10 = createStars();
  Celestial11 = createStars();
  Celestial12 = createStars();
  Celestial13 = createStars();
  Celestial14 = createStars();
  Celestial15 = createStars();
  Celestial16 = createStars();
  Celestial17 = createStars();
  Celestial18 = createStars();
  Celestial19 = createStars();
  Celestial20 = createStars();
}

function createStars(celerite) {
  const twinkle = {
    //Position (random)
    x: random(0, width),
    y: random(0, height),
    //Size (default)
    size: random(5, 20),
  };
  //Check the distance btween the start and the planet
  while (
    dist(twinkle.x, twinkle.y, Mercure.x, Mercure.y) < 90 ||
    dist(twinkle.x, twinkle.y, Venus.x, Venus.y) < 115 ||
    dist(twinkle.x, twinkle.y, Earth.x, Earth.y) < 160 ||
    dist(twinkle.x, twinkle.y, March.x, March.y) < 155 ||
    dist(twinkle.x, twinkle.y, Jupiter.x, Jupiter.y) < 215 ||
    dist(twinkle.x, twinkle.y, Saturn.x, Saturn.y) < 205 ||
    dist(twinkle.x, twinkle.y, Uranus.x, Uranus.y) < 180 ||
    dist(twinkle.x, twinkle.y, Neptune.x, Neptune.y) < 180
  ) {
    twinkle.x = random(0, width);
    twinkle.y = random(0, height);
  }
  return twinkle;
}

/**
 * I will draw each of the eight planet of solar system, each planet is more far away of the sun. A section can be created to showcase the information and the little animation what the planet.
 */
function draw() {
  //8th planet of Solar System
  drawPlanet(Mercure);
  drawPlanet(Venus);
  drawPlanet(Earth);
  drawPlanet(March);
  drawPlanet(Jupiter);
  drawPlanet(Saturn);
  drawPlanet(Uranus);
  drawPlanet(Neptune);

  //Stars dust
  drawStars(Celestial);
  drawStars(Celestial2);
  drawStars(Celestial3);
  drawStars(Celestial4);
  drawStars(Celestial5);
  drawStars(Celestial6);
  drawStars(Celestial7);
  drawStars(Celestial8);
  drawStars(Celestial9);
  drawStars(Celestial10);
  drawStars(Celestial11);
  drawStars(Celestial12);
  drawStars(Celestial13);
  drawStars(Celestial14);
  drawStars(Celestial15);
  drawStars(Celestial16);
  drawStars(Celestial17);
  drawStars(Celestial18);
  drawStars(Celestial19);
  drawStars(Celestial20);
}

// Made the stars appear everywhere in the drawings *
// function moveStars() {
//* twinkle.x += random(-twinkle.celerite, twinkle.celerite);//
//twinkle.y += random(-twinkle.celerite, twinkle.celerite);}//

function overlap(planet) {
  let distance = dist(mouseX, mouseY, planet.x, planet.y);

  return distance < planet.size / 2;
}

function drawPlanet(planet) {
  push();
  if (overlap(planet)) {
    fill("#000000");
  } else {
    fill(planet.fill);
  }

  stroke(planet.stroke);
  strokeWeight(planet.strokeWeight);
  circle(planet.x, planet.y, planet.size);
  pop();
}
function drawStars(twinkle) {
  push();
  fill("#E6E6FA");
  noStroke();
  circle(twinkle.x, twinkle.y, twinkle.size);
  pop();
}
