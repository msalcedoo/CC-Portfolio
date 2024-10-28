let osc, osc2, playing, freq, amp, r;
let notes = [130.81, 146.83, 164.81, 174.61, 196, 220, 246.94, 261];
let keyWidth;

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.mousePressed(playOscillator);
  
  osc = new p5.Oscillator("triangle");
  osc2 = new p5.Oscillator("sine");
  
  r = new p5.Reverb();
  r.process(osc);
  r.process(osc2);

  keyWidth = width / notes.length;
}

function draw() {
  background(220);
  
  for (let i = 0; i < notes.length; i++) {
    if (mouseX > i * keyWidth && mouseX < (i + 1) * keyWidth) {
      fill(0); 
    } else {
      fill(255);
    }
    rect(i * keyWidth, 0, keyWidth, height);
  }
  
  let note = constrain(floor(map(mouseX, 0, width, 0, 8)), 0, 7);
  freq = notes[note] * 2;
  let diff = map(mouseY, height, 0, -10, 10);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);
  
  if (playing) {
    osc.freq(freq, 0.1);
    osc2.freq(freq + diff, 0.1);
    osc.amp(amp, 0.1);
  }
}

function playOscillator() {
  osc.start();
  osc2.start();
  playing = true;
}

function mouseReleased() {
  osc.stop();
  osc2.stop();
  playing = false;
}