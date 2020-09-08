// Elements

const exField = document.querySelector('.expression');
const resultField = document.querySelector('.result');
const exButtons = document.querySelectorAll('.exButton');

// Functions

const operatorsArr = ['/', 'x', '-', '+'];

function exButtonHandleClick(e) {
    e.preventDefault();
    const buttonText = e.target.textContent;
    let exFieldLastMark = exField.textContent[exField.textContent.length - 1];
    if (!operatorsArr.includes(exFieldLastMark) || !operatorsArr.includes(buttonText)) {
        exField.textContent += `${buttonText}`;
    }
}

// Event Listeners

exButtons.forEach(button => button.addEventListener('click', exButtonHandleClick));
