//let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
//let dog1 = 'Bingo';
//let cat1 = { name: 'Fluffy', breed: 'Siberian' };

/*a) add new sport to moresprts;
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let moreSports = teamSports;

moreSports.push("Basketball");
moreSports.unshift("Football");  

b) Create dog2 equal to dog1 and change its value

let dog1 = "Bingo";
let dog2 = dog1;
dog2 = "Max";

//c) Create cat2 equal to cat1 and change its name

let cat1 = { name: "Fluffy", breed: "Siberian" };
let cat2 = cat1;
cat2.name = "Rocket";

//d) Print the original values

console.log("teamSports:", teamSports); // teamSport has changed in print because moreSport is a refer to the same array
console.log("dog1:", dog1); // dog1 has not changed the value as strings are primitive and copied by value
console.log("cat1:", cat1); // cat1 value has changed, as objects are copied by reference  */

//e) Make independent copies

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let moreSports = teamSports;

moreSports.push("Basketball");
moreSports.unshift("Football");

let dog1 = "Bingo";
let dog2 = dog1;
dog2 = "Max";

let cat1 = { name: "Fluffy", breed: "siberian" };
let cat2 = cat1;
cat2.name = "Rocket";

console.log("teamSports:", teamSports);
console.log("dog1:", dog1);
console.log("cat1:", cat1);
