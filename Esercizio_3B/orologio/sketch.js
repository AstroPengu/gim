// push() e pop() vanno sempre insieme
// push e pop

function setup() {
	createCanvas(windowWidth, windowHeight)
	console.log()
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

// Function to draw a yellow star
function drawYellowStar(x, y, points, outer, inner) {
  fill(255, 255, 0); // Yellow color
  beginShape();
  for (let i = 0; i < points * 2; i++) {
    let radius = i % 2 === 0 ? outer : inner;
    let angle = map(i, 0, points * 2, 0, TWO_PI);
    let sx = x + cos(angle) * radius;
    let sy = y + sin(angle) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function draw() {
	background(0)
	noStroke()

	// impostazioni per l'origine...
	translate(width/2, height/2)

		//Circonferenza orologio con punti
		fill(255)
		for(let i=0; i<60; i++) {
		push()
		rotate(i / 60 * TWO_PI)

		if (i % 5 == 0){
		ellipse(0,-180,15)
		} else {
		ellipse(0,-180,5)
		}
		pop()
		}

	
		//ore
		push()
		const angoloOre = (hour() / 12 + minute() / 60 / 12) * TWO_PI //normalizzo
		rotate(angoloOre)
		fill(10, 0, 240) // Yellow color for hour hand
		// Triangle for hour hand pointing outward
		beginShape();
		vertex(0, -110);   // Point tip at time indicator
		vertex(-10, 2);   // Base left
		vertex(10, 2);    // Base right
		endShape(CLOSE);
		pop()
	
		//minuti
		push()
		const angoloMinuti = minute() / 60 * TWO_PI //normalizzo
		rotate(angoloMinuti)
		fill(255, 20, 0) // Yellow color for minute hand
		// Triangle for minute hand pointing outward
		beginShape();
		vertex(0, -160);   // Point tip at time indicator
		vertex(-8, 2);    // Base left
		vertex(8, 2);     // Base right
		endShape(CLOSE);
		pop()

		//secondi
		const s = second()
		const angoloSecondi = second() / 60 * TWO_PI //normalizzo
		rotate(angoloSecondi)
		fill(220,160,0)
		rect(-3, 10, 4, -185)
		// Replace the red ellipse with a yellow star
		push()
		fill(200,160,0) // Yellow color
		drawYellowStar(0, -180, 5, 15, 7)
		pop()
	
	//centrino
	fill(255)
	ellipse(0, 0, 5)

	fill(255)
	ellipse (0,0,20)
	//console.log(TAU,h,m,s)
}