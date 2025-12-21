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

// № 13. Масив colors містить колекцію кольорів. Кожен колір представлений об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями.

//Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
for ( const key of colors){
  hexColors.push(key.hex);
  rgbColors.push(key.rgb)
  
}
console.log("hexColors:", hexColors);
console.log("rgbColors:", rgbColors);

const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell" },
  { title: "Beside Still Waters", author: "Robert Sheckley" },
  { title: "The Tell-Tale Heart", author: "Edgar Allan Poe" }
];

const authorToSearchFor = "Robert Sheckley";

for (const book of books) {
	if(book.author === authorToSearchFor) {
		console.log(book);
		console.log(book.title)
		console.log(book.rating)
	}
}
//  № 14.  Функція getProductPrice(productName) приймає один параметр productName - назва продукту. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість товару на складі.
//Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.


function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (const title of products){
    if ( title.name === productName){
      return `це ціна за одну одиницю: ${title.price}`;
      
    } else {

    };
    
    
   
  }
  return null;
}
console.log(getProductPrice("Grip"));
console.log(getProductPrice("Droid"));
console.log(getProductPrice("Radarr"));
console.log(getProductPrice("Scanner"));



function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  let total = [];
  for (const title of products){
    if (propName in title){ 
        total.push(title[propName]);
        return total;
    }
    
   
    
  }
  return [];
}
console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("category")); 

//  №15.   Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

//Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

//Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.


function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 100, quantity: 2 },
    { name: "Scanner", price: 800, quantity: 2 },
    { name: "Droid", price: 40, quantity: 2 },
    { name: "Grip", price: 100, quantity: 2 },
  ];
  
  for ( const key of products) {
    if (key.name === productName){
        return `Загальна вартість товару ${productName} : ${key.price * key.quantity}`;

    }
    
    
  }
  return `Product ${products.key} not found!`;
}
console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Grip"));
console.log(calculateTotalPrice("Scanner"));
console.log(calculateTotalPrice("Droid"));

//  №16.  Об'єкт atTheOldToad має наступні властивості:
//potions — масив об'єктів зілль
//getPotions() — метод, який повертає значення властивості potions
//updatePotionName() — метод, який приймає два параметра рядків oldName і newName
//Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.


const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    for (const el of this.potions)
      if (el.name === oldName){
        el.name = newName;
        
      }
  },
};
console.log(atTheOldToad.getPotions());
atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
console.log(atTheOldToad.getPotions());
atTheOldToad.updatePotionName("Speed potion", "Polymorth");
console.log(atTheOldToad.getPotions());

//. №17.  
//Функція addOverNum() приймає довільну кількість аргументів чисел.

//Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, які більші за задане число. Це число завжди буде передано першим аргументом.

//Для вирішення цього завдання тобі потрібно зробити наступне:

//Перший параметр value повинен представляти задане число, а решта аргументів повинні бути зібрані за допомогою синтаксису (...args)
function addOverNum(value, ...rest) {
  let total = 0;
  for (const num of rest){
    if (value < num) {
      total += num;
      
    }
    
  }
  return total;
}
console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));//
console.log(addOverNum(15, 32, 6, 13, 19, 8));//


function getExtremeScores(scores) {
  
  let resMax = Math.max(...scores);
  let resMin = Math.min(...scores);
  return  {
    max: resMax,
    min: resMin,
  }
}

console.log(getExtremeScores([1, 2, 3, 4, 5]));
console.log(getExtremeScores([100, 2, 3, 4, 5]));
console.log(getExtremeScores([-10, -20, -3, -4, -5]));



// №18.
//У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп. Використовуючи розпилення, доповни код таким чином, щоб:

//У змінній allScores зберігався масив всіх результатів від першої до третьої групи включно.
//У змінній bestScore був найвищий загальний бал.
//У змінній worstScore був найнижчий загальний бал.

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

console.log(allScores);
console.log(bestScore);
console.log(worstScore);