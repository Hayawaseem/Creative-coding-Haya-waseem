let mic;
let colors = [
  "#ff6b6b",  // Coral Red
  "#ffca3a",  // Golden Yellow
  "#8ac926",  // Lime Green
  "#1982c4",  // Sky Blue
  "#6a4c93"   // Violet
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30); // Dark background for contrast
  mic = new p5.AudioIn(); // Access mic input
  mic.start();
  rectMode(CENTER); // Draw rectangles from center
  angleMode(DEGREES); // Use degrees for rotation
}

function draw() {
  let micLevel = mic.getLevel() * height * 2; // Adjust mic sensitivity

  // Choose random color for each rectangle
  fill(random(colors));
  noStroke();

  // Save the current drawing state
  push();
  translate(mouseX, mouseY);       // Move shape to mouse position
  rotate(frameCount % 360);        // Slowly rotate over time
  rect(0, 0, micLevel, micLevel);  // Draw responsive rotating rectangle
  pop();
}