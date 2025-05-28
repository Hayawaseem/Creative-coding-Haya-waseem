var img;

function preload() {
  img = loadImage("mountain.jpg"); // Load image
}

function setup() {
  createCanvas(400, 400);          
  img.resize(400, 400);     // Resize image to canvas
  background(0);           // Set background
}

function draw() {
  background(0);                   // Clear canvas
  image(img, 0, 0);                // Display image
  var v = map(mouseX, 0, width, 2, 20); // Map mouseX to posterize level
  filter(POSTERIZE, v);            // Apply posterize filter
}
