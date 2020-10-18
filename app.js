// implement no victory condition
// fix victory text setup (h2 inside of div?)

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
    } else {
        winningPlayer = 'Player 2'
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