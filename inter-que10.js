/* 10.The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following: */

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

//a) Print the total number of minutes that have passed so far today
const minutesPassedToday = today.getHours() * 60 + today.getMinutes(); // 5-7-2025 3;16;50 pm
console.log(minutesPassedToday + " minutes have passed so far today");

//b) Print the total number of seconds that have passed so far today
const secondsPassedToday = minutesPassedToday * 60 + today.getSeconds();
console.log(secondsPassedToday + " seconds have passed so far today");

//c) Calculate and print your age as: 'I am x years, y months and z days old'
const dob = new Date("09-30-1980");
/*let years = today.getFullYear() - dob.getFullYear();
let months = today.getMonth() - dob.getMonth();
let days = today.getDate() - dob.getDate();*/

let ms = today - dob;
console.log(`difference in ms: ${ms}`);
const dt = new Date(ms);
console.log(dt.toLocaleString());
console.log(
  `I am ${dt.getFullYear()} years, ${dt.getMonth()} months and ${
    dt.getDate() - 1
  } days old`
);
//d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.
