// Q3: Write a function which when given three numbers,
// computes the maximum number with the help of ternary
// operator.

var n1 = 1, n2 = 10, max;
 

max = (n1 > n2) ? n1 : n2;
 

console.log("Largest number between "
    + n1 + " and " + n2
    + " is " + max + ".");


// Task 4: How do we check if a binary number is odd or even?

const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}



