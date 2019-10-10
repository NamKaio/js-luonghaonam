let num1 = 10;

const num2 = num1;

num1 = 20;

console.log(num1);
console.log(num2);

const person = {
    name: "teo",
    age: 13,
};

const person2 = {
    ...person
};

console.log(person);