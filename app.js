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
let firstPlayerToken = 'X';
let secondPlayerToken = 'O'
let xCounter = 0;
let yCounter = 0;

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

const victoryConditions = (event) => {

    if (box1.textContent !== '' && box1.textContent === box2.textContent && box1.textContent === box3.textContent) {
        alert('Victory');
    } else if (box3.textContent !== '' && box3.textContent === box4.textContent && box3.textContent === box5.textContent) {
        alert('Victory');
    } else if (box6.textContent !== '' && box6.textContent === box7.textContent && box6.textContent === box8.textContent) {
        alert('Victory');
    } else if (box1.textContent !== '' && box1.textContent === box4.textContent && box1.textContent === box7.textContent) {
        alert('Victory');
    } else if (box2.textContent !== '' && box2.textContent === box5.textContent && box2.textContent === box8.textContent) {
        alert('Victory');
    } else if (box3.textContent !== '' && box3.textContent === box6.textContent && box3.textContent === box9.textContent) {
        alert('Victory');
    } else if (box1.textContent !== '' && box1.textContent === box5.textContent && box1.textContent === box9.textContent) {
        alert('Victory');
    } else if (box3.textContent !== '' && box3.textContent === box5.textContent && box3.textContent === box7.textContent) {
        alert('Victory');
    }
}

// const victoryConditions = () => {
//     for (var i = 0; i < boxes.length; i++) {
//         let boxTextContent = boxes[i].textContent;
//         if (boxTextContent === 'X') {

//         }
//     }
// }








// gameBoardBoxes.forEach((box) => {
        
    // })

// for (var i = 0; i < boxes.length; i++) {
    //     if () {

    //     }
    // }