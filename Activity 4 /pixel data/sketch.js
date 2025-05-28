var img, x, y;

function preload() {
  img = loadImage("sunset.jpg"); // Load image
}

function setup() {
  createCanvas(400, 400);        
  img.resize(400, 400);   // Resize image to canvas
  background(0);         // Set background
  noStroke();           // Disable stroke (initially)
}

function draw() {
  background(0);                 // Clear canvas
  x = mouseX;
  y = mouseY;
  image(img, 0, 0);              // Display image
  var c = get(x, y);             // Get color at mouse
  fill(c);                       
  stroke(255);                   // White stroke
  strokeWeight(2);               // Stroke thickness
  ellipse(x, y, 100, 100);       // Draw circle at mouse
}
