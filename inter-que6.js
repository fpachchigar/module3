/*6. Create a function unique(duplicatesArray) which takes an array parameter that may
include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.
Test with the following arrays and create another one of your own.*/

function unique(duplicatesArray) {
  const uniqueArray = [];

   for (let i = 0; i < duplicatesArray.length; i++) {
    if (! uniqueArray.includes(duplicatesArray[i]))
    {
   uniqueArray.push(duplicatesArray[i]);
    }
   }
   return uniqueArray;
}
const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const fruits = ["banana", "mango", "apple", "orange", "pear", "kiwi"];

console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(fruits)); // ['banana', 'mango', 'apple', 'orange', 'pear', 'kiwi']
