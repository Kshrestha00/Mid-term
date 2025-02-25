document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("factorial-input");
  const enterButton = document.getElementById("enter-button");
  const resultDisplay = document.getElementById("result-display");
  const darkModeButton = document.getElementById("dark-mode");
  const lightModeButton = document.getElementById("light-mode");

  // Function to calculate factorial
  function calculateFactorial(n) {
    if (n < 0) return "Invalid input";
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }

  // Event listener for the enter button
  enterButton.addEventListener("click", function () {
    const inputNumber = parseInt(inputField.value);
    if (!isNaN(inputNumber)) {
      resultDisplay.textContent = `${inputNumber}! = ${calculateFactorial(
        inputNumber
      )}`;
    } else {
      resultDisplay.textContent = "Please enter a valid number.";
    }
  });

  // Dark mode toggle
  darkModeButton.addEventListener("click", function () {
    document.body.setAttribute("data-bs-theme", "dark");
  });

  // Light mode toggle
  lightModeButton.addEventListener("click", function () {
    document.body.setAttribute("data-bs-theme", "light");
  });
});
const resultDisplay = document.getElementById("resultScreen");
