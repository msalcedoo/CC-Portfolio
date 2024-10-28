const cellSize = 4;
const seedSize = 100;

let fadeInTime = 500;
let fadeInDuration = 1000;

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textSize(72);
  textFont("Monaco");
  textAlign(CENTER,CENTER);
}

function draw(){
  background(255);
  
  for(let w=0; w<=seedSize;w += cellSize){
    for(let h=0; h<=seedSize;h += cellSize){
      fill(random(80), random(150), random(180));
      rect(w,h,cellSize, cellSize);
    }
  }
  for(let w=0; w<width; w += seedSize){
    for(let h=0; h<height; h += seedSize){
      copy(0,0,seedSize,seedSize,w,h,seedSize,seedSize);
    }
  }
  
  
  let words = "marco salcedo";
  let spacing = 60;
  let elapsedTime = millis();
  let alphaValue = 0;

  if (elapsedTime > fadeInTime) {
    alphaValue = map(elapsedTime - fadeInTime, 0, fadeInDuration, 0, 255);
    alphaValue = constrain(alphaValue, 0, 255);
  }
  
  let textX = width / 2 - (words.length * spacing) / 2 +40;
  let textY = height / 2 - 70;

  for (let i = 0; i < words.length; i++) {
    
    let randomOffsetX = random(-3, 3);
    let randomOffsetY = random(-3, 3);

    fill(random(180), random(220), random(50), alphaValue);
    text(words.charAt(i), textX + i * spacing + randomOffsetX, textY + randomOffsetY);

  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}