let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);
console.log(numbers);

let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);

let arr = [1, 2, 3, 4];
let filtered = arr.filter(n => n > 2);
console.log(filtered);
console.log(arr); 