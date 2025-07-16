# Soluzione Completa - Esercizio Bootstrap

> ⚠️ **ATTENZIONE:** Questo file contiene la soluzione completa dell'esercizio. Utilizzalo solo dopo aver tentato di completare l'esercizio da solo!

## File da creare

### 📁 `style.css` - CSS Personalizzato

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

/* === CLASSI PERSONALIZZATE === */

/* Classe per le card dei servizi */
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

/* Classe per il bottone personalizzato */
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

/* === ID PERSONALIZZATI === */

/* ID per la sezione hero */
#hero-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    min-height: 80vh;
    display: flex;
    align-items: center;
}

/* ID per il footer speciale */
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

/* === MEDIA QUERIES === */

/* Stili responsivi per dispositivi mobili */
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

### 📁 `index.html` - Pagina Web Completa

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
    
    <!-- NAVBAR RESPONSIVA -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">MioSito</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#hero-section">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#servizi">Servizi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#special-footer">Contatti</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- HERO SECTION CON ID PERSONALIZZATO -->
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

    <!-- SEZIONE SERVIZI CON 3 COLONNE E CLASSI PERSONALIZZATE -->
    <section id="servizi" class="py-5">
        <div class="container">
            <!-- Intestazione sezione -->
            <div class="row mb-5">
                <div class="col-12 text-center">
                    <h2 class="display-5 fw-bold">I Nostri Servizi</h2>
                    <p class="lead">Scopri cosa possiamo offrire per il tuo progetto</p>
                </div>
            </div>
            
            <!-- Tre colonne con card -->
            <div class="row g-4">
                <!-- Card 1: Web Design -->
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
                
                <!-- Card 2: Sviluppo Web -->
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
                
                <!-- Card 3: App Mobile -->
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

    <!-- FOOTER CON 4 COLONNE E ID PERSONALIZZATO -->
    <footer id="special-footer" class="text-light py-5">
        <div class="container">
            <div class="row g-4">
                <!-- Colonna 1: Azienda -->
                <div class="col-md-3">
                    <h5 class="fw-bold">MioSito</h5>
                    <p>Il tuo partner ideale per progetti web innovativi e soluzioni digitali moderne.</p>
                </div>
                
                <!-- Colonna 2: Servizi -->
                <div class="col-md-3">
                    <h5 class="fw-bold">Servizi</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-light text-decoration-none">Web Design</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Sviluppo Web</a></li>
                        <li><a href="#" class="text-light text-decoration-none">App Mobile</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Consulenza</a></li>
                    </ul>
                </div>
                
                <!-- Colonna 3: Link Utili -->
                <div class="col-md-3">
                    <h5 class="fw-bold">Link Utili</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-light text-decoration-none">Chi Siamo</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Portfolio</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Blog</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Privacy Policy</a></li>
                    </ul>
                </div>
                
                <!-- Colonna 4: Contatti -->
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
            
            <!-- Linea separatrice e copyright -->
            <hr class="my-4">
            <div class="row">
                <div class="col-12 text-center">
                    <p class="mb-0">&copy; 2024 MioSito. Tutti i diritti riservati.</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## 🎯 Spiegazione della Soluzione

### **Struttura dei File:**
1. **`style.css`** - Contiene tutte le personalizzazioni CSS
2. **`index.html`** - Pagina web completa con Bootstrap + CSS personalizzato

### **Elementi Chiave Implementati:**

#### **🎨 CSS Personalizzato:**
- **Sfondo gradient** per il body
- **Stili uniformi** per i titoli
- **2 classi:** `.custom-card` e `.custom-button`
- **2 ID:** `#hero-section` e `#special-footer`
- **Media queries** responsive

#### **🏗️ Struttura HTML:**
- **Navbar responsiva** con Bootstrap
- **Hero section** con ID personalizzato
- **Sezione 3 colonne** con classi personalizzate
- **Footer 4 colonne** con ID personalizzato

#### **📱 Caratteristiche Responsive:**
- Layout si adatta automaticamente a tutti i dispositivi
- Menu mobile con hamburger button
- Colonne che si impilano su schermi piccoli

### **🔗 Come Funziona l'Integrazione:**

1. **Bootstrap fornisce:** Struttura, griglia, componenti
2. **CSS personalizzato aggiunge:** Stili unici, animazioni, colori
3. **Combinazione:** `class="card custom-card"` - usa sia Bootstrap che il tuo CSS

### **🎨 Effetti Visivi Inclusi:**
- Animazioni hover sulle card
- Transizioni smooth sui bottoni
- Gradienti colorati per sfondo e sezioni
- Bordo colorato sul footer
- Ombre e effetti di profondità

Questa soluzione crea un sito web moderno, responsivo e visivamente accattivante! 🚀
