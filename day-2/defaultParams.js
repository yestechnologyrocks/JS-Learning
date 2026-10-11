// default parameters allow you to set default values for function parameters if no value or undefined is passed.
// default parameters are useful for creating functions that can be called with fewer arguments than they are defined to accept.
//  This can make your code more flexible and easier to use.
function greetEmployee(name = "Team Member") {
  console.log("Hello " + name);
}

greetEmployee("John");

greetEmployee(); // Hello Team Member
