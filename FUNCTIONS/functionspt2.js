/*

function addUp(a, b) { //fucntion, function name, paramters
    return a + b
}
addUp(7, 3);
console.log(addUp(2, 5));
//-------------------------------------------------------------------------------

const total = (a, b) => { //const name, parameters - no function name (by const name instead - so it can be used by name)
    return a + b
}
console.log(total(7, 3));
//-------------------------------------------------------------------------------

const total2 = function (a, b) {
    return a + b
}
console.log(total2(7, 3));

//addUp, total and total2 are all function names
//-------------------------------------------------------------------------------

const pressGrindBeans = () => {
    console.log("Grind for 20 seconds");
}
pressGrindBeans(); //we are calling the function here

//get into the habit of declaring the fucntion first
//JS uses hoisting to put all fucntions at the top

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

const cashWithdrawl = (amount, accNum) => { //these are parameters
    //declare variable  =  parametres
    console.log(`Withdrawing ${amount} from ${accNum}`);
}

cashWithdrawl(300, 50449921); //these are arguments 
cashWithdrawl(30, 50449921);
cashWithdrawl(200, 12345678);


*/




function happyBirthday() { //the parameter links to LINE 61 and then 60 where the name is declared
    for (i = 0; i <= 3; i++) { //loop starts at 0; loop to run 3 times; loop to add string in consolelog
        if (i != 2) { //if loop is not equal to 2 -> basically once two happy birthdays are printed
            console.log("Happy birthday to you")
        } else { //then print the below line 52
            console.log("Happy birthday dear " + paraName) // we have declared paraName in line 61 and 60
        } // end if
    } // end for

};


let paraName = "Hannah"
happyBirthday(paraName) // we are CALLING THE FUNCTION and the paraName is defined in line 60 above
console.log("Many happy returns " + paraName); //this will be the final like
