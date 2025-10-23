#  DevTask Manager - Kanban Board

Un'applicazione web interattiva creata per il progetto **TPI**, che permette di gestire le attività di sviluppo tramite una **Kanban Board** moderna e completamente dinamica.

---

##  Obiettivo del progetto

Realizzare una **web app** che consenta di:
- Creare nuove issue tramite un form;
- Visualizzare le issue in una **Kanban board** con le colonne:
  -  Backlog
  -  In Progress
  -  Review
  -  Done
- Salvare automaticamente i dati nel **LocalStorage** del browser;
- Spostare o eliminare le issue in tempo reale;
- Ricaricare i dati all’avvio;
- Offrire un’interfaccia **grafica moderna** con **modalità chiara/scura**.

---

##  Analisi dei requisiti

### Requisiti funzionali
- L’utente può creare una nuova issue con:
  - Titolo
  - Descrizione
  - Priorità (low, medium, high, critical)
  - Assegnatario
- L’utente può spostare le issue da una colonna all’altra.
- L’utente può eliminare le issue completate.
- Le modifiche vengono salvate automaticamente nel LocalStorage.
- All’avvio, la board viene ricostruita con i dati precedenti.

### Requisiti non funzionali
- Interfaccia responsive e moderna.
- Libreria grafica: **TailwindCSS + DaisyUI**.
- Persistenza dati con **LocalStorage**.
- Struttura del progetto pulita e ben commentata.
- Modalità **dark/light** selezionabile.

---

##  User Stories (esempi inclusi nella board)

 1  Come utente voglio aggiungere una nuova issue in modo da gestire i miei task facilmente 
 2  Come utente voglio spostare una issue tra le colonne in modo da gestire tenere traccia dello stato di avanzamento 
 3  Come utente voglio eliminare un task completato in modo da gestire e mantenere pulita la board 
 4  Come utente voglio attivare la modalità scura in modo da gestire e lavorare anche di notte senza affaticare la vista 
 5  Come utente voglio vedere le mie modifiche salvate in modo da gestire e non perdere i dati al riavvio 

---

##  Tecnologie utilizzate

- **HTML** → Struttura del layout  
- **CSS (Tailwind + DaisyUI)** → Stile moderno, responsive e con effetto "glassmorphism"  
- **JavaScript** → Logica dell’app, gestione eventi e LocalStorage  
- **GitHub** → Versionamento e hosting con GitHub Pages  

---


