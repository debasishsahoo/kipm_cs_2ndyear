// Anonymous function as callback
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);



// Anonymous arrow function as callback
// document.addEventListener('click', (event) => {
//     console.log('Document clicked at:', event.clientX, event.clientY);
// });

// Anonymous functions in array methods
const users = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 35}
];
// Using anonymous function with forEach
users.forEach(function(user) {
    console.log(user.name + ' is ' + user.age + ' years old.');
});

// Using anonymous arrow function with map
const userNames = users.map((user) => user.name);
console.log(userNames);

// Using anonymous function with filter
const adults = users.filter(function(user) {
    return user.age >= 30;
});
console.log(adults);

// Using anonymous arrow function with reduce
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log('Total age of users:', totalAge);

// Sort by age (descending)
users.sort((a, b) => b.age - a.age);
console.log('Users sorted by age (descending):', users);

// Using anonymous function with find
const userOver30 = users.find(function(user) {
    return user.age > 30;
});
console.log('User over 30:', userOver30);

// Using anonymous arrow function with some
const hasTeenager = users.some((user) => user.age < 20);
console.log('Is there any teenager?', hasTeenager);

// Using anonymous function with every
const allAdults = users.every(function(user) {
    return user.age >= 18;
});
console.log('Are all users adults?', allAdults);
