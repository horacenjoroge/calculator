function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}

function appendOperator(operator) {
    var display = document.getElementById('display');
    var currentValue = display.value;

    if (currentValue.length > 0 && "+-*/".includes(currentValue[currentValue.length - 1])) {
        // Remove the last operator
        currentValue = currentValue.slice(0, -1);
    }

    // Split the expression into operands and operators
    var parts = currentValue.match(/(\d+|[+\-*/])/g);

    if (parts && parts.length >= 3) {
        // Calculate the result of the previous expression
        var num1 = parseFloat(parts[0]);
        var prevOperator = parts[1];
        var num2 = parseFloat(parts[2]);
        var result;

        switch (prevOperator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    // Handle division by zero
                    display.value = 'Error';
                    return;
                }
                break;
        }

        // Display the result followed by the new operator
        display.value = result + operator;
    } else {
        // If there are not enough operands and operators, just append the operator
        display.value += operator;
    }
}
function calculateResult() {
    var display = document.getElementById('display');
    var expression = display.value;

    try {
        var result = eval(expression);

        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
}

function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}