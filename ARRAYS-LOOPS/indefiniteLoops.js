//indefinite loops

let cards = [
    "diamond",
    "spade",
    "heart",
    "club"
];
let currentCard = "club";

while (currentCard != "spade") {
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log(currentCard);

/* let x = 1;
while (x <= 1) {
    console.log("x is ", x);
    x += 1;
}
*/
