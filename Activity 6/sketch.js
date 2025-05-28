let quoteWords;   // This holds each word of the quote
let sparkX = 0;    // X position for the moving line
let stars = [];    // List of stars for the background

function setup() {
  createCanvas(900, 450);         
  textFont("Georgia");            
  textSize(40);                  
  textAlign(LEFT, CENTER);        

  // Split the quote into words
  quoteWords = "My limit is beyond the sky".split(" ");

  // 150 stars with random position and brightness
  for (let i = 0; i < 150; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      alpha: random(100, 255),  // Brightness
      size: random(1, 2)        // Size of the star
    });
  }
}

function draw() {
  drawGradientBackground();  // Draw a purple-blue background
  drawStars();               // Draw stars

  let glowColor = color(255, 165, 0); // Orange glow color

  let startX = 70;  // Starting position for the first word

  let x = startX;   // X position for each word
  for (let i = 0; i < quoteWords.length; i++) {
    let w = textWidth(quoteWords[i]);  // Find width of the word
    let y = height / 2 + sin(frameCount * 0.05 + i) * 10; // Bounce effect

    // Draw the glowing word
    drawGlowingWord(quoteWords[i], x + w / 2, y, glowColor, 40);

    x += w; // Move to the right for the next word

    // Add extra space after "limit" and "beyond"
    if (quoteWords[i] === "limit" || quoteWords[i] === "beyond") {
      x += 40;
    } else {
      x += 20;
    }
  }

  drawSparkLine(); // Draw the moving line
}

// This draws a glowing word
function drawGlowingWord(txt, x, y, neonColor, size = 40) {
  textAlign(CENTER, CENTER); // Center the word
  for (let i = 8; i > 0; i--) {
    fill(red(neonColor), green(neonColor), blue(neonColor), 5); // Light glow
    textSize(size + i * 0.3); // Slightly bigger for each layer
    text(txt, x, y);
  }
  fill(neonColor);   // Main bright word
  textSize(size);
  text(txt, x, y);
}

// This draws the background color from dark to purple
function drawGradientBackground() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color("#1A1A40"), color("#4B367C"), inter);
    stroke(c);
    line(0, y, width, y);
  }
}

// This draws small twinkling stars
function drawStars() {
  noStroke();
  for (let star of stars) {
    fill(255, star.alpha); // White color with brightness
    ellipse(star.x, star.y, star.size); // Draw the star

    // Change brightness randomly
    star.alpha += random(-3, 3);
    star.alpha = constrain(star.alpha, 80, 255);
  }
}

// This draws a short glowing line that moves left to right
function drawSparkLine() {
  stroke(255, 165, 0);  // Orange color
  strokeWeight(2);
  let y = height / 2 + 15 + sin(frameCount * 0.02) * 5; // Small up and down movement
  line(sparkX - 20, y, sparkX + 20, y); // Line around sparkX

  sparkX += 5;  // Move the line to the right
  if (sparkX > width + 20) {
    sparkX = -20; // Start over when it goes off screen
  }
}
