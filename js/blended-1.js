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
let index = 0;
let el = 0;
while (el <= 20) {
    console.log(`index: ${index}, el: ${el}`);
    el += 1;
    index += 1;
    
}

//  №7  Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

function getNumbers(min, max) {
    let sumElements = 0;
    for (let value = max; value >= min; value --) {
       
        console.log('value', value);
        if (value % 2 === 0){
            sumElements += value;
            console.log('sumElements', sumElements);
            
        } 
        
    }
    return sumElements;

}
getNumbers(0, 10);

// №8  Напишіть функцію mint(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'

function mint(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        if (a < b) {
            return `Найменше число: ${a}`;
        }

    } else {
        return 'Цe не число!';
    }

}
console.log(mint(5, 10)); // 5
console.log(mint('5', '10')); // 'Not a number!'

// №9  Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).

function isEdult(age) {
    if (age >= 18){
        return true;
    } else {
        return confirm("Вам є 18 років?");
        
    }

}
console.log(isEdult(2) );
console.log(isEdult(50) );
console.log(isEdult(17) );

// №10   Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

function fizzBuzz(num){
    for (let i = 1; i <= num; i ++ ){
        if (i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz');
            

        } else if (i % 5 === 0){
            console.log('buzz');
            
        } else if (i % 3 === 0) {
            console.log('fizz');
           
        }
    }

}
fizzBuzz(5);
fizzBuzz(1);
fizzBuzz(3);


// №11 Напиши функцію printEvenOdd(num), яка:
//перебирає всі числа від 1 до num
//якщо число парне → виводить "even: X"
//якщо число непарне → виводить "odd: X"

function printEvenOdd(num) {
    for (let i = 1; i <= num; i ++){
        if (i % 2 === 0) {
            console.log(`even: ${i}`);

        } else {
            console.log(`odd: ${i}`);
        }

    }

}
printEvenOdd(1);
printEvenOdd(2);
printEvenOdd(3);



// №12 Функція createReversedArray() може приймати довільну кількість аргументів. 
// Доповни код функції так, щоб вона повертала масив усіх аргументів, 
// але в масиві вони повинні йти у зворотному порядку. 
// Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. 
// Використовуй цикл або метод масиву toReversed(), який застосовується до масиву 
// і результатом роботи повертає новий масив з елементами у зворотньому порядку.
function createReversedArray() {
    let revers = Array.from(arguments);
    let result = revers.toReversed();
    return `числа y звортньому порядку:  ${result}`;
    

}

//function createReversedArray() {
  //let res = Array.from(arguments);
  //let revers = [];
  //for (let el = res.length -1; el > 0; el --){
  //  revers.push(res[el]);
    
  //}
  //return `числа y звортньому порядку:  ${revers}`;
//}

console.log(createReversedArray(12, 85, 37, 4));
console.log(createReversedArray(1, 2, 3, 4));

