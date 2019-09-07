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
    value = parseInt(document.querySelector('#gridLength').value);
    for (var row = 0; row < value; row++) {
        for (var column = 0; column < value; column++) {

            grid = document.querySelector('.containerGrid');
            grid.style.cssText = `display: grid; grid-template-columns: repeat(${value}, 1fr); grid-template-rows: repeat(${value}, 1fr) border: 1px solid;`
            cells = document.createElement('div');
            cells.classList.add('cell');
            cells.style.cssText = `width: ${(15/value) -1}px; height: ${(15/value) -1}px;`
            grid.appendChild(cells);
        }
    }
}

document.querySelector('#gridLength').addEventListener('click', createGrid);


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

// var shader = function() {
//     var cells = grid.querySelectorAll('.cell');

//     cells.forEach(function(cell) {
//         cell.addEventListener('mouseover', function(event) {
            
//         });
//     });
// }

/********************
    Event Listeners
*********************/
document.querySelector('#random').addEventListener('click', changeColor);
// document.querySelector('#shader').addEventListener('click', shader);
// document.querySelectorAll('#reset').addEventListener('click', init);
