// функция создания кнопок фильтрации карточек развлечений

// доступ к образцу кнопки
const btnBox = document.querySelector('.btn_box');


export function createBtnInBtnBox(name, func) {
	const btn = btnBox.children[0].cloneNode(false); //Клонируем саму кнопку
	btn.textContent = name; // доавляем имя в кнопку
	btn.addEventListener('click', () => func(btn.textContent)); // вешаем на слушатель клика функцию фильтрации
	const newBtnBox = btnBox.cloneNode(false); // кланируем контейнер для кнопки
	newBtnBox.classList.remove('sample'); // удаляем у контейнера класс "невидимости"
	newBtnBox.appendChild(btn); // добавляем в контейнер новую кнопку
	return newBtnBox // возвращаем готовый контейнер
}