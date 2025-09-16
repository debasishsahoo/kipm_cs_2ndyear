// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy
if (0) {
  console.log("Won't run");
}
if ("hello") {
  console.log("Will run"); // Non-empty strings are truthy
}
if ([]) {
  console.log("Will run"); // Empty arrays are truthy
}
if ({}) {
  console.log("Will run"); // Empty objects are truthy
}
if (null) {
  console.log("Won't run");
}
if (undefined) {
  console.log("Won't run");
}
if (NaN) {
  console.log("Won't run");
}
if (42) {
  console.log("Will run"); // Non-zero numbers are truthy
}
if (-1) {
  console.log("Will run"); // Non-zero numbers are truthy
}
if (false) {
  console.log("Won't run");
}
if (true) {
  console.log("Will run");
}
if ("") {
  console.log("Won't run");
}
if (" ") {
  console.log("Will run"); // Non-empty strings are truthy
}
if ("0") {
  console.log("Will run"); // Non-empty strings are truthy
}

if ("false") {
  console.log("Will run"); // Non-empty strings are truthy
}

if (new Boolean(false)) {
  console.log("Will run"); // Objects are truthy
}
if (new Number(0)) {
  console.log("Will run"); // Objects are truthy
}

if (new String("")) {
  console.log("Will run"); // Objects are truthy
}

if (function () {}) {
  console.log("Will run"); // Functions are truthy
}
if (Symbol()) {
  console.log("Will run"); // Symbols are truthy
}

if (BigInt(0)) {
  console.log("Won't run"); // BigInt 0 is falsy
}
