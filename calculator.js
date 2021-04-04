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
