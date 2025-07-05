let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004*/

//a) Explain why the above code returns the wrong answer
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?
//Answer-n .toFixed() return a string, not a number.
// Javascript concatenates instead of adding number due to adding two srings.

/*b) Create a function currencyAddition(float1, float2) which safely adds the two
decimal numbers float1 and float2 and returns the correct float result.*/
function currencyAddition(float1, float2) {
  return Math.round((float1 + float2) * 100) / 100;
}
console.log(0.3 == currencyAddition(0.1, 0.2));

/*c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns
the correct float result.*/
