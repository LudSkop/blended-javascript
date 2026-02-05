

const PRODUCT_LS_key = "basket";

const totalPriceLabel = document.querySelector('.js-total-price');
const clear = document.querySelector('.js-clear');
const container = document.querySelector('.js-list');
clear.addEventListener("click", handleClear);

function handleClear(){
    localStorage.removeItem(PRODUCT_LS_key);
    window.location.href = "./basket.html";

}

const products = JSON.parse(localStorage.getItem(PRODUCT_LS_key)) || [];
let totalCost = 0;
if (products.length){
    clear.hidden = false;
    totalCost = products.reduce((acc, item) => acc + item.price * item.quantity, 0);
    //products.reduсe((acc, item) => acc + item.price * item.quantity, 0); 
//                                  ↑             ↑
//                           накопичувач    поточний товар
}
totalPriceLabel.textContent = totalCost > 0 ? `Total cost: ${totalCost} грн` : "Your basket is empty";

container.insertAdjacentHTML("beforeend", marcup(products));

function marcup(arr){
    return arr.map(({img, name, price, quantity }) => 
        `<li class="cart-item">
        <img src="${img}" alt="${name}" class="product-img"/>
        <h2>${name}</h2>
        <p> Quantity: ${quantity}</p>
        <p> Total price: ${price * quantity} грн</p>
    </li>`).join("");
}


