/* 
*   Anthony Gedeon
*   June 14, 2019
*   Etch-a-Sketch 
*/

/*--------------------------- 
    Variables 
---------------------------*/
const $containerGrid = $(".containerGrid");
let boxSide = 16;

const $gridLength = $("#gridLength");
const $gradientButton = $("#gradient");
const $randomButton = $("#random");
const $resetButton = $("#reset");

/*-- ------------------------- 
    Buttons & input
---------------------------*/
$gridLength.on("input", gridLength);
$gradientButton.on("click", incrementOpacity);
$randomButton.on("click", getRandomColors);
$resetButton.on("click", () => {
    reset(boxSide);
});

/*--------------------------- 
Corresponding to Event listeners 
---------------------------*/
function gridLength() {
    if (event.target.value !== 16) {
        reset(event.target.value);
    }
}

function incrementOpacity() {
    $(".cell").off("mouseenter");
    $(".cell").mouseenter((event) => {
        let opacity = parseFloat(event.target.style.opacity);
        if (opacity <= 0.9) {
            $(event.target).css({
                                "opacity": `${opacity + 0.1}`,
                                "backgroundColor": "#f5f5f5"});
        }
    });
}

function setRandomColors() {
    return Math.floor((Math.random() * 256));
}

function getRandomColors() {
    $(".cell").off("mouseenter");
    $(".cell").mouseenter((event) => {
        $(event.target).css({ 
                            "backgroundColor": `rgb(${setRandomColors()}, ${setRandomColors()}, ${setRandomColors()})`, 
                            "opacity": "1" })
    });
}

function reset(length) {
    boxSide = length;
    main();
    $(".cell").css({
                "opacity": "0.1",
                "border": "0.5px solid black",
                "backgroundColor": "transparent"});
}

/*-- ------------------------- 
    Creates the Grid 
------------------------------*/
function main() {
    $($containerGrid).empty();
    for (let row = 0; row < boxSide; row++) {
        for (let column = 0; column < boxSide; column++) {
            createCell();
        }
    }
    $(".cell").css("height", `${(300 / boxSide) - 1}px`);
    $(".cell").css("width", `${(300 / boxSide) - 1}px`);
}

function createCell() {
    const $cell = $('<div class="cell"></div>');
    $cell.css("opacity", "0.1");
    $containerGrid.append($cell);
}

main();