// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

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

let boxes = document.getElementById("boxes");
let amount = 0;

document.getElementById("elem1").oninput = () => {
  amount = document.getElementById("elem1").value;
};

let random = () => Math.floor(Math.random() * 256);

let createBoxes = () => {
  let fragment = document.createDocumentFragment();
  let baseSize = 30;
  for (let i = 0; i < amount; i++) {
    let makeDiv = document.createElement("div");
    makeDiv.style.width = `${baseSize}` + "px";
    makeDiv.style.height = `${baseSize}` + "px";
    makeDiv.style.background =
      "rgb(" + random() + ", " + random() + ", " + random() + ")";
    fragment.appendChild(makeDiv);
    baseSize += 10;
    console.log(makeDiv.style.width);
  }

  boxes.appendChild(fragment);
};
function destroyBoxes() {
  boxes.innerHTML = "";
}
const renderButton = document.querySelector('[data-action="render"]');
renderButton.addEventListener("click", createBoxes);
const destroyButton = document.querySelector('[data-action="destroy"]');
destroyButton.addEventListener("click", destroyBoxes);
