export const Footer = () => {
  const $footer = document.createElement("footer"),
    $creator = document.createElement("h2");

  $creator.innerText = "Hecho por Emiliano López";
  $footer.appendChild($creator);

  return $footer;
};
