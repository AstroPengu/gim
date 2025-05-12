// Apprire con "/*" e chiudere "*/" mette tutto come dialogo

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)

	// WEBGL aggiunge la terza dimensione, abilita il 3D

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}


function draw() {
	background(0, 0, 0)


	rotateX(-mouseX * 0.01)
	rotateY(-mouseY * 0.01)

	// "-mouseX * 0.01" per rallentare la rotazione

	//box (50, 50, 50)
	
	let dimensione = 300


for(let i=0; i<100; i++) {
	let gocciaLunghezza = random(10, 150)
	let gocciaX = random(-dimensione, dimensione)
	let gocciaY = random(-dimensione, dimensione, -gocciaLunghezza)
	let gocciaZ = random(-dimensione, dimensione)
	
	strokeWeight(random (1, 2))
	stroke(255, random (30), random(255))
	//stroke(random(255), random(255), random(255))
	line(gocciaX, gocciaY, gocciaZ,       gocciaX, gocciaY + gocciaLunghezza, gocciaZ)
}
	
	
}