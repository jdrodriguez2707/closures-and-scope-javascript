/*
Closure:
The nested functions that remember the set of variables that they could access, even if they are invoked from another place, from another scope.
*/

function createCounter() {
  let counter = 0;

  // This function is a closure because it is defined inside another function and include the variable counter
  return function increase() {
    counter++;
    return counter;
  };
}

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());