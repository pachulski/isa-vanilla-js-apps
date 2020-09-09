// Elements

const exField = document.querySelector('.expression');
const resultField = document.querySelector('.result');
const exButtons = document.querySelectorAll('.exButton');
const eqButton = document.querySelector('.eqButton');
const acButton = document.querySelector('.acButton');

// Functions

const operatorsArr = ['/', '*', '-', '+'];
const parser = math.parser();

function exButtonHandleClick(e) {
    e.preventDefault();
    const buttonText = e.target.textContent;
    let exFieldLastMark = exField.textContent[exField.textContent.length - 1];
    const exFieldLastMarkIsOperator = operatorsArr.includes(exFieldLastMark);
    const buttonTextIsOperator = operatorsArr.includes(buttonText);

    if (!exFieldLastMarkIsOperator || !buttonTextIsOperator) {
        exField.textContent += `${buttonText}`;
    }
}

function eqButtonHandleClick(e) {
    e.preventDefault();
    resultField.textContent = parser.evaluate(exField.textContent);
    exField.textContent = resultField.textContent;
}

function acButtonHandleClick(e) {
    e.preventDefault();
    exField.textContent = '';
    resultField.textContent = '0';
}

// Event Listeners

exButtons.forEach(button => button.addEventListener('click', exButtonHandleClick));
eqButton.addEventListener('click', eqButtonHandleClick);
acButton.addEventListener('click', acButtonHandleClick);
