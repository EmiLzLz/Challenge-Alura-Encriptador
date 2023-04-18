import { Input } from "./Input.js";
import { Actions } from "./Actions.js";

export const LeftSide = () => {
  const $leftSide = document.createElement("div");
  $leftSide.classList.add("left-side");

  /**
   * The function handles user input and displays or hides certain elements based on whether the input
   * is empty or not.
   */
  function handleInput() {
    let input = document.querySelector("#user-text");

    input.addEventListener("input", () => {
      if (input.value !== "") {
        document.querySelector("#advice").style.display = "none";
        document.querySelector("#user-output").style.display = "initial";
        document.querySelector("#copy-button").style.display = "initial";
      } else {
        document.querySelector("#advice").style.display = "flex";
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
