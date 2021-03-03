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
let victorymsg = document.getElementById('victoryMsg');
let previousRoundFirstPlayer;
let lastPlayer;

/* Score Card variables */

const topLeftCellConst = document.getElementById('topLeftSide').childNodes[1];
const topRightCellConst = document.getElementById('topRightSide').childNodes[1];
let topLeftCell = document.getElementById('topLeftSide');
let topRightCell = document.getElementById('topRightSide');
let bottomLeftCell = document.getElementById('bottomLeftSide');
let bottomRightCell = document.getElementById('bottomRightSide');
let firstPlayerName = document.getElementById('firstPlayerInput');
let secondPlayerName = document.getElementById('secondPlayerInput');
let firstPlayerNameText;
let secondPlayerNameText;

/* Tokens and Counters */

let firstPlayerScore = 0;
let secondPlayerScore = 0;
let firstPlayerToken = 'X';
let secondPlayerToken = 'O'
let winningPlayer = '';
let xCounter = 0;
let oCounter = 0;
let totalCount;

const firstMoveMessage = () => {
    if (lastPlayer === undefined && firstPlayerNameText) {
        victorymsg.textContent = 'It\'s ' + topLeftCell.textContent + '\'s turn.';

    } else if (lastPlayer === undefined && !firstPlayerNameText) {
        victorymsg.textContent = 'It\'s Player 1 (X)\'s turn.';
    }

    if (previousRoundFirstPlayer === 'X' && secondPlayerNameText) {
        victorymsg.textContent = 'It\'s ' + topRightCell.textContent + '\'s turn.';

    } else if (previousRoundFirstPlayer === 'X' && !secondPlayerNameText) {
        victorymsg.textContent = 'It\'s Player 2 (O)\'s turn.';

    } else if (previousRoundFirstPlayer === 'O' && firstPlayerNameText) {
        victorymsg.textContent = 'It\'s ' + topLeftCell.textContent + '\'s turn.';

    } else if (previousRoundFirstPlayer === 'O' && !firstPlayerNameText) {
        victorymsg.textContent = 'It\'s Player 1 (X)\'s turn.';
    }
}
firstMoveMessage()

const boardPlacement = (event) => {

    if (winningPlayer === undefined) {
        return;
    }

    let clickedElement = event.target;

    if (clickedElement.textContent) {
        return;
    }
    if (xCounter === 0 && oCounter === 0 && previousRoundFirstPlayer === undefined) {
        clickedElement.textContent = firstPlayerToken;
        previousRoundFirstPlayer = firstPlayerToken
        lastPlayer = firstPlayerToken;
        xCounter++;

    } else if (xCounter === 0 && oCounter === 0 && previousRoundFirstPlayer === firstPlayerToken) {
        clickedElement.textContent = secondPlayerToken;
        previousRoundFirstPlayer = secondPlayerToken
        lastPlayer = secondPlayerToken;
        oCounter++;

    } else if (xCounter === 0 && oCounter === 0 && previousRoundFirstPlayer === secondPlayerToken) {
        clickedElement.textContent = firstPlayerToken;
        previousRoundFirstPlayer = firstPlayerToken
        lastPlayer = firstPlayerToken;
        xCounter++;

    } else if (xCounter > oCounter || lastPlayer === firstPlayerToken) {
        clickedElement.textContent = secondPlayerToken;
        lastPlayer = secondPlayerToken;
        oCounter++;

    } else {
        clickedElement.textContent = firstPlayerToken;
        lastPlayer = firstPlayerToken;
        xCounter++;
    }

    playerTurnUpdate();
    victoryConditions(event);
}

