// Declare a function. Style: Declaration
// normal function declaration
function add(a, b) {
  return a + b;
}
add(10, 20); // 30
// Declare a function. Style: Expression

// Expression function assigned to a variable
const addition = function (a, b) {
  return a + b;
};
addition(10, 20); // 30

// Declare a function. Style: Arrow Function
// Arrow function assigned to a variable
const addArrow = (a, b) => {
  return a + b;
};

addArrow(10, 20); // 30
