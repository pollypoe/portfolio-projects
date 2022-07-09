var outputDisplay,
  inputDisplay,
  input = '',
  memory = 0,
  operator = '+';

function calculate() {
  var number = parseFloat(input);
  switch (operator) {
    case '/':
      memory /= number;
      break;
    case '*':
      memory *= number;
      break;
    case '-':
      memory -= number;
      break;
    case '+':
      memory += number;
  }
}

function calculator(element) {
  button = element.target.innerHTML;
  // get Input
  if (button.match(/[0-9.]/gi)) {
    if (input === '' && button === '.') {
      input += '0.';
      outputDisplay.innerHTML = input;
    } else if (!(input === '' && button === '0')) {
      input += button;
      outputDisplay.innerHTML = input;
    }
  }
  // get operator and perform calculation
  else if (button.match(/[\/*\-+]/gi)) {
    if (input === '') {
      operator = button;
      inputDisplay.innerHTML = memory + ' ' + operator;
    } else {
      calculate();
      operator = button;
      input = '';
      outputDisplay.innerHTML = memory;
      inputDisplay.innerHTML = memory + ' ' + operator;
    }
  }
  // perform calculation only and show result
  else if (button.match(/=/gi) && input !== '') {
    calculate();
    input = '';
    outputDisplay.innerHTML = memory;
    inputDisplay.innerHTML = memory;
  }
  // clear previous input
  else if (button.match(/CE/gi)) {
    input = '';
    outputDisplay.innerHTML = 0;
  }
  // clear all
  else if (button.match(/C/gi)) {
    input = '';
    memory = 0;
    operator = '+';
    outputDisplay.innerHTML = 0;
    inputDisplay.innerHTML = 0;
  }
}

// DOM Ready
(function() {
  var buttons = document.querySelectorAll("button");
  outputDisplay = document.querySelector(".output");
  inputDisplay = document.querySelector(".input");
  outputDisplay.innerHTML = 0;
  inputDisplay.innerHTML = 0;

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = calculator;
  }
})();