// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список


const bodyElement = document.body;
console.log(bodyElement);

const titleElement = document.getElementById("#title");
console.log(titleElement);
const listElement= document.querySelector(".list");
console.log(listElement);
const dataTopicElements = document.querySelectorAll("[data-topic]");
console.log(dataTopicElements);
const firstDataTopicElement = dataTopicElements[0];
console.log(firstDataTopicElement);
const lastDataTopicElement = dataTopicElements[dataTopicElements.length - 1];
console.log(lastDataTopicElement);
const h1Element = document.querySelector("h1");
const h1Sibling = h1Element.nextElementSibling;
console.log (h1Sibling);

const h3Elements = document.querySelectorAll("h3");

h3Elements.forEach(h3 => {
  h3.classList.add("active");
});

const item = document.querySelector('li[data-topic="navigation"]');
console.log(item);

const itemTop = document.querySelector('li[data-topic="navigation"]');

if (itemTop) {
  item.style.backgroundColor = 'yellow';
}

const currentTopic = "manipulation";
const element = document.querySelector(
  `li[data-topic="${currentTopic}"]`
);
console.log(element);

const headings = document.querySelector('.completed');
console.log(headings);


const heading = document.querySelector('.completed');
if (heading) {
  const li = heading.closest('li');
  li.remove();
}



// № 2 - Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// функція для випадкового числа від 1 до 100

const randomNumber = () => Math.floor(Math.random() * 100) + 1;


const numberContainer = document.createElement('div');

numberContainer.classList.add('number-container');
console.log(numberContainer);
document.body.append(numberContainer);
for(let i = 0;  i < 10; i++ ){
    const number = randomNumber();
    
    const div = document.createElement ('div');
    div.classList.add('number');
   
    div.textContent = number;
     console.log(div);
     if (number %2 == 0) {
        div.classList.add ('even');
     } else {
        div.classList.add('odd');
     }
     numberContainer.append(div);

}
// 1️⃣ Функція для випадкового числа
//const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// 2️⃣ Отримуємо контейнер
//const numberContainer = document.querySelector('.number-container');

// 3️⃣ Створюємо DocumentFragment
//const fragment = document.createDocumentFragment();

// 4️⃣ Генеруємо 100 блоків
//for (let i = 0; i < 100; i++) {
    //const number = randomNumber();

    //const div = document.createElement('div');
    //div.classList.add('number');
    //div.textContent = number;

    // парне / непарне
    //if (number % 2 === 0) {
        //div.classList.add('even');
    //} else {
        //div.classList.add('odd');
    //}

    // 5️⃣ Додаємо блок у фрагмент (поки не в DOM)
    //fragment.appendChild(div);
//}

// 6️⃣ Вставляємо всі блоки одночасно у контейнер
//numberContainer.appendChild(fragment);


 //№ 3 : Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const boxElement = document.querySelector('.box');
const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');
decreaseBtn.addEventListener("click", handleClicl);
increaseBtn.addEventListener("click", handleClicl);

function handleClicl (event) {
     // поточні розміри квадрата
    const currentWidth = boxElement.offsetWidth;
    const currentHeight = boxElement.offsetHeight;
    if (event.target.id === 'decrease') {
            // Зменшуємо квадрат на 20px
        boxElement.style.width = Math.max(currentWidth - 20, 20) + 'px';
        boxElement.style.height = Math.max(currentHeight - 20, 20) + 'px';
    } else if (event.target.id === 'increase') {
        // Збільшуємо квадрат на 20px
         boxElement.style.width = Math.max(currentWidth + 20, 20) + 'px';
         boxElement.style.height = Math.max(currentHeight + 20, 20) + 'px';
    }
}



// № 4 : Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const input = document.querySelector("input");
input.addEventListener("input", handleInput);
input.addEventListener("focus", handlFocus);
input.addEventListener("blur", handleBlur);
input.addEventListener("submit", handleSubmit);


function handleInput (event) {
    
    const inputValue = event.target.value.length;
    console.log(inputValue);

    if (inputValue === 0) {

  input.classList.remove("error", "success");
     } else if(inputValue >= 6) {
        input.classList.add("success");
        input.classList.remove("error");

    } else {
        input.classList.add("error");
        input.classList.remove("success");
    }
}






// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
function handlFocus (event) {
    const focusValue =event.target.value.length;
    if (focusValue === 0){
        event.target.style.outline = '3px solid red';
    } else {
        event.target.style.outline = '3px solid green';
    }

}

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
function handleBlur (event) {
    
}

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.
function handleSubmit (event) {
    event.preventDefault();
    const inputValue = input.value;
    const checkbox = document.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;
    const userNameSpan = document.querySelector('.user-name');

    if (inputValue !== '' && isChecked) {
        const userData = {
            userName: inputValue
        };
        console.log(userData);
    
} else {
    console.log('Будь ласка, введіть ім`я та погодьтесь з умовами');
       // Підсвітка помилок
        if (inputValue === '') input.style.outline = '3px solid red';
        if (!isChecked) checkbox.style.outline = '3px solid red';    
}
}








