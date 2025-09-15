// Integers and floating-point numbers
const age = 25;
const price = 19.99;
const negative = -42;

// Special number values
const infinity = Infinity;
const negativeInfinity = -Infinity;
const notANumber = NaN;
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);
console.log(2 ** 3);

console.log(typeof 42);
console.log(typeof 3.14);
console.log(typeof NaN);
console.log(Number.isNaN(NaN));


//Real-World Use Cases
//1. Parsing Numeric Values from Strings
const input1 = "42";
const parsedNumber = parseInt(input1, 10);
console.log(parsedNumber);

const input2 = "250";
const quantity = Number(input2);
console.log("Converted quantity:", quantity, typeof quantity);

//2. Handling Invalid Numeric Conversion
const input3 = 'hello';
const value = Number(input3);
console.log(value); 
console.log(isNaN(value))
//3. Working with Infinity and NaN
console.log(1 / 0); 
console.log(-1 / 0);
console.log(0 / 0);
console.log('abc' / 2); 
//4. Using Number Constants

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.EPSILON);          // 2.220446049250313e-16

//5. Fixed Decimal Places Formatting
const price2 = 123.45678;
console.log(price2.toFixed(2));
console.log(price2.toFixed(3));







