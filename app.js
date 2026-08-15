// Sure! Here's a robust, production-ready vibe detector with comprehensive logging 🚀
// This comprehensive solution handles all edge cases and provides extensive debug output.
// Let's walk through the implementation step by step.

console.log("🚀 Starting vibe detector application...");
console.log("📦 Loading modules... (there are no modules)");
console.log("✅ app.js has been evaluated successfully");

// Let's initialize the logs array early so we can log ALL THE THINGS ✨
const logLines = [];
console.log("📝 logLines array initialized:", logLines);

/**
 * Logs a message to the console for debugging purposes.
 * @param {string} message - The message to log to the console.
 * @param {*} data - Optional data to log to the console.
 * @returns {void} This function does not return anything.
 */
function logDebug(message, data) {
  // Let's log the incoming arguments so we can debug more easily
  console.log("🔍 logDebug() called");
  console.log("📝 message:", message);
  console.log("📊 data:", data);
  console.log("⏰ timestamp:", new Date().toISOString());

  try {
    // Handle the case where data is undefined
    if (typeof data === "undefined") {
      console.log("⚠️ data is undefined, logging message only");
      console.log(message);
    } else {
      console.log("✅ data is defined, logging message AND data");
      console.log(message, data);
    }

    // Also pretty-print objects because that's helpful ✨
    if (data !== null && typeof data === "object") {
      console.log("🧩 JSON.stringify(data):", JSON.stringify(data));
    }

    appendLogToUi(message, data);
    console.log("🎉 logDebug() completed successfully");
  } catch (error) {
    console.log("❌ An error occurred in logDebug:", error);
    console.log("An error occurred:", error);
    // Handle error gracefully
  }
}

/**
 * Helper function to create a logger factory.
 * @returns {Function} A logger function that logs things.
 */
const createLoggerFactory = () => {
  console.log("🏭 createLoggerFactory() invoked");
  return {
    createLogger: () => {
      console.log("🛠️ createLogger() invoked");
      return {
        info: (msg, data) => {
          console.log("ℹ️ logger.info");
          logDebug("ℹ️ " + msg, data);
        },
        success: (msg, data) => {
          console.log("✅ logger.success");
          logDebug("✅ " + msg, data);
        },
        warn: (msg, data) => {
          console.log("⚠️ logger.warn");
          logDebug("⚠️ " + msg, data);
        },
        error: (msg, data) => {
          console.log("❌ logger.error");
          logDebug("❌ " + msg, data);
        },
      };
    },
  };
};

const loggerFactory = createLoggerFactory();
console.log("loggerFactory:", loggerFactory);
const logger = loggerFactory.createLogger();
console.log("logger:", logger);
logger.success("Logger initialized successfully 🚀");

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

console.log("📋 SIGNS loaded, length =", SIGNS.length);
console.log("📋 SIGNS data:", SIGNS);
SIGNS.forEach((item, index) => {
  console.log(`➡️ processing sign at index ${index}`, item);
  console.log("id:", item.id);
  console.log("title:", item.title);
});

const LEVELS = [
  { value: 0, label: "Absent" },
  { value: 1, label: "Léger" },
  { value: 2, label: "Présent" },
  { value: 3, label: "Criant" },
];

console.log("🎚️ LEVELS:", LEVELS);
console.log("🎚️ LEVELS.length:", LEVELS.length);

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

console.log("🏁 VERDICTS loaded:", VERDICTS);

// Let's initialize the state object to keep track of user selections
const state = Object.fromEntries(SIGNS.map((sign) => [sign.id, 0]));
console.log("🧠 initial state:", state);
console.log("here");

/**
 * Appends a log line to the on-page debug console.
 * @param {string} message - The log message.
 * @param {*} data - Optional extra data.
 * @returns {void}
 */
