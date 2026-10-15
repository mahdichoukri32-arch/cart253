const ball = {
    x: 0,
    y: 200,
    size: 20
}

function setup () {
    createCanvas(400, 400);
}

function draw () {
    background (0);

    ball.x  += 3;

    push();
    fill(255,0,0);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}

