// Q9: Create a function that accepts 1 parameter, x. The
// Parameter “x” is then used to find the value of the expression
// 4x and returns the value.



function horner(poly, n, x)
{
 
    // Initialize result
    let result = poly[0];
 
    for (let i = 1; i < n; i++)
        result = result *
                  x + poly[i];
 
    return result;
}
 

// 4x+ 8x +3 and for x = 2
let poly = new Array(4, 8, 3);
let x = 2;
let n = poly.length
 
console.log("Value of polynomial is " +
         horner(poly, n, x));