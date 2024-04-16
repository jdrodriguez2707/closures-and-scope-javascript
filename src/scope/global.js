// Variables

var a; // Declaration
a = "a"; // Initialization
var b = "b"; // Declaration and Initialization
b = "bb"; // Reassignment
var a = "aa"; // Re-declaration

// Scope global
var fruit = "Apple"; // Global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Colombia"; // Global
  console.log(country);
}

countries();
console.log(country);