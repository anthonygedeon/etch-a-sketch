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
var createCell = function() {
    var cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.opacity = 0.1;
    grid.append(cell);
}

var createGrid = function() {
    value = parseInt(document.querySelector('#gridLength').value);

    for (var row = 0; row < value; row++) {
        for (var column = 0; column < value; column++) {
            createCell();
        }
    }
    document.querySelector('.cell').style.cssText = `height: ${(300 / value)-1}px; width: ${(300 / value)-1}px;`
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
document.querySelector('#gridLength').addEventListener('click', createGrid);
document.querySelector('#random').addEventListener('click', changeColor);
// document.querySelector('#shader').addEventListener('click', shader);
// document.querySelectorAll('#reset').addEventListener('click', init);
