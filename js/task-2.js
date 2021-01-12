// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

let addUl = (arr, id) => {
  let ul = document.getElementById(id);
  let makeList = (arr) =>
    arr.map((item) => {
      let li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
  makeList(arr);
  document.body.appendChild(ul);
};

addUl(ingredients, "ingredients");
