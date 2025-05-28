let particles = []; // Array to store all particle objects

function setup() {
  createCanvas(windowWidth, windowHeight); // Create a full-window canvas
  noCursor(); // Hide the default system cursor
  angleMode(DEGREES); // Use degrees instead of radians for angles
}

function draw() {
  background(10, 10, 30, 40); // Dark semi-transparent background for fading trail effect

  // Create a new particle at the current mouse position
  particles.push(new Particle(mouseX, mouseY));

  // Loop through all particles in reverse order
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update(); // Update particle properties
    particles[i].show();   // Display the particle

    // Remove particle if it has faded away
    if (particles[i].isFinished()) {
      particles.splice(i, 1);
    }
  }
}

// Define the Particle class
class Particle {
  constructor(x, y) {
    this.x = x; // X position
    this.y = y; // Y position
    this.vx = random(-0.5, 0.5); // Random horizontal speed
    this.vy = random(-0.5, 0.5); // Random vertical speed
    this.alpha = 255; // Opacity of the particle
    this.rotation = random(360); // Starting rotation angle
    this.rotationSpeed = random(-3, 3); // Speed of rotation
    this.size = random(10, 25); // Size of the shape
    this.colorShift = frameCount % 360; // Color hue shift based on frame
  }

  // Update particle movement and appearance
  update() {
    this.x += this.vx; // Move in X
    this.y += this.vy; // Move in Y
    this.alpha -= 4;   // Fade out
    this.rotation += this.rotationSpeed; // Rotate the shape
  }

  // Check if the particle is fully faded
  isFinished() {
    return this.alpha < 0;
  }

  // Draw the particle on screen
  show() {
    push(); // Save current drawing settings
    translate(this.x, this.y); // Move origin to particle location
    rotate(this.rotation); // Rotate the particle

    // Set color using HSB for hue cycling
    colorMode(HSB, 360, 100, 100, 255);
    fill((this.colorShift + frameCount) % 360, 80, 100, this.alpha); // Dynamic color
    noStroke(); // No border

    // Draw a diamond-like shape with 4 vertices
    beginShape();
    for (let i = 0; i < 4; i++) {
      let angle = 90 * i;
      let r = this.size * (i % 2 === 0 ? 1 : 0.6); // Alternate long and short points
      vertex(cos(angle) * r, sin(angle) * r);
    }
    endShape(CLOSE); // Close the shape

    pop(); // Restore previous settings
  }
}
