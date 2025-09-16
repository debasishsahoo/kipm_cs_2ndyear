let result = 2 + 3 * 4;  // 14, not 20 (multiplication first)
let result2 = (2 + 3) * 4;  // 20 (parentheses first)

// Common precedence (high to low):
// 1. Parentheses ()
// 2. Exponentiation **
// 3. Multiplication *, Division /, Modulus %
// 4. Addition +, Subtraction -
// 5. Comparison operators
// 6. Logical AND &&
// 7. Logical OR ||
// 8. Ternary ?:
// 9. Assignment =, +=, -=, etc.
// Operators with the same precedence are evaluated left to right (except for exponentiation which is right to left)
let a = 5 + 3 * 2 ** 2;  // 13 (exponentiation first, then multiplication, then addition)
let b = (5 + 3) * 2 ** 2;  // 32 (parentheses first, then exponentiation, then multiplication)
let c = 5 + 3 > 6 && 2 < 4;  // true (comparison first, then logical AND)
let d = 5 + 3 > 6 || 2 > 4;  // true (comparison first, then logical OR)
let e = 5 > 3 ? 10 : 20; // 10 (ternary operator)
let f = 5 + 3 * 2 > 10 ? 100 : 200; // 200 (multiplication first, then addition, then comparison, then ternary)
let g = 5;
g += 3 * 2; // 11 (multiplication first, then assignment)
let h = 5;
h = h + 3 * 2; // 11 (multiplication first, then addition, then assignment)

