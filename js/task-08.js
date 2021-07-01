// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//     после чего рендерится коллекция.При нажатии на кнопку Очистить,
//         коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const inputQuantity = document.querySelector("#controls");
console.log(inputQuantity);
const renderBtn = document.querySelector('[data-action="render"]');
// console.log(renderBtn);
const destroyBtn = document.querySelector('[data-action="destroy"]');
// console.log(destroyBtn);
const boxes = document.querySelector("#boxes");
// console.log(boxes);

renderBtn.addEventListener("click", onCreateBoxes);
destroyBtn.addEventListener("click", onClearInput);

function onCreateBoxes() {
	let quantity = inputQuantity.value;
	// console.log(quantity);
	const boxArr = [];
	for (let i = 0; i < quantity; i += 1) {
		const boxEl = document.createElement("div");
		let boxSize = 30 + i * 10;
		boxEl.style.width = `${boxSize}px`;
		boxEl.style.height = `${boxSize}px`;
		boxEl.style.backgroundColor = `${randomColor}`;
		boxArr.push(boxEl);
	}
	boxes.append(...boxArr);
}
function randomColor() {
	const r = Math.round(Math.random() * (255 - 1) + 1);
	const g = Math.round(Math.random() * (255 - 1) + 1);
	const b = Math.round(Math.random() * (255 - 1) + 1);
	return `randomColor(${r},${g},${b})`;
}
function onClearInput() {
	inputQuantity.value = 0;
	boxes.innerHTML = "";
}
