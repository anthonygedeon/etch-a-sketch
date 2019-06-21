/* 
*   Anthony Gedeon
*   June 14, 2019
*   Etch-a-Sketch 
*/

/*-- ------------------------- Variables ---------------------------*/
const $containerGrid = $(".containerGrid");
const $gridLength = $("#gridLength");

const $gradientButton = $("#gradient");
const $random = $("#random");
const $reset = $("#reset");

const boxNumber = 16;

function 

function createCell() {
        const $cell = $('<div class="cell"></div>');
        $cell.css("height", $containerGrid.offsetWidth / boxNumber); 
        $cell.css("width", $containerGrid.offsetWidth / boxNumber );
        $cell.css("opacity", "0.1");
        $containerGrid.append($cell);
}

function loopCells() {
    for (let i = 0; i < $gridLength.val() * $gridLength.val(); i++) {
        createCell();
    }
}

loopCells();

