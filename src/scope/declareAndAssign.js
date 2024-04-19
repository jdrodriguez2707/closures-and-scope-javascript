var firstName; // undefined
firstName = "Frosty";
console.log(firstName);

var lastName = "Castro"; // declare / assign
lastName = "Rodriguez"; // reassign
console.log(lastName);

var secondName = "David"; // declaring / assigning
var secondName = "Andres"; // reassigning
console.log(secondName);

// let
let fruit = "Apple"; // declare / assign
fruit = "Kiwi"; // reassign
console.log(fruit);

let fruit = "Banana";
console.log(fruit);

// const
const animal = "dog"; // declare / assign
// animal = "cat"; // reassign
const animal = "Snake";
console.log(animal);

const vehicles = [];
// Here we aren't reassigning because the constant is the memory reference and not the array
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

vehicles[0] = "🚘"; // It's not reassign
console.log(vehicles);

vehicles = ["🚗"]; // reassign
console.log(vehicles);
