const screens = {
  welcome: document.querySelector("#welcome"),
  schedule: document.querySelector("#schedule"),
  checkpoint: document.querySelector("#checkpoint"),
  lesson: document.querySelector("#lesson"),
};

const resultBadge = document.querySelector("#result-badge");
const resultMessage = document.querySelector("#result-message");

function showScreen(name) {
  Object.entries(screens).forEach(([screenName, element]) => {
    const isActive = screenName === name;
    element.hidden = !isActive;
    element.classList.toggle("screen--active", isActive);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  const heading = screens[name].querySelector("h1");
  window.setTimeout(() => heading?.focus({ preventScroll: true }), 50);
}

function revealLesson(choice) {
  const checkedFirst = choice === "check";

  resultBadge.className = checkedFirst
    ? "result-badge result-badge--success"
    : "result-badge result-badge--warning";
  resultBadge.textContent = checkedFirst
    ? "Buena decisión: te has detenido"
    : "Una pausa a tiempo puede protegerte";

  resultMessage.textContent = checkedFirst
    ? "Has hecho lo más seguro: parar antes de entregar información y comprobar quién está detrás de la página."
    : "No ha ocurrido nada malo: esta página no acepta ni guarda datos. En una situación real, pulsar para continuar podría exponerte a un engaño.";

  showScreen("lesson");
}

document.querySelector('[data-action="open-schedule"]').addEventListener("click", () => {
  showScreen("schedule");
});

document.querySelector('[data-action="open-challenge"]').addEventListener("click", () => {
  showScreen("checkpoint");
});

document.querySelectorAll("[data-choice]").forEach((button) => {
  button.addEventListener("click", () => revealLesson(button.dataset.choice));
});

document.querySelector('[data-action="restart"]').addEventListener("click", () => {
  showScreen("checkpoint");
});

document.querySelectorAll('[data-action="home"]').forEach((button) => {
  button.addEventListener("click", () => showScreen("welcome"));
});
