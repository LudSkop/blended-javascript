 // Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().
     
let number = Number(prompt("Введіть число"));
if (number === 10) {
    alert(`Вірно`);
    
} else {
    alert('Невірно');
}

if (confirm("Видалити файл?")) {
  alert("Файл видалено!");
} else {
  alert("Дію скасовано.");
}
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);


let min = Math.floor(Math.random() * 60 + 1);


if (min <= 15) {
    alert(`${min} входить в першу чверть`);
} else if (min <= 30 ) {
    alert(`${min} входить в другу чверть`);
} else if (min <= 45 ) {
    alert(`${min} входить в третю чверть`);
} else {
    alert(`${min} входить в четрерту чверть`);
}
console.log();


// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.
let num = prompt(message = "Введіть: '1' '2' '3' '4' ");
let result = " ";
switch(num)  {
    case '1':
        result ='зима';
        break;
    case  '2':
        result = 'весна';
        break;
    case '3':
        result = 'літо';
        break;
    case '4':
        result = 'осінь';
        break;
    default:
        result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
    
 }
    console.log(result);
    alert(result);


// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples



let  minut = prompt('Введіть хвилини');
minut = Number(minut);
let totalHours = Math.floor(minut / 60);
let minutLeft = minut % 60;
let hours = String(totalHours).padStart(2, '0');
let minutes = String(minutLeft).padStart(2, '0');

let end = `${hours} : ${minutes}`;

alert(end);
console.log(typeof(end));


//Math.floor(totalMinutes / 60) — кількість годин
//totalMinutes % 60 — залишок хвилин
//padStart(2, '0') — додає провідний нуль, якщо число однозначне



//№6 Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
let el = 0;
while (el <= 20) {
    console.log(el);
    el += 1;
}