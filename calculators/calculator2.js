
/*

//First version of calculator
// Function to safely evaluate mathematical expressions
// This avoids using 'eval()' directly, improving security and predictability
const evaluateExpression = (expression) => {
    // It uses Function constructor which is slightly better than direct eval,
    try {
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





*/










class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.clear();
    }

    clear() {
        this.currentExpression = '';
        this.updateDisplay();
    }

    backspace() {
        this.currentExpression = this.currentExpression.slice(0, -1);
        this.updateDisplay();
    }

    appendValue(value) {
        this.currentExpression += value;
        this.updateDisplay();
    }

    calculate() {
        try {
            // Still using a robust evaluator here (Function constructor is safer than direct eval)
            this.currentExpression = new Function('return ' + this.currentExpression)().toString();
        } catch (e) {
            this.currentExpression = 'Error';
        }
        this.updateDisplay();
    }

    updateDisplay() {
        this.displayElement.innerText = this.currentExpression;
    }
}

// Initialization
const displayElement = document.getElementById('displays');
const calculator = new Calculator(displayElement);
const buttons = document.querySelectorAll('button');

// Event listener setup is simplified by delegating actions to the class instance
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;

        if (buttonId === "clear") {
            calculator.clear();
        } else if (buttonId === "backspace") {
            calculator.backspace();
        } else if (buttonId === "equals") {
            if (displayElement.innerText !== "") { // Check if there's something to evaluate
                calculator.calculate();
            }
        } else {
            calculator.appendValue(buttonId);
        }
    });
});









/*

const display = document.getElementById('displays');
const buttons = document.querySelectorAll('button');

// Function to safely evaluate mathematical expressions
function evaluateExpression(expression) {
    // NOTE: This simple evaluator handles basic *, /, +, - operations in order, 
    // not strictly following PEMDAS/BODMAS. A real-world calculator needs a more robust library.
    try {
        // Use the built-in Function constructor for a safer alternative to eval, 
        // which still provides isolated execution scope.
        // It wraps the expression in an anonymous function and immediately executes it.
        return new Function('return ' + expression)();
    } catch (e) {
        return "Error";
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;
        const currentDisplay = display.innerText;

        if (buttonId === "clear") {
            display.innerText = "";
        } else if (buttonId === "backspace") {
            display.innerText = currentDisplay.slice(0, -1); // Use slice for cleaner backspace
        } else if (buttonId === "equals") {
            if (currentDisplay !== "") {
                display.innerText = evaluateExpression(currentDisplay);
            }
        } else {
            // Append the number/operator
            display.innerText += buttonId;
        }
    });
});

*/