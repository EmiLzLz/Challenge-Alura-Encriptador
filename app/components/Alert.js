export const Alert = () => {
  const $alert = document.createElement("div"),
    $icon = document.createElement("img"),
    $message = document.createElement("h3");

  $alert.id = "alert";
  $icon.id = "icon";
  $icon.src = "app/assets/icon_alura.png";
  $icon.alt = "icon alert";
  $message.id = "message";

  $message.innerText = "Solo letras minusculas y sin acentos";

  $alert.appendChild($icon);
  $alert.appendChild($message);

  return $alert;
};
