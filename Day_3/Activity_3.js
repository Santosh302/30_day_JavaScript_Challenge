 /* Activity 3: Switch Case 
 Task 4: Write a program that uses a switch case to determine the day of the week based on number(1-7) and log the day name to the console.
 Task 5: Write a program that uses a switch case to assign a grade('A', 'B', 'C', 'D', 'F') based on a score and log the grade and log the grade to the console.
 */

const number=5;
switch(number){
    case 1:{
        number==1;
        console.log("Today is monday");
        break;
    }
    case 2:{
        number==2;
        console.log("Today is Tuesday");
        break;
    }
    case 3:{
        number==3;
        console.log("Today is Wednesday");
        break;
    }
    case 4:{
        number==4;
        console.log("Today is Thursday");
        break;
    }
    case 5:{
        number==5;
        console.log("Today is Friday");
        break;
    }
    case 6:{
        number==6;
            console.log("Today is Satursday");
            break;
    }
    case 7:{
        number==7;
        console.log("Today is Sunday");
        break;
    }
}


let Mark = 90;

// Determine the grade category based on Mark
let category;

if (Mark >= 90 && Mark <= 100) {
    category = 'A';
} else if (Mark > 80 && Mark <= 89) {
    category = 'B';
} else if (Mark >= 60 && Mark <= 79) {
    category = 'C';
} else if (Mark >= 33 && Mark <= 59) {
    category = 'D';
} else if (Mark < 33) {
    category = 'F';
} else {
    category = 'Invalid';
}

// Use switch to handle the grade category
switch (category) {
    case 'A':
        console.log("You find A Grade");
        break;
    case 'B':
        console.log("You got B Grade");
        break;
    case 'C':
        console.log("You got C Grade");
        break;
    case 'D':
        console.log("You got D Grade");
        break;
    case 'F':
        console.log("You got F Grade");
        break;
    case 'Invalid':
        console.log("You have an invalid mark");
        break;
    default:
        console.log("Unexpected case");
        break;
}

