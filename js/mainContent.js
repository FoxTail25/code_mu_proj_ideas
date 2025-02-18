import { entertainment } from './entertainment.js'
import { createBtnInBtnBox } from './util/create_btn.js';

// доступ к блоку для вставки кнопок фильтрации развлечений
const filterBox = document.getElementById('filter_box');
 // вешаем слушатель на кнопку сброса фильтрации развлечений
document.getElementById('resetEntertaimentFilterBtn').addEventListener('click', resetEntertaimentFilter);

let entertainmentArr = [...entertainment]; //массив со всеми развлечениями
let filteredArr = []; // массив с отфильтрованными развлечениями

let filterArr = []; // массив для хранения уникальных описаний

//функция заполнения массива ключевыми словами для фильтрации развлечений 
entertainment.forEach(elem => {
	if (!filterArr.includes(elem.descriptionWord)) {
		filterArr.push(elem.descriptionWord)
	}
});

// формируем кнопки фильтрации, вешаем на них слушатель и добавляем их в filterBox
filterArr.forEach(e => filterBox.appendChild(createBtnInBtnBox(e, filterdEntertaiment)));

//функция фильтрации развлечений
function filterdEntertaiment(name) {
	filteredArr = entertainmentArr.filter(e => e.descriptionWord == name);
	console.log('filterArr', filteredArr)
}

//функция сброса фильтра развлечений
function resetEntertaimentFilter() {
	filteredArr = [...entertainmentArr];
	console.log('filterArr', filteredArr)
}

