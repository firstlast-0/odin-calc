function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

let x, y, operator;

function operate(operator, x, y) {
    switch (operator) {
        case '+':
            return add(x, y);            
        
        case '-':
            return subtract(x, y);    

        case '*':
            return multiply(x, y);  

        case '/':
            return divide(x, y);
    }
}

let display = document.querySelector('#display');
let buttons = document.querySelector('#buttons');
buttons.addEventListener('click', function(e) {
    let button = e.target;

    if (button.textContent == 0 && display.textContent == 0);
    else if (button.textContent == 'C') display.textContent = 0;    
    else if (display.textContent == 0) display.textContent = button.textContent;    
    else display.textContent += button.textContent;
    
});