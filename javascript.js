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

function roundOff(n) {
    if (n.toString().includes('.')) {
        let noDec = n.toString().split('.')[1].length;
        if (noDec > 4) {
            n = n.toFixed(2);
            return n;
        }
    }    
    return n;
}

let clear, reset;
let display = document.querySelector('#display');
let buttons = document.querySelector('#buttons');
buttons.addEventListener('click', function(e) {
    let button = e.target;

    if (button.textContent == 0 && display.textContent == 0);
    else if (button.textContent == '+' || button.textContent == '-' || button.textContent == '*' || button.textContent == '/') {
        if (x && reset != true) {
            y = display.textContent;
            x = roundOff(operate(operator, +x, +y));
            display.textContent = x;
            operator = button.textContent;            
        }
        else {
            operator = button.textContent;
            x = display.textContent;
        }
        clear = true;
    }
    else if (button.textContent == '=') {
        if (operator) {
            y = display.textContent;
            if (operator == '/' && y == 0) {
                display.textContent = 'ERROR';
                clear = true;
            }
            else {
                display.textContent = roundOff(operate(operator, +x, +y));                
            }
            reset = true;
        }
        else ;
        
    }
    else if (button.textContent == 'x') {
        display.textContent = display.textContent.slice(0, -1);
    }
    else if (button.textContent == 'C') {
        display.textContent = 0;
        x = null;
        y = null;
        operator = null;
    }
    else if (display.textContent == 0 || clear) {
        display.textContent = button.textContent;
        clear = false;
    }
    else {
        if (display.textContent.includes('.') && button.textContent === '.') {} 
        else display.textContent += button.textContent;
    }
    
    let decimal = document.querySelector('#decimal');
    if (display.textContent.includes('.')) {        
        decimal.disabled = true;
    } else decimal.disabled = false;
});
