

//3    Write a JavaScript function that accepts two integers and displays the larger.

// function integer(a,b){
//     if(a>0 && b>0 && a>b){
//         console.log("the larger number is " +a)
//     }
//     else if(b>0 && a>0 && a<b){
//         console.log("the larger number is " +b)
//     }
//     else if (a>0 && b>0 && a===b){
//         console.log("both same")
//     }else{
//         console.log("the input")
//     }
// }
// integer(6,6)

//4 Write a program to check if a number is odd or even

// var x=5;

// if(x%2==0){
//     console.log(`${x} is a even number`)

// }else{
//     console.log(`${x} is a odd number`)
// }


//5 Create a loop that prints all numbers from 0 to 9.

// for(i=0; i<10; i++){
//     console.log(i)
// }


//8 Write a function that takes two parameters and swap their numerical values, also
//  print their values within the function.

// let a=5
// let b=6

// let temp;

// temp=a;
// a=b;
// b=temp;

// console.log(`the value of after swaping ${a}`)
// console.log(`the value of after swaping ${b}`)

//6 Write a program to generate a multiplication table.

// let b=5;

// for(a=1; a<11; a++){
//     const result=(a*b)
//     console.log(`${a} * ${b} = ${result}`)
// }

//10  Write a program that sorts an array (list of fruits) in alphabetical order.

// const fruit=["apple" ,"orange", "mango"];
// fruit.sort();
// console.log(fruit)
// fruit.reverse()

//11 Write a program that merges two sorted arrays.

// let arr1=[1,2,3,4]
// let arr2=[5,6,7,8]

// let arr3 =[...arr1, ...arr2]
// let arr3=[]

// for(i=0; i<arr1.length; i++){
//     arr3[i]=arr1[i]
// }
// for(i=0; i<arr2.length; i++){
//     arr3[arr1.length+i]=arr2[i]
// }

// console.log(arr3)

//12 Write a program that calculates the sum of n natural numbers using recursion.

// function sum(num){
//     if(num>0){
//       return num + sum(num-1)
//     }else{
//         return num

//     }
// }
// var res= sum(5)
// console.log(res)

//13 Write a program to check whether the last digit of three numbers is the same.

// let first =56
// let second =26
// let third =82

// let res1= first % 10;
// let res2= second % 10;
// let res3= third % 10;

// if(res1 === res2 && res1===res3){
//     console.log(`${first}, ${second}, ${third} are having same digit`)
// }else{
//     console.log("nat same")
// }

//14 Write a program that checks leap year.

// var year=2016;

// if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
//     console.log("leap yaer")
// }else{
//     console.log("not leap yaer")
// }

//15  Write a program to find the factorial of a number.

// let num = 5;
// for (let i = num; i >1; ){
//     i=i - 1;
//     var fact = num * i
//     num = fact;
    
// }
// console.log(fact);

//or
// let number=5;
// let fact=1
// for (var i=1; i<=number; i++){
//     fact=fact*i;
// }
// console.log(fact)