let particles = []; // Array to store all particles
let pulse = 0;      // Used for pulse effect when mouse is clicked

function setup() {
  createCanvas(600, 600); 
  colorMode(HSB);         // Use HSB color mode (Hue, Saturation, Brightness)
  noStroke();             // Turn off outlines for shapes

  // Create 400 particles
  for (let i = 0; i < 400; i++) {
    let angle = random(TWO_PI);       
    let radius = random(80, 120);     
    particles.push(new Particle(angle, radius)); // Add particle to the list
  }
}

function draw() {
  background(0, 0.1);   // Dark background with a bit of transparency for trails
  blendMode(ADD);       
  translate(width / 2, height / 2); // Move origin to center of canvas

  // Change glow color based on mouse X position
  let hueShift = map(mouseX, 0, width, 160, 300);

  // Update and display each particle
  for (let p of particles) {
    p.update(hueShift);
    p.display(hueShift);
  }

  // Reduce the pulse value slowly
  if (pulse > 0) pulse -= 0.5;

  // Draw text in normal mode
  blendMode(BLEND);
  fill(255);
  textSize(12);
  textAlign(RIGHT);
  text( width / 2 - 10, height / 2 - 10);
}

function mousePressed() {
  pulse = 40; // Start pulse effect when mouse is clicked
}

// Particle class to define how each particle behaves
class Particle {
  constructor(angle, radius) {
    this.baseAngle = angle;    // Original angle
    this.baseRadius = radius;  // Original radius
    this.noiseOffset = random(1000); // Random offset for wave animation
    this.x = 0;
    this.y = 0;
    this.tx = 0; // target x
    this.ty = 0; // target y
  }

  update(hueShift) {
    let time = millis() * 0.001; // Get time in seconds
    let wave = sin(time * 2 + this.noiseOffset) * 10; // Create wavy motion
    let angle = this.baseAngle + time * 0.3;          // Slowly rotate around center
    let radius = this.baseRadius + wave + pulse;      // Change radius with wave and pulse

    // Calculate target position in orbit
    this.tx = cos(angle) * radius;
    this.ty = sin(angle) * radius;

    // Check distance to mouse
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let d = dist(this.tx, this.ty, mx, my);

    // If mouse is close, attract particle toward mouse
    if (d < 100) {
      let force = map(d, 0, 100, 0.5, 0); // Stronger pull when closer
      this.tx += (mx - this.tx) * 0.05 * force;
      this.ty += (my - this.ty) * 0.05 * force;
    }

    // Smoothly move to target position
    this.x = lerp(this.x, this.tx, 0.1);
    this.y = lerp(this.y, this.ty, 0.1);
  }

  display(hueShift) {
    // Set color based on radius and hue shift
    let hue = (map(this.baseRadius, 80, 120, 0, 60) + hueShift) % 360;
    let alpha = map(this.y, -120, 120, 40, 100); // Alpha changes with y-position
    fill(hue, 100, 100, alpha); // Set color and transparency
    ellipse(this.x, this.y, 4, 4); // Draw particle as a small circle
  }
}
