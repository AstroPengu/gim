function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear(); // Sfondo trasparente - così si vede l'immagine HTML dietro
    
    let dimensione = 300;

    for(let i=0; i<100; i++) {
        let gocciaLunghezza = random(10, 150);
        let gocciaX = random(-dimensione, dimensione);
        let gocciaY = random(-dimensione, dimensione, -gocciaLunghezza);
        let gocciaZ = random(-dimensione, dimensione);
        
        strokeWeight(random (1, 2));
        stroke(255, 255, 255, 150); // Bianco con trasparenza (150 su 255)
        line(gocciaX, gocciaY, gocciaZ, gocciaX, gocciaY + gocciaLunghezza, gocciaZ);
    }
}