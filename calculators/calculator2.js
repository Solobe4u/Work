// Function to safely evaluate mathematical expressions
// This avoids using 'eval()' directly, improving security and predictability
const evaluateExpression = (expression) => {
    // A simplified, safer alternative to 'eval()'
    // It uses Function constructor which is slightly better than direct eval,
    // but a dedicated library would be safer for production.
    try {
        // Remove potentially dangerous words like 'constructor', 'prototype', etc.
        const sanitizedExpression = expression.replace(/[a-zA-Z_]+/g, '');
        // Use a Function constructor for a contained evaluation
        return new Function('return ' + sanitizedExpression)();
    } catch (error) {
        return "Error";
    }
};

const display = document.getElementById('displays');
const buttons = document.querySelectorAll('button');

// Use a data attribute for values instead of button IDs for better separation of concerns
// Example HTML (not provided but assumed): <button data-value="1">1</button>

display.innerText = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.getAttribute('data-value') || button.id; // Use data-value if present, else id

        if (button.id === "clear") {
            display.innerText = "";
        } else if (button.id === "backspace") {
            // Use slice for array/string manipulation, often considered more readable than substr
            display.innerText = display.innerText.slice(0, -1);
        } else if (button.id === "equals") {
            if (display.innerText !== "") {
                display.innerText = evaluateExpression(display.innerText);
            }
        } else {
            display.innerText += buttonValue;
        }
    });
});
