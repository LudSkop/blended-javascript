

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

