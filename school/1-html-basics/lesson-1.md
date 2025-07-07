# Esercizio 1: Le Basi di HTML

## Obiettivo
L'obiettivo di questo esercizio è familiarizzare con la struttura di base di una pagina HTML, l'aggiunta di testo e l'inserimento di un'immagine.

## Istruzioni

1.  **Apri il Codespace:** Se non l'hai già fatto, apri questa repository in un GitHub Codespace.
2.  **Naviga alla cartella:** Vai alla cartella `exercise/1-basics/`.
3.  **Crea una nuova branch:** Prima di iniziare a modificare, crea una nuova branch per il tuo lavoro. Questo è importante per organizzare le tue modifiche e facilitare la revisione.
    * Apri il terminale integrato in VS Code (Terminal > New Terminal).
    * Digita il seguente comando e premi Invio:
        ```bash
        git checkout -b feature/esercizio-1-completato
        ```
    * Ora stai lavorando su una nuova branch chiamata `feature/esercizio-1-completato`.
4.  **Modifica `index.html`:**
    * Apri il file `index.html`.
    * All'interno del `<body>`, aggiungi un titolo di primo livello (`<h1>`) con il testo "Benvenuto nella mia prima pagina HTML!".
    * Sotto il titolo, aggiungi un paragrafo (`<p>`) con un testo a tua scelta, ad esempio: "Questa è una semplice pagina web che sto costruendo per imparare le basi di HTML."
    * Sotto il paragrafo, aggiungi un'immagine (`<img>`). Puoi usare un'immagine placeholder per ora. Ecco un esempio di URL: `https://placehold.co/400x200/FF5733/FFFFFF?text=La+mia+immagine`. Assicurati di includere gli attributi `src` e `alt` (testo alternativo per l'immagine).
    * Assicurati che il tuo file `index.html` sia collegato correttamente al file `style.css` e `script.js` (i link sono già presenti nel boilerplate).
5.  **Salva le modifiche:** Salva il file `index.html`.
6.  **Visualizza il risultato:**
    * Clicca con il tasto destro sul file `index.html` nel Codespace e seleziona "Open with Live Server" (se l'estensione è installata e attiva).
    * Dovresti vedere la tua pagina web nel browser integrato o in una nuova scheda.
7.  **Commit delle modifiche:**
    * Una volta che la tua pagina appare come desiderato, salva tutti i file.
    * Vai alla sezione "Source Control" (Controllo sorgente) in VS Code (l'icona con tre cerchi e linee).
    * Stagia le tue modifiche (clicca sul `+` accanto ai file modificati).
    * Scrivi un messaggio di commit significativo (es. "Completato Esercizio 1: Basi HTML").
    * Clicca su "Commit".
8.  **Push della branch:**
    * Dopo il commit, clicca su "Publish Branch" (o "Sync Changes" e poi "Push") nella sezione "Source Control" per inviare la tua nuova branch a GitHub.
9.  **Apri una Pull Request (PR):**
    * Vai sulla repository su GitHub nel tuo browser.
    * Dovresti vedere un banner che ti suggerisce di aprire una Pull Request dalla tua nuova branch. Clicca su "Compare & pull request".
    * Inserisci un titolo significativo per la tua PR (es. "Esercizio 1: Implementazione Basi HTML").
    * Aggiungi una descrizione se necessario.
    * Clicca su "Create pull request".

