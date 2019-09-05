/* 
*   Anthony Gedeon
*   August 26, 2019
*   Etch-A-Sketch 
*/

/********************
    Variables
********************/


/********************
    Functions
*********************/
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

function randomColor() {
    var letters = '0123456789ABCDEF';
    var hashColor = '#';
    for (var i = 0; i < 6; i++) {
        hashColor += letters[Math.floor(Math.random() * letters.length)];
    }

    return hashColor;
}

function changeColor() {
    var grid = document.querySelector('.containerGrid');
    var cells = grid.querySelectorAll('.cell');
    
    cells.forEach(function(cell) {
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = randomColor();
        });
    });
}

function shader() {
    var op = .2;
    var grid = document.querySelector('.containerGrid');
    var cells = grid.querySelectorAll('.cell');
    
    cells.forEach(function(cell) {
        cell.addEventListener('mouseover', function(event) {
            cell.style.cssText = 'backgroundColor: #fff; opacity:' + op++;
        });
    });
}

/********************
    Event Listeners
*********************/
document.querySelector('#random').addEventListener('click', changeColor);
document.querySelector('#shader').addEventListener('click', shader);
// document.querySelectorAll('#reset').addEventListener('click', init);
