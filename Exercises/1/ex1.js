function calculate(n1, n2, operation) {
    switch (operation) {
        case 'add':
            return n1 + n2;
        case 'subtract':
            return n1 - n2;
        case 'multiply':
            return n1 * n2;
        case 'divide':
            if (n2 === 0) {
                return 'Error: Division by zero';
            }
            return n1 / n2;
        default:
            return 'Invalid operation';
    }
}

calculate(10, 5, 'add'); // Outputs: 15
calculate(10, 5, 'subtract'); // Outputs: 5
calculate(10, 5, 'multiply'); // Outputs: 50
calculate(10, 5, 'divide'); // Outputs: 2
calculate(10, 5, 'power'); // Outputs: "Invalid operation"

// let evenNumbers = [];

// for (let i = 1; evenNumbers.length < 10; i++) {
//     if (i % 2 === 0) {
//         evenNumbers.push(i);
//     }
// }

// let sum = 0;
// for (let i = 0; i < evenNumbers.length; i++) {
//     sum += evenNumbers[i];
// }

// console.log(evenNumbers, sum);


// ------------------------------
// let n = 1;
// let array = [];

// while (n < 1000) {
//     n *= 2; 
//     array.push(n);
// }

// console.log(`It took ${array.length} iterations to exceed 1000. Final number: ${array[array.length - 1]}`);

// ------------------------------
let day;

function classifyDay(day) {
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            console.log('Weekday');
            break;
        case 'Saturday':
        case 'Sunday':
            console.log('Weekend')
            break;
        default: 
            console.log('Invalid day');        
            
    }
}

classifyDay('Thursday');