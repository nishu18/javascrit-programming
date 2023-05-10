// Q10: Create a function that accepts 3 parameters and does
// the sum of them all to pass it to another function which returns
// the average of those numbers.


function sum(a,b,c){
    return a+b+c;
}

function avg(a,b,c){
    return (a+b+c)/3;
}

let a = parseInt(prompt("Enter a : "));
let b = parseInt(prompt("Enter b : "));
let c = parseInt(prompt("Enter c : "));



console.log(sum(a,b,c));
console.log(avg(a,b,c));