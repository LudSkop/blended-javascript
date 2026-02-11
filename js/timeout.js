

//const button = document.querySelector("button");

//const onClick = () => {
  //const timerId = setTimeout(() => {
    //console.log("I love async JS!");
  //}, 2000);

  //console.log(timerId);
//};

//button.addEventListener("click", onClick);

 //const timeId = setInterval(()=> {
  //console.log("hello world");
 //2000});
 //setTimeout(()=>{
  //clearInterval(timeId);
 //}, 3000);


const delay = 6000;
const text = document.querySelector(".make");
const button = document.querySelector(".start-btn");
text.addEventListener("click", handletextClick);
console.log("Before timeout: ", text.textContent);
let timerId = null;

function showText() {
    text.classList.add("is-visible");
  
  
    timerId = setTimeout(() => {
      console.log("timeout");
      //text.classList.remove("is-visible");
      hideText();
      console.log("Клас видалено!");
    }, delay);

  
};
showText();
function handletextClick(event){
  //text.classList.remove("is-visible");
  hideText();
  clearTimeout(timerId);
}
function hideText(){
  text.classList.remove("is-visible");
}
//const currentTime = new Date();

//console.log("сьогодні день неділі:" ,currentTime.getDay());
//console.log("сьогодні число:",currentTime.getDate());
//console.log("сьогодні місяць (починає з 0- січень-0):",currentTime.getMonth());
//console.log("сьогодні рік:",currentTime.getFullYear());



//currentTime.setDate(16);
//currentTime.setMonth(4)
//currentTime.setFullYear(1980);

//console.log(currentTime);

//const date1 = Date.now();

//setTimeout(() => {
  //const date2 = Date.now();
  //console.log(date2 - date1);
//}, 1000);


const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".clockface");



class Timer {
  start() {
    const startTime = Date.now();
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const time = this.getTimeComponent(deltaTime);
      console.log(time);

    }, 3000);
  }
    getTimeComponent(time) {
        const hours = Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const mins = Math.floor(time % (1000 * 60 * 60) / (1000 * 60));
        const secs = Math.floor(time % (1000 * 60) / 1000);

        return { hours, mins, secs }
    };
};
const timer = new Timer();
console.log(timer.start);

startBtn.addEventListener("click", timer.start.bind(timer));


 



 //const intervalArray =[];  //додовання в масив інтервалів, щоб потім їх очистити

 //function foo1 (){
  //const intervalId = setInterval(()=> {
    //console.log("hello foo1" );
  //}, 1000);
  //intervalArray.push(intervalId);

 //}
  //function foo2 (){
  //const intervalId = setInterval(()=> {
    //console.log("hello foo2" );
  //}, 2000);
  //intervalArray.push(intervalId);
 //}
  //function foo3 (){
   //const intervalId = setInterval(()=> {
    //console.log("hello foo3" );
  //}, 2000);
  //intervalArray.push(intervalId);
 //}
  //foo1();
  //foo2();
  //foo3();

  //console.log(intervalArray);

//setTimeout(() => {
  //intervalArray.forEach(id => clearInterval(id))

//},5000);-------------------------------




 


//const clearBtn = document.querySelector(".js-clear");
//let timeoutId;

//const setBtn = document.querySelector(".js-set");

//setBtn.addEventListener("click", () => {
  //timeoutId = setTimeout(() => {
    //console.log("I love Alisa!");
  //}, 2000);
//});

//clearBtn.addEventListener("click", () => {
  //clearTimeout(timeoutId);
  //console.log(`Timeout with id ${timeoutId} has stopped!`);
//});

//const startBtn = document.querySelector(".js-start");

//startBtn.addEventListener("click", () => {
  //const intervalId = setInterval(() => {
    //console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
  //}, 3000);
//});
//const stopBtn = document.querySelector(".js-stop");
//let intervalId = null;
//stopBtn.addEventListener("click", () => {
  //clearInterval(intervalId);
  //console.log(`Interval with id ${intervalId} has stopped!`);
//});

// Вимірювання часу виконання коду----------------------------------------------
//const startTime = Date.now();

// Твій код, виконуваний упродовж деякого часу
//for(let i = 0; i <= 100; i += 1) {
	//console.log(i);
//}

//const endTime = Date.now();
//const elapsedTime = endTime - startTime;

//console.log(`Elapsed time: ${elapsedTime} ms`);
//const date = new Date("March 16, 2030 14:25:00");
//console.log("Date: ", date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// Повертає день місяця від 1 до 31
//console.log("Day: ", date.getDate()); // 16

// Повертає день тижня від 0 до 6, починається з неділі
//console.log("Day of the week: ", date.getDay()); // 6

// Повертає місяць від 0 до 11
//console.log("Month: ", date.getMonth()); // 2

// Повертає рік з 4 цифр
//console.log("Full year: ", date.getFullYear()); // 2030

// Повертає години
//console.log("Hours: ", date.getHours()); // 14

// Повертає хвилини
//console.log("Minutes: ", date.getMinutes()); // 25

// Повертає секунди
//console.log("Seconds: ", date.getSeconds()); // 0

// Повертає мілісекунди
//console.log("Milliseconds: ", date.getMilliseconds()); // 0

//Все, що можна прочитати — можна записати, методи для запису починаються з префікса set.
//const date = new Date("March 16, 2030 14:25:00");

//date.setMinutes(50); 
//console.log(date); // "Sat Mar 16 2030 14:50:00 GMT+0200"

//date.setFullYear(2040);
//console.log(date); // "Fri Mar 16 2040 14:50:00 GMT+0200"

//date.setMonth(4); 
//console.log(date); // "Wed May 16 2040 14:50:00 GMT+0300"
