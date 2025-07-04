/*Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.

/*a)The function should remove all dashes, and uppercase the first letter of each word after a
dash.*/

function camelCase(cssProp) {
  return cssProp
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

//b) Create variants of the camelCase function that use different types of for loops

function camelCase(cssProp) {
  let words = cssProp.split("-");
  let result = words[0];

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    result += word.charAt(0).toUpperCase() + word.slice(1);
  }
  return result;
}

//c) with and without the conditional operator.

function camelCase(cssProp) {
  let words = cssProp.split("-");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      result += words[i];
    } else {
      result += words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  return result;
}
