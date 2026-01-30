// Alternative approach using event delegation and state management
const keyboard = document.querySelector('.keyboard');
const textContainer = document.querySelector('.textContainer');
const keys = document.querySelectorAll('.key'); // Select all key elements
let currentText = "";
let isCapsLock = false;

// Function to toggle visual casing
function toggleVisualCase() {
    keys.forEach(key => {
        // Skip special functional keys
        if (!key.classList.contains('delete') && 
            !key.classList.contains('enter') && 
            !key.classList.contains('wide-space') && 
            !key.classList.contains('capslock')) {
            key.innerText = isCapsLock ? key.innerText.toUpperCase() : key.innerText.toLowerCase();
        }
    });
}

// Event Delegation: One listener for all keys
keyboard.addEventListener("click", (e) => {
    const key = e.target;

    // Handle special keys
    if (key.classList.contains('delete')) {
        currentText = currentText.slice(0, -1);
    } else if (key.classList.contains('enter')) {
        currentText += "\n";
    } else if (key.classList.contains('wide-space')) {
        currentText += " ";
    } else if (key.classList.contains('capslock')) {
        isCapsLock = !isCapsLock;
        key.classList.toggle('active');
        toggleVisualCase(); // Physical change here
    } else if (key.classList.contains('key')) {
        // Handle character keys
        let keyValue = key.innerText;
        currentText += isCapsLock ? keyValue.toUpperCase() : keyValue.toLowerCase();
    }
    
    // Update display once
    textContainer.innerText = currentText;
});
