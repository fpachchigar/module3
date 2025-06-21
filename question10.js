//a) Create a new person using the constructor function and store it in a variable

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;

  this.canDrive = function () {
    return this.age >= 16;
  };
}
//a) first person
const person1 = new Person("Henry", 25);
//b) Create a second person using different name and age values and store it in a separate variable
const person2 = new Person("Helen", 15);

//c) Print out the properties of each person object to the console
console.log("person 1:", person1);
console.log("Can Person 1 drive?", person1.canDrive());

console.log("Person 2:", person2);
console.log("Can Person 2 drive?", person2.canDrive());

/* d) Rewrite the constructor function as a class called PersonClass and use it to create
 a third person using different name and age values. Print it to the console as well. */
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  //e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive. function Person(name, age)
  canDrive() {
    return this.age >= 16;
  }
}
// third person
const person3 = new PersonClass("Erin", 19);

console.log("Person 3:", person3);
console.log("Can Person 3 drive?", person3.canDrive());
