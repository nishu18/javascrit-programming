// Q 13: Write a function to swap two variables using arithmetic
// operators.

let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');


let temp;


temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);


// Q14: 
// Write a function to find the factorial of a number using
// recursion.



function factorial(x) {

    
    if (x == 0) {
        return 1;
    }

  
    else {
        return x * factorial(x - 1);
    }
}


const num = prompt('Enter a positive number: ');


if (num >= 0) {
    const result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}
else {
    console.log('Enter a positive number.');
}
