
//  DevTask Manager 

const form = document.getElementById("issueForm");
const backlog = document.getElementById("backlog");
const inprogress = document.getElementById("inprogress");
const review = document.getElementById("review");
const done = document.getElementById("done");
const toggle = document.getElementById("darkToggle");

let issues = JSON.parse(localStorage.getItem("issues")) || [];
let darkMode = localStorage.getItem("darkMode") === "true";

// === DARK MODE ===
if (darkMode) document.documentElement.classList.add("dark");
toggle.checked = darkMode;

toggle.addEventListener("change", () => {
  darkMode = toggle.checked;
  localStorage.setItem("darkMode", darkMode);
  document.documentElement.classList.toggle("dark", darkMode);
});

// === ESEMPI USER STORIES ===
if (issues.length === 0) {
  issues = [
    { id: 1, titolo: "Creare nuova issue", descrizione: "Come utente, voglio aggiungere un task per organizzare il lavoro.", priorita: "medium", assegnatario: "Giulia", stato: "Backlog" },
    { id: 2, titolo: "Spostare le card", descrizione: "Come utente, voglio spostare le issue per gestire l’avanzamento.", priorita: "high", assegnatario: "Marco", stato: "In Progress" },
    { id: 3, titolo: "Modalità scura", descrizione: "Come utente, voglio poter attivare una dark mode moderna.", priorita: "low", assegnatario: "Sara", stato: "Review" },
    { id: 4, titolo: "Salvataggio locale", descrizione: "Come utente, voglio che le issue restino salvate nel browser.", priorita: "critical", assegnatario: "Luca", stato: "Done" }
  ];
  saveIssues();
}

function saveIssues() {
  localStorage.setItem("issues", JSON.stringify(issues));
}

function getPriorityColor(p) {
  return {
    low: "border-green-400",
    medium: "border-yellow-400",
    high: "border-orange-400",
    critical: "border-red-500"
  }[p];
}

function getBadgeColor(p) {
  return {
    low: "badge-success",
    medium: "badge-warning",
    high: "badge-error",
    critical: "badge-outline badge-error"
  }[p];
}

function createIssueCard(issue) {
  const card = document.createElement("div");
  card.className = `card bg-white/90 dark:bg-slate-800 border-l-4 ${getPriorityColor(issue.priorita)} shadow-md`;
  card.innerHTML = `
    <div class="card-body p-4">
      <h3 class="card-title text-lg font-semibold">${issue.titolo}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-300">${issue.descrizione}</p>
      <div class="flex items-center gap-2 mt-1">
        <div class="badge ${getBadgeColor(issue.priorita)} capitalize">${issue.priorita}</div>
        <span class="text-sm opacity-80">👤 ${issue.assegnatario}</span>
      </div>
      <div class="card-actions justify-end mt-4">
        <button class="btn btn-sm btn-info text-white">➡️ Sposta</button>
        <button class="btn btn-sm btn-error text-white">🗑️ Elimina</button>
      </div>
    </div>
  `;
  const [btnMove, btnDelete] = card.querySelectorAll("button");
  btnMove.addEventListener("click", () => moveIssue(issue.id));
  btnDelete.addEventListener("click", () => deleteIssue(issue.id));
  return card;
}

function renderBoard() {
  [backlog, inprogress, review, done].forEach(c => c.innerHTML = "");
  issues.forEach(issue => {
    const card = createIssueCard(issue);
    if (issue.stato === "Backlog") backlog.appendChild(card);
    else if (issue.stato === "In Progress") inprogress.appendChild(card);
    else if (issue.stato === "Review") review.appendChild(card);
    else done.appendChild(card);
  });
}

function moveIssue(id) {
  const stati = ["Backlog", "In Progress", "Review", "Done"];
  const issue = issues.find(i => i.id === id);
  issue.stato = stati[(stati.indexOf(issue.stato) + 1) % stati.length];
  saveIssues();
  renderBoard();
}

function deleteIssue(id) {
  issues = issues.filter(i => i.id !== id);
  saveIssues();
  renderBoard();
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const nuova = {
    id: Date.now(),
    titolo: document.getElementById("titolo").value,
    descrizione: document.getElementById("descrizione").value,
    priorita: document.getElementById("priorita").value,
    assegnatario: document.getElementById("assegnatario").value,
    stato: "Backlog"
  };
  issues.push(nuova);
  saveIssues();
  form.reset();
  renderBoard();
});

renderBoard();
