/* 
*   Anthony Gedeon
*   August 26, 2019
*   Etch-a-Sketch 
*/

/********************
    Variables
********************/


/********************
    Functions
********************/

function createGrid() {
    var value = parseInt(document.querySelector('#gridLength').value);

    for (var row = 1; row < value; row++) {
        for (var column = 1; column < value; column++) {

            var grid = document.querySelector('.containerGrid');
            var cell = document.createElement('div');

            cell.classList.add('cell');
            grid.appendChild(cell);
        }
    }
}

createGrid();

function setRandomColor() {
    var letters = '0123456789ABCDEF';
    var hashColor = '#';
    for (var i = 0; i < 6; i++) {
        hashColor += letters[Math.floor(Math.random() * letters.length)];
    }

    return hashColor;
}

function getRandomColor() {
    return cell.style.backgroundColor = setRandomColor();
}

/********************
    Event Listeners
********************/

document.querySelector('#random').addEventListener('click', function() {
    
});
