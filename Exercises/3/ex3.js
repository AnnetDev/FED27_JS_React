const numbers = [1, 2, 3, 4, 5];

function doubleArr(num) {
    return num * 2;
}

const doubled = numbers.map(doubleArr);
console.log(doubled);

// 

const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
];

const names = users.map(user => user.name);

console.log(names);

// 

const products = [
    { name: 'Laptop', price: 999 },
    { name: 'Phone', price: 699 },
    { name: 'Tablet', price: 499 },
];

const productsDetails = products.map(product => `${product.name}: $${product.price}`);

console.log(productsDetails);

// 

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers1.filter(number => number % 2 === 0)

console.log(evenNumbers);

// 

const products1 = [
    { name: 'Laptop', price: 999, inStock: true },
    { name: 'Phone', price: 699, inStock: false },
    { name: 'Tablet', price: 499, inStock: true },
    { name: 'Watch', price: 299, inStock: false },
];

const filteredProducts = products1.filter(product => product.inStock === true);

console.log(filteredProducts);

// 

const users1 = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 17, active: true },
    { name: 'Charlie', age: 30, active: false },
    { name: 'Diana', age: 22, active: true },
];

const filteredUsers = users1.filter(user => user.age > 18 && user.active);

console.log(filteredUsers);

//

const allowedRoles = ['admin', 'moderator', 'editor'];
const userRole = 'moderator';

function checkIfAllowed(allowed, role) {
    if (allowed.includes(role)) {
        return true;
    } return false
}
checkIfAllowed(allowedRoles, userRole);

//
const colors = ['red', 'green', 'blue', 'yellow'];

function findIndex(array, element) {
    return array.indexOf(element);
}

findIndex(colors, 'blue')

//

const numbers2 = [10, 20, 30, 40, 50];

console.log(numbers2.reduce((total, num) => total += num));

// 

const numbers3 = [23, 45, 12, 67, 34, 89, 21];

const maxValue = numbers3.reduce(function (acc, cur) {
    if (cur > acc) {
        return cur
    } return acc;
});

console.log(maxValue);

// 

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

function countOccurrences(arr) {
    const occurrences = arr.reduce(function (acc, fruit) {
        if (acc[fruit] === undefined) {
            acc[fruit] = 1
        } else {
            acc[fruit] = acc[fruit] + 1
        } return acc
    }, {}); // {} - empty object
    //  acc['apple'] нет (undefined) → acc['apple'] = 1
    // acc = { apple: 1 }


    console.log(occurrences);
}

countOccurrences(fruits);

// 

const people = [
    { name: 'Alice', city: 'New York' },
    { name: 'Bob', city: 'London' },
    { name: 'Charlie', city: 'New York' },
    { name: 'Diana', city: 'London' },
];

function groupByCity(arr) {
    const groupedByCity = arr.reduce(function (acc, person) {
        if (acc[person.city] === undefined) {
            acc[person.city] = [];
        }
        acc[person.city].push(person.name)
        return acc;
    }, {});

    console.log(groupedByCity);
}

groupByCity(people);

//

function getLastN(arr, n) {
    const slised = arr.slice(-n)
    return slised;
}

console.log(getLastN([1, 2, 3, 4, 5], 3));

//

const letters = ['a', 'b', 'c', 'd', 'e'];

letters.splice(1, 2, 'x', 'y'); // index, count(or 0), items...

console.log(letters);

//

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squred = numbers4.filter(number => number % 2 === 0).map(number => number ** 2);

console.log(squred);

//

const orders = [
    { id: 1, status: 'completed', total: 100 },
    { id: 2, status: 'pending', total: 200 },
    { id: 3, status: 'completed', total: 150 },
    { id: 4, status: 'cancelled', total: 75 },
    { id: 5, status: 'completed', total: 300 },
];

const completed = orders
    .filter(item => item.status === 'completed')
    .map(item => item.total)
    .reduce((acc, curr) => acc += curr);


console.log(completed);

//

function removeDuplicates(arr) {

    return arr.filter((element, index) => arr.indexOf(element) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//

function findMissing(arr1, arr2) {
    return arr1.filter(function(element) {
        if(arr2.includes(element)){
            return false;
        } else {
            return element;
        }
    });
}

const required = ['passport', 'ticket', 'visa', 'insurance'];
const packed = ['ticket', 'passport'];

console.log(findMissing(required, packed));