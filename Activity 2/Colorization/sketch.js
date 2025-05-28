// Birthday Cake Sketch
//three-tier cake with five candles on a 400 × 450 canvas.
//The candle flames are static (no flicker).

function setup() {
  // Create a 400 × 450 pixel drawing area
  createCanvas(400, 450);

}

function draw() {
  background('#B0E0E6'); // Light blue

  // No outlines 
  noStroke();

  // Bottom tier chocolate brown
  fill('#D2691E');
  rect(50, 250, 300, 50);   // x, y, width, height

  // Middle tier — light brown
  fill('#F4A460');
  rect(100, 200, 200, 50);

  // Top tier — peach
  fill('#FFDAB9');
  rect(150, 150, 100, 50);

  // Candles 

  // candleSpacing = tierWidth / (candles + 1)
  const candleSpacing = 100 / 6;

  // Draw each candle
  for (let i = 1; i <= 5; i++) {
    // Center each 10-pixel-wide candle on its slot
    const candleX = 150 + i * candleSpacing - 5; // -5 shifts left so candle is centered
    const candleY = 150;                         // top surface of the cake
    drawCandle(candleX, candleY);
  }
}


function drawCandle(x, y) {
  // Candle body — bright yellow
  fill('#FFFF00');
  rect(x, y - 20, 10, 20);  // 20 px tall, 10 px wide

  // Flame — orange ellipse positioned above the candle
  fill('#FFA500');
  ellipse(x + 5, y - 25, 10, 15); // centered horizontally on the candle
}