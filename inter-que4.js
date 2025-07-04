/*Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a
dash.
b) Create variants of the camelCase function that use different types of for loops, and
c) with and without the conditional operator.*/
/*console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display */
function camelCase(cssProp) {
    return cssProp
    .split('-')
    .map((word, index) => index === 0 ?
word : word[0].toUpperCase() +
word.slice(1))
    .join('');
}