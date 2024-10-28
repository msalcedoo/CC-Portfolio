let circles = [];

function setup() {
  let canvas = createCanvas(500, 500);
}

function draw() {
  background(185,23,150);

  for (let circle of circles) {
      circle.x += circle.xVel;
      if (circle.x + circle.radius > width || 
          circle.x - circle.radius < 0) {
        circle.xVel *= -1;
      }
        circle.display(); 
    }
  }

class Circle {
  constructor(x, y, radius, xVel, colors) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.xVel = xVel;
    this.colors = colors;
  }

  display() {
    fill(this.colors);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }
}

function mousePressed() {
  let radius = random(20, 40);
  let xVel = random(2,10);
  let colors = color(random(255), random(255), random(255));

  circles.push(new Circle(mouseX, mouseY, radius, xVel, colors));
}


