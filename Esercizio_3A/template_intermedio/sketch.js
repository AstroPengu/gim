let posX 
let posY
let velX
let velY



function setup() {

	createCanvas(900, 400)

	posX = 80
	posY = 50
	velX = 15
	velY = 20
	

}


function draw() {

	//background (20)
	
	console.log(posX, posY)
	
	stroke(200 , random (240), random (140), 160)
	strokeWeight(7)
	noFill()
	ellipse(posX, posY, 40)
	

	posX = posX + velX
	posY = posY + velY
	
	if(posX >= width - 12) {
		velX = -velX
	} else if (posX < 12) {
		velX = -velX
	}

	if(posY >= height - 12) {
		velY = -velY
	} else if (posY < 12) {
		velY = -velY
	}

	
}