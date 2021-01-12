// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

let nameOutput = document.getElementById("name-output");
let nameInput = document.getElementById("name-input");

nameInput.oninput = () => {
  if (nameInput.value === "") {
    nameOutput.innerHTML = "незнакомец";
  } else {
    nameOutput.innerHTML = nameInput.value;
  }
};
