const buttons = document.querySelectorAll("input[type='button']");
const result = document.querySelector("#result");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();
    const value = e.target.value;
    switch (value) {
      case "=":
        calculateResult();
        break;
      case "C":
        result.value = "";
        break;
      default:
        result.value += value;
        break;
    }
  });
});

result.addEventListener("keydown", e => {
  if (e.keyCode === 13) {
    e.preventDefault();
    calculateResult();
  }
});

window.onload = function() {
  result.focus();
};

function calculateResult() {
  result.value = eval(result.value);
}
