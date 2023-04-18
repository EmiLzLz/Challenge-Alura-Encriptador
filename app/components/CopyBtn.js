export const CopyBtn = () => {
  const $copyBtn = document.createElement("button");
  $copyBtn.id = "copy-button";
  $copyBtn.innerText = "Copiar";

  /* This code is adding an event listener to the copy button created by the function. When the button
  is clicked, it prevents the default behavior of the click event (which is to reload the page),
  selects the text inside the element with the ID "user-output", and executes the "copy" command,
  which copies the selected text to the clipboard. */
  $copyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const output = document.querySelector("#user-output");

    output.select();
    document.execCommand("copy");
  });

  return $copyBtn;
};
