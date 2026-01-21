
//const technologiess = ["HTML", "CSS", "JavaScript", "React", "Node"];
//const list = document.querySelector(".list");

//const markups = technologiess
  //.map((technology) => `<li class="list-item">${technology}</li>`)
  //.join("");

// Check the console, you'll see a single string with HTML ts
//console.log(markups);

// Adding all the markup in one operation
//list.innerHTML = markups;



//const article = document.querySelector(".title");
//article.innerHTML = "Updated Article Title";
//console.log(article.textContent);

//const title = document.querySelector(".article .title");
//console.log(title.innerHTML);

//const text = document.querySelector(".article .text");
//console.log(text.innerHTML);

//const link = document.querySelector(".article .link");
//console.log(link.innerHTML);



//const menu = document.querySelector(".menu");
//const newTechnologies = ["React", "TypeScript", "Node.js"];
//const markup = newTechnologies
    //.map((newTech) => `<li class="item">${newTech}</li>`)
    //.join("");


//menu.insertAdjacentHTML("beforeend", markup);

//menu.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
//if (!document.querySelector("h2")) {
  //menu.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
//}

const heading = document.querySelector(".menu-post");
console.log(heading.classList);

const newHeading = ["Ноде", "Джаваскрипт", "Реакт"];
const markupHeading = newHeading.map(newHeadin => `<li class="item-post">${newHeadin}</li>`).join("");
  

heading.insertAdjacentHTML("beforeend", markupHeading);
heading.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");



const button = document.querySelector('.btn');
button.addEventListener('click', ( ) => {
    console.log('Button clicked');
});


const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", markupClick);
 
child.addEventListener("click", markupClick);
  
descendant.addEventListener("click", markupClick);


function markupClick(event){
  console.log("target:", event.target);
  console.log("currentTarget:", event.currentTarget);
  const color = event.currentTarget.dataset.color;
  event.stopPropagation();
  document.body.style.backgroundColor = color;
  console.log("колір кубика: ", color);
  if (!color ) return;
  console.log("колір боді: ", color);



};

