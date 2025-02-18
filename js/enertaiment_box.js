// доступ к образцу блока с описанием развлечений
const box = document.querySelector('.box')


export function createEntertaimenBox(entertaimentData){
	// console.log(entertaimentData)
	let newEntertsimentBox = box.cloneNode(true);
	newEntertsimentBox.classList.remove('sample');
	// newEntertsimentBox.
	newEntertsimentBox.dataset.name = entertaimentData.descriptionWord;
	newEntertsimentBox.children[0].src = entertaimentData.imgPaths[0];
	newEntertsimentBox.children[0].alt = `${entertaimentData.name}_img`;
	newEntertsimentBox.children[1].textContent = entertaimentData.name;
	newEntertsimentBox.children[2].textContent = entertaimentData.text;
	// console.log(newEntertsimentBox)
	return newEntertsimentBox
}