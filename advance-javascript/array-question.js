// Task 1: Create a function that changes the date format from
// DD/MM/YYY to Month DD, YYYY. Use arrays to change
// numerical month to string month name.
// Example: Input: 31/03/2022
// Output: March 31, 2022

function formatDate(d) 
        {
          var date = new Date(d);

         if ( isNaN( date .getTime() ) ) 
         {
            return d;
         }
         else
        {
          
          var month = new Array();
          month[0] = "Jan";
          month[1] = "Feb";
          month[2] = "Mar";
          month[3] = "Apr";
          month[4] = "May";
          month[5] = "Jun";
          month[6] = "Jul";
          month[7] = "Aug";
          month[8] = "Sept";
          month[9] = "Oct";
          month[10] = "Nov";
          month[11] = "Dec";

          day = date.getDate();
          
          if(day < 10)
          {
             day = "0"+day;
          }
          
          return    day  + " " +month[date.getMonth()] + " " + date.getFullYear();
          }
            
         }


date_response = formatDate('2022/03/31');
alert(date_response)



// Write a program to append an object to an array using
// push(), splice() and spread operator.

function insertObject(arr, obj) {

    // append object
    arr.push(obj);
    
    console.log(arr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = {x: 12, y: 8};

// call the function
insertObject(array, object);


// task:3 Write a function to compare elements of two arrays,
// return true if the two arrays have the same elements otherwise
// return false.


function compareArrays(arr1, arr2) {

    // compare arrays
    const result = JSON.stringify(arr1) == JSON.stringify(arr2)
    //The JSON.stringify() method converts an array into JSON string

    // if result is true
    if(result) {
        console.log('The arrays have the same elements.');
    }
    else {
        console.log('The arrays have different elements.');
    }

}
const array1 = [1, 3, 5, 8];
const array2 = [1, 3, 5, 8];

compareArrays(array1, array2);