const victoryConditions = () => {
    totalCount = xCounter + oCounter;

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

    if (boxContent === 'X' && firstPlayerNameText !== undefined) {
        winningPlayer = topLeftCell.textContent;
        firstPlayerScore++;
        scoreBoardCount();

    } else if (boxContent === 'X' && firstPlayerNameText === undefined) {
        winningPlayer = 'Player 1!';
        firstPlayerScore++;
        scoreBoardCount();
    }
    
    if (boxContent === 'O' && secondPlayerNameText !== undefined) {
        winningPlayer = topRightCell.textContent;
        secondPlayerScore++;
        scoreBoardCount();

    } else if (boxContent === 'O' && secondPlayerNameText === undefined) {
        winningPlayer = 'Player 2!';
        secondPlayerScore++;
        scoreBoardCount();
    }

    victoryMsg.textContent = 'Congratulations ' + winningPlayer + '!';
    firstPlayerToken = '';
    secondPlayerToken = '';
    winningPlayer = undefined;
}

const resetBoard = () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = '';
    }

    firstPlayerToken = 'X';
    secondPlayerToken = 'O';
    xCounter = 0;
    oCounter = 0;
    lastPlayer = '';
    winningPlayer = '';
    firstMoveMessage();
}

const scoreBoardCount = () => {
    bottomLeftCell.textContent = firstPlayerScore;
    bottomRightCell.textContent = secondPlayerScore;
}

const playerNames = (event) => {
    let selectedInput = event.target;
    
    selectedInput.parentNode.textContent = selectedInput.value;

    if(xCounter > oCounter && secondPlayerNameText !== undefined) {
        victorymsg.textContent = 'It\'s ' + secondPlayerNameText + '\'s turn.';

    } else if (xCounter > oCounter && secondPlayerNameText === undefined) {
        victorymsg.textContent = 'It\'s ' + "Player 2 (O)" + '\'s turn.';

    } else if (xCounter < oCounter && firstPlayerNameText !== undefined) {
        victorymsg.textContent = 'It\'s ' + firstPlayerNameText + '\'s turn.';
        
    } else if (xCounter < oCounter && firstPlayerNameText === undefined) {
        victorymsg.textContent = 'It\'s ' + "Player 1 (X)" + '\'s turn.';
    }

    if (selectedInput.id === 'firstPlayerInput') {
        firstPlayerNameText = selectedInput.value;

    } else if (selectedInput.id === 'secondPlayerInput') {
        secondPlayerNameText = selectedInput.value;
    }
    playerTurnUpdate();
}

const playerNamesUpdate = (event) => {
    let selectedInput = event.target;
    if (selectedInput === topLeftCell) {
        topLeftCell.textContent = '';
        newInput = document.createElement('input');
        topLeftCell.appendChild(newInput);
        newInput.focus();
    }

    if (selectedInput === topRightCell) {
        topRightCell.textContent = '';
        newInputTwo = document.createElement('input');
        topRightCell.appendChild(newInputTwo);
        newInputTwo.focus();
    }
}

const playerTurnUpdate = () => {

    if (lastPlayer === 'X') {

        if (secondPlayerNameText) {
            victorymsg.textContent = 'It\'s ' + topRightCell.textContent + '\'s turn.';

        } else if (!secondPlayerNameText) {
            victorymsg.textContent = 'It\'s Player 2 (O)\'s turn.';
            return;
        } 
    }
    if (lastPlayer === 'O' || lastPlayer === undefined) {
        if (firstPlayerNameText) {
            victorymsg.textContent = 'It\'s ' + topLeftCell.textContent + '\'s turn.';

        } else if (!firstPlayerNameText) {
            victorymsg.textContent = 'It\'s Player 1 (X)\'s turn.';
            return;
        } 
    }    
}

const styleChanges = () => {
    let styles = document.getElementById('styles');
    let cssFile = styles.attributes.href.nodeValue;
    if (cssFile === 'styles.css') {
        styles.attributes.href.nodeValue = 'styles2.css';

    } else if (cssFile === 'styles2.css') {
        styles.attributes.href.nodeValue = 'styles3.css';

    } else if (cssFile === 'styles3.css') {
        styles.attributes.href.nodeValue = 'styles.css';
    }
}

topLeftCell.addEventListener('focusout',function(e){
    if(topLeftCell.textContent === ""){
          topLeftCell.textContent = 'Player 1 (X)';
    }
     
});

topRightCell.addEventListener('focusout',function(e){
    if (topRightCell.textContent === "") {
        topRightCell.textContent = 'Player 2 (O)';
    }
});