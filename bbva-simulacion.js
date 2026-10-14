const bankScreens = {
  login: document.querySelector("#bank-login"),
  lesson: document.querySelector("#bank-lesson"),
};

const bankResultMessage = document.querySelector("#bank-result-message");

function showBankScreen(name) {
  Object.entries(bankScreens).forEach(([screenName, element]) => {
    const isActive = screenName === name;
    element.hidden = !isActive;
    element.classList.toggle("bank-screen--active", isActive);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
  const heading = bankScreens[name].querySelector("h1");
  window.setTimeout(() => heading?.focus({ preventScroll: true }), 50);
}

function revealBankLesson(choice) {
  bankResultMessage.textContent =
    choice === "check"
      ? "Buena decisión: te has detenido antes de confiar en el aspecto de la página."
      : "No ha ocurrido nada: los campos eran decorativos. En una página real, entregar estos datos podría permitir el acceso a tu cuenta.";

  showBankScreen("lesson");
}

document.querySelectorAll("[data-bank-choice]").forEach((button) => {
  button.addEventListener("click", () => revealBankLesson(button.dataset.bankChoice));
});

document.querySelector('[data-bank-action="restart"]').addEventListener("click", () => {
  showBankScreen("login");
});
