# Esercizio 2: Le Basi di Bootstrap

## Obiettivo
L'obiettivo di questo esercizio è imparare ad utilizzare Bootstrap per creare layout responsivi e componenti moderni. Costruiremo una pagina web completa utilizzando i componenti fondamentali di Bootstrap: navbar, banner, sezioni con sistema a griglia e footer.

## Prerequisiti
- Conoscenza di base di HTML (Esercizio 1 completato)
- Familiarità con i tag HTML principali

## Cosa imparerai
- Come includere Bootstrap nel tuo progetto tramite CDN
- **Creare e collegare un file CSS personalizzato**
- **Utilizzare classi e ID per personalizzazioni avanzate**
- Utilizzare il sistema a griglia di Bootstrap
- Creare una navbar responsiva
- Implementare un banner/hero section
- Organizzare contenuti in colonne responsive
- Creare un footer multi-colonna
- **Personalizzare lo sfondo della pagina e stili dei titoli**

## Istruzioni

### 1. Preparazione del workspace
- **Apri il Codespace:** Se non l'hai già fatto, apri questa repository in un GitHub Codespace
- **Crea una nuova branch:** 
  ```bash
  git checkout -b feature/esercizio-2-bootstrap
  ```

### 2. Creazione del file CSS personalizzato
- **Naviga alla cartella:** Vai alla cartella `school/2-bootstrap/`
- **Crea il file CSS:** Crea un file chiamato `style.css` con le seguenti personalizzazioni:

```css
/* === PERSONALIZZAZIONI BASE === */

/* Sfondo generale della pagina */
body {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Personalizzazione titoli */
h1, h2, h3, h4, h5, h6 {
    color: #2c3e50;
    font-weight: 700;
}

/* Esempio di utilizzo CLASS */
.custom-card {
    border: none;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.custom-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.custom-button {
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    border: none;
    border-radius: 25px;
    padding: 12px 30px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
}

.custom-button:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

/* Esempio di utilizzo ID */
#hero-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    min-height: 80vh;
    display: flex;
    align-items: center;
}

#special-footer {
    background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
    position: relative;
}

#special-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #e74c3c, #f39c12, #2ecc71, #3498db);
}

/* Stili responsivi personalizzati */
@media (max-width: 768px) {
    .custom-card {
        margin-bottom: 20px;
    }
    
    #hero-section {
        min-height: 60vh;
        text-align: center;
    }
}
```

### 3. Creazione del file HTML
- **Crea un nuovo file:** Crea un file chiamato `index.html`
- **Struttura base:** Inizia con la seguente struttura HTML5:

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Il Mio Sito Bootstrap</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- CSS Personalizzato -->
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <!-- Il tuo contenuto qui -->

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### 4. Implementazione della Navbar
Aggiungi una navbar responsiva subito dopo il tag `<body>`:

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
        <a class="navbar-brand" href="#">MioSito</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#servizi">Servizi</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contatti">Contatti</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

### 5. Creazione del Banner/Hero Section
Aggiungi un banner accattivante sotto la navbar utilizzando l'**ID personalizzato**:

```html
<section id="hero-section" class="py-5">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <h1 class="display-4 fw-bold">Benvenuto nel mio sito!</h1>
                <p class="lead">Questo è il mio primo sito web creato con Bootstrap. Scopri le potenzialità del framework CSS più utilizzato al mondo.</p>
                <a href="#servizi" class="btn custom-button btn-lg">Scopri di più</a>
            </div>
            <div class="col-lg-6">
                <img src="https://placehold.co/500x300/ffffff/667eea?text=Hero+Image" class="img-fluid rounded" alt="Immagine hero">
            </div>
        </div>
    </div>
</section>
```

### 5. Sezione con 3 Colonne
Crea una sezione con tre colonne per presentare servizi utilizzando le **classi personalizzate**:

```html
<section id="servizi" class="py-5">
    <div class="container">
        <div class="row mb-5">
            <div class="col-12 text-center">
                <h2 class="display-5 fw-bold">I Nostri Servizi</h2>
                <p class="lead">Scopri cosa possiamo offrire per il tuo progetto</p>
            </div>
        </div>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="card custom-card h-100">
                    <div class="card-body text-center">
                        <div class="mb-3">
                            <i class="display-4 text-primary">🎨</i>
                        </div>
                        <h5 class="card-title">Web Design</h5>
                        <p class="card-text">Creiamo design moderni e responsivi per il tuo sito web, utilizzando le migliori pratiche di UX/UI.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card custom-card h-100">
                    <div class="card-body text-center">
                        <div class="mb-3">
                            <i class="display-4 text-primary">💻</i>
                        </div>
                        <h5 class="card-title">Sviluppo Web</h5>
                        <p class="card-text">Sviluppiamo siti web performanti e sicuri utilizzando le tecnologie più moderne e affidabili.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card custom-card h-100">
                    <div class="card-body text-center">
                        <div class="mb-3">
                            <i class="display-4 text-primary">📱</i>
                        </div>
                        <h5 class="card-title">App Mobile</h5>
                        <p class="card-text">Realizziamo applicazioni mobile native e cross-platform per iOS e Android.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

### 6. Footer con 4 Colonne
Completa la pagina con un footer strutturato utilizzando l'**ID personalizzato**:

```html
<footer id="special-footer" class="text-light py-5">
    <div class="container">
        <div class="row g-4">
            <div class="col-md-3">
                <h5 class="fw-bold">MioSito</h5>
                <p>Il tuo partner ideale per progetti web innovativi e soluzioni digitali moderne.</p>
            </div>
            <div class="col-md-3">
                <h5 class="fw-bold">Servizi</h5>
                <ul class="list-unstyled">
                    <li><a href="#" class="text-light text-decoration-none">Web Design</a></li>
                    <li><a href="#" class="text-light text-decoration-none">Sviluppo Web</a></li>
                    <li><a href="#" class="text-light text-decoration-none">App Mobile</a></li>
                    <li><a href="#" class="text-light text-decoration-none">Consulenza</a></li>
                </ul>
            </div>
            <div class="col-md-3">
                <h5 class="fw-bold">Link Utili</h5>
                <ul class="list-unstyled">
                    <li><a href="#" class="text-light text-decoration-none">Chi Siamo</a></li>
                    <li><a href="#" class="text-light text-decoration-none">Portfolio</a></li>
                    <li><a href="#" class="text-light text-decoration-none">Blog</a></li>
                    <li><a href="#" class="text-light text-decoration-none">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="col-md-3">
                <h5 class="fw-bold">Contatti</h5>
                <p class="mb-1">📧 info@miosito.com</p>
                <p class="mb-1">📞 +39 123 456 7890</p>
                <p class="mb-1">📍 Via Roma, 123 - Milano</p>
                <div class="mt-3">
                    <a href="#" class="text-light me-3">Facebook</a>
                    <a href="#" class="text-light me-3">Twitter</a>
                    <a href="#" class="text-light">LinkedIn</a>
                </div>
            </div>
        </div>
        <hr class="my-4">
        <div class="row">
            <div class="col-12 text-center">
                <p class="mb-0">&copy; 2024 MioSito. Tutti i diritti riservati.</p>
            </div>
        </div>
    </div>
