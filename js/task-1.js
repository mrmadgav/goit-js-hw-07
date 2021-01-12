// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

let getRefs = document.querySelector("ul").children;
console.dir(`В списке ${getRefs.length} категории`);

let status = Array.from(document.getElementsByClassName("item"));

status.forEach((element) => {
  console.log(`Категория: ${element.childNodes[1].textContent}`);
  console.log(`Количество элементов: ${element.childNodes[3].children.length}`);
});
