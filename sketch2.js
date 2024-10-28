let vid;
let vScale = 2;

function setup() {
  createCanvas(500, 500);
  vid = createCapture(VIDEO, { flipped: true });
  vid.size(width, height);
  vid.hide();
}

function draw() {
  background(0); // Black background

  // Load the video pixels for processing
  vid.loadPixels();
  loadPixels();

  for (let y = 0; y < vid.height; y++) {
    for (let x = 0; x < vid.width; x++) {
      let index = (x + y * vid.width) * 4;
      
      let r = vid.pixels[index];
      let g = vid.pixels[index + 1];
      let b = vid.pixels[index + 2];
      
      // Calculate the brightness of the pixel (grayscale conversion)
      let brightness = (r + g + b) / 3;
      
      // Set a threshold to create an outline effect
      if (brightness > 127) {
        // Draw white for brighter areas
        let pixIndex = (x * vScale + y * vScale * width) * 4;
        pixels[pixIndex] = 255;
        pixels[pixIndex + 1] = 255;
        pixels[pixIndex + 2] = 255;
        pixels[pixIndex + 3] = 255;
      } else {
        // Draw black for darker areas
        let pixIndex = (x * vScale + y * vScale * width) * 4;
        pixels[pixIndex] = 0;
        pixels[pixIndex + 1] = 0;
        pixels[pixIndex + 2] = 0;
        pixels[pixIndex + 3] = 255;
      }
    }
  }

  updatePixels();
}