import { Alert } from "./Alert.js";
import { EncrypBtn } from "./EncrypBtn.js";
import { DecrypBtn } from "./DecrypBtn.js";

export const Actions = () => {
  const $actions = document.createElement("div"),
    $btnContainer = document.createElement("div");

  $actions.id = "actions";
  $btnContainer.classList.add("btn-container");
  $btnContainer.appendChild(EncrypBtn());
  $btnContainer.appendChild(DecrypBtn());
  $actions.appendChild(Alert());
  $actions.appendChild($btnContainer);

  return $actions;
};
