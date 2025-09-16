// For integers larger than Number.MAX_SAFE_INTEGER
const bigNumber = BigInt(9007199254740991);
const anotherBig = 1234567890123456789012345678901234567890n;

console.log(bigNumber);  // 9007199254740991n
console.log(typeof bigNumber); // "bigint"

// Cannot mix BigInt with regular numbers
console.log(bigNumber + 1); // TypeError!
console.log(bigNumber + 1n); // Works!
