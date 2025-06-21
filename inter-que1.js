function ucFirstLetters(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(ucFirstLetters("los angeles"));
console.log(ucFirstLetters("love to learn"));
console.log(ucFirstLetters("hello world"));
console.log(ucFirstLetters("vetican city"));
console.log(ucFirstLetters("have a wonderful day"));
