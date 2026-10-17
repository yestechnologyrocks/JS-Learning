const task = {
  title: "Complete the project",
  priority: "High",
  status: "In Progress",
};
// Longer version
const taskTitle = task.title; // Complete the project
const taskStatus = task.status; // In Progress
console.log(taskTitle, taskStatus); // Output: Complete the project In Progress

// Shorter version using destructuring

const { title, status } = task;
console.log(title, status); // Output: Complete the project In Progress

// Destructuring is a shorter way to take the values from object and put them into the variables.

// Rename a destructeured property
const product = {
  p_n: "LG TV", // Product Name
  price: 999,
  brand: "LG",
};
const { p_n: productName, brand } = product;
console.log(productName);

const dog = {
  id: 1,
  name: "Tommy",
  color: "grey",
  n: ["happy", "caring"],
};
dog.n.push("sweet");
const { n: nature } = dog;

console.log(nature);
