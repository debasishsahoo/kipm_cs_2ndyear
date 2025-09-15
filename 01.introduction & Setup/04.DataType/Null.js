// Intentional absence of value
let data = null;
const result = null;

// Common use case: resetting variables
let user = {name: "John", age: 30};
user = null; // Clear the reference

// Type checking quirk
console.log(typeof null); // "object" (this is a known bug!)
console.log(null === undefined); // false
console.log(null == undefined);  // true (loose equality)

//Function Returning Null When Nothing Found
const users = [
    { id: 1, name: 'Debasish' },
    { id: 2, name: 'Sohan' }
];

function findUserById(id) {
    const user = users.find(u => u.id === id);
    return user || null;
}
console.log(findUserById(1)); // { id: 1, name: 'Debasish' }
console.log(findUserById(3)); // null


//SON Representation
const data1= {
    name: 'Debasish',
    middleName: null
};

console.log(JSON.stringify(data1));