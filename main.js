let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;

let operate = (operator,a,b) => {
    switch(operator) {
        case add : return add(a,b);
        case subtract : return subtract(a,b);
        case multiply : return multiply(a,b);
        case divide : return divide(a,b);
    }
}