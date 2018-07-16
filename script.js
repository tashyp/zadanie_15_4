/*
var greeting = 'Hello User!';
function greetWorld(isGreeting) {
    if (isGreeting) { // kod wykona się jeśli flaga isGreeting = true
        var greeting = 'Hello World!'; // (A) zasięg: cała funkcja
        return greeting;
    }
    return greeting; // zadziała hoisting i greeting nie będzie tym czym się spodziewamy
}
greetWorld(false); // undefined

for (let i = 0; i < length; i++) { //używamy let zamiast const
    console.log(i);
}

let greeting = 'Hello User!';
function greetWorld(isGreeting) {
    if (isGreeting) {
        let greeting = 'Hello World!';
        return greeting;
    }
    return greeting;
}
greetWorld(false); // 'Hello User!'

//Szablony
function sayHelloTo(person) {
    console.log(`Hello, ${person}, nice to meet you!`);
}
//Szablon
const HTML5_TEMPLATE = `
    <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    </body>
    </html>`;

//Arrow functions
// ES6
const numbers = [1, 2, 3];
const numbersPlusOne = numbers.map( x => x + 1 );
//ES5
var numbers = [1, 2, 3];
var numbersPlusOne = numbers.map(function (x) { return x + 1 });

//Destrukturyzacja
function getCoords() {
    return {
        x: 2,
        y: 5
    };
}

const coords = getCoords();
const x = coords.x;
const y = coords.y;

const {x, y} = getCoords();

const names = ['Jan', 'Zosia', 'Zbyszek', 'Kacper', 'Tomek', 'Magda'];
const [first, second, , fourth] = names; // puste miejsce pomiędzy second a fourth
// first = 'Jan', second = 'Zosia', fourth = 'Kacper'

function sayHello(name) { //5
  name = name || 'World';
  console.log('Hello ' + name);
}

function sayHello(name = 'World') { //ES6
  console.log('Hello ' + name);
}
const sayHello = (name = 'World') => console.log(`Hello ${name}!`);//ES6

if ( [] ) {
  console.log('Ten kod wykona się, JS traktuje [] jako wartość true')
}
if ( [] == true ) {
  console.log('Niestety ten kod już się nie wykona, chociaż moglibyśmy spodziewać się zupełnie innego zachowania');
}
if ( [] == false ) {
  console.log('Ten kod zostanie wykonany');
}

const names = ['Jan', 'Zosia', 'Zbyszek', 'Kacper', 'Tomek', 'Magda'];
const [first, second, ...rest] = names;


function sayHello(first, second, ...rest) {
    // ciało funkcji
}
*/

//Zadanie nr 1
const hello = "Hello";
const world = "World!";
const addString = (`${hello} ${world}`);
console.log('Zadanie 1');
console.log(addString);

//Zadanie nr 2
console.log('Zadanie 2');
const multiply = (a = 1, b = 1) => console.log(a * b);
multiply(2,5);
multiply(5);
multiply(8);

//Zadanie nr 3
function average() {
    let sum = 0;
    for (let i=0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length
}
console.log('Zadanie 3');
console.log("Średnia arytmetyczna to:", average(1)); // Should be 1
console.log("Średnia arytmetyczna to:", average(1, 3)); // Result is 2
console.log("Średnia arytmetyczna to:", average(1, 3, 6, 6)); // 4

//Zadanie nr 4
console.log('Zadanie 4')
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//Zadanie nr 5
console.log('Zadanie 5');
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , lastname] = data;
console.log(firstname, lastname);
