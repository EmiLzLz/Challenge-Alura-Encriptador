export const EncrypBtn = () => {
  const $encrypBtn = document.createElement("button");

  $encrypBtn.id = "encryp-button";
  $encrypBtn.innerText = "Encriptar!";

  /* This code block is adding an event listener to the `` button that listens for a click
  event. When the button is clicked, it retrieves the input text from an HTML element with the ID
  `user-text`, converts it to lowercase, and stores it in the `text` variable. It then creates a new
  empty string variable called `newText` and a regular expression variable called `char` that
  matches any character that is not a letter, number, or whitespace. */
  $encrypBtn.addEventListener("click", () => {
    let input = document.querySelector("#user-text");
    let output = document.querySelector("#user-output");
    let text = input.value.toLowerCase();
    let newText = "";
    let char = /[^a-zñ0-9\s]/g;
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
