/* 
*   Anthony Gedeon
*   Jan 28, 2020
*   Etch-A-Sketch 
*/

class Grid {
    constructor(row) {
        const cache = [];
        this.row = row;
        this.column = row;

    }

    static resizeGrid() {

    }

    createGrid() {
        

    }
}

class Ui {
    static createGridCells() {
        const containerGrid = document.querySelector('.container-grid');
        const cell = document.createElement('div');
        cell.classList.add('cell');
        containerGrid.appendChild(cell);
    }
}

// Event Listeners
document.addEventListener('')