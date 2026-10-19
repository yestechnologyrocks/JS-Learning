// array.map() tranform every item in new array
// This will not change the original array
const arrayOfNumbers = [1, 2, 45, 676, 7788];

const multiplyByTwo = arrayOfNumbers.map(function (number) {
  return number * 2;
});

const multiplyBy2 = arrayOfNumbers.map((number) => number * 2);
console.log(multiplyByTwo);
console.log("Orignial Array....");
console.log(arrayOfNumbers);
console.log("Shorter verison....");
console.log(multiplyBy2);
