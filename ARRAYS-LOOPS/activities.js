/*/Activity 1
/let faveFilms = [
    "Princess Diaries",
    "Spirited Away",
    "Black Panther",
    "Avengers",
    "My neighbour totoro"
];
faveFilms.push("Scary Movie", "Detective Pikachu"); //.push() -> is when you add values at the end of an array
faveFilms.pop(); //removes the last value of the array
faveFilms.shift();

for (let i = 0; i < faveFilms.length; i++) {
    console.log(faveFilms[i]);
};


/* Array methods
.map() -> creates a new array populated with the results of calling a provided function on every element in the calling array.
.shift() ->  removes the first element from an array

*/

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//Activity 2
// for (let i = 0; i < 6; i++) {
//     console.log(Math.floor(Math.random() * 50) + 1);
// }

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//Activity 3

// for (let i = 0; i <= 9; i += 1) {
//     let reversed =
// };

// console.log(i);

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

/*//Activty 4
let films = [
    "film1",
    "film2",
    "film3",
    "film4"
];
// console.log(films);

let thirdFilm = "film3"
let i = 0
for (i = 0; i < films; i++) {
    console.log(films.length[i])
}

if (thirdFilm === films[2]) {
    console.log("yay")
} else {
    console.log("oh no");
};
*/

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//activity 5
/*
// let randomNumber = Math.ceil(Math.random() * 30); //
//^^ i first had to find how to create a random number between 1-30

for (let i = 0; i < 6; i++) { // this means that the FOR LOOP will start from 0 and run 6 times  in order of 1
    randomNumber = Math.ceil(Math.random() * 30); //the above declared variable i put here to put WITHIN the for loop
    if (randomNumber % 7 == 0) { // if statement to check if random no. is divisble by 7 or not
        console.log(randomNumber, "is divisible by 7") //console log random number AND the division
    } else {
        console.log(randomNumber, "is not divisble by 7")
    }
}
*/

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

/* //activity 6
let bobsFollowers = ["James", "Michael", "Pinky", "Leila"];
let hannahsFollowers = ["Riasat", "Pinky", "Yoshi", "Midnight"];

let matches = ;

for (i = 0; i < bobsFollowers.length; i++) {
    for (i = 0; i < hannahsFollowers.length; i++) {
        console.log();
    }
}
*/

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//activity 7
//for
/* let faveDrinks = [
    "coke",
    "lemonade",
    "orange juice",
    "fanta"
];
for (let i = 0; i < faveDrinks.length; i++) {
    console.log(faveDrinks[i])
}

// while

let currentDrink = "lemonade";

while (currentDrink != "fanta") {
    console.log(currentDrink);
    currentDrink = faveDrinks[Math.floor(Math.random() * 4)];
}
console.log(currentDrink);

//i have used the same array of faveDrinks for FOR LOOP and WHILE LOOP
*/
//do while
let text = "";
let i = 0;
do {
    text += i + "<br>";
    i++;
}
while (i < 5);
console.log(i)