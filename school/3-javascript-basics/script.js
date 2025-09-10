// Esercizio 3: JavaScript Basics - Script per l'interattività

// Variabili globali
let counter = 0;

// Attende che la pagina sia completamente caricata
document.addEventListener('DOMContentLoaded', function() {
    // Inizializza tutti gli event listeners
    initEventListeners();
});

// Funzione per inizializzare tutti gli event listeners
function initEventListeners() {
    // Bottone di benvenuto
    const welcomeBtn = document.getElementById('welcomeBtn');
    welcomeBtn.addEventListener('click', showWelcomeMessage);

    // Contatore
    const incrementBtn = document.getElementById('incrementBtn');
    const resetBtn = document.getElementById('resetBtn');
    incrementBtn.addEventListener('click', incrementCounter);
    resetBtn.addEventListener('click', resetCounter);

    // Cambia colore
    const colorBtn = document.getElementById('colorBtn');
    colorBtn.addEventListener('click', changeRandomColor);

    // Saluto personalizzato
    const greetBtn = document.getElementById('greetBtn');
    greetBtn.addEventListener('click', showGreeting);

    // Form di contatto
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleFormSubmit);
}

// Funzione per mostrare messaggio di benvenuto
function showWelcomeMessage() {
    alert('Benvenuto nel mondo di JavaScript! 🚀\nQui imparerai a rendere interattive le tue pagine web!');
}

// Funzione per incrementare il contatore
function incrementCounter() {
    counter++;
    const counterElement = document.getElementById('counter');
    counterElement.textContent = counter;
    
    // Aggiunge animazione
    counterElement.classList.add('animate');
    setTimeout(() => {
        counterElement.classList.remove('animate');
    }, 300);
}

// Funzione per resettare il contatore
function resetCounter() {
    counter = 0;
    const counterElement = document.getElementById('counter');
    counterElement.textContent = counter;
    counterElement.style.color = '#007bff';
}

// Funzione per generare colore casuale
function generateRandomColor() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Funzione per cambiare colore casuale
function changeRandomColor() {
    const colorBox = document.getElementById('colorBox');
    const newColor = generateRandomColor();
    colorBox.style.backgroundColor = newColor;
}

// Funzione per mostrare saluto personalizzato
function showGreeting() {
    const nameInput = document.getElementById('nameInput');
    const greetingElement = document.getElementById('greeting');
    const name = nameInput.value.trim();
    
    if (name === '') {
        greetingElement.textContent = 'Per favore, inserisci il tuo nome!';
        greetingElement.className = 'mt-3 text-warning';
    } else {
        greetingElement.textContent = `Ciao ${name}! Benvenuto nel mondo di JavaScript! 👋`;
        greetingElement.className = 'mt-3 text-success success-message';
    }
}

// Funzione per gestire l'invio del form
function handleFormSubmit(event) {
    // Previene l'invio normale del form
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const messageElement = document.getElementById('formMessage');
    
    // Simula l'invio del messaggio
    messageElement.innerHTML = `
        <div class="alert alert-success success-message" role="alert">
            <strong>Messaggio inviato con successo!</strong><br>
            Grazie per aver contattato ${email}. Il tuo messaggio: "${message}" è stato ricevuto!
        </div>
    `;
    
    // Pulisce il form
    document.getElementById('contactForm').reset();
}

// Funzioni extra per dimostrare altri concetti JavaScript

// Funzione per gestire eventi della tastiera (bonus)
document.addEventListener('keydown', function(event) {
    // Se viene premuto 'Escape', resetta tutto
    if (event.key === 'Escape') {
        resetCounter();
        document.getElementById('nameInput').value = '';
        document.getElementById('greeting').textContent = '';
        document.getElementById('formMessage').innerHTML = '';
        document.getElementById('contactForm').reset();
    }
});

// Funzione per mostrare l'ora corrente (bonus)
function showCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('it-IT');
    return timeString;
}

// Console log per debug (verrà rimosso in produzione)
console.log('Script JavaScript caricato con successo!');
console.log('Ora corrente:', showCurrentTime());