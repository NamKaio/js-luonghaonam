class human{
    species = "human";
}

class Person extends human{
    name = "van teo";
    printName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printName();
console.log(person.species);
