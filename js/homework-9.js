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
localStorage.clear(); // очищает все локальное хранилище


