// В HTML есть пустой список ul#ingredients.

/* <ul id="ingredients"></ul>; */
// В JS есть массив строк.

const ingredients = [
	"Картошка",
	"Грибы",
	"Чеснок",
	"Помидоры",
	"Зелень",
	"Приправы",
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().....
const ingredientsRef = document.querySelector("#ingredients");
// console.log(ingredientsRef);

const elOfIngredients = ingredients.map((el) => {
	const liEl = document.createElement("li");
	liEl.textContent = el;
	return liEl;
});
// console.log(elOfIngredients);

ingredientsRef.append(...elOfIngredients);
