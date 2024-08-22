import { mode, switchMode } from "./driver";
function renderModeChange(event) {
  const computerButton = document.querySelector("#computer-button");
  const humanButton = document.querySelector("#human-button");
  if (mode == "Human" && event.target.id == "computer-button") {
    computerButton.style.cssText += "color: white; background-color: blue";
    humanButton.style.cssText += "color: black; background-color: white";
    switchMode();
  } else if (mode == "Computer" && event.target.id == "human-button") {
    humanButton.style.cssText += "color: white; background-color: blue";
    computerButton.style.cssText += "color: black; background-color: white";
    switchMode();
  }
}

export { renderModeChange };