</footer>
```

### 7. Comprensione di CSS personalizzato con Bootstrap
**📚 Importante: Analizza il file CSS che hai creato!**

Nel file `style.css` hai imparato a:

#### **🎨 Personalizzazione globale:**
- **Sfondo della pagina:** Gradient personalizzato per il body
- **Stile dei titoli:** Colore uniforme per tutti i titoli (h1-h6)
- **Font family:** Personalizzazione del carattere per tutta la pagina

#### **🏷️ Utilizzo delle CLASSI (.custom-*):**
- `.custom-card` - Stile personalizzato per le card con animazioni hover
- `.custom-button` - Bottone con gradient e effetti di transizione
- Le classi si applicano a **tutti gli elementi** che le utilizzano
- Sintassi: `class="custom-card"` nell'HTML

#### **🆔 Utilizzo degli ID (#special-*):**
- `#hero-section` - Stile unico per la sezione hero
- `#special-footer` - Footer con gradient e bordo colorato
- Gli ID si applicano a **un singolo elemento** specifico
- Sintassi: `id="hero-section"` nell'HTML

#### **📱 Media queries:**
- Stili responsivi per dispositivi mobili
- Adattamento automatico su schermi piccoli

### 8. Personalizzazione e Test
- **Personalizza i contenuti:** Modifica testi, colori e immagini secondo i tuoi gusti
- **Testa la responsività:** Ridimensiona la finestra del browser per vedere come si adatta il layout
- **Prova la navbar:** Testa il menu su dispositivi mobili (usa gli strumenti di sviluppo del browser)

### 9. Visualizzazione del risultato
- **Live Server:** Clicca con il tasto destro su `index.html` e seleziona "Open with Live Server"
- **Verifica responsive:** Usa gli strumenti di sviluppo del browser (F12) per testare su diverse dimensioni di schermo

### 10. Commit e Push
```bash
# Aggiungi i file
git add .

# Commit delle modifiche
git commit -m "Completato Esercizio 2: Implementazione Bootstrap base"

# Push della branch
git push origin feature/esercizio-2-bootstrap
```

### 11. Pull Request
- Vai su GitHub e crea una Pull Request dalla tua branch
- Titolo: "Esercizio 2: Implementazione Bootstrap - Layout responsivo completo"
- Descrizione: "Implementazione di una pagina web completa con Bootstrap includendo navbar, hero section, sezione a tre colonne e footer a quattro colonne"

## Concetti Chiave Appresi

### Sistema a Griglia Bootstrap
- **Container:** `.container` per un layout responsive centrato
- **Row:** `.row` per creare righe
- **Colonne:** `.col-*` per definire larghezze responsive

### Classi Utility Bootstrap
- **Spaziatura:** `py-5`, `mb-3`, `mt-4` per padding e margin
- **Testo:** `text-center`, `fw-bold`, `lead` per formattazione
- **Colori:** `bg-primary`, `text-light` per temi

### Componenti Bootstrap
- **Navbar:** Menu di navigazione responsive
- **Cards:** Contenitori per contenuti strutturati
- **Buttons:** Pulsanti stilizzati con varie dimensioni

### CSS Personalizzato
- **Classi CSS (.):** Riutilizzabili su più elementi (es. `.custom-card`)
- **ID CSS (#):** Unici per un singolo elemento (es. `#hero-section`)
- **Personalizzazione globale:** Sfondo, tipografia, colori
- **Media queries:** Stili responsivi per dispositivi diversi
- **Effetti CSS:** Transizioni, hover, gradient

## Esercizi Extra (Opzionali)

1. **Aggiungi una sezione carousel** con immagini rotanti
2. **Implementa un modal** per un form di contatto
3. **Crea una sezione testimonial** con quote di clienti
4. **Aggiungi animazioni** con le classi utility di Bootstrap

## Risorse Utili
- [Documentazione ufficiale Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

Buon lavoro! 🚀