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
let operator = '';
let aNum = '';
let bNum = '';
const display = document.querySelector('#display');

// Populates the screen of the calculator
let displayScreen = (value) => {
    display.textContent = '';
    displayValue += value;
    display.textContent = displayValue;
}

let getContainer = (containerName) => { return container = document.querySelector(`#${containerName}`);}
let getButtons = (containerName) => { return buttons = getContainer(containerName).querySelectorAll('button');}

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

// Displays and stores the number buttons clicked
getButtons('left').forEach(button => { button.addEventListener("click", () => {
        isNumber(button.textContent) ? displayScreen(button.textContent) : display.textContent = 'Nan';
        }
    );
});
 
// Calculates the operation and displays output
getButtons('right').forEach(button => { button.addEventListener("click", () => {
        if(aNum === '') {
            aNum = displayValue;
            operator = button.textContent;
            displayValue = '';
        } else {
               bNum = displayValue;
        }
        if(button.textContent === '=') {
            display.textContent = '';
            let answer = (operate(operator,+aNum,+displayValue)); 
            display.textContent = answer;
            aNum = answer;
            bNum = ''; 
        }
        }
    );
});
