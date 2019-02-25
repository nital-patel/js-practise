let title = "Hello world"
console.log(title);

let interestRate = 0.3
interestRate = 1;
console.log(interestRate);

//object
let person = {
    name: 'Mike',
    age: 30
};

//dot notation
person.name = 'John';
console.log(person.name);

//array
let selectorColors = ['red', 'blue'];
selectorColors[2] = 'green';
console.log(selectorColors.length);

//function
//perfoming a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ', 'Smith');
}
greet('John', 'Smith');

//Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));

function doSometing() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

}
doSometing();