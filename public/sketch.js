let points, tension;
let prevX, prevY;
let isUserDragging = false;

function setup() {
  createCanvas(windowWidth - 1, windowHeight - 1);
  noStroke();
  fill(128);
  points = [];
  const spacing = 20;
  for (let i = 0; i < windowWidth / spacing; i++) {
    for (let j = 0; j < windowHeight / spacing; j++) {
      points.push(createVector(i * spacing + spacing / 2, j * spacing + spacing / 2));
    }
  }
  tension = 0.0002;
}

function draw() {
  background(0);

  if (isUserDragging) {
    points[0].x = mouseX;
    points[0].y = mouseY;
  }

  for (let i = 1; i < points.length; i++) {
    const p = points[i];
    const prev = points[i - 1];
    const next = points[i + 1];

    // Update velocity based on tension (make tension a property object?)
    const dx = (prevX - p.x) * tension;
    const dy = (prevY - p.y) * tension;
    p.add(dx, dy);

    // Update position and tension based on user input
    const d = dist(mouseX, mouseY, p.x, p.y);
    if (d < 50) {
      p.x += (mouseX - p.x) * 0.05;
      p.y += (mouseY - p.y) * 0.05;
      tension *= 0.995;
    } else {
      tension *= 1.005;
    }

    // Calculate next tension
    const nextDx = (next.x - p.x) * tension;
    const nextDy = (next.y - p.y) * tension;

    // Apply velocity
    prevX = p.x + dx;
    prevY = p.y + dy;
    p.add(nextDx, nextDy);
  }

  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    //ellipse(p.x, p.y, 5, 5);
    circle(p.x, p.y, 4);
  }
}

function mousePressed() {
  isUserDragging = true;
}

function mouseReleased() {
  isUserDragging = false;
}