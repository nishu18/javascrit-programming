// Q1: Write a Javascript function that checks if the first
// character of the input is an alphabet, digit, or special character.

function charCheck(input)
      {
        var input_char = input.charCodeAt(0);
         
        
        if (
          (input_char >= 65 && input_char <= 90) ||
          (input_char >= 97 && input_char <= 122)
        )
          console.log(" Alphabet ");
           
       
        else if (input_char >= 48 && input_char <= 57)
          console.log(" Digit ");
           
        
        else console.log(" Special Character ");
      }
 
      
      var input_char = "a";
      charCheck(input_char);


// Q2: Write a JavaScript function that prints if a triangle is
// equilateral, scalene, right-angle triangle, or isosceles.

// Example: checkTriangle(3, 4, 5) → Right angle triangle
// checkTrianlge(45, 13, 22) → Isosceles triangle


function checkTriangle(x, y, z)
{
     
    
    if (x == y && y == z)
    console.log("Equilateral Triangle");
 
    
    else if (x == y || y == z || z == x)
    console.log("Isosceles Triangle");
 
    
    else
    console.log("Scalene Triangle");
}
 

    let x = 8, y = 8, z = 8;
     
    
    checkTriangle(x, y, z);


//Q 3: Write a function that takes single input in 24-hour
// format, for example, “13:15”, and returns the output in 12-hour
// format, “1:15 PM”.


const c = prompt("Enter Hours : ");
const b = prompt("Enter Minutes : ");

let s;
s = c % 12 + ":" + b;

if ( a > 12 ) {
    s = s + " PM";
} else {
    s = s + " AM";
}
console.log(s);


//Q 4: Write a function to check whether the last digit of three numbers is same.

function last_digit(x, y, z)
{
  if ((x > 0) && y > 0 && z > 0)
    {
     return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
   }
  else
    return false;
}

console.log(last_digit(20, 30, 400));
console.log(last_digit(-20, 30, 400));
console.log(last_digit(20, -30, 400));


// Q5: A library charges a fine for every book returned late.
// For the first 5 days the fine is 20 rupees, for 6-10 days fine is
// 30 rupees and above 10 days fine is 50 rupees. If you return
// the book after 30 days your membership will be cancelled.
// Write a function that takes the number of days the member is
// late to return the book as input and return the fine amount or -1
// if membership is cancelled.


let a = parseInt(prompt("days : "));
function charge(days){
    if(days ==5){
        return "20 rupees";
    }
    else if(days>5 && days<10){
        return "30 rupees";
    }
    else if(day>10){
        return "50 rupees";
    }
    else{
        return -1;
    }
}
console.log(charge(6));