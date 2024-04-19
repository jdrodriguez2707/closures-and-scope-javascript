"use strict";
// window.pi // 3.1416
pi = 3.1416;
console.log(pi);

function myFunction() {
  // "use strict";
  language = "English"; // Global scope
  return (pi = 3.1416);
}

console.log(myFunction());
console.log(language);
