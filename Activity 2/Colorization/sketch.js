function setup() {
  createCanvas(500, 300); // I create a canvas that is 500 pixels wide and 300 pixels 
}

function draw() {
  background(200); // I set the background color to a light gray

  // car body
  fill(0, 102, 204); // I fill the car body with a dark blue color
  rectMode(CENTER); // I set the rectangle mode so shapes are drawn from the center
  rect(250, 180, 200, 60, 20); // I draw the main car body as a rounded rectangle at (250,180)

  // car roof
  fill(0, 150, 255); // I choose a lighter blue color for the roof
  rect(250, 140, 120, 40, 15); // I draw the roof as a smaller rounded rectangle above the body

  // rectangular window on the roof
  fill(200, 230, 255); // I use the same light blue glass color as side windows
  rect(250, 140, 90, 25, 8); // I draw the roof window at the center of the roof

  // windows on the car body
  fill(200, 230, 255); // I set the windows to a light blue glass color
  rect(225, 180, 40, 30); // I draw the left window centered on the car body
  rect(275, 180, 40, 30); // I draw the right window centered on the car body

  //  wheels below the car
  fill(50); // I fill the wheels with a dark gray color
  ellipse(190, 210, 40, 40); // I draw the left wheel as a circle
  ellipse(310, 210, 40, 40); // I draw the right wheel as a circle

  // headlights at the front of the car
  fill(255, 255, 0); // I set the headlights to bright yellow
  ellipse(345, 180, 10, 10); // I place the headlight near the front right side

  // draw the road line beneath the car
  strokeWeight(3); // I make the road line thicker
  stroke(50); // I choose a dark gray for the road line color
  line(0, 230, width, 230); // I draw a horizontal line across the bottom part of the canvas as the road
}
