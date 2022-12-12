const grade = 92;

switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default: //default is like else
        console.log("Failed");
}

/* all this is asking is, if the grade is 'const 34' mark them as whatever 
is stated in the console log */
