//SHORTCUTS
// alt + su/giù =  mi fa spostare l'intera fila in alto o in basso
// alt + shift + su/giù = duplico la fila in alto o in basso

let posX 
let posY
let velX
let velY

// Nuove variabili per il colore armonioso
let currentHue = 120 // Iniziamo dal verde (120 gradi nella ruota dei colori)
let saturation = 80  // Saturazione fissa per colori vivaci ma armoniosi
let brightness = 90  // Luminosità fissa

// Variabili per le paddle del Pong (ora orizzontali)
let paddleWidth = 40   // Larghezza più piccola e fissa
let paddleHeight = 12  // Altezza più piccola
let paddleSpeed = 8    // Velocità aumentata per stare dietro al disco
let topPaddleX = 400   // Posizione X della paddle superiore
let bottomPaddleX = 400 // Posizione X della paddle inferiore

// Variabile per tracciare se c'è stato un rimbalzo nel frame corrente
let justBounced = false

// Concetto di let ("permettere")
// Permette di far assumere al valore scelto (come per esempio posizione o velocità)
// la capacità di cambiare a livello numerico in base 
// ai comportamenti che gli dico di attuare.
// ATTENZIONE, qui in cima (ovvero sopra al function setup)
// non ha senso inserire calcoli come: "let posX = width / 2" 
// perchè la lettura del codice avviene come un flusso/cascata/ciclo
// dall'alto verso il basso, e dunque il valore "width" espresso prima della function setup 
// non è ancora stato letto e generato e dunque non può essere visualizzato, crea un errore.


function setup() {

	// Dentro function setup(), si inseriscone le istruzioni che vengono 
	// eseguite una sola volta all'avvio del programma. Serve come fase 
	// di preparazione per l'esecuzione principale del programma. 
	// Queste istruzioni possono includere:
    // definizione delle dimensioni della finestra (createCanvas),
    // impostazione dei colori di sfondo e del testo,
    // caricamento di risorse come immagini o font,
    // inizializzazione di variabili o oggetti che saranno utilizzati in seguito.

	createCanvas(800, 300)
	colorMode(HSB, 360, 100, 100, 255) // Impostiamo la modalità colore HSB

	posX = 8
	posY = 8
	velX = 5
	velY = 31

	// posX, posY, velX, velY sono inizializzazioni sono "Variabili".
	// Saranno utilizzati in seguito. Sono dei "contenitori". 
	// Si assegna un valore alla variabile con "=" ...
	

	// Concetto di posizione (pos)
	// È la cooridnata in cui si trova all'inizio del ciclo il mio oggetto (in questo caso l'ellisse),
	// "posX = 8" significa che la posizione sull'asse delle X coincide alla coordinata 8 nel canvas.
	// "posY = 8" significa che la posizione sull'asse delle Y coincide alla coordinata 8 nel canvas.

	// Concetto di velocità (vel)
	// il numero della velocità (vel) corrisponde alla quantità di pixel
	// per cui si muove il mio oggetto in una direzione (x o y) ogni volta 
	// che il mio monitor refresha l'immagine.  
	// "velX = 7" significa che l'oggetto si muove di 7 pixel a ogni ciclo di lettura sull'asse delle X.
	// "velY = 7" significa che l'oggetto si muove di 7 pixel a ogni ciclo di lettura sull'asse delle Y.

}


function draw() {
	
	// function draw() contiene le istruzioni che vengono eseguite ripetutamente, creando un'animazione.
	// Qui dentro si usano le funzioni di p5.js per disegnare elementi grafici, 
	// aggiornare le variabili, e interagire con l'utente. 
	
	console.log(posX, posY)
	
	// console.log permette di creare una visualizzazione in tempo reale 
	// delle coordinate dell'animazione che cambiano sulla console del browser 
	// (per accedere alla console sul browser premi: cmd + shift + P)

	// Prima disegna le paddle del Pong
	fill(0, 0, 60) // Grigio scuro
	noStroke()
	
	// Paddle superiore
	rect(topPaddleX - paddleWidth/2, 5, paddleWidth, paddleHeight)
	
	// Paddle inferiore  
	rect(bottomPaddleX - paddleWidth/2, height - 17, paddleWidth, paddleHeight)
	
	// Poi applica il fade semi-trasparente su tutto
	fill(0, 0, 95, 15) // Trasparenza molto bassa per fade più lungo
	noStroke()
	rect(0, 0, width, height)
	
	// Ridisegna le paddle sopra il fade per mantenerle nitide
	fill(0, 0, 60) // Grigio scuro
	noStroke()
	
	// Paddle superiore
	rect(topPaddleX - paddleWidth/2, 5, paddleWidth, paddleHeight)
	
	// Paddle inferiore  
	rect(bottomPaddleX - paddleWidth/2, height - 17, paddleWidth, paddleHeight)
	
	// Disegna il disco
	noFill()
	// Usa il colore corrente in modalità HSB
	stroke(currentHue, saturation, brightness, 200)
	strokeWeight(8)
	ellipse(posX, posY, 30)
	
	// Reset della variabile rimbalzo all'inizio di ogni frame
	justBounced = false
	
	// Movimento automatico delle paddle per seguire il disco orizzontalmente
	// Ogni paddle si allinea perfettamente e indipendentemente al centro del disco
	
	// Paddle superiore si allinea al disco
	if(topPaddleX < posX) {
		topPaddleX += paddleSpeed
	} else if(topPaddleX > posX) {
		topPaddleX -= paddleSpeed
	}
	
	// Paddle inferiore si allinea al disco (movimento indipendente)
	if(bottomPaddleX < posX) {
		bottomPaddleX += paddleSpeed
	} else if(bottomPaddleX > posX) {
		bottomPaddleX -= paddleSpeed
	}
	
	// Limita le paddle dentro il canvas orizzontalmente
	topPaddleX = constrain(topPaddleX, paddleWidth/2, width - paddleWidth/2)
	bottomPaddleX = constrain(bottomPaddleX, paddleWidth/2, width - paddleWidth/2)
	
	posX = posX + velX
	posY = posY + velY
	
	// Controllo rimbalzi - ora il disco rimbalza sui "muri" delle paddle
	if(posX >= width - 12) {
		velX = -velX
		justBounced = true
	} else if (posX < 12) {
		velX = -velX
		justBounced = true
	}

	// Rimbalzo superiore: spazio ancora maggiore tra disco e paddle
	if(posY <= 30) { // Rimbalza con più spazio dalla paddle
		velY = -velY
		justBounced = true
		posY = 30 // Forza la posizione
	} 
	// Rimbalzo inferiore: spazio ancora maggiore
	else if (posY >= height - 30) { // Rimbalza con più spazio dalla paddle
		velY = -velY
		justBounced = true
		posY = height - 30 // Forza la posizione
	}
	
	// Cambia colore SOLO quando c'è un rimbalzo - progressione armoniosa
	if(justBounced) {
		// Aumenta la tonalità di 25-40 gradi per una transizione fluida
		currentHue += random(25, 40)
		// Se supera 360, ricomincia da 0 (la ruota dei colori è circolare)
		if(currentHue >= 360) {
			currentHue -= 360
		}
	}

// "if" ci permette di cambiare alcune condizioni...
// Tutto questo calcolo qui sopra può anche essere 
// sintetizzato e rappresentato anche così:

// if(posX >= width || posX < 12) 
// {velX = -velX}

// if(posY >= height || posY < 12) {
// velY = -velY

}