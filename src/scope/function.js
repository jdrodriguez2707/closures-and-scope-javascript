function greeting() {
  let userName = "Johan";
  console.log(userName);
  if (userName === "Johan") {
    console.log(`Hello ${userName}!`);
    var lastName = "Rodriguez"; // Function scope
  }
  console.log(lastName);
}

greeting();
// console.log(userName);
