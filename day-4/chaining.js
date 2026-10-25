const tasks = [
  { id: 1, title: "Review PR", status: "TODO" }, //0
  { id: 2, title: "Update profile", status: "DONE" }, //1
  { id: 3, title: "Check the profile", status: "DONE" },
  { id: 4, title: "", status: "CLOSED" },
];

const doneTitles = tasks.filter((task) => task.status === "DONE");
console.log(doneTitles);

const titleTasks = doneTitles.map((task) => task.title);
console.log(titleTasks);

// Chaning: Small transformations in order
const newTitlesWithDoneStatus = tasks
  .filter((task) => task.status === "DONE")
  .map((task) => task.title);

// Named varibales are also good

const todoTasks = tasks.filter((task) => task.status === "TODO");
const todoTitles = todoTasks.map((task) => task.title);

// Guided practice:

// Use the task list above. Ask the student to create:
// (1) a new list of TODO titles,
// (2) a total number of tasks,
// (3) a status-count object. { TODO: 1, DONE: 2, CLOSED: 1 }

const todoTitlesGuided = tasks.map((task) => task.title);
console.log("Guided Practice");
console.log(todoTitlesGuided);

console.log(tasks.length);

const countByStatus = tasks.reduce((counts, task) => {
  const currentCounter = counts[task.status] ?? 0;
  counts[task.status] = currentCounter + 1;
  return counts;
}, {});
console.log(countByStatus);

// Student homework
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
  },
  {
    id: 2,
    name: "Notebook",
    category: "Stationery",
    price: 120,
  },
  {
    id: 3,
    name: "Water Bottle",
    category: "Home & Kitchen",
    price: 499,
  },
  {
    id: 4,
    name: "Bluetooth Headphones",
    category: "Electronics",
    price: 2499,
  },
  {
    id: 5,
    name: "Running Shoes",
    category: "Fashion",
    price: 1999,
  },
];
// Use filter then map to create a list of names of product which are costlier than 500
// Rewrite one chain using named variables. In a comment, explain which version feels easier to read and why.
// Optional: make a function `getCategoryCounts(product)` that returns the category-count object.
