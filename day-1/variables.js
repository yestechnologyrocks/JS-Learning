// Introduction to variables in JavaScript
//  Variables are used to store data in JavaScript. They can hold different types of data,
// such as numbers, strings, booleans, objects, and more.
// Variables are declared using the var, let, or const keywords.
// The choice of keyword affects the scope and mutability of the variable.
// Difference between var, let, and const:
// var: Function-scoped, can be redeclared and updated.
// let: Block-scoped, can be updated but not redeclared.
// const: Block-scoped, cannot be updated or redeclared (must be initialized at the time of declaration).

// let a = 10; // Assigning a number to variable a

// if (a == 5) {
//   // Boolean
//   console.log("a is equal to 5");
// } else {
//   console.log("a is not equal to 5");
// }

// ====
// string, boolean, number, null, undefined, object, symbol
let PI = 3.14; // Assigning a number to variable PI

// In JavaScript variables are case-sensitive, so PI and pi are different variables.
//  Here, we are comparing the variable PI with a string "3.14".
// Since PI is a number and "3.14" is a string, the comparison will return false.
if (PI == "3.14") {
  console.log(true);
} else {
  console.log(false);
}

var studentName; // Camelcasing

function getStudentNameFromDatabaseOrFromAPI() {
  return "John Doe";
}

// let vs const example
let studentAge = 20; // Variable that can be updated
const studentID = 12345; // Constant variable that cannot be updated

studentID = 54321; // This will throw an error because studentID is a constant and cannot be reassigned.
studentAge = 21; // This is valid because studentAge is declared with let and can be updated.

// let vs var example

function showVarExample() {
  if (true) {
    var message = "Hello from var";
  }

  console.log(message); // Works: "Hello from var"
}

showVarExample();
// var is function-scoped. Even though message was created inside the if block, it is available anywhere inside the function.

function showLetExample() {
  if (true) {
    let message = "Hello from let";
    console.log(message); // Works here
  }

  // console.log(message);
  // Error: message is not defined
}

showLetExample();
// let is block-scoped. It exists only inside the nearest { } block where it was created.
