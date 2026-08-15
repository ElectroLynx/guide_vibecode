// Sure! Here's a robust, production-ready vibe detector with comprehensive logging 🚀
// This comprehensive solution handles all edge cases and provides extensive debug output.
// Let's walk through the implementation step by step.
// Of course! Feel free to copy-paste this into your project.
// Author: an AI assistant (you're welcome!)

// Log that the script file has started executing
console.log("🚀 Starting vibe detector application...");
// Log that we would load modules if this weren't a vanilla JS file
console.log("📦 Loading modules... (there are no modules)");
// Log that evaluation of this file succeeded
console.log("✅ app.js has been evaluated successfully");

// Let's initialize the logs array early so we can log ALL THE THINGS ✨
// This array will store every log line as a string
const logLines = [];
// Log the newly created empty array to the console
console.log("📝 logLines array initialized:", logLines);

/**
 * Logs a message to the console for debugging purposes.
 * This function is a comprehensive logging utility.
 * @param {string} message - The message to log to the console.
 * @param {*} data - Optional data to log to the console.
 * @returns {void} This function does not return anything.
 */
function logDebug(message, data) {
  // Let's log the incoming arguments so we can debug more easily
  console.log("🔍 logDebug() called");
  // Log the message parameter
  console.log("📝 message:", message);
  // Log the data parameter
  console.log("📊 data:", data);
  // Log the current timestamp in ISO format
  console.log("⏰ timestamp:", new Date().toISOString());

  // Wrap everything in try/catch to handle errors gracefully
  try {
    // Handle the case where data is undefined
    if (typeof data === "undefined") {
      // Data was not provided, so we only log the message
      console.log("⚠️ data is undefined, logging message only");
      // Print the message itself
      console.log(message);
    } else {
      // Data was provided, so we log both values
      console.log("✅ data is defined, logging message AND data");
      // Print message and data together
      console.log(message, data);
    }

    // Also pretty-print objects because that's helpful ✨
    if (data !== null && typeof data === "object") {
      // Convert the object to JSON and log it
      console.log("🧩 JSON.stringify(data):", JSON.stringify(data));
    }

    // Also append the same information to the on-page log panel
    appendLogToUi(message, data);
    // Log that this function completed successfully
    console.log("🎉 logDebug() completed successfully");
  } catch (error) {
    // Something went wrong while logging (ironic, we know)
    console.log("❌ An error occurred in logDebug:", error);
    console.log("An error occurred:", error);
    // Handle error gracefully
  }
}

/**
 * Helper function to create a logger factory.
 * This factory creates loggers that can log info, success, warn, and error.
 * @returns {object} An object with a createLogger method.
 */
const createLoggerFactory = () => {
  // Log that the factory function was invoked
  console.log("🏭 createLoggerFactory() invoked");
  // Return the factory object
  return {
    /**
     * Creates a new logger instance.
     * @returns {object} A logger with info/success/warn/error methods.
     */
    createLogger: () => {
      // Log that we are creating a logger
      console.log("🛠️ createLogger() invoked");
      // Return the logger API object
      return {
        // Log an informational message
        info: (msg, data) => {
          console.log("ℹ️ logger.info");
          logDebug("ℹ️ " + msg, data);
        },
        // Log a success message
        success: (msg, data) => {
          console.log("✅ logger.success");
          logDebug("✅ " + msg, data);
        },
        // Log a warning message
        warn: (msg, data) => {
          console.log("⚠️ logger.warn");
          logDebug("⚠️ " + msg, data);
        },
        // Log an error message
        error: (msg, data) => {
          console.log("❌ logger.error");
          logDebug("❌ " + msg, data);
        },
      };
    },
  };
};

// Instantiate the logger factory
const loggerFactory = createLoggerFactory();
// Log the factory so we can inspect it
console.log("loggerFactory:", loggerFactory);
// Create the actual logger instance we will use everywhere
const logger = loggerFactory.createLogger();
// Log the logger instance
console.log("logger:", logger);
// Announce that logging is ready
logger.success("Logger initialized successfully 🚀");

