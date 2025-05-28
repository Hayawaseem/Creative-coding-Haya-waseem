function setup() {
  createCanvas(400, 400); // a canvas of size 400x400 pixels
}

function draw() {
  background(20, 20, 40); //dark blue background to represent outer space

  // Alien body
  fill(90, 350, 90); // Green color for the body
  ellipse(200, 250, 150, 150); //large circle

  // Alien head
  ellipse(200, 170, 120, 140); // the head is slightly a oval shape above the body

  // Alien eyes
fill(255); // White for the outer part of the eyes
ellipse(175, 160, 30, 50); // Left eye
ellipse(225, 160, 30, 50); // Right eye
ellipse(200, 160, 30, 50); // Middle eye

fill(0); // Black for pupils
ellipse(175, 160, 15, 30); // Left pupil
ellipse(225, 160, 15, 30); // Right pupil
ellipse(200, 160, 15, 30); // Middle pupil

  // Alien antennas
stroke(80, 205, 80); // Green stroke for antenna lines
strokeWeight(5);     // Make the antenna lines thicker

line(170, 110, 150, 70); // Left antenna
line(230, 110, 250, 70); // Right antenna
line(200, 110, 200, 65); // Center antenna (straight up)

fill(255, 0, 0); // Red circles at the tips of the antennas
ellipse(150, 70, 15, 15); // Left antenna tip
ellipse(250, 70, 15, 15); // Right antenna tip
ellipse(200, 65, 15, 15); // Center antenna tip

  // Alien mouth
  noStroke(); // Remove outline from the mouth
  fill(255, 0, 0); // Red color for the mouth
  arc(200, 200, 40, 20, 0, PI); // Draw a smiling mouth using an arc
}
