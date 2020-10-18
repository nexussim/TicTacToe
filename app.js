/* Game Board variables */

let boxes = document.querySelectorAll('.box');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');
let victorymsg = document.getElementById(victoryMsg);

/* Score Card variables */
const topLeftCellConst = document.getElementById('topLeftSide').childNodes[1];
const topRightCellConst = document.getElementById('topRightSide').childNodes[1];
let topLeftCell = document.getElementById('topLeftSide');
let topRightCell = document.getElementById('topRightSide');
let bottomLeftCell = document.getElementById('bottomLeftSide');
let bottomRightCell = document.getElementById('bottomRightSide');
let firstPlayerName = document.getElementById('firstPlayerInput');
let secondPlayerName = document.getElementById('secondPlayerInput');
let firstPlayerScore = 0;
let secondPlayerScore = 0;


let firstPlayerToken = 'X';
let secondPlayerToken = 'O'
let winningPlayer;
let xCounter = 0;
let yCounter = 0;
let totalCount;

const boardPlacement = (event) => {
    let clickedElement = event.target;

    if (clickedElement.textContent) {
        return;
    }
    if (xCounter === 0 && yCounter === 0) {
        clickedElement.textContent = firstPlayerToken;
        xCounter++;
    } else if (xCounter > yCounter) {
        clickedElement.textContent = secondPlayerToken;
        yCounter++;
    } else {
        clickedElement.textContent = firstPlayerToken;
        xCounter++;
    }
    victoryConditions(event);
}

const victoryConditions = (victoryMessage) => {
    totalCount = xCounter + yCounter;

    if (box1.textContent !== '' && box1.textContent === box2.textContent && box1.textContent === box3.textContent) {
        congratsMsg(box1.textContent);
    } else if (box1.textContent !== '' && box1.textContent === box4.textContent && box1.textContent === box7.textContent) {
        congratsMsg(box1.textContent);
    } else if (box1.textContent !== '' && box1.textContent === box5.textContent && box1.textContent === box9.textContent) {
        congratsMsg(box1.textContent);
    } else if (box3.textContent !== '' && box3.textContent === box6.textContent && box3.textContent === box9.textContent) {
        congratsMsg(box3.textContent);
    } else if (box2.textContent !== '' && box2.textContent === box5.textContent && box2.textContent === box8.textContent) {
        congratsMsg(box2.textContent);
    } else if (box3.textContent !== '' && box3.textContent === box5.textContent && box3.textContent === box7.textContent) {
        congratsMsg(box3.textContent);
    } else if (box4.textContent !== '' && box4.textContent === box5.textContent && box4.textContent === box6.textContent) {
        congratsMsg(box4.textContent);
    } else if (box7.textContent !== '' && box7.textContent === box8.textContent && box7.textContent === box9.textContent) {
        congratsMsg(box7.textContent);
    } else if (totalCount === 9) {
        victoryMsg.textContent = 'It\'s a tie!';
    }
}

const congratsMsg = (boxContent) => {

    if (boxContent === 'X') {
        winningPlayer = 'Player 1'
        firstPlayerScore++;
        scoreBoardCount();
    } else {
        winningPlayer = 'Player 2'
        secondPlayerScore++;
        scoreBoardCount();
    }
    victoryMsg.textContent = 'Congratulations ' + winningPlayer + '!';
    firstPlayerToken = '';
    secondPlayerToken = ''
}

const resetBoard = (event) => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = '';
    }
    victoryMsg.textContent = '';
    firstPlayerToken = 'X';
    secondPlayerToken = 'O'
    xCounter = 0;
    yCounter = 0;
}

const scoreBoardCount = () => {
    bottomLeftCell.textContent = firstPlayerScore;
    bottomRightCell.textContent = secondPlayerScore;
}

const playerNames = (event) => {
    let selectedInput = event.target;
    if (event.keyCode === 13) {
        selectedInput.parentNode.textContent = selectedInput.value;
    }
    if (selectedInput === topLeftCell) {
        topLeftCell.innerHTML = topLeftCellConst;
        
    }
    if (selectedInput === topRightCell) {
        selectedInput.innerHTML = secondPlayerName;
    }
}
