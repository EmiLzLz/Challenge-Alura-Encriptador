import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Encrypter } from "./components/Encrypter.js";

export function App() {
  //*variables
  const $root = document.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Encrypter());
  $root.appendChild(Footer());
}
