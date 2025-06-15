let fiocchi = [];
let caratteri = "*❇❄".split("")

function setup() {
  createCanvas(windowWidth, windowHeight);



  for (let i = 0; i < 300; i++) {
    fiocchi[i] = {
      PosX: random(0, width),
      PosY: random(-100, 0), 
      Dim: random(10, 20),
      vel: random(1, 3),
      chr: random(caratteri),
      colore: color(random(0), random(255), random(200))
    };
  }
}

function draw() {
  background(0); 

  for (let i = 0; i < fiocchi.length; i++) {
    let f = fiocchi[i];

    f.PosX += random(-1.5, 1.5);
    f.PosY += f.vel;

    if (f.PosY > height) {
      f.PosY = 0;
      f.PosX = random(0, width);
    }

    fill(f.colore);
    textSize(f.Dim);
    text(f.chr, f.PosX, f.PosY);
	noStroke()
  }

  
  stroke(255) 
  fill(255)
  rect(0, 500,    3000, 500)
  ellipse (700, 460, 140)
  ellipse (700, 380, 105)
  ellipse (700, 310, 80)
  fill(0)
  ellipse (726, 300, 10)
  ellipse (690, 280, 10)
  fill (255, 140, 0,)
  noStroke ()
  triangle (700, 298,      500, 100,      680, 300)
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
