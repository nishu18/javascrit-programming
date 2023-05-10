// Q 5:
// Write a function that takes year as input and returns if
// the year is leap year or not.



function checkLeapYear(year) {

    
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}


const year = prompt('Enter a year:');

checkLeapYear(year);


// Q6: Write a function to swap two variables using bitwise
// XOR operator.

let x = 5, y = 6;
 

x = x + y;
 

y = x - y;
 

x = x - y;
 
console.log("After Swapping: x =" + x + ", y=" + y);
 