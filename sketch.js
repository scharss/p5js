var speed = 3

function setup() {
    createCanvas(600, 500);

}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();
    for (var x = 0; x <= width; x += 50) {
        for (var y = 0; y <= height; y += 50) {
            ellipse(x, y, 24, 24);
        }
    }

}