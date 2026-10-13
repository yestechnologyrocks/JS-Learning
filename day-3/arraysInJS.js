// Order: 0 1 2 3
// Tiffin: chapati, sabji, daal etc
// Arrays will use square brackets `[]` to group related data together.
// They are ordered, meaning each item has a specific position in the list,
//  and you can access them using their index (starting from 0). Arrays are useful for storing multiple values of the same type, such as a list of tasks or a collection of items.
const numbers = [1, 2, 3, 4, 5]; // array of numbers
// Size of this array is 5
// Array has index starting 0 to n
// last element will n - 1 index

const fruits = ["apple", "banana", "cherry", "date"]; // array of strings
const arrayOfMultipleDataTypes = [
  42, // number
  "hello", // string
  true, // boolean
  null, // null
  { key: "value" }, // object
  [1, 2, 3], // array
]; // array with mixed data types

const taskList = [
  { id: 1, title: "Task 1", status: "TODO" },
  { id: 2, title: "Task 2", status: "IN_PROGRESS" },
  { id: 3, title: "Task 3", status: "DONE" },
];

// Accessing elements in an array
// console.log(taskList[1]);

// Array pop will be used to remove any element from the end of the array and return that element.
// It will also change the size of the array.
console.log(numbers.pop()); // Removes the last task and returns it
// console.log(numbers); // [1, 2, 3, 4]

// Array push will be used to add any element to the end of the array and return the new length of the array.
numbers.push(5); // Adds a new number to the end of the array
// console.log(numbers); // [1, 2, 3, 4, 5]
numbers.push(6); // Adds a new number to the end of the array
// console.log(numbers); // [1, 2, 3, 4, 5, 6]

taskList.unshift({ id: 0, title: "Task 0", status: "TODO" }); // Adds a new task to the beginning of the array
console.log(taskList); // [ { id: 0, title: 'Task 0', status: 'TODO' }, { id: 1, title: 'Task 1', status: 'TODO' }, { id: 2, title: 'Task 2', status: 'IN_PROGRESS' }, { id: 3, title: 'Task 3', status: 'DONE' } ]

// Array shift will be used to remove any element from the beginning of the array and return that element.

taskList.shift(); // Removes the first task and returns it
console.log(taskList); // [ { id: 1, title: 'Task 1', status: 'TODO' }, { id: 2, title: 'Task 2', status: 'IN_PROGRESS' }, { id: 3, title: 'Task 3', status: 'DONE' } ]

taskList.length; // // 3
numbers.length; // 6

// Student homework
// Create an array with four project names. Log the first, second, and last project using indexes and `length`.
// Create a `shoppingTasks` array. Add two items with `push`, then remove the last one with `pop`.
// Create an array with three task objects (`id`, `title`, `status`). Log the title of the third task.
// Write a comment explaining why `tasks[0]` is the first task, not the second.
