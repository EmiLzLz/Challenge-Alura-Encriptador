export const Output = () => {
  const $output = document.createElement("textarea");

  $output.id = "user-output";
  $output.name = "textarea";
  $output.rows = "10";

  return $output;
};
