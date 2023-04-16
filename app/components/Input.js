export const Input = (props) => {
  const $input = document.createElement("textarea");

  $input.id = "user-text";
  $input.name = "textarea";
  $input.rows = "10";
  $input.style.textTransform = "lowercase";
  $input.placeholder = "Ingresa un mensaje por favor...";
  $input.oninput = props.handleInput;

  return $input;
};
