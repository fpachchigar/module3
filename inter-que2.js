//a) standard if statement version
function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max - 3) + "...";
  } else {
    return str;
  }
}
console.log(truncate("This text will be truncated if it is too long", 25));

//b) using conditional operator

function truncate(str, max) {
  return str.length > max ? str.slice(0, max - 3) + "..." : str;
}

console.log(truncate("This text will be truncated if it is too long", 25));