// Crea l'effetto Matrix di sfondo
function createMatrixRain() {
    const bg = document.getElementById('matrixBg');
    const chars = '01';
    
    setInterval(() => {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.left = Math.random() * 100 + '%';
        char.style.animationDuration = (Math.random() * 3 + 2) + 's';
        char.style.fontSize = (Math.random() * 8 + 8) + 'px';
        
        bg.appendChild(char);
        
        setTimeout(() => {
            char.remove();
        }, 5000);
    }, 100);
}

// Converte un numero in binario con padding
function toBinary(num, bits) {
    return num.toString(2).padStart(bits, '0');
}

// Crea la rappresentazione binaria per una sezione
function createBinaryDisplay(container, value, bits) {
    container.innerHTML = '';
    const binary = toBinary(value, bits);
    
    for (let i = 0; i < bits; i++) {
        const bit = document.createElement('div');
        bit.className = 'bit';
        const bitValue = binary[i];
        bit.textContent = bitValue;
        
        if (bitValue === '1') {
            bit.classList.add('active');
        }
        
        container.appendChild(bit);
    }
}

// Aggiorna l'orologio
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    createBinaryDisplay(document.getElementById('hours'), hours, 8);
    createBinaryDisplay(document.getElementById('minutes'), minutes, 8);
    createBinaryDisplay(document.getElementById('seconds'), seconds, 8);
}

// Inizializza l'applicazione
function init() {
    createMatrixRain();
    updateClock();
    setInterval(updateClock, 1000);
}

// Avvia quando il DOM è caricato
document.addEventListener('DOMContentLoaded', init);