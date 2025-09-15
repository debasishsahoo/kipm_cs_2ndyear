// Redeclaration allowed
var x = 2;
var x = 3;

// Hoisting
console.log(name); // undefined
var name = "Alice";
console.log(name); // "Alice"

// Function scope
function example() {
  if (true) {
    var functionScoped = "accessible outside this block";
  }
  console.log("functionScoped:", functionScoped);
}
example();
