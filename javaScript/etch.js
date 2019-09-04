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

function randomColor() {
    var letters = '0123456789ABCDEF';
    var hashColor = '#';
    for (var i = 0; i < 6; i++) {
        hashColor += letters[Math.floor(Math.random() * letters.length)];
    }

    return hashColor;
}

/********************
    Event Listeners
********************/

document.querySelector('#random').addEventListener('click', function() {
   // 1. cells can be hovered
    var foo = document.querySelector('.containerGrid');
    var bar = foo.querySelectorAll('.cell');
    
    bar.forEach(function(cell) {
        cell.addEventListener('mouseover', function(event) {
            cell.style.backgroundColor = randomColor();
        });
    });

    // 2. whenever a mouse hover over a cell, it changes to a random color
});
