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
let answer = '';
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

document.getElementById("=").disabled = true;

// Displays and stores the number buttons clicked
getButtons('left').forEach(button => { 
    button.addEventListener("click", () => {
        if(display.textContent != '') {
            document.getElementById("=").disabled = false;
        }
        isNumber(button.textContent) ? displayScreen(button.textContent) : display.textContent = 'Nan';
        }
    );
});
let limitDecimal = (num) => {
    return +parseFloat((num).toFixed(6));
}
// Calculates the operation and displays output
getButtons('right').forEach(button => { 
    button.addEventListener("click", () => {
            if(button.textContent != '=') {
                operator = button.textContent;
            }
            if(aNum === '') {
                aNum = displayValue;
                displayValue = '';
            }
            else if(bNum === '') {
                bNum = displayValue;
                displayValue = '';
            }

            if(button.textContent === '=') {
                display.textContent = '';
                answer = (operate(operator,+aNum,+bNum)); 
                //Limit decimal num to 6 place values
                if(answer > Math.floor(answer)) {
                    answer = limitDecimal(answer);
                }
                display.textContent = answer;
                aNum = answer;
                displayValue = '';
                bNum = '';
                operator = '';
            }
        }
    );
});
