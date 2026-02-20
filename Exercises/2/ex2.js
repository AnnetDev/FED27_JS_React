function funcReq(number1, number2, operation) {
    switch (operation) {
        case 'add':
            return number1 + number2;
        case 'subtract':
            return number1 - number2;
        case 'multiply':
            return number1 * number2;
        case 'divide':
            return number1 / number2;
        default:
            return 'Invalid operation';
    }
}

function createCounter(startValue = 0) {
    let count = startValue; // приватная переменная в замыкании

    return {
        increment() {
            return ++count; // префиксный инкремент возвращает новое значение
        },
        decrement() {
            return --count;
        },
        getCount() {
            return count;
        }
    };
}

for (var i = 1; i <= 3; i++) {
    function iife (j) {
        setTimeout(() => {
            console.log(j);
        }, j * 1000);
    }
    iife(i);
}

for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}

for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}