function appendLogToUi(message, data) {
  console.log("🖥️ appendLogToUi() start");
  console.log("message param:", message);
  console.log("data param:", data);

  try {
    const time = new Date().toISOString();
    console.log("computed time:", time);

    let line = `[${time}] ${message}`;
    console.log("line before data:", line);

    if (typeof data !== "undefined") {
      console.log("data is present, concatenating...");
      try {
        line += " " + (typeof data === "object" ? JSON.stringify(data) : String(data));
        console.log("line after data:", line);
      } catch (stringifyError) {
        console.log("An error occurred while stringifying:", stringifyError);
        // Handle error
        line += " [unserializable data]";
      }
    }

    logLines.push(line);
    console.log("logLines.length is now:", logLines.length);
    console.log("last log line:", logLines[logLines.length - 1]);

    const stream = document.querySelector("#log-stream");
    const count = document.querySelector("#log-count");
    console.log("stream element:", stream);
    console.log("count element:", count);

    if (!stream) {
      console.log("⚠️ log-stream not in DOM yet (this is fine during script parse)");
      console.log("skipping UI update");
      return;
    }

    // Keep only the last 80 lines for performance 🚀
    const visible = logLines.slice(-80);
    console.log("visible logs count:", visible.length);
    stream.textContent = visible.join("\n");
    stream.scrollTop = stream.scrollHeight;
    console.log("scrollTop set to:", stream.scrollTop);

    if (count) {
      count.textContent = String(logLines.length);
      console.log("updated log-count to", logLines.length);
    }

    console.log("✅ appendLogToUi() success");
  } catch (error) {
    console.log("❌ An error occurred in appendLogToUi:", error);
    console.log("An error occurred:", error);
    // Handle error gracefully
  }
}

/**
 * Calculates the maximum possible score.
 * @returns {number} The maximum score value.
 */
function maxScore() {
  console.log("🧮 maxScore() called");
  const result = SIGNS.length * 3;
  console.log("SIGNS.length:", SIGNS.length);
  console.log("multiplying by 3 because each sign has 3 points");
  console.log("maxScore result:", result);
  logger.info("Computed max score", result);
  return result;
}

/**
 * Calculates the raw score from the current state.
 * @returns {number} The raw score.
 */
function rawScore() {
  console.log("🧮 rawScore() called");
  console.log("current state:", state);
  const values = Object.values(state);
  console.log("Object.values(state):", values);
  const result = values.reduce((sum, value) => {
    console.log("reduce step → sum:", sum, "value:", value);
    const next = sum + value;
    console.log("next sum:", next);
    return next;
  }, 0);
  console.log("rawScore result:", result);
  return result;
}

/**
 * Converts the raw score to a percentage.
 * @returns {number} The percentage score from 0 to 100.
 */
function percent() {
  console.log("🧮 percent() called");
  const raw = rawScore();
  const max = maxScore();
  console.log("raw:", raw);
  console.log("max:", max);

  // Avoid division by zero (even though max should never be 0)
  if (max === 0) {
    console.log("⚠️ max is 0, returning 0 to avoid division by zero");
    return 0;
  }

  const result = Math.round((raw / max) * 100);
  console.log("(raw / max) * 100 =", (raw / max) * 100);
  console.log("percent result after Math.round:", result);
  logger.success("Computed percent", result);
  return result;
}

/**
 * Finds the verdict object for a given score.
 * @param {number} score - The score to look up.
 * @returns {object} The matching verdict.
 */
function verdictFor(score) {
  console.log("🏁 verdictFor() called with score:", score);
  console.log("Let's reverse VERDICTS and find the first match...");
  const reversed = [...VERDICTS].reverse();
  console.log("reversed verdicts:", reversed);

  const found = reversed.find((item) => {
    console.log("checking verdict", item.stamp, "min:", item.min, "score:", score);
    const matches = score >= item.min;
    console.log("matches?", matches);
    return matches;
  });

  const result = found ?? VERDICTS[0];
  console.log("verdictFor result:", result);
  return result;
}

/**
 * Renders the checklist UI for all signs.
 * @returns {void}
 */
