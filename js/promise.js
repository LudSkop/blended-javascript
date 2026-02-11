

//const isSuccess = true;

//const promise = new Promise((resolve, reject) => {
  //setTimeout(() => {
    //if (isSuccess) {
      //resolve("Success! Value passed to resolve function");
    //} else {
      //reject("Error! Error passed to reject function");
    //}
  //}, 2000);
//});

//console.log(promise); // Об'єкт промісу

const isSuccess = false;
const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (isSuccess){
            resolve("Success!");
            console.log("Success! Value passed to resolve function");

        } else {
            reject("Error");
            console.log("Error Error passed to reject function");
        }
    }, 1000);

})
promise
  .then(result => {
    console.log("Результат з resolve:", result);
  })
  .catch(error => {
    console.log("Результат з reject:", error);
  });


const pizzaOrder = new Promise((resolve, reject) => {
    console.log("📞 Дзвоню в піцерію...");
    
    setTimeout(() => {
        const pizzaReady = true;  // піца готова
        
        if (pizzaReady) {
            resolve("🍕 Піца доставлена!");
        } else {
            reject("❌ Піцерія закрита");
        }
    }, 3000);  // піцу готують 3 секунди
});

console.log("⏳ Чекаю піцу...");

pizzaOrder
    .then((result) => {
        console.log(result);  // → "🍕 Піца доставлена!"
    })
    .catch((error) => {
        console.log(error);  // → "❌ Піцерія закрита"
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);

    function handleSubmit(event){
        event.preventDefault();
        const delay = Number(event.target.elements.delay.value);
        const state = event.target.elements.state.value;
        const isSuccess = state === "fulfilled";



         createPromise(delay, isSuccess)
    .then(delay => {
        iziToast.destroy();
        iziToast.success({
            message: `✅ Fulfilled promise in ${delay} ms`,
            position: 'topRight',
           
        })
    })
    .catch(delay => {
       
        iziToast.error({
            message: `❌ Rejected promise in ${delay} ms`,
            position: 'topRight',
           
        })
     
    });
    event.target.reset();
    }


    function createPromise(delay, isSuccess) {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if (isSuccess) {
                    resolve(delay);
                } else{
                    reject(delay);
                }
                }, delay);
            })
    }
