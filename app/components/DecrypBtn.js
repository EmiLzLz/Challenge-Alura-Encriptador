export const DecrypBtn = () => {
  const $decrypBtn = document.createElement("button");
  $decrypBtn.id = "decryp-button";
  $decrypBtn.innerText = "Desencriptar!";

  /* This code block is adding an event listener to the `` button element. When the button is
  clicked, it retrieves the values of the `#user-text` and `#user-output` elements, and then applies
  a set of rules to decrypt the text in `#user-output`. The decrypted text is then displayed in the
  `#user-text` element. */
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
