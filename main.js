let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;

let operate = (operator,a,b) => {
    switch(operator) {
        case '+' : return add(a,b);
        case '-' : return subtract(a,b);
        case '*' : return multiply(a,b);
        case '/' : return divide(a,b);
    }
}

let displayValue = '';
const display = document.querySelector('#display');

// Populates the screen of the calculator
let displayScreen = (button) => {
    displayValue += button;
    display.textContent = displayValue;
}
const container = document.querySelector('#button-container');
const buttons = container.querySelectorAll('button');

// Displays the button clicked
buttons.forEach(button => {
    button.addEventListener("click", () => {
        displayScreen(button.textContent);
        }
    );
});
   

