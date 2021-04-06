// Select all buttons. Convert them to an Array from nodelist.
const buttons = Array.from(document.querySelectorAll("input"));
const history = document.querySelector(".history");
const input = document.querySelector(".input");

let num1 = null,
  num2 = null,
  oper = null;

// Add eventlistener to each button.
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "divide") {
      handleButtons("/");
    } else if (e.target.id === "negate") {
      input.innerText = -Number(input.innerText);
    } else handleButtons(e.target.value);
  });
});

// function to read the buttons and call appropriate functions.
const handleButtons = (buttonValue) => {
  // Check if it is a number.
  if (!isNaN(Number(buttonValue)) || buttonValue === ".") {
    // Compare to NaN. If true, not a number.
    handleNumber(buttonValue);
  }
  // If number, update text area. => Above.
  // if operator( = is part of operator ), update currentValue. Differentiate
  // between first value and second.
  // If %, divide currentValue by 100.
  // If (+/-), negate current number.
  // If . work on currentValue.
  else if (
    buttonValue === "+" ||
    buttonValue === "-" ||
    buttonValue === "x" ||
    buttonValue === "/" ||
    buttonValue === "=" ||
    buttonValue === "%" ||
    buttonValue === "+/-"
  ) {
    if (buttonValue === "x") handleOperator("*");
    else if (buttonValue === "%") {
      input.innerText = Number(input.innerText) / 100;
    } else handleOperator(buttonValue);
  }
  // If AC, reset EVERYTHING.
  else if (buttonValue === "AC") {
    resetEverything();
  } else {
    console.log("Weuh");
  } //
};

const add = (a, b) => {
  return Number(a) + Number(b); // Prevent string concatenation.
};

const multiply = (a, b) => {
  return a * b;
};

const subtract = (a, b) => {
  return a - b;
};

const divide = (a, b) => {
  if (Number(b) === 0) return "Division by 0 not allowed"; // Prohibit division by zero.
  return a / b;
};

const operate = (num1, num2, operator) => {
  let answer = 0;
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "*":
      console.log("Called x");
      return multiply(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
  }
};

// TODO: Handle decimal properly when it's first number.
// Handle numbers.
const handleNumber = (number) => {
  if (number === ".") {
    if (!input.innerText.includes(".")) input.innerText += number;
    else return; // Can't add decimal if number is already a decimal.
  } else if (Number(input.innerText)) {
    // Convert to number.
    // If already has something
    input.innerText += number;
  } else {
    input.innerText = number;
  }
};

// Handle operations.
const handleOperator = (operator) => {
  // SCENARIO: 1 -> User is not a psycho
  // Check num1, if empty -> currentValue = num1. Take operator in. Reset input.
  // If nim1 is filled, add currentValue to num2. Call calculate. Update
  // display.
  if (operator === "=") {
    if (Number(num1)) {
      //num1 has a value already.
      num2 = Number(input.innerText);
      let ans = operate(num1, num2, oper);
      input.innerText = ans;
      history.innerText = ans;
      num1 = 0;
      num2 = 0;
    } else {
      history.innerText = num1;
    }
  } else {
    // Every other operator
    num1 = Number(input.innerText);
    input.innerText = `${num1} ${operator}`;
    oper = operator;
  }
};

// Function to update textArea.
const updateText = (value) => {
  textArea.value = value;
};

// When AC(All Clear) is pressed.
const resetEverything = () => {
  input.innerText = "-";
  history.innerText = "-";
  num1 = 0;
  num2 = 0;
  oper = "";
};
// Function to keep track of currentValue.
