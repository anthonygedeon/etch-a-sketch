/* 
*   Anthony Gedeon
*   June 14, 2019
*   Etch-A-Sketch 
*/

/*-- ------------------------- Creating grid ---------------------------*/
const $containerGrid = $(".containerGrid");

for (let i = 0; i < 100; i++) {
    const $div = $("<div></div>");
    $($containerGrid).append($div);
}


