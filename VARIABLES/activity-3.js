/* const oneDay = (1000 * 60 * 60 * 24); // Javascript only calculates the day by milliseconds. This is an equation to calculate the day in millsieconds

let currentDate = new Date(); //this is todays date including the seconds

let myBirthday = new Date("2022, 12, 27"); //stating another date

const daysBetween = (myBirthday - currentDate); //subtracting my birthday to todays date
let daysLeft = (Math.round(daysBetween / oneDay)); // firstly doing the division between daysBetween and oneDay which will result in a decimal. 
//then we add Math.rund to round the number to the nearest digit

console.log(daysLeft); */

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

const oneDay = (1000 * 60 * 60 * 24);
// The computer only knows the date by miliseconds. The above is the equation to calculate it to days
/* JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects contain a Number that represents milliseconds since 1 January 1970 UTC. */

let currentTime = new Date();
let myBirthday = new Date("2022, 12, 27");
const daysBetween = (myBirthday - currentTime)
let daysLeft = (Math.round(daysBetween / oneDay));

console.log(oneDay);
console.log(currentTime);
console.log(myBirthday);
console.log(`There are ${daysLeft} until my birthday`);
