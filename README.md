## DevTask Manager — Kanban Board

Un progetto web che mostra come realizzare una bacheca Kanban interattiva per la gestione delle attività di sviluppo (issue tracker).
L’applicazione è completamente client-side: utilizza HTML, Tailwind CSS + DaisyUI e JavaScript, e salva i dati localmente nel browser tramite localStorage.

## Obiettivo del programma

L’obiettivo del progetto è creare una web app per la gestione visuale delle attività (issue), suddivise in quattro fasi:

Backlog — attività da iniziare

In Progress — attività in corso

Review — attività in verifica

Done — attività completate

Ogni attività può essere creata, spostata o eliminata tramite un’interfaccia semplice e moderna, direttamente dal browser.

## Gestione e salvataggio dei dati

Le issue vengono salvate nel localStorage del browser.

Questo significa che non serve un server backend: tutti i dati restano memorizzati localmente.

Alla prima apertura vengono generate alcune issue di esempio.

Le modifiche (aggiunte, eliminazioni, spostamenti) vengono salvate automaticamente.

## Interfaccia grafica

L’interfaccia è realizzata con Tailwind CSS e DaisyUI, e presenta:

Una griglia a 4 colonne per gli stati: Backlog, In Progress, Review, Done.

Ogni colonna mostra:

un titolo e un contatore delle attività presenti,

le card con titolo, descrizione, priorità e assegnatario.

## Creare nuove issue con campi:

Titolo

Descrizione

Priorità (low, medium, high, critical)

Assegnatario

Flusso di utilizzo

Apri index.html in un browser moderno.

Appare la Kanban Board con eventuali issue salvate in precedenza.

Puoi:

Creare una nuova issue con il pulsante “Nuova issue”.

Cercare issue tramite la barra di ricerca.

Spostare le card tra colonne con:

Drag & Drop, oppure

Pulsanti “◀” e “▶” sulle card.

Eliminare una issue con il pulsante “Elimina”.

Tutte le modifiche vengono salvate in automatico nel browser.

## Logica del programma

Ogni issue è un oggetto JavaScript con:

{
  id, title, description, priority, assignee, status
}


Dopo ogni modifica (spostamento, eliminazione, creazione) viene aggiornato il localStorage.

I contatori delle colonne si aggiornano dinamicamente.

Il filtro di ricerca agisce in tempo reale su titolo, descrizione e assegnatario.

Se una colonna è vuota, viene mostrato un segnaposto “Nessuna issue”.

## Controlli fondamentali

Nessuna issue può avere titolo vuoto.

Le modifiche vengono salvate istantaneamente.

Le operazioni di drag & drop aggiornano automaticamente lo stato dell’attività.

La board resta sincronizzata dopo ogni azione.

## Tecnologie utilizzate

HTML — struttura della pagina

Tailwind CSS + DaisyUI — interfaccia grafica moderna

JavaScript (Vanilla) — gestione logica e interazioni

localStorage API — salvataggio dei dati in locale
 (localStorage)

Interfaccia grafica interattiva (Tailwind + DaisyUI)

