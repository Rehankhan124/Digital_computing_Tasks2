const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentValue = '';
let previousValue = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        // Handle trigonometric functions (sin, cos, tan)
        if (value === 'sin' || value === 'cos' || value === 'tan') {
            // Convert current value to number and calculate the trigonometric value
            const number = parseFloat(currentValue);
            if (isNaN(number)) {
                display.textContent = 'Error';
                return;
            }
            let result;
            switch (value) {
                case 'sin':
                    result = Math.sin(number);  // Sin function
                    break;
                case 'cos':
                    result = Math.cos(number);  // Cos function
                    break;
                case 'tan':
                    result = Math.tan(number);  // Tan function
                    break;
            }
            currentValue = result.toFixed(5);  // Limit to 5 decimal places
            display.textContent = currentValue;
        }
        // Handle operators
        else if (button.classList.contains('operator')) {
            operator = value;
            previousValue = currentValue;
            currentValue = '';
        }
        // Handle equal sign
        else if (button.id === 'equal') {
            if (previousValue && currentValue) {
                currentValue = eval(`${previousValue} ${operator} ${currentValue}`);
                display.textContent = currentValue;
            }
        }
        // Handle clear button
        else if (button.id === 'clear') {
            currentValue = '';
            previousValue = '';
            operator = '';
            display.textContent = '0';
        } 
        // Handle other number and symbol buttons
        else {
            currentValue += value;
            display.textContent = currentValue;
        } 
    });
});
