/* 
*   Anthony Gedeon
*   August 26, 2019
*   Etch-a-Sketch 
*/

/*--------------------------- 
        Variables 
---------------------------*/

/*--------------------------- 
    Function Constructors
---------------------------*/
function Grid() {
    this.size = document.querySelector('#gridLength').value;
    this.cell = {
        width: '15px',
        height: '15px',
        borderRadius: '3px',
        border: '0.5px solid var(--black-color)'
    }
}

function Color() {
    this.defaultColor = 'transparent';
    this.gradient = '0.2';
}

/*--------------------------- 
        Grid Prototypes
---------------------------*/
Grid.prototype.createGrid = function() {
    
}

Grid.prototype.adjustCell = function() {

}

Grid.prototype.reset = function() {

}

/*--------------------------- 
        Color Prototypes
---------------------------*/
Color.prototype.getColor = function() {

}

Color.prototype.opacity = function() {

}

