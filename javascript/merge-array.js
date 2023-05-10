let data1=[1,5,2,6,5]
let data2=[8,7,8,7,5]
// let data=[]
// for(let i=0;i<data1.length; i++){
//     data[i]=data1[i]
// }
// for(let i=0;i<data2.length; i++){
//     data[data1.length+i]=data2[i]
// }
// console.log(data)

//or
let data=[...data1, ...data2]
console.log(data)