// Task 2: Write a JavaScript function that takes marks between
// 0-100 from the user and outputs Fail ( marks below 40),
// Average (marks below 60), Good ( marks below 80) otherwise
// Excellent. Use nested ternary conditional operators.


let marks=[ 55];
let max_marks = marks.length * 100;
var Avgmarks = 0;

for (var i=0; i < marks.length; i++) {
        Avgmarks += marks[i];
        var avg = (Avgmarks/marks.length);
}

console.log("marks : " + (Avgmarks)/marks.length);

        if (avg < 40){
          console.log("Fail");      
          } 
        else if (avg < 60) {
                console.log("Average"); 
                  } 
        else if (avg < 80) 
             {
                console.log("good"); 
        } else if (avg < 100) {
                console.log("excellent"); 
}