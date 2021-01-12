// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

let nameInput = document.getElementById("validation-input");
let inpLength = nameInput.getAttribute("data-length");

nameInput.onblur = () => {
  if (nameInput.value.length > inpLength) {
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
  } else {
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
  }
};
