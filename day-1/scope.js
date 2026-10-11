// Scope is simply the area of the code where a variable name is available.
// Think of a room: a note on the whiteboard inside one room can be read by people inside that room,
// but not by people in a different room. In this lesson, teach global/top-level scope and block scope using { }.

const appName = "WorkHub";

if (true) {
  const message = "You are signed in";
  console.log(appName); // works: appName is outside the block
  console.log(message); // works: message is inside its own block
}

console.log(appName); // works
// console.log(message); // error: message only exists inside { }

// createCounter() is a closure function that returns a function that
// increments the count variable by 1 each time it is called.
// The count variable is defined in the parent function createCounter()
// and is accessible to the child function returned by createCounter().
// This allows the child function to maintain its own state and keep track of the number of times it has been called.
function createCounter() {
  // parent
  let count = 0;

  return function () {
    // child
    count = count + 1;
    return count;
  };
}
let functionCall = createCounter();
console.log(functionCall()); // createCounter()()
console.log(functionCall());
console.log(functionCall());
console.log(functionCall());
console.log(functionCall());
console.log(functionCall());
console.log(functionCall());
console.log(functionCall());
console.log(functionCall());
console.log(functionCall());
console.log(functionCall());
console.log(functionCall());
