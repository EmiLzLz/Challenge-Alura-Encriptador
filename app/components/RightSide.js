import { Output } from "./Output.js";
import { Advice } from "./Advice.js";
import { CopyBtn } from "./CopyBtn.js";

export const RightSide = () => {
  const $rightSide = document.createElement("div");
  $rightSide.classList.add("right-side");

  $rightSide.appendChild(Output());
  $rightSide.appendChild(Advice());
  $rightSide.appendChild(CopyBtn());

  return $rightSide;
};
