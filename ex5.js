//toan tu spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

const name = {
    name1: "hoang nam",
    name2: "hoang luong",
};

const dslop = {
    ...name,
    name3: "hoang tu",
    name4: "hoang hau",
};

console.log(arr1);
console.log(arr2);
console.log(name);
console.log(dslop);