export const Header = () => {
  const $header = document.createElement("header"),
    $logo = document.createElement("img"),
    $title = document.createElement("h1");

  $header.id = "header";
  $logo.id = "logo";
  $logo.src = "app/assets/Vector_Alura.png";
  $logo.alt = "logo";
  $title.innerText = "ENCRIPTADOR DE TEXTO";

  $header.appendChild($logo);
  $header.appendChild($title);

  return $header;
};
