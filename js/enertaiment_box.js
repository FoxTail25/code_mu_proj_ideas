// в этом файле хранится функция создания карточки с развлечением

// доступ к образцу блока с описанием развлечений
const box = document.querySelector('.box')

// функция создания блока с информацией о развлечении
export function createEntertaimenBox(entertaimentData){
	let newEntertsimentBox = box.cloneNode(true); // копируем прототип
	newEntertsimentBox.classList.remove('sample'); // убираем класс "невидимости"
	newEntertsimentBox.dataset.name = entertaimentData.descriptionWord; // добавляем dataset для фильтрации
	newEntertsimentBox.children[0].src = entertaimentData.imgPaths[0]; // прописываем путь к картинке
	newEntertsimentBox.children[0].alt = `${entertaimentData.name} изображение`; // добавляем описание картинки
	newEntertsimentBox.children[1].textContent = entertaimentData.name; // ставим заголовок в карточку
	newEntertsimentBox.children[2].textContent = entertaimentData.text; // добавляем текс описания
	return newEntertsimentBox // возвращаем готовый узел node
}