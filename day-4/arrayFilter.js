// Array.filter
// Use `filter` when the result should be a new array containing only items that pass a condition.
// The output can have zero, one, or many items.
const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
console.log(arrayOfNumbers);

const oddNumbersArray = arrayOfNumbers.filter((number) => number % 2 !== 0);

console.log(oddNumbersArray);
