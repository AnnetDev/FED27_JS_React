const person = {
    name: "John",
    age: 30,
    adress: {
        city: "New York",
        country: "USA"
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },   
    isBirthday: true,
    hobbies: ["reading", "traveling", "cooking"]

}

const {name: personName} = person;
const {adress: {city}} = person;

console.log(person.name); 
console.log(personName); 
console.log(city); 

function checkPerson ({name}) {
    console.log(`The person's name is ${name}.`);
}

checkPerson(person);

// class human  {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     canSpeak() {
//         console.log(`${this.name} can speak.`);
//     }   

// }

// const person1 = new human("Alice", 25);


const arr = [1, 2, 3, 4, 5];

arr.unshift(0);

arr.splice(0, 1);

console.log(arr);

