export const Advice = () => {
  const d = document,
    $advice = d.createElement("div"),
    $image = d.createElement("img"),
    $notif = d.createElement("h2"),
    $tip = d.createElement("p");

  $advice.id = "advice";
  $image.classList.add("image");
  $notif.classList.add("notification");
  $tip.classList.add("tip");

  $image.src = "app/assets/Muñeco_Alura.png";
  $image.alt = "logo";
  $notif.innerText = "Ningun mensaje fue encontrado";
  $tip.innerText = "Ingresa el texto que desees encriptar o desencriptar";

  $advice.appendChild($image);
  $advice.appendChild($notif);
  $advice.appendChild($tip);

  return $advice;
};
