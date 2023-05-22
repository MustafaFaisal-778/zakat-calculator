let currentNumber = '';
let currentOperator = '';
let result = 0;

function appendNumber(num) {
  currentNumber += num;
  document.getElementById("screen").value = currentNumber;
}

function appendOperator(op) {
  currentOperator = op;
  result = parseFloat(currentNumber);
  currentNumber = '';
}

function calculate() {
  switch (currentOperator) {
    case '+':
      result += parseFloat(currentNumber);
      break;
    case '-':
      result -= parseFloat(currentNumber);
      break;
    case '*':
      result *= parseFloat(currentNumber);
      break;
    case '/':
      result /= parseFloat(currentNumber);
      break;
  }
  document.getElementById("screen").value = result;
  currentNumber = '';
  currentOperator = '';
  result = 0;
}
