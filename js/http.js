const todosList = document.querySelector(".todos-list");
const usersList = document.querySelector(".users-list");
const photosList = document.querySelector(".photos-list");
const params = new URLSearchParams({
    "_limit": 7,
    "_page": 2,
})
//fetch("https://jsonplaceholder.typicode.com/todos?_limit=7&_page=2"
console.log(params.toString());

fetch(`https://jsonplaceholder.typicode.com/todos?${params}`)
            .then((response)=>{
                console.log("then")
                if (!response.ok){
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then((data)=> {
                todosList.insertAdjacentHTML("beforeend", createMarcup(data));
                console.log(data);

            })
            .catch((error)=> {
                console.log("catch:",error.message);

            })

            function createMarcup(arr){
                return arr.map(({id, title, completed}) =>  `<li class="list-title" data-id="${id}">
                    <input type="checkbox" ${completed && "checked"} />
                    <p>${title}</p>
                    </li>`).join("");
            }
            //---------------------------------2


            fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response)=>{
                console.log("then")
                if (!response.ok){
                    throw new Error(response.status);
                }
               
                return response.json();
            })
            .then((data)=> {
                usersList.insertAdjacentHTML("beforeend", createUsers(data));
                console.log(data);

            })
            .catch((error)=> {
                console.log("catch:",error.message);

            })
            function createUsers(arr){
                return arr.map(({id, name, email, address: { city }}) => `<li class="list-users" data-id="${id}">
                <p>${name}</p>
                <p>${email}</p>
                <p>${city}</p>
                </li>`).join("");

            }



     //---------------------------------3
            fetch(`https://jsonplaceholder.typicode.com/photos?_limit=5`)
            .then((response)=>{
                console.log("then")
                if (!response.ok){
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then((data)=> {
                photosList.insertAdjacentHTML("beforeend", createPhotos(data));
                console.log(data);

            })
            .catch((error)=> {
                console.log("catch:",error.message);

            })
   
        function createPhotos(arr) {
    return arr.map(({id, thumbnailUrl, title}) => `
        <li class="list-photo" data-id="${id}">
            <p>ID: ${id}</p>
            <img src="${thumbnailUrl}" 
                 alt="${title}" 
                 loading="lazy"
                 onerror="this.src='https://via.placeholder.com/150/cccccc?text=Error';">
            <p class="photo-title">${title}</p>
        </li>`).join("");
}