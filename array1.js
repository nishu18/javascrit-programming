// practice 1

// let arr=[1,2,4,5,6,7,8,9]
// let a=45;
// a=Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// practice 2

// let arr=[1,2,4,5,6,7,8,9]
// let a;
// do{
// a=0;
// a=Number.parseInt(a)
// arr.push(a)

// }while(a!=0);
// console.log(arr)


// practice 3

// let arr=[1,2,4,5,6,7,8,9,10]

// let n=arr.filter((x)=>{
//     return x%10==0
// })
// console.log(n)

//practice 4

// let arr=[1,2,4,5,6,7,8,9,10]

// let n=arr.map((x)=>{
//     return x*x
// })
// console.log(n)


//practice 5

let arr=[1,2,4,5,6,7,8,9,10]

let n=arr.reduce((x,y)=>{
    return x*y
})
console.log(n)