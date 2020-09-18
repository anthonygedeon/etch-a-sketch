const inputSize = document.querySelector('.option__grid-length');
const grid = document.querySelector('.container-grid');


const genGrid = () => {

    [...grid.children].forEach(node => node.remove());
        
    const gridHeight = parseInt(getComputedStyle(grid).height);

    const resizeBy = Math.floor(gridHeight / Number(inputSize.value))

	for (
		let i = 0;
		i < Number(inputSize.value) * Number(inputSize.value);
		i++
	) {
		const cell = document.createElement('div');

		cell.classList.add('cell');

		cell.style.width = `${resizeBy}px`;
		cell.style.height = `${resizeBy}px`;

		document.querySelector('.container-grid').append(cell);

		grid.style.gridTemplateColumns = `repeat(${inputSize.value}, 1fr)`;
		grid.style.gridTemplateRows = `repeat(${inputSize.value}, 1fr)`;
	}
};

genGrid();

inputSize.addEventListener('change', () => {
	genGrid();
});
