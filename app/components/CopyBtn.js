export const CopyBtn = () => {
  const $copyBtn = document.createElement("button");
  $copyBtn.id = "copy-button";
  $copyBtn.innerText = "Copiar";

  $copyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const output = document.querySelector("#user-output");

    output.select();
    document.execCommand("copy");
  });

  return $copyBtn;
};
