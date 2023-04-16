import { RightSide } from "./RightSide.js";
import { LeftSide } from "./LeftSide.js";

export const Encrypter = () => {
  const $encrypter = document.createElement("div");
  $encrypter.classList.add("encrypter-container");

  $encrypter.appendChild(LeftSide());
  $encrypter.appendChild(RightSide());

  return $encrypter;
};
