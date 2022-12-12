//Definite loops

let faveDrinks = [
    "coke",
    "lemonade",
    "orange juice",
    "fanta"
];

for (let i = 0; i < faveDrinks.length; i++) {

    console.log(faveDrinks[i])
}

//i stands for index (or iterator). i is widely used in loops. However, it could be anything you like 


let first = 0;
let last = 11;
let inc = 1;

for (let i = first; i < last; i += inc) {
    console.log("i = ", i);
}

let multiplesTwo = []; //empty array
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        multiplesTwo.push(i);
    }
}

console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`); 