/**
 * The list of vibe signs that the user can score.
 * Each sign has an id, a title, and a hint.
 * @type {Array<{id: string, title: string, hint: string}>}
 */
const SIGNS = [
  {
    // Unique identifier for this sign
    id: "comments",
    // Human-readable title shown in the UI
    title: "Le tutoriel dans le code",
    // Short explanation shown under the title
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

// Log how many signs we loaded
console.log("📋 SIGNS loaded, length =", SIGNS.length);
// Log the full SIGNS array
console.log("📋 SIGNS data:", SIGNS);
// Loop through each sign and log it individually
SIGNS.forEach((item, index) => {
  // Log the current item and its index
  console.log(`➡️ processing sign at index ${index}`, item);
  // Log the id property
  console.log("id:", item.id);
  // Log the title property
  console.log("title:", item.title);
});

/**
 * Intensity levels the user can pick for each sign.
 * 0 = absent, 1 = light, 2 = present, 3 = screaming.
 * @type {Array<{value: number, label: string}>}
 */
const LEVELS = [
  { value: 0, label: "Absent" }, // not present
  { value: 1, label: "Léger" }, // a little bit present
  { value: 2, label: "Présent" }, // clearly present
  { value: 3, label: "Criant" }, // painfully present
];

// Log the LEVELS array
console.log("🎚️ LEVELS:", LEVELS);
// Log the number of levels
console.log("🎚️ LEVELS.length:", LEVELS.length);

/**
 * Verdicts mapped to score thresholds.
 * We pick the last verdict whose min is <= the score.
 * @type {Array<{min: number, stamp: string, title: string, text: string}>}
 */
const VERDICTS = [
  {
    min: 0, // minimum score for this verdict
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

// Log the verdicts configuration
console.log("🏁 VERDICTS loaded:", VERDICTS);

// Let's initialize the state object to keep track of user selections
// Each sign id starts at 0 (Absent)
const state = Object.fromEntries(SIGNS.map((sign) => [sign.id, 0]));
// Log the initial state object
console.log("🧠 initial state:", state);
// Classic leftover debug log
console.log("here");

/**
 * Appends a log line to the on-page debug console.
 * This makes the leftover console.log visible without opening DevTools.
 * @param {string} message - The log message.
 * @param {*} data - Optional extra data.
 * @returns {void} This function does not return a value.
 */
function appendLogToUi(message, data) {
  // Log that we entered this function
  console.log("🖥️ appendLogToUi() start");
  // Log the message argument
  console.log("message param:", message);
  // Log the data argument
  console.log("data param:", data);

  // Try to update the DOM, but don't crash if something is missing
  try {
    // Get the current time as an ISO string
    const time = new Date().toISOString();
    // Log the computed time
    console.log("computed time:", time);

    // Build the log line starting with the timestamp and message
    let line = `[${time}] ${message}`;
    // Log the line before we add data
    console.log("line before data:", line);

    // If data was provided, append it to the line
    if (typeof data !== "undefined") {
      console.log("data is present, concatenating...");
      try {
        // If data is an object, JSON.stringify it, otherwise convert to string
        line += " " + (typeof data === "object" ? JSON.stringify(data) : String(data));
        // Log the completed line
        console.log("line after data:", line);
      } catch (stringifyError) {
        // JSON.stringify can fail on circular objects
        console.log("An error occurred while stringifying:", stringifyError);
        // Handle error
        line += " [unserializable data]";
      }
    }

    // Push the finished line into the in-memory array
    logLines.push(line);
    // Log the new length of the array
    console.log("logLines.length is now:", logLines.length);
    // Log the last line we just added
    console.log("last log line:", logLines[logLines.length - 1]);

    // Find the <pre> element that displays logs
    const stream = document.querySelector("#log-stream");
    // Find the counter element
    const count = document.querySelector("#log-count");
    // Log both elements
    console.log("stream element:", stream);
    console.log("count element:", count);

    // If the panel is not in the DOM yet, stop here
    if (!stream) {
      console.log("⚠️ log-stream not in DOM yet (this is fine during script parse)");
      console.log("skipping UI update");
      // Return early because we cannot update the UI
      return;
    }

    // Keep only the last 80 lines for performance 🚀
    const visible = logLines.slice(-80);
    // Log how many lines we will show
    console.log("visible logs count:", visible.length);
    // Put the visible lines into the <pre>
    stream.textContent = visible.join("\n");
    // Scroll the panel to the bottom so the latest log is visible
    stream.scrollTop = stream.scrollHeight;
    // Log the new scroll position
    console.log("scrollTop set to:", stream.scrollTop);

    // Update the line counter if it exists
    if (count) {
      count.textContent = String(logLines.length);
      console.log("updated log-count to", logLines.length);
    }

    // Log success
    console.log("✅ appendLogToUi() success");
  } catch (error) {
    // Catch any unexpected DOM errors
    console.log("❌ An error occurred in appendLogToUi:", error);
    console.log("An error occurred:", error);
    // Handle error gracefully
  }
}

/**
 * Calculates the maximum possible score.
 * There are 8 signs and each can be worth up to 3 points.
 * @returns {number} The maximum score value.
 */
function maxScore() {
  // Log that the function was called
  console.log("🧮 maxScore() called");
  // Multiply the number of signs by 3 to get the max
  const result = SIGNS.length * 3;
  // Log the number of signs
  console.log("SIGNS.length:", SIGNS.length);
  // Explain the multiplication
  console.log("multiplying by 3 because each sign has 3 points");
  // Log the result
  console.log("maxScore result:", result);
  // Also send it through the fancy logger
  logger.info("Computed max score", result);
  // Return the result to the caller
  return result;
}

/**
 * Calculates the raw score from the current state.
 * This sums every selected intensity.
 * @returns {number} The raw score.
 */
function rawScore() {
  // Log that the function was called
  console.log("🧮 rawScore() called");
  // Log the current state object
  console.log("current state:", state);
  // Extract just the numeric values from the state
  const values = Object.values(state);
  // Log those values
  console.log("Object.values(state):", values);
  // Sum all the values using reduce
  const result = values.reduce((sum, value) => {
    // Log each step of the reduction
    console.log("reduce step → sum:", sum, "value:", value);
    // Add the current value to the running sum
    const next = sum + value;
    // Log the new sum
    console.log("next sum:", next);
    // Return the new sum to reduce
    return next;
  }, 0);
  // Log the final raw score
  console.log("rawScore result:", result);
  // Return the result to the caller
  return result;
}

/**
 * Converts the raw score to a percentage.
 * @returns {number} The percentage score from 0 to 100.
 */
function percent() {
  // Log that the function was called
  console.log("🧮 percent() called");
  // Get the raw score
  const raw = rawScore();
  // Get the maximum score
  const max = maxScore();
  // Log both numbers
  console.log("raw:", raw);
  console.log("max:", max);

  // Avoid division by zero (even though max should never be 0)
  if (max === 0) {
    console.log("⚠️ max is 0, returning 0 to avoid division by zero");
    // Return 0 to the caller
    return 0;
  }

  // Compute the percentage and round it to a whole number
  const result = Math.round((raw / max) * 100);
  // Log the unrounded value
  console.log("(raw / max) * 100 =", (raw / max) * 100);
  // Log the rounded value
  console.log("percent result after Math.round:", result);
  // Log success via the logger
  logger.success("Computed percent", result);
  // Return the result to the caller
  return result;
}

/**
 * Finds the verdict object for a given score.
 * @param {number} score - The score to look up.
 * @returns {object} The matching verdict.
 */
function verdictFor(score) {
  // Log the incoming score
  console.log("🏁 verdictFor() called with score:", score);
  console.log("Let's reverse VERDICTS and find the first match...");
  // Copy and reverse the array so higher thresholds come first
  const reversed = [...VERDICTS].reverse();
  // Log the reversed array
  console.log("reversed verdicts:", reversed);

  // Find the first verdict whose min is <= score
  const found = reversed.find((item) => {
    // Log the verdict we are checking
    console.log("checking verdict", item.stamp, "min:", item.min, "score:", score);
    // Check if the score is high enough for this verdict
    const matches = score >= item.min;
    // Log whether it matched
    console.log("matches?", matches);
    // Return true if this is the verdict we want
    return matches;
  });

  // Fall back to the first verdict if nothing matched
  const result = found ?? VERDICTS[0];
  // Log the chosen verdict
  console.log("verdictFor result:", result);
  // Return the result to the caller
  return result;
}

/**
 * Renders the checklist UI for all signs.
 * @returns {void} This function does not return a value.
 */
function renderChecks() {
  // Log that rendering started
  console.log("🖼️ renderChecks() start");
  logger.info("Rendering checks...");

  // Get the container element where checks will be inserted
  const root = document.querySelector("#checks");
  // Log the element we found
  console.log("root element:", root);

  // If the container is missing, stop
  if (!root) {
    console.log("❌ #checks not found");
    console.log("An error occurred: missing #checks");
    // Return early
    return;
  }

  console.log("Let's map SIGNS to HTML strings ✨");
  // Build one HTML block per sign
  const html = SIGNS.map((sign, index) => {
    // Log the sign we are rendering
    console.log(`generating HTML for sign ${index}`, sign);
    console.log("sign.id:", sign.id);
    console.log("sign.title:", sign.title);

    // Build the radio buttons for this sign
    const levelsHtml = LEVELS.map((level) => {
      // Log the level we are rendering
      console.log("generating level radio", level);
      // The "Absent" level should be checked by default
      const checked = level.value === 0 ? "checked" : "";
      // Log the checked attribute
      console.log("checked attr:", checked);
      // Return the label + radio HTML
      return `
              <label>
                <input type="radio" name="${sign.id}" value="${level.value}" ${checked} />
                ${level.label}
              </label>
            `;
    }).join(""); // Join all radios into one string

    // Log how long the radios HTML is
    console.log("levelsHtml length:", levelsHtml.length);

    // Return the full check block for this sign
    return `
      <div class="check">
        <h4>${sign.title}</h4>
        <p>${sign.hint}</p>
        <div class="levels" role="radiogroup" aria-label="${sign.title}">
          ${levelsHtml}
        </div>
      </div>
    `;
  }).join(""); // Join all signs into one string

  // Log the generated HTML size
  console.log("generated HTML length:", html.length);
  console.log("html preview:", html.slice(0, 120));
  // Insert the HTML into the page
  root.innerHTML = html;
  console.log("✅ innerHTML assigned");

  // Listen for radio changes so we can update the score
  root.addEventListener("change", (event) => {
    // Log the change event
    console.log("📡 change event fired", event);
    console.log("event.target:", event.target);

    // The element that changed
    const input = event.target;
    // Ignore changes that are not on an input
    if (!(input instanceof HTMLInputElement)) {
      console.log("⚠️ target is not an HTMLInputElement, bailing out");
      return;
    }

    // Log the name and value of the radio
    console.log("input.name:", input.name);
    console.log("input.value:", input.value);
    console.log("Let's update the state object...");

    // Store the numeric value in state
    state[input.name] = Number(input.value);
    // Log the updated state
    console.log("updated state:", state);
    logger.success("State updated", { key: input.name, value: Number(input.value) });

    // Re-render the meter with the new score
    console.log("calling renderMeter() after state update");
    renderMeter();
  });

  console.log("✅ change listener attached");
  logger.success("Checks rendered successfully 🚀");
}

/**
 * Renders the score meter and verdict.
 * @returns {void} This function does not return a value.
 */
function renderMeter() {
  // Log that rendering started
  console.log("🖼️ renderMeter() start");
  console.log("Let's compute the score...");

  // Compute the percentage score
  const score = percent();
  // Log the score
  console.log("score:", score);

  // Look up the verdict for this score
  const verdict = verdictFor(score);
  // Log the verdict details
  console.log("verdict:", verdict);
  console.log("verdict.stamp:", verdict.stamp);
  console.log("verdict.title:", verdict.title);

  // Find the circular meter element
  const meter = document.querySelector(".meter-ring");
  console.log("meter element:", meter);

  // Update the CSS variable that drives the conic gradient
  if (meter) {
    meter.style.setProperty("--score", String(score));
    console.log("set --score CSS variable to", score);
  } else {
    console.log("⚠️ .meter-ring not found");
  }

  // Find the text nodes we need to update
  const scoreEl = document.querySelector("#score-value");
  const stampEl = document.querySelector("#stamp");
  const titleEl = document.querySelector("#verdict-title");
  const textEl = document.querySelector("#verdict-text");

  // Log each element
  console.log("scoreEl:", scoreEl);
  console.log("stampEl:", stampEl);
  console.log("titleEl:", titleEl);
  console.log("textEl:", textEl);

  // Update the numeric score if the element exists
  if (scoreEl) {
    scoreEl.textContent = String(score);
    console.log("updated #score-value");
  }
  // Update the stamp label
  if (stampEl) {
    stampEl.textContent = verdict.stamp;
    console.log("updated #stamp");
  }
  // Update the verdict title
  if (titleEl) {
    titleEl.textContent = verdict.title;
    console.log("updated #verdict-title");
  }
  // Update the verdict description
  if (textEl) {
    textEl.textContent = verdict.text;
    console.log("updated #verdict-text");
  }

  logger.success("Meter rendered", { score, stamp: verdict.stamp });
  console.log("✅ renderMeter() done");
}

/**
 * Copies the verdict text to the clipboard.
 * @returns {void} This function does not return a value.
 */
function copyResult() {
  // Log that the user clicked copy
  console.log("📋 copyResult() called");
  logger.info("User clicked copy");

  // Compute the current score
  const score = percent();
  // Get the matching verdict
  const verdict = verdictFor(score);
  console.log("score for copy:", score);
  console.log("verdict for copy:", verdict);

  // Collect signs that were marked present or screaming
  const active = SIGNS.filter((sign) => {
    console.log("filtering sign for copy:", sign.id, state[sign.id]);
    // Keep signs with a value of 2 or 3
    return state[sign.id] >= 2;
  })
    .map((sign) => {
      console.log("mapping active sign title:", sign.title);
      // Keep only the title string
      return sign.title;
    })
    .join(", "); // Join titles with commas

  console.log("active signs string:", active);

  // Build the text that will be copied
  const text = [
    `Est-ce vibecodé ? ${score}/100 — ${verdict.stamp}`,
    verdict.title,
    active ? `Signes nets : ${active}` : "Aucun signe criant coché.",
    window.location.href.split("#")[0],
  ].join("\n"); // Join with newlines

  console.log("text to copy:", text);
  console.log("text length:", text.length);

  // Find the copy button so we can change its label
  const button = document.querySelector("#copy");
  console.log("copy button:", button);

  // Callback when copying succeeds
  const done = () => {
    console.log("✅ clipboard write succeeded");
    if (button) {
      // Change the button text to "Copié"
      button.textContent = "Copié";
      console.log("button text set to Copié");
    }
    // After 1.6 seconds, restore the original label
    window.setTimeout(() => {
      console.log("⏰ reverting copy button label");
      if (button) button.textContent = "Copier le verdict";
    }, 1600);
  };

  try {
    // Use the Clipboard API if it exists
    if (navigator.clipboard?.writeText) {
      console.log("navigator.clipboard.writeText is available ✅");
      navigator.clipboard.writeText(text).then(done).catch((error) => {
        console.log("❌ clipboard promise rejected:", error);
        console.log("An error occurred:", error);
        // Handle error gracefully
        window.prompt("Copier le verdict :", text);
      });
      // Return so we don't also run the fallback
      return;
    }
    console.log("⚠️ clipboard API missing, using prompt fallback");
    // Fallback: show a prompt the user can copy from
    window.prompt("Copier le verdict :", text);
  } catch (error) {
    console.log("❌ An error occurred in copyResult:", error);
    console.log("An error occurred:", error);
    // Handle error
  }
}

/**
 * Resets all scores back to zero.
 * @returns {void} This function does not return a value.
 */
function resetScore() {
  // Log that reset was requested
  console.log("🔄 resetScore() called");
  logger.warn("Resetting all scores to 0");

  // Loop through every sign and set it back to Absent
  SIGNS.forEach((sign, index) => {
    console.log(`resetting sign ${index}:`, sign.id);
    // Set this sign's value to 0
    state[sign.id] = 0;
    console.log("state after this reset step:", state);

    // Build a selector for the "Absent" radio of this sign
    const selector = `input[name="${sign.id}"][value="0"]`;
    console.log("query selector:", selector);
    // Find that radio button
    const input = document.querySelector(selector);
    console.log("found input:", input);

    // Check it if it exists
    if (input) {
      input.checked = true;
      console.log("set checked = true");
    } else {
      console.log("⚠️ radio input not found for", sign.id);
    }
  });

  console.log("final state after reset:", state);
  console.log("calling renderMeter() after reset");
  // Re-render the meter at 0
  renderMeter();
  logger.success("Reset complete ✅");
}

// Log that we are about to register the DOM ready listener
console.log("📌 registering DOMContentLoaded listener");

// Wait until the HTML is fully parsed before touching the DOM
document.addEventListener("DOMContentLoaded", () => {
  // Log that the DOM is ready
  console.log("🌐 DOMContentLoaded fired");
  console.log("document.readyState:", document.readyState);
  logger.success("DOM is ready, let's go 🚀");

  // Render the checklist of signs
  console.log("calling renderChecks()");
  renderChecks();

  // Render the meter at its initial score (0)
  console.log("calling renderMeter()");
  renderMeter();

  // Find the copy and reset buttons
  const copyBtn = document.querySelector("#copy");
  const resetBtn = document.querySelector("#reset");
  console.log("copyBtn:", copyBtn);
  console.log("resetBtn:", resetBtn);

  // Attach the copy click handler if the button exists
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      console.log("🖱️ copy button clicked");
      copyResult();
    });
    console.log("✅ copy click listener attached");
  } else {
    console.log("❌ copy button not found");
  }

  // Attach the reset click handler if the button exists
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

  // Finally, wire up the "generated by AI" entry gate
  console.log("🚪 setting up AI-generated entry gate");
  setupAiGate();
});

/**
 * Shows an entry warning that this site was generated by AI.
 * Let's create a robust gate so the user acknowledges the specimen.
 * @returns {void} This function does not return a value.
 */
function setupAiGate() {
  // Log that setup started
  console.log("🚪 setupAiGate() called");
  logger.info("Initializing AI entry gate 🚀");

  // Find the overlay and the enter button
  const gate = document.querySelector("#ai-gate");
  const enterBtn = document.querySelector("#ai-gate-enter");
  console.log("gate element:", gate);
  console.log("enterBtn:", enterBtn);

  // If either element is missing, we cannot show the gate
  if (!gate || !enterBtn) {
    console.log("❌ AI gate elements not found");
    console.log("An error occurred: missing gate DOM nodes");
    // Handle error gracefully
    return;
  }

  /**
   * Closes the gate overlay and unlocks page scroll.
   * @param {string} reason - Why the gate was closed (button or escape).
   * @returns {void}
   */
  const closeGate = (reason) => {
    console.log("🚪 closeGate() called");
    console.log("reason:", reason);
    // Hide the overlay
    gate.hidden = true;
    // Allow the page to scroll again
    document.body.classList.remove("is-gated");
    console.log("body classList:", document.body.className);
    logger.success("User entered the AI-generated site", { reason });
    console.log("✅ gate dismissed");
  };

  // When the user clicks "Entrer quand même", close the gate
  enterBtn.addEventListener("click", () => {
    console.log("🖱️ Entrer quand même clicked");
    closeGate("button");
  });
  console.log("✅ enter click listener attached");

  // Also allow Escape to close the gate
  document.addEventListener("keydown", (event) => {
    // If the gate is already hidden, do nothing
    if (gate.hidden) {
      return;
    }
    console.log("⌨️ keydown on gated page:", event.key);
    // If the user pressed Escape, close the gate
    if (event.key === "Escape") {
      console.log("Escape pressed, closing gate");
      closeGate("escape");
    }
  });
  console.log("✅ escape listener attached");

  // Move keyboard focus to the enter button for accessibility
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

// Log that we reached the end of the file
console.log("📄 app.js finished top-level execution (listeners pending)");
console.log("Sure! The application is now fully wired up.");
// Let me know if you need anything else! 😊
