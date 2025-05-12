document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '0';
    let operatorPressed = false;
    let awaitingNextOperand = false;

    function updateDisplay() {
        display.textContent = currentInput;
    }

    function handleNumber(value) {
        if (currentInput === '0' || awaitingNextOperand) {
            currentInput = value;
            awaitingNextOperand = false;
        } else {
            currentInput += value;
        }
        operatorPressed = false;
        updateDisplay();
    }

    function handleOperator(value) {
        if (operatorPressed && value !== '(' && value !== ')') return;
        if (currentInput === '0' && value !== '(' && value !== ')') return;

        if (value === '(' || value === ')') {
            if (currentInput === '0' && value === '(') {
                currentInput = value;
            } else if (currentInput !== '0') {
                currentInput += value;
            }
        } else {
            currentInput += value;
            operatorPressed = true;
            awaitingNextOperand = false;
        }
        updateDisplay();
    }

    function handleDecimal() {
        const parts = currentInput.split(/[+\-*/()]/);
        const lastPart = parts[parts.length - 1];
        if (!lastPart.includes('.')) {
            currentInput += '.';
            operatorPressed = false;
            awaitingNextOperand = false;
            updateDisplay();
        }
    }

    function calculate() {
        if (operatorPressed && currentInput.slice(-1) !== ')') return;
        try {
            let result = eval(currentInput);

            if (result === Infinity || result === -Infinity || isNaN(result)) {
                currentInput = 'Error';
            } else {
                currentInput = String(parseFloat(result.toFixed(10)));
            }
            operatorPressed = false;
            awaitingNextOperand = true;
        } catch (error) {
            currentInput = 'Error';
            awaitingNextOperand = true;
        }
        updateDisplay();
    }

    function clearDisplay() {
        currentInput = '0';
        operatorPressed = false;
        awaitingNextOperand = false;
        updateDisplay();
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;
            const type = button.classList;

            if (type.contains('number')) {
                handleNumber(value);
            } else if (type.contains('operator')) {
                handleOperator(value);
            } else if (type.contains('equals')) {
                calculate();
            } else if (type.contains('clear')) {
                clearDisplay();
            } else if (value === '.') {
                handleDecimal();
            }
        });
    });

    updateDisplay();
});