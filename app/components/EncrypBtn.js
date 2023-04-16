export const EncrypBtn = () => {
  const $encrypBtn = document.createElement("button");

  $encrypBtn.id = "encryp-button";
  $encrypBtn.innerText = "Encriptar!";

  $encrypBtn.addEventListener("click", () => {
    let input = document.querySelector("#user-text");
    let output = document.querySelector("#user-output");
    let text = input.value.toLowerCase();
    let newText = "";
    let char = /[^a-z0-9\s]/g;
    const rules = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };

    if (text.match(char)) {
      output.value = "";
    } 
    else {
      for (const obj in rules) {
        newText = text.replaceAll(obj, rules[obj]);
        text = newText;
      }

      output.value = text;
    }
  });

  return $encrypBtn;
};
