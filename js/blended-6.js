"use strict"

function car(){
    console.log('car:', this);

};
const ojt = {
    a : 2,
    b : 10
};
const ojt2 = {
    a : 20,
    b : 100
};

car.call(ojt);
car.call(ojt2);
car();

