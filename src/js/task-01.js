// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
//     то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и
// выведет в консоль текст заголовка элемента(тега h2) и количество элементов
// в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4.
const categoryListItem = document.querySelectorAll(".item");
// console.log(categoryListItem);
console.log(`'В списке ${categoryListItem.length} категории.'`);

categoryListItem.forEach((item) => {
	const titleOfCategory = item.querySelector("h2").textContent;
	console.log(`категория: ${titleOfCategory}`);

	const quantityOfItems = item.querySelectorAll(".item li");
	console.log(`количество элементов: ${quantityOfItems.length}`);
});
