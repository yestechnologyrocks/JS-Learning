// What is a function?
//  A function is a block of code that performs a specific task.
// It can take inputs (parameters), execute a series of statements, and return an output (result).
// Functions help in organizing code, promoting reusability, and improving readability.

// Function Declaration
function addition(a, b) {
  let c = a + b;
  return c;
  // Unreachable code after return statement
  console.log("This line will not be executed");
}
// calling the function
console.log(addition(10, 20)); // 30

// anaymous function on global scope, this function does not have a name and the code
//  after line number 20 will not be executed as it is returning. Remember, return statement will terminate the function
// execution and return the value to the caller.
// return function () {
//   console.log("Hello World");
// };

// Function without parameters
function greetUser() {
  console.log("Hello User");
}
greetUser(); // Hello User

// Function with parameters
function greetUserWithName(name) {
  console.log("Hello " + name);
}

greetUserWithName("John"); // Hello John

// Function with multiple parameters
function showTask(taskTitle, priority) {
  console.log("Task Title: " + taskTitle);
  console.log("Priority: " + priority);
}

showTask("Complete Assignment", "High");

function addition(a, b) {
  let c = a + b;
  return c;
}
// function in variable
let additonOfTwoNumber = addition(10, 20); // 30

// Function returning different data types based on conditions
function substraction(a, b) {
  let c = a - b;
  if (c < 0) {
    return "Result is negative"; // String
  } else {
    return c; // Number
  }
}

console.log(substraction(20, 10)); // 10
console.log(substraction(10, 20)); // Result is negative

console.log(additonOfTwoNumber); // 30
