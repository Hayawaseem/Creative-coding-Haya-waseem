function setup() {
  createCanvas(windowWidth, windowHeight); // Create a full-window canvas
  noLoop(); // Run draw only once (no continuous animation)
  rectMode(CENTER); // Set rectangles to be drawn from their center point
  drawPattern(); // Call the function to draw the pattern
}

function drawPattern() {
  background("#F8F8F8"); // Set a light grayish background

  let cols = 8; // Number of columns
  let rows = 8; // Number of rows
  let w = width / cols; // Width of each grid cell
  let h = height / rows; // Height of each grid cell

  // Loop through each cell in the grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w + w / 2; // X position of cell center
      let y = j * h + h / 2; // Y position of cell center

      push(); // Save the current drawing state
      translate(x, y); // Move the origin to the center of the current cell
      rotate(random(TWO_PI)); // Randomly rotate each square

      // Set a random soft fill color with transparency
      fill(random(200, 255), random(100, 200), random(150, 255), 180);
      noStroke(); // No border around the square
      rect(0, 0, w * 0.6, h * 0.6); // Draw the square

      // Draw soft gray crisscross lines inside the square
      stroke(50, 50, 50, 100); // Set line color with some transparency
      strokeWeight(1); // Thin lines
      let s = w * 0.6; // Size of the square
      for (let k = -s / 2; k <= s / 2; k += s / 5) {
        line(-s / 2, k, s / 2, -k); // Diagonal lines crossing each other
      }

      pop(); // Restore the previous drawing state
    }
  }
}

function mousePressed() {
  drawPattern(); // Redraw a new randomized pattern when the mouse is clicked
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas size to new window size
  drawPattern(); // Redraw the pattern to fit new size
}
