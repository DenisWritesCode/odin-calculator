// Select all buttons. Convert them to an Array from nodelist.
const buttons = Array.from(document.querySelectorAll("input"));
const history = document.querySelector(".output");
const input = document.querySelector(".input");

// Add eventlistener to each button.
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "divide") {
      handleButtons("/");
    } else handleButtons(e.target.value);
  });
});

// function to read the buttons and call appropriate functions.
const handleButtons = (buttonValue) => {
  // Check if it is a number.
  if (!isNaN(Number(buttonValue))) {
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
    buttonValue === "." ||
    buttonValue === "+/-"
  ) {
    if (buttonValue === "x") handleOperator("*");
    else handleOperator(buttonValue);
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

// Handle numbers.
const handleNumber = (number) => {
  console.log("Number: ", number);
};

// Handle operations.
const handleOperator = (operator) => {
  console.log("Operator: ", operator);
};

// Function to update textArea.
const updateText = (value) => {
  textArea.value = value;
};

// When AC(All Clear) is pressed.
const resetEverything = () => {};
// Function to keep track of currentValue.
