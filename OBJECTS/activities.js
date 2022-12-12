// let faveSongs = [
//     "i dont have",
//     "any fave songs",
//     "well i cant",
//     "think of any",
//     "right now"
// ]

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//activity 1
/*
const person = { //this is my person object. REMEMBER an object contains PROPERTIES and METHODS
    firstName: "Hannah", //this is a KEY VALUE PAIR
    age: "26",
    faveSongs: ["i dont have", "any fave songs", "well i cant", "think of any", "right now"],

    sayHi() { //function in object
        return (`Hello my name is ${this.firstName}`);
    }
};

//to access an objects data we do -> object.property
console.log(person.sayHi()); //we can also use BRACKET NOTATION to access an objects data
*/

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//activity 2 
/*
const pet = {
    petName: "Pinky",
    typeOfPet: "Cat",
    age: 14,
    colour: ["tabby", "white"],

    eat() {
        return (`${pet.petName} is eating`) //in order to get petName: "Pinky", i have to put pet. infront of it as it is a local scope
    },
    drink() {
        return (`"${pet.petName} is drinking`)
    },
};

console.log(pet.eat());
*/

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//activity 3
const coffeeShop = {
    branch: "Han's coffee", //this key value pair is a PROPERTY
    drinks: [["Tea", 3.50,], ["Cappuccino", 3.75], ["Latte", 3.70]],
    food: [["omelette", 1.50], ["French Toast", 4.00], ["Tuna salad", 3.50]],

    drinksOrdered() {
        if (coffeeShop.drinks[0] || coffeeShop.drinks[1] || coffeeShop.drinks[2])
            return (coffeeShop.drinks[0][1], [1])
    },
    foodOrdered() {

    },

};

console.log(coffeeShop.drinksOrdered());

// console.log(coffeeShop.drinks[0][1]); // here i have accessed the amount of that tea costs [0] = tea [1] = 3.50