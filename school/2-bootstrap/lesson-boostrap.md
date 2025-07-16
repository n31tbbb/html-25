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
- **Crea il file CSS:** Crea un file chiamato `style.css` con le seguenti caratteristiche:

#### **🎯 Requisiti CSS da implementare:**

**Personalizzazioni globali:**
- Imposta uno sfondo gradiente per il `body` (colori a tua scelta)
- Personalizza il font-family di tutta la pagina
- Imposta un colore uniforme per tutti i titoli (h1-h6)

**Crea 2 CLASSI personalizzate:**
- `.custom-card` - Per le card dei servizi con effetti hover
- `.custom-button` - Per il bottone principale con gradiente

**Crea 2 ID personalizzati:**
- `#hero-section` - Per la sezione banner principale
- `#special-footer` - Per il footer con stili speciali

**Media query responsive:**
- Adatta gli stili per dispositivi mobili (max-width: 768px)

> 💡 **Suggerimento:** Usa gradienti CSS, transizioni e effetti hover per rendere il sito più moderno!

#### **📚 Risorse per CSS:**
- [Guida ai Gradienti CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients) - Come creare sfondi gradient
- [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) - Animazioni smooth
- [CSS Hover Effects](https://www.w3schools.com/css/css_pseudo_classes.asp) - Effetti al passaggio del mouse
- [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) - CSS responsive

### 3. Creazione del file HTML
- **Crea un nuovo file:** Crea un file chiamato `index.html`
- **Struttura base:** Inizia con la struttura HTML5 e collega Bootstrap + il tuo CSS:

#### **🎯 Struttura HTML da creare:**

**Head section:**
- Doctype, html lang="it", meta tags
- Titolo della pagina
- Link a Bootstrap CSS (CDN)
- Link al tuo file `style.css`

**Body section:**
- Area per navbar
- Area per hero section (con ID personalizzato)
- Area per sezione servizi
- Area per footer (con ID personalizzato)
- Script Bootstrap JS alla fine

> 💡 **Ricorda:** L'ordine dei CSS è importante! Prima Bootstrap, poi il tuo CSS personalizzato.

#### **📚 Risorse per HTML e Bootstrap:**
- [Struttura HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) - Tutti i tag HTML
- [Bootstrap CDN](https://getbootstrap.com/docs/5.3/getting-started/introduction/#cdn-via-jsdelivr) - Come includere Bootstrap
- [Meta Viewport](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) - Tag per responsive design

### 4. Implementazione della Navbar
Crea una navbar responsiva con le seguenti caratteristiche:

#### **🎯 Requisiti Navbar:**
- Usa le classi Bootstrap: `navbar`, `navbar-expand-lg`, `navbar-dark`, `bg-primary`
- Aggiungi un container Bootstrap
- Crea un brand/logo con il testo "MioSito"
- Aggiungi un toggler button per mobile
- Menu con 3 voci: Home, Servizi, Contatti
- I link devono puntare alle sezioni della pagina (anchor link)

#### **🔗 Classi Bootstrap utili:**
- `navbar-brand` - Per il logo/nome del sito
- `navbar-toggler` - Bottone per menu mobile
- `navbar-nav` - Lista di navigazione
- `nav-item` e `nav-link` - Elementi del menu

> 💡 **Suggerimento:** Usa l'attributo `data-bs-toggle="collapse"` per il menu mobile!

#### **📚 Risorse per Navbar:**
- [Bootstrap Navbar](https://getbootstrap.com/docs/5.3/components/navbar/) - Documentazione completa navbar
- [Responsive Navigation](https://getbootstrap.com/docs/5.3/components/navbar/#responsive-behaviors) - Menu responsive
- [Anchor Links](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#linking_to_an_element_on_the_same_page) - Link interni alla pagina

### 5. Creazione del Banner/Hero Section
Crea una sezione hero accattivante con il tuo **ID personalizzato**:

#### **🎯 Requisiti Hero Section:**
- Usa l'ID `hero-section` che hai definito nel CSS
- Struttura a 2 colonne con sistema griglia Bootstrap
- **Colonna sinistra:** Titolo principale, paragrafo descrittivo, bottone CTA
- **Colonna destra:** Immagine placeholder
- Il bottone deve usare la classe `custom-button` del tuo CSS

#### **🔗 Classi Bootstrap utili:**
- `container`, `row`, `col-lg-6` - Sistema griglia
- `display-4`, `fw-bold` - Tipografia
- `lead` - Stile paragrafo
- `btn`, `btn-lg` - Bottoni
- `img-fluid`, `rounded` - Immagini responsive

#### **🖼️ Immagine placeholder:**
Usa: `https://placehold.co/500x300/ffffff/667eea?text=Hero+Image`

> 💡 **Ricorda:** Applica sia l'ID personalizzato che le classi Bootstrap per combinare i tuoi stili con quelli di Bootstrap!

#### **📚 Risorse per Layout e Griglia:**
- [Bootstrap Grid System](https://getbootstrap.com/docs/5.3/layout/grid/) - Sistema a griglia responsive
- [Bootstrap Typography](https://getbootstrap.com/docs/5.3/content/typography/) - Classi per testo
- [Bootstrap Buttons](https://getbootstrap.com/docs/5.3/components/buttons/) - Stili per bottoni
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) - Layout flessibile

### 6. Sezione con 3 Colonne (Servizi)
Crea una sezione con tre colonne utilizzando le **classi personalizzate**:

#### **🎯 Requisiti Sezione Servizi:**
- ID: `servizi` (per i link della navbar)
- **Intestazione centrale:** Titolo e sottotitolo
- **3 card in layout responsive:** Una per ogni servizio
- Ogni card deve usare la classe `custom-card` del tuo CSS
- **Contenuto per ogni card:** Icona (emoji), titolo, descrizione

#### **🔗 Classi Bootstrap utili:**
- `py-5` - Padding verticale
- `text-center` - Testo centrato
- `display-5` - Titolo grande
- `row`, `g-4` - Sistema griglia con gap
- `col-md-4` - 3 colonne su desktop
- `card`, `card-body`, `h-100` - Componenti card

#### **📋 Contenuti suggeriti:**
1. **Web Design** 🎨 - Descrizione del servizio
2. **Sviluppo Web** 💻 - Descrizione del servizio  
3. **App Mobile** 📱 - Descrizione del servizio

> 💡 **Importante:** Combina `card` (Bootstrap) + `custom-card` (tuo CSS) per avere sia la struttura che lo stile personalizzato!

#### **📚 Risorse per Cards e Componenti:**
- [Bootstrap Cards](https://getbootstrap.com/docs/5.3/components/card/) - Componenti card completi
- [Bootstrap Spacing](https://getbootstrap.com/docs/5.3/utilities/spacing/) - Margin e padding utilities
- [CSS Box Shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) - Effetti ombra
- [CSS Transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) - Animazioni e trasformazioni

### 7. Footer con 4 Colonne
Completa la pagina con un footer strutturato utilizzando l'**ID personalizzato**:

#### **🎯 Requisiti Footer:**
- Usa l'ID `special-footer` che hai definito nel CSS
- Layout a 4 colonne responsive
- **Colonna 1:** Nome azienda + descrizione
- **Colonna 2:** Lista servizi (4 voci)
- **Colonna 3:** Link utili (4 voci)
- **Colonna 4:** Informazioni di contatto + social

#### **🔗 Classi Bootstrap utili:**
- `text-light` - Testo bianco
- `py-5` - Padding verticale
- `col-md-3` - 4 colonne uguali
- `fw-bold` - Testo grassetto
- `list-unstyled` - Lista senza punti
- `text-decoration-none` - Link senza sottolineatura

#### **📋 Contenuti da includere:**
- **Servizi:** Web Design, Sviluppo Web, App Mobile, Consulenza
- **Link utili:** Chi Siamo, Portfolio, Blog, Privacy Policy
- **Contatti:** Email, telefono, indirizzo, social media
- **Copyright:** Anno e nome azienda

> 💡 **Bonus:** Aggiungi una linea orizzontale (`<hr>`) prima del copyright!

#### **📚 Risorse per Footer e Liste:**
- [Bootstrap List Groups](https://getbootstrap.com/docs/5.3/components/list-group/) - Liste stilizzate
- [Bootstrap Utilities](https://getbootstrap.com/docs/5.3/utilities/api/) - Classi utility per colori e testo
- [CSS Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) - Elementi decorativi (::before, ::after)
- [CSS Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) - Posizionamento elementi

### 8. Comprensione di CSS personalizzato con Bootstrap
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

#### **📚 Link di Approfondimento:**
- [Differenza tra Classi e ID](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) - Selettori CSS
- [CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) - Priorità degli stili
- [Bootstrap Customization](https://getbootstrap.com/docs/5.3/customize/overview/) - Come personalizzare Bootstrap
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - Variabili CSS

### 9. Personalizzazione e Test
- **Personalizza i contenuti:** Modifica testi, colori e immagini secondo i tuoi gusti
- **Testa la responsività:** Ridimensiona la finestra del browser per vedere come si adatta il layout
- **Prova la navbar:** Testa il menu su dispositivi mobili (usa gli strumenti di sviluppo del browser)

#### **📚 Risorse per Testing e Debug:**
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/device-mode/) - Strumenti sviluppatore per test responsive
- [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/) - Firefox responsive design
- [CSS Validator](https://jigsaw.w3.org/css-validator/) - Validatore CSS online
- [HTML Validator](https://validator.w3.org/) - Validatore HTML online

### 10. Visualizzazione del risultato
- **Live Server:** Clicca con il tasto destro su `index.html` e seleziona "Open with Live Server"
- **Verifica responsive:** Usa gli strumenti di sviluppo del browser (F12) per testare su diverse dimensioni di schermo

### 11. Commit e Push
```bash
# Aggiungi i file
git add .

# Commit delle modifiche
git commit -m "Completato Esercizio 2: Implementazione Bootstrap base"

# Push della branch
git push origin feature/esercizio-2-bootstrap
```

### 12. Pull Request
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

### **📖 Documentazione Ufficiale:**
- [Documentazione ufficiale Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) - Guida completa
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/) - Esempi pratici
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Libreria icone

### **🎨 CSS e Design:**
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) - Riferimento completo CSS
- [CSS-Tricks](https://css-tricks.com/) - Guide e tutorial CSS
- [Can I Use](https://caniuse.com/) - Compatibilità browser per CSS
- [Coolors](https://coolors.co/) - Generatore palette colori

### **📱 Responsive Design:**
- [Responsive Web Design Basics](https://web.dev/responsive-web-design-basics/) - Principi base
- [Bootstrap Breakpoints](https://getbootstrap.com/docs/5.3/layout/breakpoints/) - Punti di rottura responsive
- [Viewport Meta Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) - Tag viewport

### **🛠️ Strumenti di Sviluppo:**
- [VS Code Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Server locale
- [Browser DevTools Guide](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools) - Strumenti sviluppatore

## 🆘 Hai Bisogno di Aiuto?

Se ti trovi in difficoltà durante l'esercizio:

1. **Rileggi attentamente** le istruzioni di ogni sezione
2. **Consulta la documentazione** Bootstrap ufficiale
3. **Controlla la console** del browser per eventuali errori
4. **Solo se necessario:** consulta il file `solution-bootstrap.md` per vedere la soluzione completa

> ⚠️ **Importante:** Prova sempre a risolvere l'esercizio da solo prima di guardare la soluzione!

Buon lavoro! 🚀