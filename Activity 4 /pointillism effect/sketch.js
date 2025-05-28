var img, x, y;

function preload() {
  img = loadImage("lake.jpg"); // Load the image
}

function setup() {
  createCanvas(400, 400);   
  img.resize(400, 400); // Resize image to fit canvas
  image(img, 0, 0);    // Draw the image once
  noStroke();         // No border for ellipses
}

function draw() {
  x = random(width); // Random x position
  y = random(height); // Random y position

  fill(255, 50); // White color with low opacity
  ellipse(x, y, 30, 30); // Draw the white transparent ellipse
}
