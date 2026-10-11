// Common Types of Functions in JavaScript

// 1. Function Declaration
function greetWithDeclaration(name) {
  return "Hello, " + name;
}

console.log(greetWithDeclaration("Asha"));

// 2. Function Expression
const greetWithExpression = function (name) {
  return "Hello, " + name;
};

console.log(greetWithExpression("Ravi"));

// 3. Arrow Function
const greetWithArrow = (name) => {
  return "Hello, " + name;
};

// Short arrow-function form
const greetShort = (name) => "Hello, " + name;

console.log(greetWithArrow("Neha"));
console.log(greetShort("Amit"));

// 4. Anonymous Function
// A function without its own name, often used as a callback.
setTimeout(function () {
  console.log("This runs after 1 second");
}, 1000);

// 5. Callback Function
// A function passed into another function to run later.
function processTask(taskName, callback) {
  console.log("Processing: " + taskName);
  callback();
}

processTask("Review PR", function () {
  console.log("Task completed");
});

// 6. Immediately Invoked Function Expression (IIFE)
// A function that runs immediately after it is created.
(function () {
  console.log("This runs immediately");
})();

// 7. Constructor Function
// Older JavaScript style for creating similar objects.
// Classes are more common in modern JavaScript.
function Employee(name, role) {
  this.name = name;
  this.role = role;
}

const employee = new Employee("Asha", "Developer");

console.log(employee.name);
console.log(employee.role);

// 8. Generator Function
// Can pause and continue, producing one value at a time.
function* taskSteps() {
  yield "Create task";
  yield "Assign task";
  yield "Complete task";
}

const steps = taskSteps();

console.log(steps.next().value); // Create task
console.log(steps.next().value); // Assign task
console.log(steps.next().value); // Complete task

// 9. Async Function
// Used for asynchronous work, such as API calls.
// An async function always returns a Promise.
async function getTasks() {
  const response = await fetch("/api/tasks");
  return response.json();
}

// Beginner learning order:
// 1. Function declarations
// 2. Parameters and return values
// 3. Function expressions
// 4. Arrow functions
// 5. Callback functions
// 6. Async functions
//
// Learn constructor functions, IIFEs, and generator functions later.
