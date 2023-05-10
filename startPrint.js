// let n=5;
// let string=""

// for (let i=0; i<n; i++){
//     for( let j=0; j<i; j++){
//         string +="*"
//     }
//     string +="\n"
// }

// console.log(string)

// *
// **
// ***
// ****


// let n=5;
// let string=""

// for (let i=1; i<n; i++){
//     for(let k=0; k<n-i; k++){
//         string +=" "
//     }
//     for( let j=0; j<i; j++){
//         string +="*"
//     }
//     string +="\n"
// }

// console.log(string)

//     *
//    **
//   ***
//  ****



// let n=6;
// let string=""

// for (let i=0; i<n; i++){
    
//     for( let j=0; j<n; j++){
//         if(i===0 || i===n-1){
//             string +="*"
//         }
//        else{
//         if(j===0 || j===n-1){
//             string +="*"
//         }
//         else{
//             string +=" "
//         }
//        }
//     }
//     string +="\n"
// }

// console.log(string)

// ******
// *    *
// *    *
// *    *
// *    *
// ******

// let n=5;
// let string=""

// for (let i=0; i<n; i++){
//     for( let j=0; j<n-i; j++){
//         string +="*"
//     }
//     string +="\n"
// }

// console.log(string)
// *****
// ****
// ***
// **
// *




// let n=6;
// let string=""

// for (let i=1; i<=n; i++){
//     for( let j=0; j<i; j++){
//         if(i===n){
//         string +="*"}
//         else{
//             if(j==0 || j== i-1){
//                 string +="*"
//             }
//             else{
//                 string +=" "
//             }
//         }
//     }
//     string +="\n"
// }

// console.log(string)

// *
// **
// * *
// *  *
// *   *
// ******


// let n=5;
// let string=""

// for (let i=1; i<=n; i++){
//     for(let k=1; k<=n-i; k++){
//         string +=" "
//     }
//     for( let j=1; j<=i; j++){
//         if(j>1 && j!=i && i!=n){
            
//         string +=" "
//         }else{
//         string +="*"}
//     }
//     string +="\n"
// }

// console.log(string)

//     *
//    **
//   * *
//  *  *
// *****



// let n=5;
// let string=""

// for (let i=0; i<n; i++){
//     for(let k=0; k<i; k++){
//         string +=" "
//     }
//     for( let j=0; j<2*(n-i)-1; j++){
//         string +="*"
//     }
//     string +="\n"
// }

// console.log(string)

// *********
//  *******
//   *****
//    ***
//     *



// let n=5;
// let string=""

// for (let i=0; i<n; i++){
//     for(let k=0; k<n-i; k++){
//         string +=" "
//     }
//     for( let j=0; j<2*i-1; j++){
//         string +="*"
//     }
//     string +="\n"
// }

// console.log(string)

     
//     *
//    ***
//   *****
//  *******


// let n=5;
// let string=""

// for (let i=0; i<=n; i++){
//     for(let k=0; k<n-i; k++){
//         string +=" "
//     }
//     for( let j=0; j<2*i-1; j++){
//         if(i===0 || i===n){
//             string +="*"}
//         else
//         {if(j===0 || j===2*i-2){
//         string +="*"}
//         else{
//             string +=" "
//         }
//     }
//     }
//     string +="\n"
// }

// console.log(string)


// function StringReduction(str) {
//     // Set initial counter variable to 0
//     var i = 0;
//     // Split the string into an array of letters
//     var letters = str.split("");
//     // Start do loop.
//     do {
//     // If the first and second letter in the array match any of the pairs
//     if ((letters[i] == "a" && letters[i+1] == "b") || (letters[i] == "b" && letters[i+1] == "a")) {
//     // Remove the second letter
//     letters.splice(i+1, 1);
//     // Transform the first letter
//     letters[i] = "c";
//     // Set the counter back to 0 so we can start at the beginning again
//     i = 0;
//     } else if ((letters[i] == "b" && letters[i+1] == "c") || (letters[i] == "c" && letters[i+1] == "b")) {
//     letters.splice(i+1, 1);
//     letters[i] = "a";
//     i = 0;
//     } else if ((letters[i] == "c" && letters[i+1] == "a") || (letters[i] == "a" && letters[i+1] == "c")) {
//     letters.splice(i+1, 1);
//     letters[i] = "b";
//     i = 0;
//     // If no conditions are met, incremenet the counter
//     } else {
//     i++;
//     }
//     } while (i < letters.length);
//     // Return the length of the transformed string
//     return letters.length;
//     }
    
//     console.log(StringReduction("abcabc"));

// let res =0,x
// let result="";

// function MathChallenge(str) { 
//   str=str.split(' ')
//   let first=str[0]
//   let operator=str[1]
//   let second=str[2]
//   let result=str[str.length-1]

//   if(result.indexOf('x') !=-1){
//     x=result;
//     first=parseInt(first)
//     second=parseInt(second)

//     if(operator=='+')
//     res=first+second
//     else if(operator=="-")
//     res=first-second
//     else if(operator=="*")
//     res=first*second
//     else
//     res=Math.floor(first/second)
//   }
//   else{
//     result=parseInt(result)
//     if(first.indexOf('x')!=-1){
//       x=first
//       second=parseInt(second)
//       if(operator=="+")
//       res=result-second
//       else if(operator=="-")
//       res=result+second
//       else if(operator=="*")
//       res=Math.floor(result/second)
//       else
//       res=result*second
//     }
//     else{
//       let x=second
//       first=parseInt(first)

//       if(operator=="+")
//       res=result-first
//       else if(operator=="-")
//       res=result-first
//       else if(operator=="*")
//       res=Math.floor(result/first)
//       else
//       res=Math.floor(result/first)
//     }
//   }
//   res=res.toString
//   let k=0;
//   for(let i of x){
//     if(i=='x'){
//       resultMath=res[k]
//       break;
//     }else
//     k=k+1
//   }
//   return resultMath
//   // code goes here  


// }
// let str="4 - 2 = x"
// // keep this function call here 
// console.log(MathChallenge(str))

// function TimeConvert(num) { 
//     var hours=0;
//     var minutes=0;
//     var times = num;
//     for(var i=0; i<times; i+=60) {//loop through number every 60
//         if(num>=60) { //for every 60 add 1 hour
//             hours+=1;
//             num -= 60;
//         }else if(num<60){
//             minutes=num;
//         }
//     }

//   var newMinute=0;
//     if (minutes<10){
//             newMinutes="0"+minutes;
//         }else if(minutes>10){
//             newMinutes=minutes;
//         }

//     return(hours + ":" + newMinutes);          
// }

// console.log(TimeConvert(120));

// function StringChallenge(num) { 
//     var hours=0
//     var minutes=0
//     var times=num;
 
//     for(var i=0; i<times; i+=60){
//       if(num>=60){
//         hours+=1
//         num -=60;
//       }else if(num<60){
//         minutes=num
//       }
//     }
//     var newMinute=0;
//     if(minutes<10){
//       newMinutes="0"+minutes;
 
//     }else if(minutes>10){
//       newMinutes=minutes
//     }
//    // code goes here  
//    return (hours + ":" +newMinutes); 
 
//  }
    
//  // keep this function call here 
//  console.log(StringChallenge(120))

const operator ="6*(4/2)+3*1"

// take the operand input

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);
