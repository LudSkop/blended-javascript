const result = document.querySelector("ul");
console.log(result.classList);

const hasActiveClass = result.classList.contains("list");
console.log(hasActiveClass);

const hasMenuClass = result.classList.contains('menu');
console.log(hasMenuClass);

result.classList.add('active', 'menu-list', 'main');
console.log(result.classList);
result.classList.remove('main');
console.log(result.classList);
result.classList.replace('menu-list', 'new-list');
console.log(result.classList);

result.classList.toggle('visible');
console.log(result.classList);
   if (result.classList.contains('menu')){
    result.style.backgroundColor = 'yellow';

}
    else {
    result.style.backgroundColor = 'blue';
};







const item = result.querySelector(".item");
console.log(item);

const post = document.querySelector("ul");
console.log(post);
const itemPost = post.querySelectorAll("li");
console.log(itemPost);
const image = document.querySelector(".image");
console.log(image.alt);
image.alt = "A beautiful scenery"
console.log(image.alt);
image.src = "https://picsum.photos/id/13/640/480"; 
console.log(image.src);

const el = document.querySelector("h1");
console.log(el.textContent);
el.textContent = "Welcome to the Jungle";
console.log(el.textContent);



  