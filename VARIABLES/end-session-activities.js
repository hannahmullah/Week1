//activity 1 
let age = 27
let country = "USA"

if (age >= 17 && country == "UK") {
    console.log("Yes i can serve you");
} else {
    console.log("You arent old enough");
}

//activity 2
let pizzaTopping = "cheese";

switch (pizzaTopping) {
    case "pepperoni":
    case "beef":
    case "chicken":
        console.log("These are important ingredients for my pizza")
        break;
    case "pineapple":
    case "tuna":
        console.log("I don't like these on my pizza")
        break;
    default:
        console.log(`I dont mind having ${pizzaTopping} on my pizza`)
}

//activity 3
let password = "P@ssw0rd";

if (password.length < 8) {
    console.log("password too short");
} else {
    console.log(password);
}

//acitivty 4 
let num = 115;
if (num % 3 === 0 || num % 5 === 0) {
    console.log("This number is divisible by 3 or 5")
} else {
    console.log("try again");
}

//acitivty 5
let number = "15";

if (number % 3 === 0 && number % 5 === 0) {
    console.log("fizz buzz");
} else if (number % 5 === 0) {
    console.log("buzz");
} else if (number % 3 === 0) {
    console.log("fizz")

} else {
    console.log(number);
}

//activity 6
let nom = "";

//actvity 7
