const animals = ["Tiger", "Giraffe"];

console.log("Original:", animals);

//a) add  2 new values to the end

animals.push("Lion", "Kangaroo");
console.log("After adding to end:", animals);

//b) add 2 new values to the beginning

animals.unshift("Ostrich", "Palar Bear");
console.log("After adding to the beginning:", animals);

//c) sort the values alphabetically

animals.sort();
console.log("Sorted alphabetically:", animals);

//d) Function to replace the middle animal

function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.lenght / 2);
  animals[middleIndex] = newValue;
}

replaceMiddleAnimal("Elephant");
console.log("After replacing middle animal:", animals);

//e) Function to find matching animals

function findMatchingAnimals(animals, beginsWith) {
  return animals.filter(animal =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
}


const result =
findMatchingAnimals(animals, "g");
console.log(result); 