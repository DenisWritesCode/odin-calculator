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
      answer = add(num1, num2);
      break;
    case "*":
      answer = multiply(num1, num2);
      break;
    case "-":
      answer = subtract(num1, num2);
      break;
    case "/":
      answer = divide(num1, num2);
      break;

    default:
  }
};

// Select all buttons. Convert them to an Array from nodelist.
const buttons = Array.from(document.querySelectorAll("input"));
const textArea = document.querySelector("#output");

// Add eventlistener to each button.
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    calculate(e.target.value);
  });
});

// Store numbers.
let workingValue = 0;
// function to run the show.
const calculate = (buttonPressed) => {
  // Check if it is a number.
  if (!isNaN(Number(buttonPressed))) {
    // Compare to NaN. If true, not a number.
    console.log("Number: ", buttonPressed);
    workingValue += buttonPressed; // Updates textArea but only to current digit. May have to move this portion later. Bug of original value.
    textArea.value = workingValue;
  }
  // If number, update text area. => Above.
  // if operator( = is part of operator ), update currentValue. Differentiate
  // between first value and second.
  // If %, divide currentValue by 100.
  // If (+/-), negate current number.
  else if (
    buttonPressed === "+" ||
    buttonPressed === "-" ||
    buttonPressed === "x" ||
    buttonPressed === "/" ||
    buttonPressed === "=" ||
    buttonPressed === "%" ||
    buttonPressed === "+/-"
  ) {
    console.log(buttonPressed);
  }
  // If . work on currentValue.
  else if (buttonPressed === ".") {
    console.log("Add .");
    workingValue += buttonPressed;
    textArea.value = workingValue;
  }
  // If AC, reset EVERYTHING.
  else if (buttonPressed === "AC") {
    console.log("AC -> It's rewind time boys");
    workingValue = 0;
    textArea.value = workingValue;
  } else {
    console.log("Weuh");
  } //
};

// Function to update textArea.
// Function to keep track of currentValue.
