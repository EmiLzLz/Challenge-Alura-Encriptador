export const DecrypBtn = () => {
  const $decrypBtn = document.createElement("button");
  $decrypBtn.id = "decryp-button";
  $decrypBtn.innerText = "Desencriptar!";

  $decrypBtn.addEventListener("click", () => {
    const rules = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };
    let input = document.querySelector("#user-text"),
      output = document.querySelector("#user-output"),
      righText = output.value,
      origText = "";

    input.value = "";

    for (const obj in rules) {
      origText = righText.replaceAll(rules[obj], obj);

      righText = origText;
    }

    output.value = righText;
  });

  return $decrypBtn;
};
