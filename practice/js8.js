// Q 11: Create a function that accepts 3 parameters, a, b, c.
// These parameters are then used to find and return the value of
// x in the quadratic expression, ax2 + bx + c

// Hint: there will be 2 roots for the quadratic equation, which means 2
// values of x.




let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");


let discriminant = b * b - 4 * a * c;


if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

   
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}


else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}


else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);


    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}