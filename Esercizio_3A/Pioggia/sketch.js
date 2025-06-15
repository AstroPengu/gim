function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear(); // Sfondo trasparente - così si vede l'immagine HTML dietro

    // Calcola le dimensioni basate sulla finestra
    let larghezza = windowWidth / 2;
    let altezza = windowHeight / 2;
    let profondita = 300; // Puoi mantenere fisso questo valore per la profondità

    for(let i = 0; i < 150; i++) { // Aumentato il numero di gocce
        let gocciaLunghezza = random(10, 100);
        
        // Distribuzione su tutta la larghezza e altezza della finestra
        let gocciaX = random(-larghezza, larghezza);
        let gocciaY = random(-altezza, altezza - gocciaLunghezza);
        let gocciaZ = random(-profondita, profondita);

        strokeWeight(random(1, 2));
        stroke(255, 255, 255, 150); // Bianco con trasparenza
        line(gocciaX, gocciaY, gocciaZ, gocciaX, gocciaY + gocciaLunghezza, gocciaZ);
    }
}