
const display = document.getElementById('displays'); 
const buttons = document.querySelectorAll('button'); 

// Set initial display to empty string for cleaner logic
display.innerText = ""; 

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === "clear") {
            // Use empty string for clear state
            display.innerText = ""; 
        } else if (button.id === "backspace") {
            let string = display.innerText.toString();
            // This line is correct
            display.innerText = string.substr(0, string.length - 1); 
        } else if (button.id === "equals") {
            // Check if the display has *something* before trying to evaluate
            if (display.innerText !== "") {
                try {
                    // Use eval cautiously, as mentioned above
                    display.innerText = eval(display.innerText);
                } catch (e) {
                    // Handle potential errors gracefully
                    display.innerText = "Error";
                }
            }
        } else {
            // Append the button ID (which should be the number/operator)
            // No need to check for initial space if we use "" as base
            display.innerText += button.id; 
        }
    });
});






/*
This method failed to work

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

            // display.innerText = "";   

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.id === "clear") {
            display.innerText = "";   
        } 

        else if(button.id === "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        
        }

        else if(display.innerText!="" && button.id === "equals") {
            display.innerText = eval(display.innerText);
        }

        else{
            display.innerText+= button.id;
        }
    })
});

*/


