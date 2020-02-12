
function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  stroke(190, 100, 100, 100);
  strokeWeight(0.2);
  noFill();
}

let yoff = 0;
function draw() {
  background(0);
  translate(width / 2, height / 2);
  let size = 100;
  let xoff01 = 0;
  let xoff02 = 1000;
  beginShape();
  for(let i = 0; i < 10; i++){
    for(let ang = 0; ang < TWO_PI; ang += 0.5){
    let nis01 = map(noise(xoff01 + yoff), 0, 1, -10, 10);
    let nis02 = map(noise(xoff02 + yoff), 0, 1, -10, 10);

    let x = cos(ang) * size + nis01;
    let y = sin(ang) * size + nis02;
    // let x = cos(ang) * size + (nis01 * (mouseX - width / 2) * 0.05);
    // let y = sin(ang) * size + (nis02 * (mouseY - height / 2) * 0.05);
    // fill(100, 100, 100, 100);
    vertex(x, y);
    vertex(y, x);
    
    xoff01 += 1;
    xoff02 += 1;
  }
  }
  endShape(CLOSE);
  yoff += 0.005;
}