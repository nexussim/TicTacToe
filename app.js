let boxes = document.querySelectorAll('.box');
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
}









// gameBoardBoxes.forEach((box) => {
        
    // })

// for (var i = 0; i < boxes.length; i++) {
    //     if () {

    //     }
    // }