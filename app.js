const SIGNS = [
  {
    id: "comments",
    title: "Le tutoriel dans le code",
    hint: "Chaque ligne a son commentaire d’évidence.",
  },
  {
    id: "names",
    title: "Les noms jetables",
    hint: "data, item, result, obj, temp, value…",
  },
  {
    id: "catchall",
    title: "L’erreur de décoration",
    hint: "try/catch qui loggue, avale, ou dit « handle error ».",
  },
  {
    id: "overkill",
    title: "L’usine à gaz",
    hint: "Cinq couches pour un if, un hook, et trois helpers vides.",
  },
  {
    id: "docs",
    title: "La doc qui répète le code",
    hint: "JSDoc d’un add(a, b) plus long que la fonction.",
  },
  {
    id: "assistant",
    title: "Les traces de l’assistant",
    hint: "« Sure! », TODO: implement, api.example.com, emojis de célébration.",
  },
  {
    id: "patchwork",
    title: "Le patchwork de styles",
    hint: "camelCase + snake_case, tabs + espaces, 3 façons de faire un fetch.",
  },
  {
    id: "leftovers",
    title: "Les restes de chantier",
    hint: "console.log, imports morts, fichiers Untitled, README de rêve.",
  },
];

const LEVELS = [
  { value: 0, label: "Absent" },
  { value: 1, label: "Léger" },
  { value: 2, label: "Présent" },
  { value: 3, label: "Criant" },
];

const VERDICTS = [
  {
    min: 0,
    stamp: "Artisan",
    title: "Code avec une âme",
    text: "Peu de tics d’assistant. Soit quelqu’un a écrit ça, soit quelqu’un a eu le courage de relire.",
  },
  {
    min: 18,
    stamp: "Vibe light",
    title: "Un Copilot a soufflé",
    text: "Quelques formules toutes faites, mais le fond tient. Une passe de nettoyage et ça redevient du code.",
  },
  {
    min: 38,
    stamp: "Vibecodé",
    title: "On entend encore le « Sure! »",
    text: "Les signes s’accumulent : commentaires-tutoriel, noms génériques, politesse inutile. Diagnostic assez net.",
  },
  {
    min: 62,
    stamp: "Vibe max",
    title: "Plus de vibe que de métier",
    text: "Ça compile peut-être. Ça raconte surtout une session de génération. À reprendre plutôt qu’à patcher.",
  },
  {
    min: 82,
    stamp: "Spécimen",
    title: "Laboratoire, rayon IA",
    text: "Félicitations : c’est un cas d’école. Gardez-le pour le guide. Ne le mettez pas en prod.",
  },
];

const state = Object.fromEntries(SIGNS.map((sign) => [sign.id, 0]));

function maxScore() {
  return SIGNS.length * 3;
}

function rawScore() {
  return Object.values(state).reduce((sum, value) => sum + value, 0);
}

function percent() {
  return Math.round((rawScore() / maxScore()) * 100);
}

function verdictFor(score) {
  return [...VERDICTS].reverse().find((item) => score >= item.min) ?? VERDICTS[0];
}

function renderChecks() {
  const root = document.querySelector("#checks");
  root.innerHTML = SIGNS.map(
    (sign) => `
      <div class="check">
        <h4>${sign.title}</h4>
        <p>${sign.hint}</p>
        <div class="levels" role="radiogroup" aria-label="${sign.title}">
          ${LEVELS.map(
            (level) => `
              <label>
                <input type="radio" name="${sign.id}" value="${level.value}" ${
                  level.value === 0 ? "checked" : ""
                } />
                ${level.label}
              </label>
            `
          ).join("")}
        </div>
      </div>
    `
  ).join("");

  root.addEventListener("change", (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement)) return;
    state[input.name] = Number(input.value);
    renderMeter();
  });
}

function renderMeter() {
  const score = percent();
  const verdict = verdictFor(score);
  const meter = document.querySelector(".meter-ring");
  meter.style.setProperty("--score", String(score));
  document.querySelector("#score-value").textContent = String(score);
  document.querySelector("#stamp").textContent = verdict.stamp;
  document.querySelector("#verdict-title").textContent = verdict.title;
  document.querySelector("#verdict-text").textContent = verdict.text;
}

function copyResult() {
  const score = percent();
  const verdict = verdictFor(score);
  const active = SIGNS.filter((sign) => state[sign.id] >= 2)
    .map((sign) => sign.title)
    .join(", ");
  const text = [
    `Est-ce vibecodé ? ${score}/100 — ${verdict.stamp}`,
    verdict.title,
    active ? `Signes nets : ${active}` : "Aucun signe criant coché.",
    window.location.href.split("#")[0],
  ].join("\n");

  const button = document.querySelector("#copy");
  const done = () => {
    button.textContent = "Copié";
    window.setTimeout(() => {
      button.textContent = "Copier le verdict";
    }, 1600);
  };

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => {
      window.prompt("Copier le verdict :", text);
    });
    return;
  }
  window.prompt("Copier le verdict :", text);
}

function resetScore() {
  SIGNS.forEach((sign) => {
    state[sign.id] = 0;
    const input = document.querySelector(`input[name="${sign.id}"][value="0"]`);
    if (input) input.checked = true;
  });
  renderMeter();
}

document.addEventListener("DOMContentLoaded", () => {
  renderChecks();
  renderMeter();
  document.querySelector("#copy").addEventListener("click", copyResult);
  document.querySelector("#reset").addEventListener("click", resetScore);
});
