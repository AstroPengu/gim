//SHORTCUTS
// alt + su/giù =  mi fa spostare l'intera fila in alto o in basso
// alt + shift + su/giù = duplico la fila in alto o in basso

let posX 
let posY
let velX
let velY

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

	// Dentro function setup(), si inseriscono le istruzioni che vengono 
	// eseguite una sola volta all'avvio del programma. Serve come fase 
	// di preparazione per l'esecuzione principale del programma. 
	// Queste istruzioni possono includere:
    // definizione delle dimensioni della finestra (createCanvas),
    // impostazione dei colori di sfondo e del testo,
    // caricamento di risorse come immagini o font,
    // inizializzazione di variabili o oggetti che saranno utilizzati in seguito.

	createCanvas(800, 300)

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

	//background(30)
	noFill()
	stroke(random(255), 130, random(50), 130)
	strokeWeight(8)
	ellipse(posX, posY, 30)
	
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

// "if" ci permette di cambiare alcune condizioni...
// Tutto questo calcolo qui sopra può anche essere 
// sintetizzato e rappresentato anche così:

// if(posX >= width || posX < 12) 
// {velX = -velX}

// if(posY >= height || posY < 12) {
// velY = -velY

}