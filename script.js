function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "undefined";
  } else {
    return a / b;
  }
}

let num1 = 0;
let num2 = 0;
let operator = "";

function operate(num1, num2, operator) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "x") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#1f201f";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = ""; // Reset to default
  });
});

const deleteBtn = document.getElementById("delete");

deleteBtn.addEventListener("mouseover", () => {
  deleteBtn.style.backgroundColor = "rgb(179, 13, 13)";
});

const enterBtn = document.getElementById("enter");

enterBtn.addEventListener("mouseover", () => {
  enterBtn.style.backgroundColor = "rgb(27, 100, 113)";
});
