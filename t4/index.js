const button = document.getElementById("calc");

button.addEventListener("click", calculate);
function calculate() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let operator = document.getElementById("operator").value;

  if (!isValidNumber(num1) || !isValidNumber(num2)) {
    displayError("Please enter valid numbers.");
    return;
  }

  num1 = Number(num1);
  num2 = Number(num2);

  let result;
  if (operator === "add") {
    result = num1 + num2;
  } else if (operator === "subtract") {
    result = num1 - num2;
  } else if (operator === "multiply") {
    result = num1 * num2;
  } else if (operator === "divide") {
    result = num1 / num2;
    if (num2 === 0) {
      displayError("Cannot divide by zero.");
      return;
    }
  }

  displayResult(result);
}

const isValidNumber = (value) => {
  return !isNaN(value) && isFinite(value);
};

const displayResult = (result) => {
  let resultElement = document.getElementById("result");
  resultElement.innerHTML = "Result: " + result;
};

const displayError = (message) => {
  alert("Error: " + message);
};
