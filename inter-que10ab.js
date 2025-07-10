/* 10.The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following: 

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today"); */

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

//Print the total number of minutes that have passed so far today
const minutesPassedToday = today.getHours() * 60 + today.getMinutes(); // 5-7-2025 15:16:50 PM
console.log(minutesPassedToday + " minutes have passed so far today");

//Print the total number of seconds that have passed so far today
const secondsPassedToday = minutesPassedToday * 60 + today.getSeconds(); // 5-7-2025 15:16:50 PM
console.log(secondsPassedToday + " seconds have passed so far today");
