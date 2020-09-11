// Elements

const get = (...args) => document.querySelector(...args);
const getAll = (...args) => document.querySelectorAll(...args);

const restartButton = get('.restart');
const playerX = get('.playerX');
const resultX = get('.resultX');
const playerO = get('.playerO');
const resultO = get('.resultO');
const gameBoard = get('.board');
const squares = Array.from(getAll('.square'));

// Constants

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Variables

let board;
let currentPlayer = 'X';
let win;

// Functions

function renderState() {
    board.forEach((mark, index) => squares[index].textContent = mark);
    if (!win) {
        if (currentPlayer === 'X') {
            playerX.style.color = 'red';
            playerO.style.color = 'black';
        } else {
            playerX.style.color = 'black';
            playerO.style.color = 'red';
        }
    }

    if (win === 'X') {
        resultX.textContent++;
    }
    if (win === 'O') {
        resultO.textContent++;
    }

    win || !board.includes('') ? gameBoard.removeEventListener('click', handleTurn) : null;
}

function checkWin() {
    let winner = null;
    winningConditions.forEach(condition => {
        if (board[condition[0]] && board[condition[0]] === board[condition[1]] && board[condition[0]] === board[condition[2]]) {
            winner = board[condition[0]];
        }
    });

    return winner;
}

function handleTurn(e) {
    let index = squares.findIndex(square => square === e.target);
    if (board[index] === '') {
        board[index] = currentPlayer;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    win = checkWin();

    renderState();
}

function start() {
    board = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];

    currentPlayer = 'X';
    win = null;

    gameBoard.addEventListener('click', handleTurn);

    renderState();
}

start();

// Event Listeners

restartButton.addEventListener('click', start);
