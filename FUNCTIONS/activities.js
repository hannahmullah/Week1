//activity 1
/* function factorial(n) {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
}
console.log(factorial(33))
//8.683317618811886e+36 
//create arrow function of above^^^^^^^^^^

const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
}
console.log(factorial(33)) */

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//activity 2
/* let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`);
    orderCount++;
}
takeOrder("pineapple", "cheese");
console.log(`There are currently ${orderCount} orders`);

takeOrder("pepperoni", "chicken");
console.log(`There are currently ${orderCount} orders`);
*/
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//actvity 3
let myBalance = 100;
const myPin = 1234;

const cashWithdrawl = (balance, pinNumber) => {
    if (pinNumber == myPin && balance <= myBalance) {
        console.log(`you have enough money`)
    } else if (pinNumber == myPin && balance > myBalance) {
        console.log(`not enough money bro`)
    } else {
        console.log(`incorrect pin`)
    }
};

cashWithdrawl(100, 1235);

//dispense cash if pin number is equal
//dispense cash if balance is equal to or more than amount withdraw
//console.log you have taken out 10 and your balance is £££