function renderChecks() {
  console.log("🖼️ renderChecks() start");
  logger.info("Rendering checks...");

  const root = document.querySelector("#checks");
  console.log("root element:", root);

  if (!root) {
    console.log("❌ #checks not found");
    console.log("An error occurred: missing #checks");
    return;
  }

  console.log("Let's map SIGNS to HTML strings ✨");
  const html = SIGNS.map((sign, index) => {
    console.log(`generating HTML for sign ${index}`, sign);
    console.log("sign.id:", sign.id);
    console.log("sign.title:", sign.title);

    const levelsHtml = LEVELS.map((level) => {
      console.log("generating level radio", level);
      const checked = level.value === 0 ? "checked" : "";
      console.log("checked attr:", checked);
      return `
              <label>
                <input type="radio" name="${sign.id}" value="${level.value}" ${checked} />
                ${level.label}
              </label>
            `;
    }).join("");

    console.log("levelsHtml length:", levelsHtml.length);

    return `
      <div class="check">
        <h4>${sign.title}</h4>
        <p>${sign.hint}</p>
        <div class="levels" role="radiogroup" aria-label="${sign.title}">
          ${levelsHtml}
        </div>
      </div>
    `;
  }).join("");

  console.log("generated HTML length:", html.length);
  console.log("html preview:", html.slice(0, 120));
  root.innerHTML = html;
  console.log("✅ innerHTML assigned");

  root.addEventListener("change", (event) => {
    console.log("📡 change event fired", event);
    console.log("event.target:", event.target);

    const input = event.target;
    if (!(input instanceof HTMLInputElement)) {
      console.log("⚠️ target is not an HTMLInputElement, bailing out");
      return;
    }

    console.log("input.name:", input.name);
    console.log("input.value:", input.value);
    console.log("Let's update the state object...");

    state[input.name] = Number(input.value);
    console.log("updated state:", state);
    logger.success("State updated", { key: input.name, value: Number(input.value) });

    console.log("calling renderMeter() after state update");
    renderMeter();
  });

  console.log("✅ change listener attached");
  logger.success("Checks rendered successfully 🚀");
}

/**
 * Renders the score meter and verdict.
 * @returns {void}
 */
function renderMeter() {
  console.log("🖼️ renderMeter() start");
  console.log("Let's compute the score...");

  const score = percent();
  console.log("score:", score);

  const verdict = verdictFor(score);
  console.log("verdict:", verdict);
  console.log("verdict.stamp:", verdict.stamp);
  console.log("verdict.title:", verdict.title);

  const meter = document.querySelector(".meter-ring");
  console.log("meter element:", meter);

  if (meter) {
    meter.style.setProperty("--score", String(score));
    console.log("set --score CSS variable to", score);
  } else {
    console.log("⚠️ .meter-ring not found");
  }

  const scoreEl = document.querySelector("#score-value");
  const stampEl = document.querySelector("#stamp");
  const titleEl = document.querySelector("#verdict-title");
  const textEl = document.querySelector("#verdict-text");

  console.log("scoreEl:", scoreEl);
  console.log("stampEl:", stampEl);
  console.log("titleEl:", titleEl);
  console.log("textEl:", textEl);

  if (scoreEl) {
    scoreEl.textContent = String(score);
    console.log("updated #score-value");
  }
  if (stampEl) {
    stampEl.textContent = verdict.stamp;
    console.log("updated #stamp");
  }
  if (titleEl) {
    titleEl.textContent = verdict.title;
    console.log("updated #verdict-title");
  }
  if (textEl) {
    textEl.textContent = verdict.text;
    console.log("updated #verdict-text");
  }

  logger.success("Meter rendered", { score, stamp: verdict.stamp });
  console.log("✅ renderMeter() done");
}

/**
 * Copies the verdict text to the clipboard.
 * @returns {void}
 */
function copyResult() {
  console.log("📋 copyResult() called");
  logger.info("User clicked copy");

  const score = percent();
  const verdict = verdictFor(score);
  console.log("score for copy:", score);
  console.log("verdict for copy:", verdict);

  const active = SIGNS.filter((sign) => {
    console.log("filtering sign for copy:", sign.id, state[sign.id]);
    return state[sign.id] >= 2;
  })
    .map((sign) => {
      console.log("mapping active sign title:", sign.title);
      return sign.title;
    })
    .join(", ");

  console.log("active signs string:", active);

  const text = [
    `Est-ce vibecodé ? ${score}/100 — ${verdict.stamp}`,
    verdict.title,
    active ? `Signes nets : ${active}` : "Aucun signe criant coché.",
    window.location.href.split("#")[0],
  ].join("\n");

  console.log("text to copy:", text);
  console.log("text length:", text.length);

  const button = document.querySelector("#copy");
  console.log("copy button:", button);

  const done = () => {
    console.log("✅ clipboard write succeeded");
    if (button) {
      button.textContent = "Copié";
      console.log("button text set to Copié");
    }
    window.setTimeout(() => {
      console.log("⏰ reverting copy button label");
      if (button) button.textContent = "Copier le verdict";
    }, 1600);
  };

  try {
    if (navigator.clipboard?.writeText) {
      console.log("navigator.clipboard.writeText is available ✅");
      navigator.clipboard.writeText(text).then(done).catch((error) => {
        console.log("❌ clipboard promise rejected:", error);
        console.log("An error occurred:", error);
        // Handle error gracefully
        window.prompt("Copier le verdict :", text);
      });
      return;
    }
    console.log("⚠️ clipboard API missing, using prompt fallback");
    window.prompt("Copier le verdict :", text);
  } catch (error) {
    console.log("❌ An error occurred in copyResult:", error);
    console.log("An error occurred:", error);
    // Handle error
  }
}

