//16 Write a program to generate fibonacci series up to n terms (assume first two terms
// are 0 and 1 respectively).


// let a=0; let b=1;
// console.log(a);
// console.log(b);

// for(var i=0; i<=10; i++){
//     var temp=a+b;
//     console.log(temp)
//     a=b;
//     b=temp;
// }

//or 2nd medthod
// const num= 100;
// let x=0;
// let y=1;

// let fn =x+y
// console.log (x)
// while (fn<num){
//     console.log(fn)
//     fn=x+y;
//     x=y;
//     y=fn
// }

//17 print
// *****
// *****
// *****
// *****
// *****



// let n=5;
// let string="";

// for (let i=0; i<n; i++){
//     for(let j=0; j<i; j++){
//         string+="*"
//     }
//     string+="\n"
// }
// console.log(string)

//20 Write a function that reverses a string passed to it as argument and returns themreversed string.

// function reverseS(str){

//     let newString="";
//     for (let i=str.length-1; i>=0;i--){
//         newString +=str[i]
//     }
//     return newString
// }
// const string ="hello world"
// const result=reverseS(string);
// console.log(result)

//22  Write a program that checks whether the number is palindrome or not.
// let value="madan";
//  const palind=()=>{
//     let first=value.toString().split("").reverse().join("")
//     let second=value.toString()

//     if(first==second){
//         console.log("palindrome")
//     }else{
//         console.log("not palindrone")
//     }
//  }
//  palind()

//23

// const number =9;

// const result=number.toString(2);
// console.log(result)
 
//25  Write a program that performs linear search.

let data=[30,15,12,45,36,8,7,5]
let find=8;
let pos=undefined;

for(let i=0; i<=data.length; i++){
    if(data[i]==find){
        pos=i;
       break; 
    }
    
}
console.log(pos)