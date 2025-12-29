

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const result = makePizza();
const pointer = makePizza;


class StringBuilder {
  #value;
  constructor(initialValue) {
  this.#value = initialValue;
};
  getValue() {
  return this.#value;
}
  padEnd(str) {
    return this.#value += str;
  }
  padStart(str){
    return this.#value = str + this.#value;
  }
  padBoth(str) {
    return this.#value = str + this.#value + str;
  }

}
  const builder = new StringBuilder(".");
  builder.getValue();
  console.log(builder.getValue());
  builder.padEnd("^");
  console.log(builder.getValue());
  builder.padStart("^");
  console.log(builder.getValue());
  builder.padBoth('=');
  console.log(builder.getValue());


  const builde = new StringBuilder(" Oleg ");
  builde.getValue();
  //console.log(builde.getValue());
  builde.padEnd(" Luda ");
  //console.log(builde.getValue());
  builde.padStart(" Vlad ");
  //console.log(builde.getValue());
  builde.padBoth('pusa + alisa');
  //console.log(builde.getValue());





const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Tell-Tale Heart",
    author: "Edgar Allan Poe",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter((book => book.rating > MIN_BOOK_RATING ))
  .toSorted((a,b)=> a.author.localeCompare(b.author))
  .map(book => book.author)
  console.log(names);

