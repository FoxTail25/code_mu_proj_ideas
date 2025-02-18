import { createEntertaimenBox } from './enertaiment_box.js';
import { entertainment } from './entertainment.js'
import { createBtnInBtnBox } from './util/create_btn.js';

// доступ к блоку для вставки кнопок фильтрации развлечений
const filterBox = document.getElementById('filter_box');

// доступ к блоку с карточками развлечений
const enertaiment_box = document.getElementById('entertaiment_box')


// вешаем слушатель на кнопку сброса фильтрации развлечений
document.getElementById('resetEntertaimentFilterBtn').addEventListener('click', resetEntertaimentFilter);

let entertainmentArr = [...entertainment]; //массив со всеми развлечениями

let filterArr = []; // массив для хранения уникальных описаний

//функция заполнения массива ключевыми словами для фильтрации развлечений 
entertainment.forEach(elem => {
	if (!filterArr.includes(elem.descriptionWord)) {
		filterArr.push(elem.descriptionWord);
	}
});

// формируем кнопки фильтрации, вешаем на них слушатель и добавляем их в filterBox
filterArr.forEach(e => filterBox.appendChild(createBtnInBtnBox(e, filterdEntertaiment)));

//функция фильтрации развлечений
function filterdEntertaiment(name) {
	[...enertaiment_box.children].forEach(e => {
		if (e.dataset.name != name) {
			e.classList.add('hide');
		} else {
			e.classList.remove('hide');
		}
	});
}

//функция сброса фильтра развлечений
function resetEntertaimentFilter() {
	[...enertaiment_box.children].forEach(e => {
		if (e.dataset.name) {
			e.classList.remove('hide');
		} else {
			e.classList.add('hide');
		}
	});
}

entertainmentArr.forEach(e => enertaiment_box.appendChild(createEntertaimenBox(e)))

