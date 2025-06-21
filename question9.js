//let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
//let dog1 = 'Bingo';
//let cat1 = { name: 'Fluffy', breed: 'Siberian' };

//a) add new sport to moresprts;
let teamSports = ['Hockey' , 'Cricket' , 'Volleyball'];
let moreSports = teamSports;

moreSports.push('Basketball');
moreSports.unshift('Football');

//b) Create dog2 equal to dog1 and change its value 

let dog1 = 'Bingo';
let dog2 = dog1;
dog2 = 'Max';

//c) Create cat2 equal to cat1 and change its name

let cat1 = {name: 'Fluffy' , breed: 'Siberian'};
let cat2 = cat1;
cat2.name = 'Rocket';

//d) Print the original values

console.log('teamSports:', teamSports);
console.log('')