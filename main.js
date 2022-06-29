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

let createContainer = (containerName) => { return container = document.querySelector(`#${containerName}`);}
let getButtons = (containerName) => { return buttons = createContainer(containerName).querySelectorAll('button');}

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

// Displays the button clicked
getButtons('left').forEach(button => { button.addEventListener("click", () => {
        isNumber(button.textContent) ? displayScreen(button.textContent) : display.textContent = 'Nan';
        }
    );
});
   
getButtons('right').forEach(button => { button.addEventListener("click", () => {

    }
);
});
