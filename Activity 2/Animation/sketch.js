//Animated Birthday Cake with Party Effects
// Cake gently up and down.
//Flickering candle flames with glowing color.

let birthdayMode = true; 
let baseY = 0;

function setup() {
  createCanvas(400, 450);
  noStroke();
}

function draw() {
  background('#B0E0E6'); // sky blue

  if (birthdayMode) {
    baseY = sin(frameCount * 0.05) * 10; // gentle up/down animation
  } else {
    baseY = 0;
  }

  // ─── Draw Cake Tiers ───
  drawCake(baseY);

  // ─── Draw Candles ───
  let candleSpacing = 100 / 6;
  for (let i = 1; i <= 5; i++) {
    let x = 150 + i * candleSpacing - 5;
    drawCandle(x, 150 + baseY, i);
  }
}

function drawCake(offsetY) {
  fill('#D2691E'); // bottom tier
  rect(50, 250 + offsetY, 300, 50);

  fill('#F4A460'); // middle tier
  rect(100, 200 + offsetY, 200, 50);

  fill('#FFDAB9'); // top tier
  rect(150, 150 + offsetY, 100, 50);
}

function drawCandle(x, y, idx) {
  // Candle body
  fill('#FFFF00');
  rect(x, y - 20, 10, 20);

  // Candle glow (soft ellipse under flame)
  fill(255, 140, 0, 100);
  ellipse(x + 5, y - 20, 19, 19);

  // Flame
  let flickerY = birthdayMode ? random(-2, 2) : 0;
  let height = birthdayMode ? 14 + random(-2, 2) : 15;
  let c1 = color('#FFA500');
  let c2 = color('#FFD700');
  let flickerColor = lerpColor(c1, c2, noise(frameCount * 0.2 + idx));

  fill(flickerColor);
  ellipse(x + 5, y - 25 + flickerY, 10, height);
}

// ─── Key Interaction ───
function keyPressed() {
  if (key === 'p' || key === 'P') {
    birthdayMode = !birthdayMode;
  }
}