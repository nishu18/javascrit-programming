// Q7:Write a program to merge properties of two objects
// using spread operator and Object.assign().



const person = {
    name: 'Jack',
    age:26
}


const student = {
    gender: 'male'
}

// merge two objects
const newObj = Object.assign(person, student);

console.log(newObj);



// Q8:Write a program to remove a property from an object.

const students = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    
    score: {
        maths: 90,
        science: 80
    }
};

// deleting a property from an object

delete students['score'];

console.log(students);