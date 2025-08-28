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

let displayContent = 0;

const question = document.getElementById("question");
const answer = document.getElementById("answer");

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

let justAnswered = false;

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#1f201f";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "";
  });

  btn.addEventListener("click", () => {
    if (btn.classList.contains("digit")) {
      if (justAnswered) {
        answer.textContent = "";
        justAnswered = false;
        question.textContent = "";
      }
      let digit = btn.innerHTML;
      answer.textContent += digit;
      content = answer.textContent;
    } else if (btn.classList.contains("operator")) {
      num1 = Number(answer.textContent);
      operator = btn.innerHTML;
      answer.textContent = "";
      justAnswered = false;
    } else if (btn.classList.contains("enter")) {
      num2 = Number(answer.textContent);
      answer.textContent = operate(num1, num2, operator);
      question.textContent = `${num1}${operator}${num2} = `;
      justAnswered = true;
    }
  });
});

const deleteBtn = document.getElementById("delete");

deleteBtn.addEventListener("mouseover", () => {
  deleteBtn.style.backgroundColor = "rgb(179, 13, 13)";
});
deleteBtn.addEventListener("click", () => {
  answer.textContent = deleteNum(answer.textContent);
  content = answer.textContent;
});

function deleteNum(string) {
  let newNum = string.slice(0, -1);
  return newNum;
}

const enterBtn = document.getElementById("enter");

enterBtn.addEventListener("mouseover", () => {
  enterBtn.style.backgroundColor = "rgb(27, 100, 113)";
});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
  clear();
});

function clear() {
  answer.textContent = "";
  question.textContent = "";
}
