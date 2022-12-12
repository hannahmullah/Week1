let coffeeIsGrinding = false; //try with both true and false

const pressGrindBeans = () => { //curly bracket here means declare a new function
    if (coffeeIsGrinding) {
        console.log("Stop Grinding")
        coffeeIsGrinding = false; //need to reset the boolean value
    } else {
        console.log("Grounding is about to begin")
        coffeeIsGrinding = true; //need to reset the boolean value
    } // end if

}; // end function as also not indented 
pressGrindBeans();

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------


const cashWithdrawl = (amount, accNum) => {
    //declare variable  =  parametres
    console.log(`Withdrawing ${amount} from ${accNum}`);
}

cashWithdrawl(300, 50449921); //these are arguments 
cashWithdrawl(30, 50449921);
cashWithdrawl(200, 12345678);

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

let accNumber = 50449921;
const cashhWithdrawl = (amount, accNum) => {
    //declare variable  =  parametres
    console.log(`Withdrawing ${amount} from ${accNum}`);
}

cashhWithdrawl(300, accNumber); //these are arguments 
cashhWithdrawl(30, 50449921);
cashhWithdrawl(200, 12345678);

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

const addUp = (num1, num2) => {
    return num1 + num2;
};

console.log(addUp(7, 3));
//this is a return -> 7 is num1 and 3 is num2 so it returns 10
console.log(addUp(2, 5));

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

const multiplyByNineFifths = (celsius) => { //we are only delcaring the paramtere it still neds a function
    return celsius * (9 / 5); // return is multipplying celsius and 9/5's together
};
const getFahrenheit = (celsius) => { // this is now the function for the celsius
    return multiplyByNineFifths(celsius) + 32;
};

console.log("The temperature is " + getFahrenheit(15) + "^F");

/* first we are declaring the function called multiplyByNineFifths 
and we are putting in the parametre of celsius. 
i want the computer to return celsius multiply by 9/5.
We dont know what function the celsius is so we are 

... to be contnued 
*/

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

const mulitFive = (num1) => {
    let ans1 = num1 * 5
    console.log("ans1 = " + ans1)
}
const multiThree = (num1) => {
    let ans1 = num1 * 3
    console.log("ans1 = " + ans1)
}

multiThree(10)
mulitFive(2)

// the below is an example of a functions structure and what they do
const myFunction = (param) => { //curly brackets show the start of the function
    //^^ declaration of a function we use () for the parametre. 
    //a parametre is passed into a function 
    console.log(param) //this line is doin the calculation
    let newNum = param + 2
    return (newNum)
} //curly bracket show the end of the function

myFunction("I am a parameter") //this is calling the function
console.log(myFunction(3)); //this is calling and oiutputting the funciton 

//myFunction = (parameter)
//myFunction = (3)
//newNum is the result of 3 + 2 