const today = new Date();
const dob = new Date("10-12-1990"); // October 12, 1990

//Today: 05-07-2025, DOB: 12-10-1990 = 34 years 8 months 24 days
let years = today.getFullYear() - dob.getFullYear(); // 35

let months = today.getMonth() - dob.getMonth(); // 7 - 10 = -3
let days = today.getDate() - dob.getDate(); // 5 - 12 = -7

console.log(`${years}, ${months}, ${days}`);

if (days < 0) {
  // Borrow days from the previous month
  months--;
  const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0); //1 June 2025
  days += prevMonth.getDate();
}

if (months < 0) {
  months += 12; // -3 + 12 = 9
  years--; //
}

console.log(`I am ${years} years, ${months} months, and ${days} days old.`);
//Today: 05-07-2025, DOB: 05-07-1990 = 35 years
//Today: 05-07-2025, DOB: 12-10-1990 = 34 years 8 months 24 days
//Today: 05-07-2025, DOB: 30-09-1980 = 44 years 9 months 5 days
