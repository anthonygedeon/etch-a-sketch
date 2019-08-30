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
    this.size = parseInt(document.querySelector('#gridLength').value);
    this.gridBox = document.querySelector('.containerGrid');
}

function Color() {
    this.defaultColor = 'transparent';
    this.gradient = '0.2';
    this.randomBtn = document.querySelector('#random');
}

/*--------------------------- 
        Grid Prototypes
---------------------------*/
Grid.prototype.createGrid = function() {
    var box = document.createElement('div');
    box.classList.add('cell');
    this.gridBox.appendChild(box);
}

Grid.prototype.adjustCell = function() {

}

Grid.prototype.reset = function() {
    
}

/*--------------------------- 
        Color Prototypes
---------------------------*/
Color.prototype.getRandomColor = function() {
    var letters = '0123456789ABCDEF';
    var hashColor = '#';
    for (var i = 0; i < 6; i++) {
        hashColor += letters[Math.floor(Math.random() * letters.length)];
    }
    return hashColor;

}

Color.prototype.setRandomColor = function() {
    return box.style.backgroundColor = this.getRandomColor();
}

Color.prototype.opacity = function() {

}

/*--------------------------- 
    Prototype Inheritance
---------------------------*/


/*--------------------------- 
        Instantiation
---------------------------*/
var gridSystem = new Grid();
var colors = new Color();

colors.randomBtn.addEventListener('click', function(event) {
    colors.setRandomColor();
});


for (var i = 0; i < gridSystem.size; i++) {
    for (var j = 0; j < gridSystem.size; j++) {
        gridSystem.createGrid();
    }
}
