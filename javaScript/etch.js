/* 
*   Anthony Gedeon
*   August 26, 2019
*   Etch-A-Sketch 
*/

/********************
    Variables
********************/
var grid = document.querySelector('.containerGrid');

/********************
    Functions
*********************/
var createGrid = function() {
    var value = parseInt(document.querySelector('#gridLength').value);
    for (var row = 1; row < value; row++) {
        for (var column = 1; column < value; column++) {

            grid = document.querySelector('.containerGrid');
            cells = document.createElement('div');

            cells.classList.add('cell');
            grid.appendChild(cells);
        }
    }
}

createGrid();

var randomColor = function() {
    var letters = '0123456789ABCDEF';
    var hashColor = '#';
    for (var i = 0; i < 6; i++) {
        hashColor += letters[Math.floor(Math.random() * letters.length)];
    }

    return hashColor;
}

var changeColor = function() {
    var cells = grid.querySelectorAll('.cell');

    cells.forEach(function(cell) {
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = randomColor();
        });
    });
}

var shader = function() {
    var cells = grid.querySelectorAll('.cell');

    cells.forEach(function(cell) {
        cell.addEventListener('mouseover', function(event) {

            
        });
    });
}

/********************
    Event Listeners
*********************/
document.querySelector('#random').addEventListener('click', changeColor);
document.querySelector('#shader').addEventListener('click', shader);
// document.querySelectorAll('#reset').addEventListener('click', init);
