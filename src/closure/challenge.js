function sumWithClosure(firstNum) {
  return (secondNum = 0) => firstNum + secondNum;
}

console.log(sumWithClosure(2)(3));
console.log(sumWithClosure(90)());