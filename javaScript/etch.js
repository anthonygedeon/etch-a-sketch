/* 
*   Anthony Gedeon
*   June 14, 2019
*   Etch-a-Sketch 
*/

/*-- ------------------------- Variables ---------------------------*/
const $containerGrid = $(".containerGrid");

const $gridLength = $("#gridLength");
const $gradientButton = $("#gradient");
const $randomButton = $("#random");
const $resetButton = $("#reset");

const boxNumber = 16;

let buttonActivated;

/*-- ------------------------- Buttons & inputs ---------------------------*/
$gridLength.on("input", (event) => {

});

$gradientButton.on("click", getGradient);

$randomButton.on("click", getRandomColors);

$resetButton.on("click", reset);

/*--------------------------- Corresponding to Event listeners ---------------------------*/

function getGradient(event) {

}

function setRandomColors() {
    return Math.floor((Math.random() * 256));
}

function getRandomColors() {
    $(".cell").hover((event) => {
        $(event.target).css({ 
                            "backgroundColor": `rgb(${setRandomColors()}, ${setRandomColors()}, ${setRandomColors()})`, 
                            "opacity": "1" })
    });
}

function reset() {
    $(".cell").css({
                    "opacity": "0.1",
                    "border": "0.5px solid black",
                    "backgroundColor": "transparent"});
}

/*-- ------------------------- Creates the Grid ---------------------------*/
function main() {
    for (let i = 0; i < $gridLength.val() * $gridLength.val(); i++) {
        createCell();
    }
}

function createCell() {
    const $cell = $('<div class="cell"></div>');
    $cell.css("opacity", "0.1");
    $containerGrid.append($cell);
}

main();

