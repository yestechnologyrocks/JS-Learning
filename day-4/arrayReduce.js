// Array.reduce: it takes all the items in array and combines then into one single result
// The result can be a number, string, object or array
const numbers = [2, 3, 4];
const total = numbers.reduce((runningTotal, number) => {
  return runningTotal + number; // New Result:  2, 5, 9
}, 0); // Accumulator
console.log(total);

// Returning a single object

const tasks = [
  { id: 1, title: "Review PR", status: "TODO" }, //0
  { id: 2, title: "Update profile", status: "DONE" }, //1
  { id: 3, title: "Check the profile", status: "DONE" },
  { id: 4, title: "", status: "CLOSED" },
];

// {TODO: 1, DONE: 2, CLOSED: 1}

const countByStatus = tasks.reduce((counts, task) => {
  const currentCounter = counts[task.status] ?? 0;
  counts[task.status] = currentCounter + 1;
  return counts;
}, {});
console.log(countByStatus);
// Iterations
// counts(Accumulator): {}, {TODO: 1}, {TODO: 1, DONE: 1}, {TODO: 1, DONE: 2}
// task: { id: 1, title: "Review PR", status: "TODO" },
// { id: 2, title: "Update profile", status: "DONE" }
// { id: 3, title: "Check the profile", status: "DONE" },
// { id: 4, title: "", status: "CLOSED" }
// currentCounter: 0, 0, 1, 0
// results: {TODO: 1}, {TODO: 1, DONE: 1}, {TODO: 1, DONE: 2}, {TODO: 1, DONE: 2, CLOSED: 1}

//Student homework
// Use `reduce` to add `[5, 10, 15]`. Start with 0 and log the total.
// Given an array of task objects with `estimatedHours`, use reduce to calculate total estimated hours.
// Given tasks with TODO/DONE statuses, use reduce to count each status.
