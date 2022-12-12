//activity 1
/* let age = "17";
let country = "NZ";

if (age >= 18 && country == UK) {
    console.log("Yes i can serve you")
} else {
    console.log("You arent old enough")
};
*/

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//activity 2
/*let pizzaTopping = "chicken";

switch (pizzaTopping) {
    case "cheese":
    case "tomato":
        console.log("Margherita");
        break;
    case "pineapple":
    case "sweetcorn":
    case "chicken":
        console.log("Hawaiian");
        break;
    case "pepperoni":
    case "meat":
    case "chicken":
        console.log("Meat feast");
        break;
    default:
        console.log("Asian style");
};*/

//chicken is written in 2 different case sections. FIND A WAY FOR THE COMPUTER TO DIFFERMTIATE IT. funciton?

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//activity 3
/* let password = "!19hfh3&";

if (password.length < 7) {
    console.log("password too short")
} else {
    console.log(password);
} */

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//activity 4
/* let num = 15;

if (num % 3 == 0 || num % 5 == 0) {
    console.log("This number is divisible by 3 or 5")
} else {
    console.log("Log another number");
}; */

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//activity 5
/*let num = 5;

if (num % 3 == 0 && num % 5 == 0) {
    console.log("fizz buzz")
} else if (num % 5 == 0) {
    console.log("buzz")
} else if (num % 3 == 0) {
    console.log("fizz")
} else {
    console.log(num)
}
//this worked because i put the && conditon FIRST so the computer can run it first! ORDER MATTERS
*/

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//activity 6
// let num = 1001;
// console.log(num.split().length.reverse())

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

/*
//activity 7
let time = 10;
let placeOfWork = "Office";
let townOfHome = "Preston";

if (time == 7 && time < 8) {
    console.log(`Im at home in ${townOfHome}`)
} else if (time == 8) {
    console.log(`Im commuting to the ${placeOfWork}`)
} else {
    console.log(`Im at work in the ${placeOfWorks}`)
*/

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//activity 8
/* let randomString = "fsdjlghsdflhgrhtoeiorkjgawlffsdovuutrurebvz";
let vowels = ['a', 'e', 'i', 'o', 'u'];

let arr = randomString.split("").reverse(); //split string in array and reverse
let indexOfLastVowelInReverse = arr.findIndex(e => vowels.includes(e))

if (indexOfLastVowelInReverse != -1) { //if the index is -1 there is no vowel in the string
    let index = randomString.length - 1 - indexOfLastVowelInReverse
    console.log(`Last vowel found at index ${index}: ${randomString[index]}`);
};*/

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//activity 9
/*let word = "fdslkjlkfdsfsjdf";
let firstCharacter = word.charAt(0);
let lastCharacter = word.slice(-1);

if (firstCharacter === lastCharacter) {
    console.log("true")
} else {
    console.log("false")
}*/

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//activity 10
let num1 = 6;
let num2 = 7;
let sum = num1 + num2;

if (sum % 2 === 0) {
    console.log("even")
} else {
    console.log(sum) //this will print as the odd number 
}
