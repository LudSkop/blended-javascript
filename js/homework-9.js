const LSKey = "title-key";
const numes= [{
    Alice: 1,
    Vlad: 2,
    Eva: 3,
    }];

const clas = "user-class";
const children = "Eva";

localStorage.setItem(clas, children);
localStorage.setItem(LSKey, JSON.stringify(numes));// сохраняет в локальное хранилище элемент с ключом "title-key" и значением, преобразованным в строку

const kind = JSON.parse(localStorage.getItem(LSKey));// получает из локального хранилища элемент с ключом "title-key" и преобразует его значение обратно в объект

console.log(kind);
console.log(localStorage.getItem(clas));

localStorage.removeItem(clas);// удаляет из локального хранилища элемент с ключом "user-class"
//localStorage.clear(); // очищает все локальное хранилище




const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
form.addEventListener("submit", handleFormSubmit);


textarea.addEventListener("input", onTextareaInput);
populateTextarea();

//записывает в локальное хранилище текущее значение текстареа при вводе данных
function onTextareaInput(event) {
    const message = event.target.value;
    console.log('Користувач ввів:', message);
    localStorage.setItem("key", message);
}

//достає  із локального хранилища і виводить у текстарею дані, якщо вони там є якщо немає то залишає текстарею пустою
 function populateTextarea() {
    const newMessage = localStorage.getItem("key");
    console.log('Значення з localStorage:', newMessage);
    if (newMessage !== null) {
        textarea.value = newMessage;
        
    }
 };

//обрабатывает отправку формы, очищает локальное хранилище и форму при отправке
function handleFormSubmit(event) {
event.preventDefault();
event.target.reset();
localStorage.removeItem("key");
console.log("Форма відправлена!");
if (textarea.value.trim() === ""){
    alert("Заповніть поле!");
}

}
