// Array.find: It return first occuerence of the item
// Use `find` when you need one item, such as a task with a specific id. If nothing matches, the result is `undefined`,
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 4];

const findNumberFour = arrayOfNumbers.find((number) => number === 55);
console.log(findNumberFour);

const tasks = [
  { id: 1, title: "Review PR", status: "TODO" }, //0
  { id: 2, title: "Update profile", status: "DONE" }, //1
];
const task = tasks.find((task) => task.id === 2);
console.log(task);
