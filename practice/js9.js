// Q12: Write a function to calculate the sum of digits of the
// 5-digit positive number and return the evaluated sum.
// Example:

// Input: 42316
// Output: 16


function getSum(n)
{
    var sum = 0;
    while (n != 0) {
        sum = sum + n % 10;
        n = parseInt(n / 10);
    }
    return sum;
}
  

var n = 42316;
console.log(getSum(n));