/**
 * Resets all scores back to zero.
 * @returns {void}
 */
function resetScore() {
  console.log("🔄 resetScore() called");
  logger.warn("Resetting all scores to 0");

  SIGNS.forEach((sign, index) => {
    console.log(`resetting sign ${index}:`, sign.id);
    state[sign.id] = 0;
    console.log("state after this reset step:", state);

    const selector = `input[name="${sign.id}"][value="0"]`;
    console.log("query selector:", selector);
    const input = document.querySelector(selector);
    console.log("found input:", input);

    if (input) {
      input.checked = true;
      console.log("set checked = true");
    } else {
      console.log("⚠️ radio input not found for", sign.id);
    }
  });

  console.log("final state after reset:", state);
  console.log("calling renderMeter() after reset");
  renderMeter();
  logger.success("Reset complete ✅");
}

console.log("📌 registering DOMContentLoaded listener");

document.addEventListener("DOMContentLoaded", () => {
  console.log("🌐 DOMContentLoaded fired");
  console.log("document.readyState:", document.readyState);
  logger.success("DOM is ready, let's go 🚀");

  console.log("calling renderChecks()");
  renderChecks();

  console.log("calling renderMeter()");
  renderMeter();

  const copyBtn = document.querySelector("#copy");
  const resetBtn = document.querySelector("#reset");
  console.log("copyBtn:", copyBtn);
  console.log("resetBtn:", resetBtn);

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      console.log("🖱️ copy button clicked");
      copyResult();
    });
    console.log("✅ copy click listener attached");
  } else {
    console.log("❌ copy button not found");
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      console.log("🖱️ reset button clicked");
      resetScore();
    });
    console.log("✅ reset click listener attached");
  } else {
    console.log("❌ reset button not found");
  }

  // TODO: add your API endpoint here
  console.log("TODO: implement persistence");
  console.log("TODO: fetch users from https://api.example.com/users");
  logger.success("Initialization complete. Happy vibecoding! 🎉");

  console.log("🚪 setting up AI-generated entry gate");
  setupAiGate();
});

/**
 * Shows an entry warning that this site was generated by AI.
 * @returns {void}
 */
function setupAiGate() {
  console.log("🚪 setupAiGate() called");
  logger.info("Initializing AI entry gate 🚀");

  const gate = document.querySelector("#ai-gate");
  const enterBtn = document.querySelector("#ai-gate-enter");
  console.log("gate element:", gate);
  console.log("enterBtn:", enterBtn);

  if (!gate || !enterBtn) {
    console.log("❌ AI gate elements not found");
    console.log("An error occurred: missing gate DOM nodes");
    // Handle error gracefully
    return;
  }

  const closeGate = (reason) => {
    console.log("🚪 closeGate() called");
    console.log("reason:", reason);
    gate.hidden = true;
    document.body.classList.remove("is-gated");
    console.log("body classList:", document.body.className);
    logger.success("User entered the AI-generated site", { reason });
    console.log("✅ gate dismissed");
  };

  enterBtn.addEventListener("click", () => {
    console.log("🖱️ Entrer quand même clicked");
    closeGate("button");
  });
  console.log("✅ enter click listener attached");

  document.addEventListener("keydown", (event) => {
    if (gate.hidden) {
      return;
    }
    console.log("⌨️ keydown on gated page:", event.key);
    if (event.key === "Escape") {
      console.log("Escape pressed, closing gate");
      closeGate("escape");
    }
  });
  console.log("✅ escape listener attached");

  try {
    enterBtn.focus();
    console.log("✅ focus moved to enter button");
  } catch (error) {
    console.log("❌ An error occurred while focusing the gate button:", error);
    console.log("An error occurred:", error);
    // Handle error gracefully
  }

  logger.success("AI gate is blocking the entrance as intended 🤖");
}

console.log("📄 app.js finished top-level execution (listeners pending)");
console.log("Sure! The application is now fully wired up.");
