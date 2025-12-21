

const planets = ["Earth", "Mars", " 23", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1000, quantity: 7 },
  ];
  
  let total = 0;
  for ( const key of products) {
    if (key.name === productName){
       total += key.price * key.quantity;
      
    }
  }
      if (total === 0){
       console.log();
        return `Product ${productName} not found!`;
    }
      return total;
    
  }
  

console.log(calculateTotalPrice("Grip"));



