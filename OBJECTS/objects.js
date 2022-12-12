//Objects have properties and methods
//properties is what it looks like
//methods is what it does

//activity session: Object is called person. name is key and my name is value

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------


let offer = "none";
let time = 1200; // change time here to recieve a different result in console log

const cafe = { // this is an object
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks:
        ["Cappuccino", "Latte", "Filter coffee", "Tea", "Hot chocolate"],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwhich",
    noOffer: "Sorry no offer",

    openCafe() { //this is a function 
        if (this.hasSpecialOffers) {
            return "Time for a special offer!";
        }
    },
    closeCafe() { // this is a function 
        return "We are closed, come back tomorrow!"
    }
};

if (time < 1100) { //this is an if statement 
    offer = cafe.breakfastOffer;
} else if (time < 1500) {
    offer = cafe.lunchOffer;
} else {
    offer = cafe.noOffer
}
console.log(cafe.openCafe());
// console.log(cafe.closeCafe());

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

/*
activity ALARM

let day = "Monday"
let alarm = ""

const alarmClock = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am"
};

if (day == "Saturday" || day == "Sunday") {
    alarm = alarmClock.weekendAlarm;
} else {
    alarm = alarmClock.weekdayAlarm;
};

console.log(alarm)
*/