import { Input } from "./Input.js";
import { Actions } from "./Actions.js";

export const LeftSide = () => {
  const $leftSide = document.createElement("div");
  $leftSide.classList.add("left-side");

  function handleInput() {
    let input = document.querySelector("#user-text");

    input.addEventListener("input", () => {
      if (input.value !== "") {
        document.querySelector("#user-output").style.display = "initial";
        document.querySelector("#copy-button").style.display = "initial";
        document.querySelector("#advice").style.display = "none";
      } else {
        document.querySelector("#advice").style.display = "initial";
        document.querySelector("#user-output").style.display = "none";
        document.querySelector("#copy-button").style.display = "none";
      }
    });
  }

  const input = Input({ handleInput });

  $leftSide.appendChild(input);
  $leftSide.appendChild(Actions());

  return $leftSide;
};
